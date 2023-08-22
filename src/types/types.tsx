export interface IAddress {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
        lat: string;
        lng: string;
    }
}

export interface IUser {
    id: number;
    name: string;
    email: string;
    address: IAddress;
    phone: string;
    website: string;
    company: {
        name: string;
        catchPhrase: string;
        bs: string;
    }
}

export interface ITodo {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
    
}