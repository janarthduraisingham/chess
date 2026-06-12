type Stats = {
    chess_bullet: { last: {rating: number}}
    chess_blitz: { last: {rating: number}}
    chess_rapid: { last: {rating: number}}
};

export default async function getRatings(): Promise<Stats> {
    const result = await fetch("https://api.chess.com/pub/player/jd12473/stats");
    return result.json();
}