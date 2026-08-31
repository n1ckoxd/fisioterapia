import { GoogleAnalytics, GoogleTagManager } from '@next/third-parties/google';

export function Analytics() {
  const gaMeasurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
  const gtmId = process.env.NEXT_PUBLIC_GTM_ID;

  return (
    <>
      {/* Solo se inyectarán si las variables de entorno están definidas */}
      {gaMeasurementId && <GoogleAnalytics gaId={gaMeasurementId} />}
      {gtmId && <GoogleTagManager gtmId={gtmId} />}
    </>
  );
}
