import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {
  title: 'Ayala Alone Deer, — APPLIA',
  description: 'Ayala Alone Deer, — 1stデビューアルバム APPLIA。アーティストサイトのプロトタイプ。',
  robots: { index: false, follow: false },
};
export default function RootLayout({children}: Readonly<{children: React.ReactNode}>) {
 return <html lang="ja"><body>{children}</body></html>;
}
