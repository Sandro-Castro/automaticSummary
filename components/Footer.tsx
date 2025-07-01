export default function Footer() {
  return (
    <footer className="bg-gray-800 shadow-inner mt-8">
  <div className="max-w-4xl mx-auto px-6 py-4 flex flex-col sm:flex-row items-center justify-between text-gray-400 text-sm">
    <span>© {new Date().getFullYear()} Sandro de Castro.</span>
    <div className="flex space-x-4 mt-2 sm:mt-0">
      <a href="https://github.com/Sandro-Castro/automaticSummary" className="hover:text-gray-200">GitHub</a>
      <a href="https://www.linkedin.com/in/sandro-de-oliveira-de-castro-1476902a3/" className="hover:text-gray-200">LinkedIn</a>
    </div>
  </div>
</footer>

  );
}
