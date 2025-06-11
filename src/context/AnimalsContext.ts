import { createContext } from "react";
import { Animal } from '../models/Animal';
import type { Action } from "../reducers/AnimalReducer";

interface IAnimalContext {
    animals: Animal[],
    dispatch: (action: Action) => void
}

export const AnimalsContext = createContext<IAnimalContext>({
    animals: [],
    dispatch: () => {}
})