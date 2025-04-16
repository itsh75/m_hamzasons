// src/app/layout.tsx
import './globals.css';
import Header from '../app/components/Header';
import { ReactNode } from 'react';

export const metadata = {
  title: 'BrandBoost',
  description: 'Marketing services to grow your brand',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
