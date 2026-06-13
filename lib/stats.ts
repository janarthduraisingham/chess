type Stats = {
    chess_bullet: { last: {rating: number}}
    chess_blitz: { last: {rating: number}}
    chess_rapid: { last: {rating: number}}
};

export async function getRatings(user: string): Promise<Stats> {
    const result = await fetch(`https://api.chess.com/pub/player/${user}/stats`,
        { next: { revalidate: 600}}
    );
    return result.json();
}

type Archives = {
    archives: string[]
}

export async function getGameMonths(user: string): Promise<Archives> {
    const result = await fetch(`https://api.chess.com/pub/player/${user}/games/archives`,
        { next: { revalidate: 600}}
    );

    return result.json();
}

type Games = {
    games : {
        end_time: number
        time_control: string
        time_class: string
        accuracies: {
            white: number
            black: number
        }
        white: {
            rating: string
            result: string
            username: string
        }
        black: {
            rating: string
            result: string
            username: string
        }
        eco: string
    }[]
}

export async function getMonthGames(yearmonth: string, user: string): Promise<Games> {
    // const result = await fetch(`https://api.chess.com/pub/player/${user}/games/${yearmonth}`,
    const result = await fetch(`https://api.chess.com/pub/player/jd12473/games/2026/06`,
        { next: { revalidate: 600}}
    );

    return result.json();
}

export const user = 'jd12473';
export const ratings = await getRatings(user);
export const archives = await getGameMonths(user);

export const gameYears = archives.archives.map(a => (
  a.slice(-7)
))

export const recentYear = gameYears.sort(
  ((a, b) => b.localeCompare(a))
)[0]

export const firstYear = gameYears.sort(
  ((a, b) => a.localeCompare(b))
)[0]

export const recentGames = await getMonthGames(user, recentYear);
export const games = recentGames;

// Transform data for recent games
export const plotData = games.games.map(g => ({
  date: (new Date(g.end_time * 1000)).getTime(),
  prettyDate: new Date(g.end_time * 1000),
  opening: g.eco,
  time_class: g.time_class,
  colour: g.white.username == user ? 'white' : 'black',
  result: g.white.username == user ? g.white.result : g.black.result,
  rating: g.white.username == user? g.white.rating : g.black.rating

}));
