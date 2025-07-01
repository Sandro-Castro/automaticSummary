import winkNLP from 'wink-nlp';
import model from 'wink-eng-lite-web-model';
import its from 'wink-nlp/src/its.js';
import as from 'wink-nlp/src/as.js';

const nlp = winkNLP(model);

const stopWords = new Set([
  'e','de','da','o','que','um','uma','para','com','por',
  'se','os','as','dos','das','no','na','nos','nas'
]);

export function summarizeText(text: string, maxSentences = 3): string {
  const doc = nlp.readDoc(text);

  const allWords = doc
    .tokens()
    .filter(t => t.out(its.type) === 'word')      
    .out(its.normal) as string[];                  

 
  const freqMap = new Map<string, number>();
  for (const w of allWords) {
    if (stopWords.has(w)) continue;
    freqMap.set(w, (freqMap.get(w) || 0) + 1);
  }

  const sentences = doc.sentences().out() as string[];

 
  const scored = sentences.map((sentence, idx) => {
    const sentObj = doc.sentences().itemAt(idx);
  
    const sentWords = sentObj.tokens().out(its.normal) as string[];
    
    const score = sentWords.reduce((sum, w) => sum + (freqMap.get(w) || 0), 0);
    return { idx, sentence, score };
  });

  const top = scored
    .sort((a, b) => b.score - a.score)  
    .slice(0, maxSentences)            
    .sort((a, b) => a.idx - b.idx)      
    .map(o => o.sentence);

  return top.join(' ');
}
