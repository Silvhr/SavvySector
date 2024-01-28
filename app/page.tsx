'use client';
import React, { useState } from 'react';
import { Card, Title } from '@tremor/react';
import DonutChart from './DonutChart'; // Ensure this path is correct
import AssetSlider from './AssetSlider';

interface FinancialSector {
  sector: string;
  value: number;
}

//Default data for start of year 1
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
];

const SPData2 = [
  { sector: "Communication Services", value: 270000 },
  { sector: "Consumer Discretionary", value: 50000 },
  { sector: "Consumer Staples", value: 80000 },
  { sector: "Energy", value: 80000 },
  { sector: "Finance", value: 170000 },
  { sector: "Healthcare", value: 90000 },
  { sector: "Industrials", value: 90000 },
  { sector: "Materials", value: 20000 },
  { sector: "Real Estate", value: 20000 },
  { sector: "Technology", value: 110000 },
  { sector: "Utilities", value: 20000 },
  { sector: "Cash", value: 0 },
];

const SPData3 = [
  { sector: "Communication Services", value: 340000 },
  { sector: "Consumer Discretionary", value: 40000 },
  { sector: "Consumer Staples", value: 70000 },
  { sector: "Energy", value: 80000 },
  { sector: "Finance", value: 130000 },
  { sector: "Healthcare", value: 90000 },
  { sector: "Industrials", value: 80000 },
  { sector: "Materials", value: 20000 },
  { sector: "Real Estate", value: 10000 },
  { sector: "Technology", value: 100000 },
  { sector: "Utilities", value: 40000 },
  { sector: "Cash", value: 0 },
];

const SPData4 = [
  { sector: "Communication Services", value: 260000 },
  { sector: "Consumer Discretionary", value: 40000 },
  { sector: "Consumer Staples", value: 100000 },
  { sector: "Energy", value: 90000 },
  { sector: "Finance", value: 120000 },
  { sector: "Healthcare", value: 100000 },
  { sector: "Industrials", value: 80000 },
  { sector: "Materials", value: 20000 },
  { sector: "Real Estate", value: 10000 },
  { sector: "Technology", value: 130000 },
  { sector: "Utilities", value: 50000 },
  { sector: "Cash", value: 0 },
];

const SPData5 = [
  { sector: "Communication Services", value: 350000 },
  { sector: "Consumer Discretionary", value: 50000 },
  { sector: "Consumer Staples", value: 80000 },
  { sector: "Energy", value: 70000 },
  { sector: "Finance", value: 120000 },
  { sector: "Healthcare", value: 80000 },
  { sector: "Industrials", value: 80000 },
  { sector: "Materials", value: 20000 },
  { sector: "Real Estate", value: 20000 },
  { sector: "Technology", value: 120000 },
  { sector: "Utilities", value: 10000 },
  { sector: "Cash", value: 0 },
];

export default function IndexPage() {
  // State for holding financial data
  const [financialDataState, setFinancialDataState] = useState(SPData5);

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

