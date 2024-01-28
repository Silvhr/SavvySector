'use client';

import React, { ReactNode, useEffect, useState } from 'react';
import { ApexOptions } from 'apexcharts';

import dynamic from 'next/dynamic';
const ApexCharts = dynamic(() => import('react-apexcharts'), { ssr: false });

interface HistoricalData {
  time: string;
  value: number;
}

interface LineChartProps {
  data: HistoricalData[];
}

const LineChart: React.FC<LineChartProps> = ({ data }, width) => {
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth - 100 : 1000,
    height: 350
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth - 300,
        height: 350 // You can set the default height or adjust it as needed
      });
    };
    // Attach event listener for window resize
    window.addEventListener('resize', handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const times = data.map((item) => item.time);
  const series = data.map((item) => item.value);

  // Sample data for the chart
  const chartData = {
    options: {
      grid: {
        show: false
      },
      chart: {
        id: 'basic-line',
        toolbar: {
          show: false,
        }
      },
      toolbar: {
        show: false
      },
      zoom: {
        enabled: false
      },
      xaxis: {
        categories: times,
        show: false,
        axisBorder: {
          color: 'black'
        },
        lines: {
          show: false
        },
        labels: {
          show: true, // Initially show all labels
          rotate: 0 // Rotate labels if needed
        },
        axisTicks: {
          show: false
        }
      }
    },
    series: [
      {
        name: 'Price',
        data: series
      }
    ]
  };

  // State to track whether to render the chart
  const [renderChart, setRenderChart] = useState(false);

  // Use useEffect to render the chart on the client side
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setRenderChart(true);
    }
  }, []);

  if (typeof window !== 'undefined') {
  }

  return (
    <div>
      {/* <h1>Hello, Im a React component with an ApexCharts Line Chart!</h1> */}
      {renderChart && (
        <ApexCharts
          options={chartData.options as ApexOptions}
          series={chartData.series}
          type="line"
          height={windowSize.height}
          width={windowSize.width}
          className="h-60"
        />
      )}
    </div>
  );
};

// Export the component
export default LineChart;
