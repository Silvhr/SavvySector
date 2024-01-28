'use client';
import React from 'react';
import { Card, Title } from '@tremor/react';
import DonutChart from './DonutChart'; // Ensure this path is correct

// Example static data
const financialData = [
  { sector: "Communication Services", value: 0 },
  { sector: "Consumer Discretionary", value: 0 },
  { sector: "Consumer Staples", value: 0 },
  { sector: "Energy", value: 30 },
  { sector: "Finance", value: 30 },
  { sector: "Healthcare", value: 15 },
  { sector: "Industrials", value: 15 },
  { sector: "Materials", value: 20 },
  { sector: "Real Estate", value: 20 },
  { sector: "Technology", value: 15 },
  { sector: "Utilities", value: 15 },
  { sector: "Cash", value: 80 },
];

// Example static data
const SPData1 = [
  { sector: "Communication Services", value: 0 },
  { sector: "Consumer Discretionary", value: 0 },
  { sector: "Consumer Staples", value: 25 },
  { sector: "Energy", value: 30 },
  { sector: "Finance", value: 30 },
  { sector: "Healthcare", value: 15 },
  { sector: "Industrials", value: 15 },
  { sector: "Materials", value: 20 },
  { sector: "Real Estate", value: 20 },
  { sector: "Technology", value: 15 },
  { sector: "Utilities", value: 15 },
  { sector: "Cash", value: 5 },

  // ... other sectors
];

export default function IndexPage() {
    return (
        <main className="p-4 md:p-1 mx-auto max-w-7xl">
            <Card className="mt-6">
                <Title>Run Simulation</Title>

                {/* Other components */}
                
                <Card title="Financial Sectors Donut Chart">
                    <DonutChart data={financialData} />
                </Card>

                 <Card title="S&P500 Donut Chart">
                    <DonutChart data={SPData1} />
                    </Card>

                {/* More components as needed */}
            </Card>
        </main>
    );
}

