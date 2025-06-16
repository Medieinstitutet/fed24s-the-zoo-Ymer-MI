import { useParams } from 'react-router'
import { useContext } from 'react'
import { AnimalsContext } from '../context/AnimalsContext'
import { Section } from '../components/styled/Wrappers'
import { Button } from '../components/styled/Buttons'
import { AnimalIMG } from '../components/AnimaIMG'


export const AnimalPresentation = () => {
    const { id } = useParams(), animal = !id ? undefined : useContext(AnimalsContext).animals.filter(a => a.getID() === +id)[0]

    if (!animal) throw Error('Missing ID in params.')

    return <Section className='flex flex-col items-center gap-6'>
        <h1>{ animal.name }</h1>
        <AnimalIMG  src={ animal.imageUrl } alt={ animal.name } height={ 35 } />
        <Section className='flex flex-col items-center gap-12'>
            <span>{ animal.shortDescription }</span>
            <Section>
                <h2 className='text-left'>{ animal.latinName }</h2>
                <p>{ animal.longDescription }</p>
                <Button className='self-start my-12' type='button' disabled={ animal.isFed }>Feed</Button>
            </Section>
        </Section>
    </Section>
}