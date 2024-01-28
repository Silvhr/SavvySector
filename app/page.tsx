"use client"
// Import necessary modules
import { QueryClient, QueryClientProvider, useQuery } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import axios from 'axios';
import { Card, Title } from '@tremor/react';
import { useState } from 'react';
import LineChart from './linechart';
import LineChartBuilder from './linechartBuilder';

// Define interfaces
interface HistoricalData {
  time: string;
  value: number;
}




// Component
export default function IndexPage({ searchParams }: { searchParams: { q: string } }) {

    const weights: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

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
            <LineChartBuilder weights={weights}/>
          {/* <LineChart data={hist} /> */}
        </Card>
      </main>
      

  );
}
