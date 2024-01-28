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
    const startDateString = req.nextUrl.searchParams.get("startDate");
    const endDateString = req.nextUrl.searchParams.get("endDate");

    if (sector === "VOX") {

        if (!startDateString || !endDateString) {
            return new Response("Start date and end date are required.", { status: 400 });
        }
        const startDate = new Date(startDateString);
        const endDate = new Date(endDateString);

        const filteredData = filterDataByDateRange(voxDataJSON.voxDataJSON, startDate, endDate);
        return new Response(JSON.stringify(filteredData), { headers: { "content-type": "application/json" } });

    }
    else if (sector === "XLB") { 

        if (!startDateString || !endDateString) {
            return new Response("Start date and end date are required.", { status: 400 });
        }
        const startDate = new Date(startDateString);
        const endDate = new Date(endDateString);

        const filteredData = filterDataByDateRange(xlbDataJSON.xlbDataJSON, startDate, endDate);
        return new Response(JSON.stringify(filteredData), { headers: { "content-type": "application/json" } });
        
    }
    else if (sector === "XLE") { 
        
        if (!startDateString || !endDateString) {
            return new Response("Start date and end date are required.", { status: 400 });
        }
        const startDate = new Date(startDateString);
        const endDate = new Date(endDateString);

        const filteredData = filterDataByDateRange(xleDataJSON.xleDataJSON, startDate, endDate);
        return new Response(JSON.stringify(filteredData), { headers: { "content-type": "application/json" } });
        
    }
    else if (sector === "XLF") { 
       
        if (!startDateString || !endDateString) {
            return new Response("Start date and end date are required.", { status: 400 });
        }
        const startDate = new Date(startDateString);
        const endDate = new Date(endDateString);

        const filteredData = filterDataByDateRange(xlfDataJSON.xlfDataJSON, startDate, endDate);
        return new Response(JSON.stringify(filteredData), { headers: { "content-type": "application/json" } });
        
    }
    else if (sector === "XLI") { 
        
        if (!startDateString || !endDateString) {
            return new Response("Start date and end date are required.", { status: 400 });
        }
        const startDate = new Date(startDateString);
        const endDate = new Date(endDateString);

        const filteredData = filterDataByDateRange(xliDataJSON.xliDataJSON, startDate, endDate);
        return new Response(JSON.stringify(filteredData), { headers: { "content-type": "application/json" } });
        
    }
    else if (sector === "XLK") { 
        
        if (!startDateString || !endDateString) {
            return new Response("Start date and end date are required.", { status: 400 });
        }
        const startDate = new Date(startDateString);
        const endDate = new Date(endDateString);

        const filteredData = filterDataByDateRange(xlkDataJSON.xlkDataJSON, startDate, endDate);
        return new Response(JSON.stringify(filteredData), { headers: { "content-type": "application/json" } });
        
    }
    else if (sector === "XLP") { 
        
        if (!startDateString || !endDateString) {
            return new Response("Start date and end date are required.", { status: 400 });
        }
        const startDate = new Date(startDateString);
        const endDate = new Date(endDateString);

        const filteredData = filterDataByDateRange(xlpDataJSON.xlpDataJSON, startDate, endDate);
        return new Response(JSON.stringify(filteredData), { headers: { "content-type": "application/json" } });
        
    }
    else if (sector === "XLU") { 
        
        if (!startDateString || !endDateString) {
            return new Response("Start date and end date are required.", { status: 400 });
        }
        const startDate = new Date(startDateString);
        const endDate = new Date(endDateString);

        const filteredData = filterDataByDateRange(xluDataJSON.xluDataJSON, startDate, endDate);
        return new Response(JSON.stringify(filteredData), { headers: { "content-type": "application/json" } });
        
    }
    else if (sector === "XLV") { 
        
        if (!startDateString || !endDateString) {
            return new Response("Start date and end date are required.", { status: 400 });
        }
        const startDate = new Date(startDateString);
        const endDate = new Date(endDateString);

        const filteredData = filterDataByDateRange(xlvDataJSON.xlvDataJSON, startDate, endDate);
        return new Response(JSON.stringify(filteredData), { headers: { "content-type": "application/json" } });
        
    }
    else if (sector === "XLY") { 
        
        if (!startDateString || !endDateString) {
            return new Response("Start date and end date are required.", { status: 400 });
        }
        const startDate = new Date(startDateString);
        const endDate = new Date(endDateString);

        const filteredData = filterDataByDateRange(xlyDataJSON.xlyDataJSON, startDate, endDate);
        return new Response(JSON.stringify(filteredData), { headers: { "content-type": "application/json" } });
        
    }
    else if (sector === "XRT") { 
        
        if (!startDateString || !endDateString) {
            return new Response("Start date and end date are required.", { status: 400 });
        }
        const startDate = new Date(startDateString);
        const endDate = new Date(endDateString);

        const filteredData = filterDataByDateRange(xrtDataJSON.xrtDataJSON, startDate, endDate);
        return new Response(JSON.stringify(filteredData), { headers: { "content-type": "application/json" } });
        
    }
    
 
}

function filterDataByDateRange(data: Record<string, number>, startDate: Date, endDate: Date): Record<string, number> {
    const filteredData: Record<string, number> = {};

    for (const date in data) {
        const currentDate = new Date(date);

        if (currentDate >= startDate && currentDate <= endDate) {
            filteredData[date] = data[date];
        }
    }

    return filteredData;
}