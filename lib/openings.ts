import data from '@/data/openings.json';

export type Opening = {
    id: string;
    name: string;
    colour: 'white' | 'black';
    parent: string;
    notes: {pros: string;
        cons: string;}
};

export const openings = (data.sort() as Opening[])
    .sort((a, b) => a.id.localeCompare(b.id))