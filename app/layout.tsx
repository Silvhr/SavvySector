import './globals.css';

import { Analytics } from '@vercel/analytics/react';
import Nav from './nav';
import Toast from './toast';
import { Suspense } from 'react';
import TanstackProvider from './tanstack';

export const metadata = {
  title: 'SectorSavvy',
  description:
    'Sector evaulation simulator for educational purposes.'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full bg-gray-50">
      <TanstackProvider>
        <body className="h-full">
            <Suspense>
            <Nav />
            </Suspense>
            {children}
            <Analytics />
            {/* <Toast /> */}
        </body>
      </TanstackProvider>
    </html>
  );
}
