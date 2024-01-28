import { NextRequest, NextResponse } from 'next/server';
import headlines from './headlines.json';

export async function GET(request: NextRequest, response: NextResponse) {
  const year = Number(request.nextUrl.searchParams.get('year')!);
  // const { year: Headlines } = ;
  //return headline for the year
  // Find the headline for the given year
  const matchingHeadline = headlines.find((headline) => headline.year === year);

  if (matchingHeadline) {
    console.log(matchingHeadline);
    return new Response(JSON.stringify(matchingHeadline), {
      headers: { 'content-type': 'application/json' }
    });
  } else {
    // Handle the case when the headline for the given year is not found
    return new Response(
      JSON.stringify({ error: 'Headline not found for the specified year' }),
      {
        status: 404,
        headers: { 'content-type': 'application/json' }
      }
    );
  }
}
