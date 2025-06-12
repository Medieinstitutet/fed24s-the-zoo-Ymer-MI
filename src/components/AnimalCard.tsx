import { useState } from 'react'
import type { Animal } from '../models/Animal'
import { Link } from 'react-router'
import { ImgError } from './ImgError'
import '../styles/animalCard.scss'

type AnimalCardProps = {
    animal: Animal
}

export const AnimalCard = ({ animal }: AnimalCardProps) => {
    const [imgErr, setImgErr] = useState(false)

    return <li className={ `card ${ !animal.isFed ? 'hungry' : '' }` }>
        <div className='flex justify-center md:min-h-[20rem]'>
            { !imgErr ? <img className='md:max-h-[20rem]' src={ animal.imageUrl } alt={ animal.name } onError={() => {setImgErr(true)}}/> : <ImgError /> }
        </div>
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