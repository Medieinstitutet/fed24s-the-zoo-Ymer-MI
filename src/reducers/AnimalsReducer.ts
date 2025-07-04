import { Animal, type IAnimalResponse } from '../models/Animal'
import ls from '../helpers/localStorageHelpers'

export enum ActionTypes {
    LOADED,
    FED,
    TOGGLEDFED
}

export type Action = {
    type: ActionTypes,
    payload: string
}

export const AnimalsReducer = (animals: Animal[], action: Action) => {
    let a: Animal[] = []

    switch (action.type) {
        case ActionTypes.LOADED:
            a = (JSON.parse(action.payload) as IAnimalResponse[]).map(a => new Animal(a))
            break
        case ActionTypes.FED:
            a = animals.map(a => a.getID() === +action.payload ? a.feed() : a)
            break
        case ActionTypes.TOGGLEDFED:
            a = animals.map(a => a.getID() === +action.payload ? a.toggleIsFed() : a)
            break
        default:
            a = animals
            break
    }

    ls.setAnimals(a)
    
    return a
}