'use client';  
import { useState } from 'react';

export default function SummaryForm() {
  const [input, setInput] = useState('');
  const [summary, setSummary] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    const res = await fetch('/api/summary', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({ input }),
    });
    const body = await res.json();
    setSummary(body.summary);
    setLoading(false);
  }

  return (
    <form onSubmit={handleSubmit} 
          className="bg-white dark:bg-gray-800 shadow-lg rounded-lg border border-gray-200 dark:border-gray-700 p-6 space-y-4 max-w-xl mx-auto">
      
      <textarea
        className="w-full h-40 p-3 border border-gray-300 dark:border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100"
        placeholder="Cole seu texto"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <button
        type="submit"
        className="w-full py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md font-medium transition disabled:opacity-50"
        disabled={loading}
      >
        {loading ? 'Processando...' : 'Resumir'}
      </button>

      {summary && (
        <div className="mt-4 p-4 bg-gray-100 dark:bg-gray-700 rounded">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">Resumo</h2>
          <p className="text-gray-800 dark:text-gray-200">{summary}</p>
        </div>
      )}
    </form>
  );
}
