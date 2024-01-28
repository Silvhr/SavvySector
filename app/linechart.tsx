"use client"

import React, { ReactNode, useEffect, useState } from 'react';

import ReactApexChart from 'react-apexcharts';


interface LineChartProps {
  // Define any props your component may receive
}

const LineChart: React.FC<LineChartProps> = () => {
  // Sample data for the chart
  const chartData = {
    options: {
      chart: {
        id: 'basic-line',
      },
      xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        labels: {
          show: true,  // Initially show all labels
          rotate: 0,   // Rotate labels if needed
          formatter: function (value: string, timestamp?: number, opts?: any) {
            // Custom formatter to show every other tick
            return opts?.dataCategories.indexOf(value) % 2 === 0 ? value : '';
          },
        },
      },
    },
    series: [
      {
        name: 'Series 1',
        data: [30, 40, 35, 50, 49, 60, 70, 91, 125, 100, 80, 60],
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
      <h1>Hello, I'm a React component with an ApexCharts Line Chart!</h1>
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
