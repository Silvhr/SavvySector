"use client"
// Import necessary modules
import { QueryClient, QueryClientProvider, useQuery } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import axios from 'axios';
import { Card, Title } from '@tremor/react';
import { useState } from 'react';
import LineChart from './linechart';

// Define interfaces
interface HistoricalData {
  time: string;
  value: number;
}

// Define a function to fetch data using Axios
const fetchData = async (sector: string) => {
  try {
    const response = await axios.get('/api/getHistoricalData', {
      params: {
        sector: sector
      },
    });
    const data: HistoricalData[] = response.data;
    return data;
  } catch (error) {
    console.error("Error loading menu data:", error);
    throw error;
  }
};



// Component
export default function IndexPage({ searchParams }: { searchParams: { q: string } }) {
  const { data: voxDataJSON, isError } = useQuery('voxDataQuery', () => fetchData("VOX"));
  const { data: xluDataJSON, error } = useQuery('xluDataQuery', () => fetchData("XLU"));

  // console.log(xluDataJSON);

  if (isError) {
    console.error('Error fetching data:', isError);
  }

  if (error) { 
    console.error('Error fetching data:', error);
  }

//   const [hist, setHist] = useState<HistoricalData[]>([]);
  let vox: any = [];
  let xlu: any = [];

  if (voxDataJSON && xluDataJSON) { 
    const voxData = Object.entries(voxDataJSON["voxDataJSON" as any]).map(([time, value]) => ({time,value,}));
    const xluData = Object.entries(xluDataJSON["xluDataJSON" as any]).map(([time, value]) => ({time,value,}));
    
    // setHist(historicalData);
    vox = voxData;
    xlu = xluData;
    // console.log(hist);
    for (const date in vox) { 
        // console.log(vox[date]);
        vox[date].value *= 5
    }

    for (const date in xlu) { 
        xlu[date].value *= 0;
    }

    for (const date in vox) { 
        // console.log(vox[date]);
        vox[date].value += xlu[date].value;
    }
    

  }


  



  return (

      <main className="p-4 md:p-1 mx-auto max-w-7xl">
        <Card className="mt-6">
          <Title>Run Simulation</Title>
          <Card title="Timeline and Progress">
            {/* Timeline and Progress components */}
          </Card>
          {/* <Chart /> */}
          <Card title="Macro Information">
            {/* Macro Information components */}
          </Card>
          {/* <Carousel /> */}
        </Card>
        <Card>
            {vox && <LineChart data={vox}/>}
          {/* <LineChart data={hist} /> */}
        </Card>
      </main>
      

  );
}
