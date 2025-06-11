import { Animal, type IAnimalResponse } from '../models/Animal'
import ls from '../helpers/localStorageHelpers'

export enum ActionTypes {
    LOADED,
    FED
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
            a = animals
            break
        default:
            a = animals
            break
    }

    ls.setAnimals(a)
    
    return a
}