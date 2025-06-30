'use client';

import "../styles/globals.css";
import { ReactNode } from 'react';
import { AppProvider } from '@/lib/app.context';

export interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>
        <AppProvider>
          {children}
        </AppProvider>
      </body>
    </html>
  );
}
