'use client';
import { user, ratings, plotData, recentGames, firstYear, recentYear } from "@/lib/stats";
import { Line, LineChart } from 'recharts';


// Plot
const type = 'rapid';

function Plotter() {
  const Data = plotData.filter(i => {
    if (type !== i.time_class) return false;
    return true;
}); 
  return (
    <LineChart style={{ width: '100%', aspectRatio: 1.618, maxWidth: 600}} responsive data={Data}>
      <Line dataKey='rating' />
    </LineChart>
  )
} 

export default function Ratings() {

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

          plot: <Plotter />

          test: <ul>{plotData.map((d, i) => (<li key={i}>{d.date}</li>))}</ul>

        </div>
      </main>
    </div>
  );
}
