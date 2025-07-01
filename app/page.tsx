import SummaryForm from '../components/SummaryForm';

export default function HomePage() {
  return (
    <main className="min-h-screen flex items-center justify-center p-4 bg-gray-50">
      <div className="w-full max-w-xl">

        <section className="mt-12 bg-gray-800 rounded-lg p-6 shadow">
          <h2 className="text-2xl font-semibold mb-4">O que é este site?</h2>
          <p className="text-gray-300 leading-relaxed">
            O AutomaticSummary é um ferramenta simples e eficiente para gerar resumos automáticos de
            textos. Basta colar um texto, clicar em resumo e obter os principais pontos de
            forma rápida. Utilizamos o <strong>winkNLP</strong> para processar o conteúdo,
            sem depender de APIs externas.
           
          </p>
          <br />
          <p><strong>Nota: estamos em fase de testes!</strong></p>
        </section>

        <h1 className="text-center text-3xl font-bold mb-6">AutomaticSummary</h1>
        <SummaryForm />

        
      </div>
    </main>
  );
}
