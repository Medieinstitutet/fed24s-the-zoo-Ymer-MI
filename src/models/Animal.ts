type Medicine = 'Antibiotika' | 'Inga' | 'Ögondroppar'

interface IAnimal {
    name: string
    latinName: string
    yearOfBirth: number
    shortDescription: string
    longDescription: string
    imageUrl: string
    medicine: Medicine
    isFed: boolean
    lastFed: Date
}

export interface IAnimalResponse extends IAnimal {
    id: number
}

export class Animal implements IAnimal {
    private id: number
    name: string
    latinName: string
    yearOfBirth: number
    shortDescription: string
    longDescription: string
    imageUrl: string
    medicine: Medicine
    isFed: boolean
    lastFed: Date

    constructor(animalResponse: IAnimalResponse) {
        this.id = animalResponse.id
        this.name = animalResponse.name
        this.latinName = animalResponse.latinName
        this.yearOfBirth = animalResponse.yearOfBirth
        this.shortDescription = animalResponse.shortDescription
        this.longDescription = animalResponse.longDescription
        this.imageUrl = animalResponse.imageUrl
        this.medicine = animalResponse.medicine
        this.isFed = animalResponse.isFed
        this.lastFed = new Date(animalResponse.lastFed)
    }

    getID = () => this.id

    feed = () => {
        this.isFed = true
        this.lastFed.setTime(Date.now())
    }
}