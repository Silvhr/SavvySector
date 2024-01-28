'use client';
import { sql } from '@vercel/postgres';
import { useRef, useState, useEffect } from 'react';
import { useQuery } from 'react-query';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import axios from 'axios';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import { Text } from '@tremor/react';
import DonutChart from './DonutChart'; // Ensure this path is correct
import AssetSlider from './AssetSlider';
import LineChartBuilder from './linechartBuilder';

interface FinancialSector {
  sector: string;
  value: number;
}

const SPData1 = [
  { sector: 'Communication Services', value: 260000 },
  { sector: 'Consumer Discretionary', value: 50000 },
  { sector: 'Consumer Staples', value: 80000 },
  { sector: 'Energy', value: 70000 },
  { sector: 'Finance', value: 170000 },
  { sector: 'Healthcare', value: 100000 },
  { sector: 'Industrials', value: 100000 },
  { sector: 'Materials', value: 20000 },
  { sector: 'Real Estate', value: 10000 },
  { sector: 'Technology', value: 110000 },
  { sector: 'Utilities', value: 30000 },
  { sector: 'Cash', value: 0 }
];

const fetchData = async (year: number) => {
  try {
    const response = await axios.get('/api/headlines', {
      params: {
        year: year
      }
    });
    const data: Headline = response.data;
    return data;
  } catch (error) {
    console.error('Error loading menu data:', error);
    throw error;
  }
};
export default function Page() {
  const plugin = useRef(Autoplay({ delay: 3500, stopOnInteraction: true }));
  const [startYear, setStartYear] = useState(2005); // eventually update this randomly from range from database
  const [currentYear, setCurrentYear] = useState(startYear); // eventually update this randomly from range from database
  const [financialDataState, setFinancialDataState] = useState(SPData1);
  const { data: headline, error } = useQuery('headlines', () =>
    fetchData(currentYear)
  );
  if(error) {
    console.log(error);
  }


  const handlePortfolioUpdate = (updatedData: FinancialSector[]) => {
    console.log('Updating Portfolio Data:', updatedData); // Log new data
    setFinancialDataState([...updatedData]);
  };

  const handleIncrementYear = () => {
    if (currentYear < startYear + 6) {
      setCurrentYear((prevYear) => prevYear + 1);
      // console.log(currentYear);

      // console.log(((currentYear - startYear) / 5) * 100);
      // console.log((currentYear - startYear / 5));
    } else {
      // setGameOver(true);
      // console.log('Game Over');
      setCurrentYear(startYear);
    }
  };
    const weights: number[] = [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    const start: string = "2005-01-01";
    const end: string = "2006-01-01";

  return (
    <main className="p-4 md:p-1 mx-auto max-w-7xl">
      <div className="flex flex-col">
        <Card className="mt-6 flex">
          {/* this div should be 3/4 of the width of the card */}
          <div className="px-5 w-3/5">
            <div className="flex justify-end">
              <Button
                className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4 ml-auto"
                onClick={handleIncrementYear}
              >
                Simulate Year
              </Button>
            </div>
            <Text className="text-2xl font-semibold text-left">
              {startYear}
            </Text>
            <Progress
              value={((currentYear - startYear) / 5) * 100}
              className=""
            />
            <Text className="text-2xl font-semibold text-right">
              {startYear + 4}
            </Text>
            <Carousel
              className="w-full max-w-sm mx-auto"
              plugins={[plugin.current]}
              onMouseEnter={plugin.current.stop}
              onMouseLeave={plugin.current.reset}
            >
              <CarouselContent className="-ml-1">
                {Array.from({ length: 5 }).map((_, index) => (
                  <CarouselItem
                    key={index}
                    className="pl-1 md:basis-1/2 lg:basis-1/3"
                  >
                    <div className="p-1">
                      <Card>
                        <CardContent className="flex aspect-square items-center justify-center p-6">
                          <span className="text-2xl font-semibold">
                            {index + 1}
                          </span>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
          <div className="pr-5 py-4 w-2/5 min-h-full">
            <Card
              title="Macro Information"
              className="flex flex-col justify-center items-center"
            >
              <h1 className="text-center">Macro Information</h1>
            </Card>
          </div>
        </Card>
      </div>
      <div>
        <Card title="Financial Sectors Donut Chart">
          <DonutChart data={financialDataState} />
        </Card>
        <Card title="S&P500 Donut Chart">
          <DonutChart data={SPData1} />
        </Card>
        <Card>
            <LineChartBuilder weights={weights} start={start} end={end}/>
          {/* <LineChart data={hist} /> */}
        </Card>

        <Card title="Asset Slider ">
          <AssetSlider
            financialData={SPData1}
            onPortfolioUpdate={handlePortfolioUpdate}
          />
        </Card>
      </div>
    </main>
  );
}
