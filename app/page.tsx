'use client';
import { sql } from '@vercel/postgres';
import { useRef, useState, useEffect } from 'react';
import { useQuery } from 'react-query';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogCancel,
  AlertDialogAction,
  AlertDialogFooter
} from '@/components/ui/alert-dialog';
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
import { setTimeout } from 'timers';

interface FinancialSector {
  sector: string;
  value: number;
}

//Default data for start of year 1
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

const SPData2 = [
  { sector: 'Communication Services', value: 270000 },
  { sector: 'Consumer Discretionary', value: 50000 },
  { sector: 'Consumer Staples', value: 80000 },
  { sector: 'Energy', value: 80000 },
  { sector: 'Finance', value: 170000 },
  { sector: 'Healthcare', value: 90000 },
  { sector: 'Industrials', value: 90000 },
  { sector: 'Materials', value: 20000 },
  { sector: 'Real Estate', value: 20000 },
  { sector: 'Technology', value: 110000 },
  { sector: 'Utilities', value: 20000 },
  { sector: 'Cash', value: 0 }
];

const SPData3 = [
  { sector: 'Communication Services', value: 340000 },
  { sector: 'Consumer Discretionary', value: 40000 },
  { sector: 'Consumer Staples', value: 70000 },
  { sector: 'Energy', value: 80000 },
  { sector: 'Finance', value: 130000 },
  { sector: 'Healthcare', value: 90000 },
  { sector: 'Industrials', value: 80000 },
  { sector: 'Materials', value: 20000 },
  { sector: 'Real Estate', value: 10000 },
  { sector: 'Technology', value: 100000 },
  { sector: 'Utilities', value: 40000 },
  { sector: 'Cash', value: 0 }
];

const SPData4 = [
  { sector: 'Communication Services', value: 260000 },
  { sector: 'Consumer Discretionary', value: 40000 },
  { sector: 'Consumer Staples', value: 100000 },
  { sector: 'Energy', value: 90000 },
  { sector: 'Finance', value: 120000 },
  { sector: 'Healthcare', value: 100000 },
  { sector: 'Industrials', value: 80000 },
  { sector: 'Materials', value: 20000 },
  { sector: 'Real Estate', value: 10000 },
  { sector: 'Technology', value: 130000 },
  { sector: 'Utilities', value: 50000 },
  { sector: 'Cash', value: 0 }
];

const SPData5 = [
  { sector: 'Communication Services', value: 350000 },
  { sector: 'Consumer Discretionary', value: 50000 },
  { sector: 'Consumer Staples', value: 80000 },
  { sector: 'Energy', value: 70000 },
  { sector: 'Finance', value: 120000 },
  { sector: 'Healthcare', value: 80000 },
  { sector: 'Industrials', value: 80000 },
  { sector: 'Materials', value: 20000 },
  { sector: 'Real Estate', value: 20000 },
  { sector: 'Technology', value: 120000 },
  { sector: 'Utilities', value: 10000 },
  { sector: 'Cash', value: 0 }
];

const SPData6 = [
    { sector: "Communication Services", value: 320000 },
    { sector: "Consumer Discretionary", value: 60000 },
    { sector: "Consumer Staples", value: 80000 },
    { sector: "Energy", value: 70000 },
    { sector: "Finance", value: 120000 },
    { sector: "Healthcare", value: 80000 },
    { sector: "Industrials", value: 80000 },
    { sector: "Materials", value: 20000 },
    { sector: "Real Estate", value: 120000 },
    { sector: "Technology", value: 20000 },
    { sector: "Utilities", value: 30000 },
    { sector: "Cash", value: 0 },
];

const SPData7 = [
{ sector: "Communication Services", value: 330000 },
{ sector: "Consumer Discretionary", value: 60000 },
{ sector: "Consumer Staples", value: 90000 },
{ sector: "Energy", value: 70000 },
{ sector: "Finance", value: 100000 },
{ sector: "Healthcare", value: 80000 },
{ sector: "Industrials", value: 70000 },
{ sector: "Materials", value: 20000 },
{ sector: "Real Estate", value: 20000 },
{ sector: "Technology", value: 130000 },
{ sector: "Utilities", value: 30000 },
{ sector: "Cash", value: 0 },
];

