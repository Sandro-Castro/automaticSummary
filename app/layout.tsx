import './globals.css';
import type { ReactNode } from 'react';
import Header from '../components/Header'
import Footer from '../components/Footer'

export const metadata = {
  title: 'AutomaticSummary - Beta',
  description: 'Resumo automático com Tailwind e Next 15',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR" >
      <body className="flex flex-col min-h-screen bg-gray-50 text-gray-900">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
