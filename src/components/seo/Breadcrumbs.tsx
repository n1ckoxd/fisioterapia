import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  href: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 md:pt-32 pb-2 overflow-hidden">
      <ol className="flex items-center flex-wrap gap-2 text-sm text-neutral-500">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          const isFirst = index === 0;
          return (
            <li key={item.href} className="flex items-center gap-2">
              {!isFirst && <ChevronRight className="w-4 h-4 text-neutral-400 shrink-0" />}
              {isLast ? (
                <span className="font-medium text-neutral-800 truncate max-w-[200px] sm:max-w-none" aria-current="page">
                  {item.label}
                </span>
              ) : (
                <Link href={item.href} className="hover:text-primary-600 transition-colors truncate max-w-[150px] sm:max-w-none">
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
