type Stats = {
    chess_bullet: { last: {rating: number}}
    chess_blitz: { last: {rating: number}}
    chess_rapid: { last: {rating: number}}
};

export default async function getRatings(user: string): Promise<Stats> {
    const result = await fetch(`https://api.chess.com/pub/player/${user}/stats`);
    return result.json();
}