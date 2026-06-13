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