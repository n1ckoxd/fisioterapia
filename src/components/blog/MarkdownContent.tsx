import Link from 'next/link';
import type { ReactNode } from 'react';

// Renderizador de markdown simple para los artículos del blog:
// ## / ### títulos, listas (- y 1.), tablas, **negrita**, *cursiva* y [enlaces](/ruta).

function renderInline(text: string, keyPrefix: string): ReactNode[] {
  const nodes: ReactNode[] = [];
  const regex = /(\*\*[^*]+\*\*|\*[^*]+\*|\[[^\]]+\]\([^)]+\))/g;
  let last = 0;
  let match: RegExpExecArray | null;
  let i = 0;

  while ((match = regex.exec(text)) !== null) {
    if (match.index > last) nodes.push(text.slice(last, match.index));
    const token = match[0];
    const key = `${keyPrefix}-${i++}`;

    if (token.startsWith('**')) {
      nodes.push(<strong key={key} className="text-neutral-900 font-semibold">{token.slice(2, -2)}</strong>);
    } else if (token.startsWith('[')) {
      const [, label, href] = token.match(/\[([^\]]+)\]\(([^)]+)\)/)!;
      nodes.push(
        href.startsWith('/') ? (
          <Link key={key} href={href} className="text-primary-600 font-medium underline underline-offset-2 hover:text-primary-700">{label}</Link>
        ) : (
          <a key={key} href={href} target="_blank" rel="noopener noreferrer" className="text-primary-600 font-medium underline underline-offset-2 hover:text-primary-700">{label}</a>
        )
      );
    } else {
      nodes.push(<em key={key}>{token.slice(1, -1)}</em>);
    }
    last = match.index + token.length;
  }
  if (last < text.length) nodes.push(text.slice(last));
  return nodes;
}

const isList = (l: string) => /^- /.test(l);
const isOrdered = (l: string) => /^\d+\. /.test(l);
const isTable = (l: string) => l.startsWith('|');
const isHeading = (l: string) => /^#{2,3} /.test(l);

// "¿Qué es la tortícolis?" → "que-es-la-torticolis" (para los enlaces del índice).
export function slugTitulo(texto: string) {
  return texto
    .toLowerCase()
    .normalize('NFD')
    .replace(/\p{M}/gu, '')
    .replace(/\*\*/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

// Títulos de nivel 2 del artículo, para el índice "En este artículo".
export function indiceArticulo(content: string) {
  return content
    .split('\n')
    .map((l) => l.trim())
    .filter((l) => l.startsWith('## '))
    .map((l) => {
      const texto = l.slice(3).replace(/\*\*/g, '');
      return { texto, id: slugTitulo(texto) };
    });
}

export default function MarkdownContent({ content }: { content: string }) {
  const lines = content.split('\n');
  const blocks: ReactNode[] = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i].trim();
    const key = `b${i}`;

    if (!line) {
      i++;
      continue;
    }

    if (line.startsWith('### ')) {
      blocks.push(<h3 key={key} className="text-xl font-bold text-neutral-800 mt-8 mb-3">{renderInline(line.slice(4), key)}</h3>);
      i++;
      continue;
    }

    if (line.startsWith('## ')) {
      blocks.push(
        <h2 key={key} id={slugTitulo(line.slice(3))} className="text-2xl font-bold text-neutral-800 mt-10 mb-4 scroll-mt-28">
          {renderInline(line.slice(3), key)}
        </h2>
      );
      i++;
      continue;
    }

    if (isList(line) || isOrdered(line)) {
      const ordered = isOrdered(line);
      const items: string[] = [];
      while (i < lines.length && (ordered ? isOrdered(lines[i].trim()) : isList(lines[i].trim()))) {
        items.push(lines[i].trim().replace(ordered ? /^\d+\.\s/ : /^- /, ''));
        i++;
      }
      const ListTag = ordered ? 'ol' : 'ul';
      blocks.push(
        <ListTag key={key} className={`${ordered ? 'list-decimal' : 'list-disc'} pl-6 mb-5 text-neutral-600 space-y-2 marker:text-primary-500`}>
          {items.map((item, j) => (
            <li key={j}>{renderInline(item, `${key}-${j}`)}</li>
          ))}
        </ListTag>
      );
      continue;
    }

    if (isTable(line)) {
      const rows: string[][] = [];
      while (i < lines.length && isTable(lines[i].trim())) {
        const cells = lines[i].trim().replace(/^\||\|$/g, '').split('|').map((c) => c.trim());
        // Saltar la fila separadora |---|---|
        if (!cells.every((c) => /^:?-+:?$/.test(c))) rows.push(cells);
        i++;
      }
      const [head, ...body] = rows;
      blocks.push(
        <div key={key} className="overflow-x-auto mb-6 rounded-xl border border-neutral-200">
          <table className="w-full text-left text-sm">
            <thead className="bg-primary-50 text-neutral-800">
              <tr>
                {head.map((c, j) => (
                  <th key={j} className="p-3 font-semibold">{renderInline(c, `${key}-h${j}`)}</th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-200">
              {body.map((row, r) => (
                <tr key={r} className="even:bg-neutral-50">
                  {row.map((c, j) => (
                    <td key={j} className="p-3 text-neutral-600">{renderInline(c, `${key}-${r}-${j}`)}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
      continue;
    }

    // Párrafo: líneas seguidas hasta una vacía o un bloque especial
    const para: string[] = [];
    while (i < lines.length) {
      const l = lines[i].trim();
      if (!l || isHeading(l) || isList(l) || isOrdered(l) || isTable(l)) break;
      para.push(l);
      i++;
    }
    blocks.push(
      <p key={key} className="text-neutral-600 mb-5 leading-relaxed">
        {renderInline(para.join(' '), key)}
      </p>
    );
  }

  return <>{blocks}</>;
}
