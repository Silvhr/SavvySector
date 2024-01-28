import { NextRequest, NextResponse } from 'next/server';
import voxDataJSON from "./VOX-data.json"
import xlbDataJSON from "./XLB-data.json"
import xleDataJSON from "./XLE-data.json"
import xlfDataJSON from "./XLF-data.json"
import xliDataJSON from "./XLI-data.json"
import xlkDataJSON from "./XLK-data.json"
import xlpDataJSON from "./XLP-data.json"
import xluDataJSON from "./XLU-data.json"
import xlvDataJSON from "./XLV-data.json"
import xlyDataJSON from "./XLY-data.json"
import xrtDataJSON from "./XRT-data.json"


export async function GET(req: NextRequest, res: NextResponse) {

    const sector = req.nextUrl.searchParams.get("sector")!;
    if (sector === "VOX") {
        return new Response(JSON.stringify(voxDataJSON), { headers: { "content-type": "application/json" } })
    }
    else if (sector === "XLB") { 
        return new Response(JSON.stringify(xlbDataJSON), { headers: { "content-type": "application/json" } })
    }
    else if (sector === "XLU") { 
        return new Response(JSON.stringify(xluDataJSON), { headers: { "content-type": "application/json" } })
    }
    else if (sector === "XLE") { 
        return new Response(JSON.stringify(xleDataJSON), { headers: { "content-type": "application/json" } })
    }
    else if (sector === "XLF") { 
        return new Response(JSON.stringify(xlfDataJSON), { headers: { "content-type": "application/json" } })
    }
    else if (sector === "XLI") { 
        return new Response(JSON.stringify(xliDataJSON), { headers: { "content-type": "application/json" } })
    }
    else if (sector === "XLK") { 
        return new Response(JSON.stringify(xlkDataJSON), { headers: { "content-type": "application/json" } })
    }
    else if (sector === "XLP") { 
        return new Response(JSON.stringify(xlpDataJSON), { headers: { "content-type": "application/json" } })
    }
    else if (sector === "XLU") { 
        return new Response(JSON.stringify(xluDataJSON), { headers: { "content-type": "application/json" } })
    }
    else if (sector === "XLV") { 
        return new Response(JSON.stringify(xlvDataJSON), { headers: { "content-type": "application/json" } })
    }
    else if (sector === "XLY") { 
        return new Response(JSON.stringify(xlyDataJSON), { headers: { "content-type": "application/json" } })
    }
    else if (sector === "XRT") { 
        return new Response(JSON.stringify(xrtDataJSON), { headers: { "content-type": "application/json" } })
    }
    
 
}