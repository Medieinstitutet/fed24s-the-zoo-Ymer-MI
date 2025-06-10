import { createContext } from "react";
import { Animal } from '../models/Animal';

interface IAnimalContext {
    animals: Animal[],
    dispatch: () => void
}

export const AnimalsContext = createContext<IAnimalContext>({
    animals: [],
    dispatch: () => {}
})