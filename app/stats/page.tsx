import getRatings from "@/lib/stats";

export default async function Ratings() {
  const user = 'jd12473';
  const ratings = await getRatings(user);

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
          Rapid: {ratings.chess_rapid.last.rating}

        </div>
      </main>
    </div>
  );
}
