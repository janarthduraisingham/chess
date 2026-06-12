import { openings } from '@/lib/openings';

export default function Openings() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-stone-600">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-stone-600 sm:items-start">
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            Openings.
          </h1>
            <ul>
              {openings.map(o => (
                <li key={o.id}>
                  {o.name} ({o.colour})
                  <ul className='ml-6'>
                    <li>{o.colour}</li>
                  </ul> 
                </li>
              ))}
            </ul>
        </div>
      </main>
    </div>
  );
}
