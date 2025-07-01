import SummaryForm from "../components/SummaryForm";
import Image from 'next/image';

export default function HomePage() {
  return (
    <main className="min-h-screen flex items-center justify-center p-4 bg-gray-50">
      <div className="w-full max-w-xl">
        <div className="mt-2 flex justify-center ">
          <Image
            src="/SummaryAIRecort.jpeg"     
            alt="Logo Automatic Summary AI"
            width={600}               
            height={600}
            className="object-contain"
          />
        </div>
        <section className="mt-5 bg-gray-800 rounded-lg p-6 shadow">
          <link rel="stylesheet" href="/SummaryAI.jpeg" />
          <h2 className="text-2xl font-semibold mb-4">O que é este site?</h2>
          <p className="text-gray-300 leading-relaxed">
            O SummaryAI é um ferramenta simples e eficiente para gerar
            resumos automáticos de textos. Basta colar um texto, clicar em
            resumo e obter os principais pontos de forma rápida. Utilizamos o{" "}
            <strong>winkNLP</strong> para processar o conteúdo localmente, sem depender de
            APIs externas.
          </p>
          <br />
          <p>
            
              Observação: este projeto está em fase experimental. Os resumos
              ainda são <strong>básicos</strong> e podem não capturar nuances complexas.
            
          </p>
        </section>

        <h1 className="text-center text-3xl font-bold mb-6">
          AutomaticSummary
        </h1>
        <SummaryForm />
      </div>
    </main>
  );
}
