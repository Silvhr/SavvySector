import { NextRequest, NextResponse } from 'next/server';
import voxDataJSON from "./VOX-data.json"
import xluDataJSON from "./XLU-data.json"


export async function GET(req: NextRequest, res: NextResponse) {

    const sector = req.nextUrl.searchParams.get("sector")!;
    if (sector === "VOX") {
        return new Response(JSON.stringify(voxDataJSON), { headers: { "content-type": "application/json" } })
    }
    else if (sector === "XLU") { 
        return new Response(JSON.stringify(xluDataJSON), { headers: { "content-type": "application/json" } })
    }
    
 
}