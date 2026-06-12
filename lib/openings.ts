import data from '@/data/openings.json';

export type Opening = {
    id: string;
    name: string;
    colour: string;
};

export const openings = data as Opening[]