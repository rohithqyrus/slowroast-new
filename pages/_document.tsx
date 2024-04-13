import { Html, Head, Main, NextScript } from 'next/document';
import { CSPostHogProvider } from '@/components/providers';

export default function Document() {
  return (
    <Html lang="en">
      <CSPostHogProvider>
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
      </CSPostHogProvider>
    </Html>
  )
}
