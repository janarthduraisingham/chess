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