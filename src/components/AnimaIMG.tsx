import { useState } from 'react'
import { ImgError } from './ImgError'
import { IMG } from './styled/IMGs'
import { IMGWrapper } from './styled/Wrappers'

type AnimalIMGProps = {
    src: string,
    alt: string,
    className?: string,
    height?: number

}

export const AnimalIMG = ({ src, alt, className, height }: AnimalIMGProps) => {
    const [imgErr, setImgErr] = useState(false)

    return <IMGWrapper className={`flex justify-center ${className}`} height={ height }>
            { !imgErr ? <IMG src={ src } alt={ alt } height={ height } onError={() => {setImgErr(true)}}/> : <ImgError /> }
        </IMGWrapper>
}