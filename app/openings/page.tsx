'use client';
import {  useState  } from 'react';
import { Opening, openings } from '@/lib/openings';

type FilterColour = Opening['colour'] | 'all';
const filterColours = ['all', 'white', 'black'] as const

export default function Openings() {

  const [colour, setColour] = useState<FilterColour>('all');

  const filtered = openings.filter(o => {
    if (colour !== 'all' && colour !== o.colour) return false;
    return true
  })

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-stone-600">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-stone-600 sm:items-start">
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            Openings.
          </h1>
          <div>
            {
              filterColours.map(c => (
                <button
                  key={c}
                  className={colour == c ? 'font-bold underline' : ''}
                  onClick={() => setColour(c)}  
                  >
                  {c}
                </button>
              ))
            }
          </div>
          <ol>
            {filtered.map(o => (
              <li key={o.id}>
                <span className='font-bold'>{o.name}</span> ({o.colour})
                <ul className='ml-6'>
                  <li><span className='underline'>Parent opening:</span> {o.parent}</li>
                  <ul className='ml-6'>
                    <span className='underline'>Pros:</span> {o.notes.pros} <br />
                    <span className='underline'>Cons:</span> {o.notes.cons}
                  </ul>
                </ul> 
              </li>
            ))}
          </ol>
        </div>
      </main>
    </div>
  );
}
