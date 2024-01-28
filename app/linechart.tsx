"use client"

import React, { ReactNode, useEffect, useState } from 'react';

import ReactApexChart from 'react-apexcharts';

interface HistoricalData {
    time: string;
    value: number;
}

interface LineChartProps {
    data: HistoricalData[];
}



const LineChart: React.FC<LineChartProps> = ({data}) => {

    const times = data.map(item => item.time);
    const series = data.map(item => item.value);
    
  // Sample data for the chart
  const chartData = {
    options: {
      chart: {
        id: 'basic-line',
      },
      xaxis: {
        categories: times,
        labels: {
          show: true,  // Initially show all labels
          rotate: 0,   // Rotate labels if needed
        },
      },
    },
    series: [
      {
        name: 'Price',
        data: series,
      },
    ],
  };

  // State to track whether to render the chart
  const [renderChart, setRenderChart] = useState(false);

  // Use useEffect to render the chart on the client side
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setRenderChart(true);
    }
  }, []);

  if(typeof window !== 'undefined')
  {
    
  }

  return (
    <div>
      <h1>Hello, Im a React component with an ApexCharts Line Chart!</h1>
      {renderChart && (
        <ReactApexChart
          options={chartData.options as ApexCharts.ApexOptions}
          series={chartData.series}
          type="line"
          height={350}
        />
      )}
    </div>
  );
};

// Export the component
export default LineChart;
