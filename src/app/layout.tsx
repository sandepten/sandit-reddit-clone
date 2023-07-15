import Navbar from '@/components/Navbar';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Sandit',
  description: 'Sandit is a reddit clone',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen antialiased`}>
        <Navbar />
        <div className="container pt-6">{children}</div>
      </body>
    </html>
  );
}
