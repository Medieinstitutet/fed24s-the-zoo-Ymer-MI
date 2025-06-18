import { styled } from 'styled-components'

export const AlertBox = styled.span`
    padding: 1rem;
    border-radius: .5rem;`

export const WarningBox = styled(AlertBox)`
    background-color: #ff0;
    color: #222;`

export const ErrorBox = styled(AlertBox)`
    background-color: #f00;
    color: #eee;`