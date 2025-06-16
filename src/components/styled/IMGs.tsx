import styled from 'styled-components'

type IMGsProps = {
    height?: number
}

export const IMG = styled.img<IMGsProps>`
    @media (width >= 48rem) {
        height: ${(props) => props.height ?? 20}rem;
    }`