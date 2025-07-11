import { useParams } from 'react-router'
import { useContext } from 'react'
import { AnimalsContext } from '../context/AnimalsContext'
import { Section } from '../components/styled/Wrappers'
import { Button } from '../components/styled/Buttons'
import { AnimalIMG } from '../components/AnimaIMG'
import { ActionTypes } from '../reducers/AnimalsReducer'
import { Animal } from '../models/Animal'
import { AnimalHungerWarning } from '../components/AimalHungerWarning';


export const AnimalPresentation = () => {
    const { id } = useParams(), { animals, dispatch } = useContext(AnimalsContext), animal = !id ? undefined : animals.filter(a => a.getID() === +id)[0]
    
    if (!animal) throw Error('Missing ID in params.')

    return <Section className='flex flex-col items-center gap-6'>
        <AnimalHungerWarning animal={ animal } />
        <h1>{ animal.name }</h1>
        <AnimalIMG  src={ animal.imageUrl } alt={ animal.name } height={ 35 } />
        <Section className='flex flex-col items-center gap-12'>
            <span>{ animal.shortDescription }</span>
            <Section className='flex flex-col'>
                <h2 className='text-left'>{ animal.latinName }</h2>
                <p>{ animal.longDescription }</p>
                <div className='my-12 flex self-end items-center gap-4'>
                    {/* Add a timer here... */}
                    <Button type='button' disabled={ !animal.checkHunger(Animal.HUNGERTIME) } onClick={() => dispatch({
                        type: ActionTypes.FED,
                        payload: `${animal.getID()}`
                    })}>Feed</Button>
                </div>
            </Section>
        </Section>
    </Section>
}