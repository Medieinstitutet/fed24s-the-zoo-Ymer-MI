import { AnimalAPI } from '../sevices/animalAPI'
import ls from '../helpers/localStorageHelpers'

export const animalsLoader = async () => ({ animals: ls.getAnimals() ?? await (async () => {
    const animals = await new AnimalAPI().getAnimals()

    ls.setAnimals(animals)

    console.log(animals, ls.getAnimals())

    return animals
})() })