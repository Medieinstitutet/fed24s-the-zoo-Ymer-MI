import { useContext } from 'react'
import { AnimalsContext } from '../context/AnimalsContext'
import { AnimalCard } from './AnimalCard'

export const Animals = () => {
    const { animals } = useContext(AnimalsContext)

    return <section>
        <h1>Animals in the Zoo</h1>
        <ul className='flex flex-col items-center gap-[1em] md:grid grid-cols-3'>
            { animals.map(a => <AnimalCard key={ a.getID() } animal={ a } />) }
        </ul>
    </section>
}