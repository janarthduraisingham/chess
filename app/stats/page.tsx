'use client';
import { user, ratings, plotData, recentGames, firstYear, recentYear } from "@/lib/stats";
import type { Games } from "@/lib/stats";
import { Line, LineChart, XAxis, YAxis, Tooltip } from 'recharts';
import { useState } from 'react';

type FilterTimeClass = Games["games"][0]["time_class"];
const filterTimeClasses = ['rapid', 'blitz', 'bullet'];


 

export default function Ratings() {

  const [timeClass, setTimeClass] = useState<FilterTimeClass>('rapid');


  // Plot

  function Plotter() {
    const Data = plotData.filter(i => {
      if (timeClass == i.timeClass) return true;
      return false;
  })
    return (
      <LineChart style={{ width: '100%', aspectRatio: 1.618, maxWidth: 1000}} responsive data={Data}
      margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
        <Line dataKey='rating' />
        <XAxis dataKey='date'
              label={{value: 'Date', position: 'insideBottom'}}
              type = 'number'
              domain={['auto', 'auto']}
              tickFormatter={(ts) => new Date(ts).toLocaleDateString()}
              angle={-90}
              textAnchor="end"
        />
        <YAxis label={{value: `${timeClass} Rating`, angle: -90, position: 'insideLeft'}}
        domain={['dataMin - 50', 'dataMax + 50']}/>
        <Tooltip 
        labelFormatter={(ts) => new Date(ts).toDateString()}
        contentStyle={{
          backgroundColor: "#15803d"
        }}
        labelStyle={{
          color: 'black'
        }}
        itemStyle={{
          color: 'black'
        }}/>
      </LineChart>
    )
  }

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-stone-600">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-stone-600 sm:items-start">
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            Chess.com Stats.
          </h1>
          User: {user} <br />
          Bullet: {ratings.chess_bullet.last.rating} <br />
          Blitz: {ratings.chess_blitz.last.rating} <br />
          Rapid: {ratings.chess_rapid.last.rating} <br />

          First game: {firstYear} <br />
          Last game: {recentYear} <br />

          Last game: {recentGames.games[0].eco} <br />

          <div>
            {
              filterTimeClasses.map(c => (
                <button
                  key={c}
                  className={`px-4 py-2 text-white ${timeClass == c ? 'font-bold underline bg-green-700' : 'bg-green-900'}`}
                  onClick={() => setTimeClass(c)}  
                  >
                  {c} 
                </button>
              ))
            }
          </div>
            
            <h1 className="max-w-xs text-2xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
              {timeClass}
            </h1>

            <Plotter />

        </div>
      </main>
    </div>
  );
}

