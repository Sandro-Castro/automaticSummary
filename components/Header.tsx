import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-gray-800 shadow-md sticky top-0 z-50">
  <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
    <Link href="/" className="text-2xl font-bold text-blue-400 hover:text-blue-300">
      SummaryAI - Beta
    </Link>
    <nav className="space-x-4">
      <Link href="/" className="text-gray-300 hover:text-white transition">Início</Link>
      <Link href="https://github.com/Sandro-Castro/automaticSummary" className="text-gray-300 hover:text-white transition">GitHub</Link>
      <Link href="https://www.linkedin.com/in/sandro-de-oliveira-de-castro-1476902a3/" className="text-gray-300 hover:text-white transition">LinkedIn</Link>
    </nav>
  </div>
</header>
  );
}
