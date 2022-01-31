export interface Content {
    id: number;
    title: string;
    description: string;
    creator: string;
    imgURL?: string; //optional
    type?: string; //optional
    tags?: string[]; //optional
}