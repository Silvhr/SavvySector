import { NextRequest, NextResponse } from 'next/server';
import headlines from './headlines.json';

export async function GET(request: NextRequest, response: NextResponse) {
      const year = request.nextUrl.searchParams.get("sector")!;
  // const { year: Headlines } = ;
  return new Response(JSON.stringify(headlines), { headers: { 'content-type': 'application/json' } });
}
