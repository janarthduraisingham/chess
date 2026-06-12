'use client';
import {  useState  } from 'react';
import { Opening, openings } from '@/lib/openings';

type FilterColour = Opening['colour'] | 'all';
const filterColours = ['all', 'white', 'black'] as const;

type FilterParent = Opening['parent'];
const filterParents = ['all', 'King\'s Pawn Game', 'Queen\'s Pawn Game', 'Flank Pawn Opening'] as const;

export default function Openings() {

  const [colour, setColour] = useState<FilterColour>('all');
  const [parent, setParent] = useState<FilterParent>('all');

  const filtered = openings.filter(o => {
    if (colour !== 'all' && colour !== o.colour) return false;
    if (parent !== 'all' && parent !== o.parent) return false;
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
                  className={`px-4 py-2 text-white ${colour == c ? 'font-bold underline bg-green-700' : 'bg-green-900'}`}
                  onClick={() => setColour(c)}  
                  >
                  {c} 
                </button>
              ))
            }
          </div>
          <div>
            {
              filterParents.map(c => (
                <button
                  key={c}
                  className={`px-4 py-2 text-white ${parent == c ? 'font-bold underline bg-green-700' : 'bg-green-900'}`}
                  onClick={() => setParent(c)}  
                  >
                  {c} 
                </button>
              ))
            }
          </div>
          <ol className="list-decimal ml-6 marker:text-2xl text:base">
            {filtered.map(o => (
              <li key={o.id}>
                <span className='font-bold text-2xl'>{o.name}</span> ({o.colour})
                <div className='ml-6'>
                  <div><span className='underline'>Parent opening:</span> {o.parent}</div>
                  <div className='ml-6'>
                    <span className='font-bold text-xl'>Pros:</span> {o.notes.pros} <br />
                    <span className='font-bold text-xl'>Cons:</span> {o.notes.cons}
                  </div>
                </div> 
              </li>
               ))}
            </ol>
          </div>
      </main>
    </div>
  );
}
