'use client';
import React from 'react';
import { Card, Title } from '@tremor/react';
import DonutChart from './DonutChart'; // Ensure this path is correct

// Example static data
const financialData = [
    { sector: "Technology", value: 25 },
    { sector: "Healthcare", value: 15 },
    { sector: "Finance", value: 30 },
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

                {/* More components as needed */}
            </Card>
        </main>
    );
}

