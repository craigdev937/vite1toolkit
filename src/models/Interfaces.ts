export interface IBook {
    _id?: string,
    title: string,
    first: string,
    last: string,
    age: number,
    info: string,
    __v: number
};

export interface IBookState {
    books: IBook[],
    loading: boolean,
    error: string | null
};


