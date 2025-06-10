
import { Animal, type IAnimalResponse } from '../models/Animal'
import { BaseService } from './base'

export class AnimalAPI {
    private service = new BaseService('https://animals.azurewebsites.net/api/animals')

    public getAnimals = async () => (await this.service.get<IAnimalResponse[]>('')).map(a => new Animal(a))
}