import { NextResponse } from 'next/server';
import { summarizeText } from '../../../lib/summary';

export async function POST(request: Request) {
  const { input } = await request.json();
  if (!input) return NextResponse.json({ error: 'Nenhum input' }, { status: 400 });
  const summary = summarizeText(input);
  return NextResponse.json({ summary });
}
