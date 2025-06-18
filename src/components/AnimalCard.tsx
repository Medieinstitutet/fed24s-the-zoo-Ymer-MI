import { Animal } from '../models/Animal'
import { Link } from 'react-router'
import { AnimalIMG } from './AnimaIMG'
import { ErrorBox } from './styled/AlerBox'
import { AnimalHungerWarning } from './AimalHungerWarning'
import '../styles/animalCard.scss'

type AnimalCardProps = {
    animal: Animal
}

export const AnimalCard = ({ animal }: AnimalCardProps) => <li className={ `card ${ animal.checkHunger(Animal.HUNGERTIME) ? 'hungry' : '' }` }>
    <AnimalIMG src={ animal.imageUrl } alt={ animal.name } />
    <div className='text-[2em] flex items-center'>
        <h3 className='w-fit inline'>{ animal.name }</h3><span className='flex-1 font-normal italic truncate'>&nbsp;- { animal.latinName }</span>
    </div>
    <p>{ animal.shortDescription }</p>
    <ul>
        <li>Born: { animal.yearOfBirth }</li>
        <li>Medicine: { animal.medicine }</li>
        <li>Last fed: { animal.lastFed.toLocaleString('sv-SE') }</li>
        <li>Next feed: { animal.nextFeed().toLocaleString('sv-SE') }</li>
    </ul>
    <div className='flex flex-col justify-end flex-1 gap-4'>
        { animal.checkHunger(5) ? <ErrorBox>This animal is starving!</ErrorBox> : <AnimalHungerWarning animal={ animal } /> }
        <Link to={ `/${ animal.getID() }` }>Read more{ animal.checkHunger(Animal.HUNGERTIME) ? ' and feed' : '' }...</Link>
    </div>
</li>