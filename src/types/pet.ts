export type Pet = {
    id: number;
    kinds: string;
    name: string;
    sex: string;
    birthdate: string; // ISO format
    chronicIllness?: string;
    iconId: number;
};