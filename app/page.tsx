'use client';
import { sql } from '@vercel/postgres';
import { useRef, useState, useEffect } from 'react';
import { Title, Text } from '@tremor/react';
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
// import { AutoCarousel } from '@/components/ui/auto-carousel';
// import { CarouselSpacing } from '@/components/ui/carousel-spacing';

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

<<<<<<< HEAD
export default function Page() {
  const plugin = useRef(
    Autoplay({ delay: 3500, stopOnInteraction: true })
  );
   const [progress, setProgress] = useState(13)
 
  useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500)
    return () => clearTimeout(timer)
  }, [])
=======
export default async function IndexPage({
  searchParams
}: {
  searchParams: { q: string };
}) {
  // const search = searchParams.q ?? '';
  // const result = await sql`
  //   SELECT id, name, username, email 
  //   FROM users 
  //   WHERE name ILIKE ${'%' + search + '%'};
  // `;
  // const users = result.rows as User[];
>>>>>>> 29f90e9d95a8a9a03705420fead32e55730d9e9e

  return (
    <main className="p-4 md:p-1 mx-auto max-w-7xl">
      <Card className="mt-6">
<<<<<<< HEAD
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
=======
      <Title>Run Simulation</Title>
      <Card title="Timeline and Progress">
        {/* Timeline and Progress components */}
      </Card>
      {/* <Chart /> */}
      <Card title="Macro Information">
        {/* Macro Information components */}
      </Card>
      {/* <Carousel /> */}
>>>>>>> 29f90e9d95a8a9a03705420fead32e55730d9e9e
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
