enum Medicine {
    'Anitibiotika',
    'Inga',
    'Ögondroppar'
}

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
    static HUNGERTIME = 4
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

    nextFeed = () => new Date(this.lastFed.getTime() + (3600000 * Animal.HUNGERTIME))

    checkHunger = (h: number) => this.lastFed.getTime() + (3600000 * h) - Date.now() < 1

    // Function calls for reducers and states.
    feed = () => new Animal({...this, id: this.id, isFed: true, lastFed: new Date()} as IAnimalResponse)

    toggleIsFed = () => new Animal({...this, id: this.id, isFed: !this.isFed})
}