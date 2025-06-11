import { Animal, type IAnimalResponse } from '../models/Animal'

enum ActionTypes {
    LOADED,
    FED
}

export type Action = {
    type: ActionTypes,
    payload: string
}

export const AnimalsReducer = (animals: Animal[], action: Action) => {
    switch (action.type) {
        case ActionTypes.LOADED:
            return (JSON.parse(action.payload) as IAnimalResponse[]).map(a => new Animal(a))
        case ActionTypes.FED:
            return animals
        default:
            return animals
    }
}