const fetchData = async (year: number) => {
  try {
    console.log('yo yo yo');
    console.log(year);
    const response = await axios.get('/api/headlines', {
      params: {
        year: year
      }
    });
    const data: YearlyHeadlines = response.data;
    return data;
  } catch (error) {
    console.error('Error loading menu data:', error);
    throw error;
  }
};
export default function Page() {
  const plugin = useRef(Autoplay({ delay: 2000, stopOnInteraction: true }));
  const [startYear, setStartYear] = useState(2005); // eventually update this randomly from range from database
  const [currentYear, setCurrentYear] = useState(startYear); // eventually update this randomly from range from database
  const [financialDataState, setFinancialDataState] = useState(SPData1);
  const [gameOver, setGameOver] = useState(false);
  const {
    data: headline,
    error,
    refetch,
    isLoading
  } = useQuery('headlines', () => fetchData(currentYear), {
    enabled: false, // Set enabled to false to disable automatic refetching
  });
  if (error) {
    console.log(error);
  }

  const [donutState, setDonutState] = useState(SPData1);



  const [lineChartState, setLineChartState] = useState(SPData1);

  // State for holding financial data

  const handlePortfolioUpdate = (updatedData: FinancialSector[]) => {
    // console.log('Updating Portfolio Data:', updatedData); // Log new data
    setFinancialDataState([...updatedData]);
  };

  const handleIncrementYear = () => {
    console.log(((currentYear - startYear) / 5) * 100);
    if (currentYear < startYear + 4) {
      setCurrentYear((prevYear) => prevYear + 1);
      setTimeout(() => {
        console.log("wtf is going on")
        refetch();
      }, 250);
      // console.log(currentYear);

      // console.log(((currentYear - startYear) / 5) * 100);
      // console.log((currentYear - startYear / 5));
    } else if (currentYear == startYear + 4) {
      setCurrentYear((prevYear) => prevYear + 1);
      setGameOver(true);
      console.log('game over');
    }


    if (currentYear == 2005) { 
        setLineChartState(financialDataState);
        setDonutState(SPData2);
        setFinancialDataState(SPData2);
    }
    else if (currentYear == 2006) {
        setLineChartState(financialDataState);
        setDonutState(SPData3);
        setFinancialDataState(SPData3);
    }
    else if (currentYear == 2007) { 
        setLineChartState(financialDataState);
        setDonutState(SPData4);
        setFinancialDataState(SPData4);
    }
    else if (currentYear == 2008) { 
        setLineChartState(financialDataState);
        setDonutState(SPData5);
        setFinancialDataState(SPData5);
    }
    // else if (currentYear == 2009) { 
    //     setLineChartState(financialDataState);
    //     setDonutState(SPData6);
    //     setFinancialDataState(SPData6);
    // }
    // else if (currentYear == 2010) { 
    //     setLineChartState(financialDataState);
    //     setDonutState(SPData7);
    //     setFinancialDataState(SPData7);
    // }
    





  };
  const handleGameOver = () => {
    setCurrentYear(startYear);
    setGameOver(false);
    setTimeout(() => {
      console.log("wtf is going on")
      refetch();
    }
    , 1000);
  };
    const [weights, setWeights] = useState([1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    const [start, setStart] = useState("2005-01-01");
    const [end, setEnd] = useState("2006-01-01");

  return (
    <main className="p-4 md:p-1 mx-auto max-w-7xl">
      <AlertDialog open={gameOver}>
        {/* <AlertDialogTrigger>Open</AlertDialogTrigger> */}
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Game Over</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogAction onClick={() => handleGameOver()}>
              Restart
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
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
              opts={{
                align: 'start',
                loop: true
              }}
            >
              <CarouselContent className="-ml-1">
                {headline?.headlines.map((headline, index) => (
                  // console.log(headline),
                  <CarouselItem
                    key={index}
                    className="pl-1 md:basis-1/2 lg:basis-1/3"
                  >
                    <div className="p-1">
                      <Card>
                        <CardContent className="flex aspect-square items-center justify-center p-6">
                          <a href={headline.url}><span className="">{headline.title}</span></a>
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
              <h1 className="text-center text-3xl">Macro Information</h1>
              <h2 className="text-center">Current Year: <b>{currentYear}</b></h2>
            </Card>
          </div>
        </Card>
      </div>
      <div>
        <Card title="Financial Sectors Donut Chart">
          <DonutChart data={financialDataState} />
        </Card>
        <Card title="S&P500 Donut Chart">
          <DonutChart data={donutState} />
        </Card>
        <Card>
            <LineChartBuilder weights={lineChartState} currentYear={currentYear}/>
          {/* <LineChart data={hist} /> */}
        </Card>

        <Card title="Asset Slider ">
          <AssetSlider
            financialData={donutState}
            onPortfolioUpdate={handlePortfolioUpdate}
          />
        </Card>
      </div>
    </main>
  );
}
