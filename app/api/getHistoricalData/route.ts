import { NextRequest, NextResponse } from 'next/server';
import historicalDataJSON from "./VOX-data.json"


export async function GET(req: NextRequest, res: NextResponse) {

    return new Response(JSON.stringify(historicalDataJSON), { headers: { "content-type": "application/json" } })
 
}