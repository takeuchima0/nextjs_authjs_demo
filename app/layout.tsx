import type { Metadata } from 'next';
import Header from './components/layouts/header/Header';
import './globals.css';

export const metadata: Metadata = {
  title: 'Next.js Sample Layout',
  description: 'next.js sample layout',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className="antialiased">
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
