import { atom } from "jotai";

import { CarData } from "./types";
  
export const carAtom = atom<CarData[]>([]);

export const carLoadingAtom = atom(true);

export const fetchCars = async (cars:any): Promise<CarData[]> => {
    // Simulate fetching data with a delay
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(cars); // Replace this with your actual fetch logic
      }, 2000);
    });
  };