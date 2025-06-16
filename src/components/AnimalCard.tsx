import type { Animal } from '../models/Animal'
import { Link } from 'react-router'
import '../styles/animalCard.scss'
import { AnimalIMG } from './AnimaIMG'

type AnimalCardProps = {
    animal: Animal
}

export const AnimalCard = ({ animal }: AnimalCardProps) => {

    return <li className={ `card ${ !animal.isFed ? 'hungry' : '' }` }>
        <AnimalIMG src={ animal.imageUrl } alt={ animal.name } />
        <div className='text-[2em] flex items-center'>
            <h3 className='w-fit inline'>{ animal.name }</h3><span className='flex-1 font-normal italic truncate'>&nbsp;- { animal.latinName }</span>
        </div>
        <p>{ animal.shortDescription }</p>
        <ul>
            <li>Born: { animal.yearOfBirth }</li>
            <li>Medicine: { animal.medicine }</li>
            <li>Last fed: { animal.lastFed.toLocaleString('sv-SE') }</li>
        </ul>
        <div className='flex flex-col justify-end flex-1'>
            <Link to={ `/${ animal.getID() }` }>Read more and feed...</Link>
        </div>
    </li>
}