"use client"

import LineChart from './linechart';
import React, { ReactNode, useEffect, useState } from 'react';
import axios from "axios"
import { QueryClient, QueryClientProvider, useQuery } from 'react-query';



interface HistoricalData {
    time: string;
    value: number;
}

interface LineChartBuilderProps {
    weights: number[];
    start: string;
    end: string;
}

// Define a function to fetch data using Axios
const fetchData = async (sector: string, start: string, end:string) => {
    try {
      const response = await axios.get('/api/getHistoricalData', {
        params: {
          sector: sector,
          startDate: start,
          endDate: end,
        },
      });
      const data: HistoricalData[] = response.data;
      return data;
    } catch (error) {
      console.error("Error loading menu data:", error);
      throw error;
    }
  };
  


const LineChartBuilder: React.FC<LineChartBuilderProps> = ({weights, start, end}) => {

    // fetch data
  const { data: voxDataJSON, error: voxError } = useQuery('voxDataQuery', () => fetchData("VOX", start, end));
  const { data: xlbDataJSON, error: xlbError} = useQuery('xlbDataQuery', () => fetchData("XLB", start, end));
  const { data: xleDataJSON, error: xleError} = useQuery('xleDataQuery', () => fetchData("XLE", start, end));
  const { data: xlfDataJSON, error: xlfError} = useQuery('xlfDataQuery', () => fetchData("XLF", start, end));
  const { data: xliDataJSON, error: xliError} = useQuery('xliDataQuery', () => fetchData("XLI", start, end));
  const { data: xlkDataJSON, error: xlkError} = useQuery('xlkDataQuery', () => fetchData("XLK", start, end));
  const { data: xlpDataJSON, error: xlpError} = useQuery('xlpDataQuery', () => fetchData("XLP", start, end));
  const { data: xluDataJSON, error: xluError} = useQuery('xluDataQuery', () => fetchData("XLU", start, end));
  const { data: xlvDataJSON, error: xlvError} = useQuery('xlvDataQuery', () => fetchData("XLV", start, end));
  const { data: xlyDataJSON, error: xlyError} = useQuery('xlyDataQuery', () => fetchData("XLY", start, end));
  const { data: xrtDataJSON, error: xrtError } = useQuery('xrtDataQuery', () => fetchData("XRT", start, end));

  // console.log(xluDataJSON);

  if (voxError) { console.error('Error fetching data:', voxError); }
  if (xlbError) { console.error('Error fetching data:', xlbError); }
  if (xleError) { console.error('Error fetching data:', xleError); }
  if (xlfError) { console.error('Error fetching data:', xlfError); }
  if (xliError) { console.error('Error fetching data:', xliError); }
  if (xlkError) { console.error('Error fetching data:', xlkError); }
  if (xlpError) { console.error('Error fetching data:', xlpError); }
  if (xluError) { console.error('Error fetching data:', xluError); }
  if (xlvError) { console.error('Error fetching data:', xlvError); }
  if (xlyError) { console.error('Error fetching data:', xlyError); }
  if (xrtError) { console.error('Error fetching data:', xrtError); }



  //   const [hist, setHist] = useState<HistoricalData[]>([]);
  let vox: any = [];
  let xlb: any = [];
  let xle: any = [];
  let xlf: any = [];
  let xli: any = [];
  let xlk: any = [];
  let xlp: any = [];
  let xlu: any = [];
  let xlv: any = [];
  let xly: any = [];
  let xrt: any = [];
  

  if (voxDataJSON && xlbDataJSON && xleDataJSON && xlfDataJSON && xliDataJSON && xlkDataJSON && xlpDataJSON && xluDataJSON && xlvDataJSON&& xlyDataJSON && xrtDataJSON) { 

    

    // extract data if it exists
    const voxData = Object.entries(voxDataJSON).map(([time, value]) => ({time,value,}));
    const xlbData = Object.entries(xlbDataJSON).map(([time, value]) => ({time,value,}));
    const xleData = Object.entries(xleDataJSON).map(([time, value]) => ({time,value,}));
    const xlfData = Object.entries(xlfDataJSON).map(([time, value]) => ({time,value,}));
    const xliData = Object.entries(xliDataJSON).map(([time, value]) => ({time,value,}));
    const xlkData = Object.entries(xlkDataJSON).map(([time, value]) => ({time,value,}));
    const xlpData = Object.entries(xlpDataJSON).map(([time, value]) => ({time,value,}));
    const xluData = Object.entries(xluDataJSON).map(([time, value]) => ({time,value,}));
    const xlvData = Object.entries(xlvDataJSON).map(([time, value]) => ({time,value,}));
    const xlyData = Object.entries(xlyDataJSON).map(([time, value]) => ({time,value,}));
    const xrtData = Object.entries(xrtDataJSON).map(([time, value]) => ({time,value,}));
    
    vox = voxData;
    xlb = xlbData
    xle = xleData;
    xlf = xlfData
    xli = xliData;
    xlk = xlkData
    xlp = xlpData;
    xlu = xluData
    xlv = xlvData;
    xly = xlyData
    xrt = xrtData;


    // apply coefficients
    for (const date in vox) { vox[date].value *= weights[0]; }
    for (const date in xlb) { xlb[date].value *= weights[1]; }
    for (const date in xle) { xle[date].value *= weights[2]; }
    for (const date in xlf) { xlf[date].value *= weights[3]; }
    for (const date in xli) { xli[date].value *= weights[4]; }
    for (const date in xlk) { xlk[date].value *= weights[5]; }
    for (const date in xlp) { xlp[date].value *= weights[6]; }
    for (const date in xlu) { xlu[date].value *= weights[7]; }
    for (const date in xlv) { xlv[date].value *= weights[8]; }
    for (const date in xly) { xly[date].value *= weights[9]; }
    for (const date in xrt) { xrt[date].value *= weights[10]; }

    // last values
    console.log(vox[vox.length - 1].value);

    for (const date in vox) { 
        
        // combine all sectors to vox to be displayed
        vox[date].value += xlb[date].value;
        vox[date].value += xle[date].value;
        vox[date].value += xlf[date].value;
        vox[date].value += xli[date].value;
        vox[date].value += xlk[date].value;
        vox[date].value += xlp[date].value;
        vox[date].value += xlu[date].value;
        vox[date].value += xlv[date].value;
        vox[date].value += xly[date].value;
        vox[date].value += xrt[date].value;
    }

   }


   return (
    <div>
        {vox && <LineChart data={vox}/>}
    </div>
        
   );
};

// Export the component
export default LineChartBuilder;
