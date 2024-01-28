'use client';
import { sql } from '@vercel/postgres';
import { useRef, useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import DonutChart from './DonutChart'; // Ensure this path is correct
import AssetSlider from './AssetSlider';

interface FinancialSector {
  sector: string;
  value: number;
}

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

export default function Page() {
  const plugin = useRef(
    Autoplay({ delay: 3500, stopOnInteraction: true })
  );
   const [progress, setProgress] = useState(13)
 
  useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <main className="p-4 md:p-1 mx-auto max-w-7xl">
      <Card className="mt-6">
        <Progress value={progress} className="w-[60%]"/>
        <Card title="Timeline and Progress">
        </Card>
        <Carousel
          className="w-full max-w-sm"
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

        <Card title="Macro Information">
          {/* Macro Information components */}
        </Card>
      </Card>
    </main>
  );
}

// const search = searchParams.q ?? '';
// const result = await sql`
//   SELECT id, name, username, email
//   FROM users
//   WHERE name ILIKE ${'%' + search + '%'};
// `;
// const users = result.rows as User[];
//Default data for start of year 0

// export default function IndexPage() {
//   // State for holding financial data
//   const [financialDataState, setFinancialDataState] = useState(SPData1);

//   const handlePortfolioUpdate = (updatedData: FinancialSector[]) => {
//     console.log('Updating Portfolio Data:', updatedData); // Log new data
//     setFinancialDataState([...updatedData]);
//   };

//     return (
//         <main className="p-4 md:p-1 mx-auto max-w-7xl">
//             <Card className="mt-6">
//                 <Title>Run Simulation</Title>

                
//                 {/* Financial Sectors Donut Chart - Dynamic */}
//                 <Card title="Financial Sectors Donut Chart">
//                     <DonutChart data={financialDataState} />
//                 </Card>

              
//                 {/* S&P500 Donut Chart - Static */}
//                  <Card title="S&P500 Donut Chart">
//                     <DonutChart data={SPData1} />
//                     </Card>

//                   <Card title="Asset Slider ">
//                   <AssetSlider financialData={SPData1} onPortfolioUpdate={handlePortfolioUpdate} />
//                     </Card>

//                 {/* More components as needed */}
//             </Card>
//         </main>
//     );
// }
