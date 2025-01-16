export type Players = {
    id: string;
    name: string;
    position: string;
    number?: number;
    nationality: string;
    birthdate: string;
    age: number;
    height: number;

    image: {
        desc?: string
        width: number
        height: number
    },
};