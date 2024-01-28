'use client';
import React, { useState } from 'react';
import { Card, Title } from '@tremor/react';
import DonutChart from './DonutChart'; // Ensure this path is correct
import AssetSlider from './AssetSlider';

interface FinancialSector {
  sector: string;
  value: number;
}

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
  { sector: "Communication Services", value: 260000 },
  { sector: "Consumer Discretionary", value: 50000 },
  { sector: "Consumer Staples", value: 80000 },
  { sector: "Energy", value: 70000 },
  { sector: "Finance", value: 170000 },
  { sector: "Healthcare", value: 100000 },
  { sector: "Industrials", value: 100000 },
  { sector: "Materials", value: 20000 },
  { sector: "Real Estate", value: 10000 },
  { sector: "Technology", value: 110000 },
  { sector: "Utilities", value: 30000 },
  { sector: "Cash", value: 0 },

  // ... other sectors
];

export default function IndexPage() {
  // State for holding financial data
  const [financialDataState, setFinancialDataState] = useState(financialData);

  const handlePortfolioUpdate = (updatedData: FinancialSector[]) => {
    console.log('Updating Portfolio Data:', updatedData); // Log new data
    setFinancialDataState([...updatedData]);
  };

    return (
        <main className="p-4 md:p-1 mx-auto max-w-7xl">
            <Card className="mt-6">
                <Title>Run Simulation</Title>

                
                {/* Financial Sectors Donut Chart - Dynamic */}
                <Card title="Financial Sectors Donut Chart">
                    <DonutChart data={financialDataState} />
                </Card>

              
                {/* S&P500 Donut Chart - Static */}
                 <Card title="S&P500 Donut Chart">
                    <DonutChart data={SPData1} />
                    </Card>

                  <Card title="Asset Slider ">
                  <AssetSlider financialData={SPData1} onPortfolioUpdate={handlePortfolioUpdate} />
                    </Card>

                {/* More components as needed */}
            </Card>
        </main>
    );
}

