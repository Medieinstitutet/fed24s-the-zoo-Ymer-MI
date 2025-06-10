import { AnimalAPI } from '../sevices/animalAPI'

export const animalsLoader = async () => ({ animals: await new AnimalAPI().getAnimals() })