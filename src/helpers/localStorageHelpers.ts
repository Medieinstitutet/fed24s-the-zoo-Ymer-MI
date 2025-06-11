import { Animal, type IAnimalResponse } from '../models/Animal'

const animalsKey = 'animals'

export default {
    setAnimals(animals: Animal[]) { 
        localStorage.setItem(animalsKey, JSON.stringify(animals))

        console.log(animals, localStorage.getItem(animalsKey))
    },
    getAnimals() { 
        const ls = localStorage.getItem(animalsKey)
        
        return !ls ? undefined : (JSON.parse(ls) as IAnimalResponse[]).map(a => new Animal(a))
    }
}