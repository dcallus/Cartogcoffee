import { db } from './data/db';

const baseURL = "http://localhost:5000/api/coffees/"

export const getCoffees = () =>  {
    return db;
};