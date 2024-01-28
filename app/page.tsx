"use client"
// Import necessary modules
import { QueryClient, QueryClientProvider, useQuery } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import axios from 'axios';
import { Card, Title } from '@tremor/react';
import { useState } from 'react';

// Define interfaces
interface HistoricalData {
  time: string;
  value: number;
}

// Define a function to fetch data using Axios
const fetchData = async () => {
  try {
    const response = await axios.get('/api/getHistoricalData', {
      params: {
        // You can add query parameters if needed
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
  const { data: historicalDataJSON, isError } = useQuery('historicalData', fetchData);

  console.log(historicalDataJSON);

  if (isError) {
    console.error('Error fetching data:', isError);
  }

  // const historicalData = Object.entries(historicalDataJSON).map(([time, value]) => ({
  //   time,
  //   value,
  // }));

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
          {/* <LineChart data={historicalData} /> */}
        </Card>
      </main>
      

  );
}
