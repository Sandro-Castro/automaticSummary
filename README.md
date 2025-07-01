# Automatic Summary AI 🤖

**Automatic Summary AI** é um projeto de estudos em fase inicial, criado para explorar técnicas de processamento de linguagem natural (NLP) em um ambiente web moderno. Ele ainda está em **fase de testes**, então muitas otimizações futuras estão planejadas.

---

## 🧠 Descrição

Este aplicativo permite que o usuário cole um texto (ou posteriormente uma URL) e receba um resumo automático das informações principais, sem depender de APIs externas. Todo o processamento é feito localmente no seu navegador ou servidor, usando o pacote **winkNLP**.

---

## ⚙️ Tecnologias utilizadas

- **Next.js (App Router)** 
- **TypeScript** 
- **Tailwind CSS v4** 
- **winkNLP** + `wink-eng-lite-model` – modelo leve para análise de texto offline.
- **Vercel (plano gratuito)** 

---

## 🧹 Lógica de resumo (abordagem por frequência)

A estratégia atual de summarization segue estes passos:

1. O texto é separado em tokens (palavras).
2. Ignoram-se “stopwords” comuns (ex: “e”, “de”, “para”).
3. Calcula-se a frequência de cada palavra pará.
4. Cada sentença recebe uma pontuação: soma das frequências de suas palavras.
5. Seleciona-se as N melhores sentenças por pontuação, mantendo a ordem original.

Isso gera um resumo simples, sem acesso a APIs externas ou modelos grandes de IA, e funciona offline com baixa latência.

---

## 🛠️ Como executar localmente

1. Clone este repositório:
   ```bash
   git clone https://github.com/seu-usuario/automatic-summary-ai.git
   cd automatic-summary-ai
   ```
2. Instale as dependências:
   ```bash
   npm install
   ```
3. Execute o projeto em modo de desenvolvimento:
   ```bash
   npm run dev
   ```
4. Abrir no navegador:
   ```
   http://localhost:3000
   ```

---

## 🗺️ Próximos passos

- Melhorar a lógica de summarization (ex: algoritmos TextRank, técnicas semânticas).
- Suporte a resumos via URLs — fetch + extração de texto
- Alternância entre modo claro/escuro automático.
- Feedback visual (loading spinners, validação de texto, mensagens de erro).
- Histórico de resumos com `localStorage`.
- Melhorar UI com animações, tipografia e acessibilidade.

---

> ⚠️ **Observação**: este projeto está em fase experimental. Os resumos ainda são básicos e podem não capturar nuances complexas. Use com cautela e report quaisquer melhorias/crashes que encontrar!

