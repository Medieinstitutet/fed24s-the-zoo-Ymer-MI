import styled from 'styled-components'

export const Button = styled.button`
    padding: 1rem;
    color: #222;
    background-color: #0f0;
    border-radius: .5rem;
    transition: background 0.2s;

    &:disabled {
        --background-greyed-out: #888;
        --foreground-greyed-out: #ccc;

        background-color: var(--background-greyed-out);
        color: var(--foreground-greyed-out);
        cursor: not-allowed;

        &:hover, &:active {
            background-color: var(--background-greyed-out);
            color: var(--foreground-greyed-out);
            text-decoration: none;
        }
    }
    
    &:hover, &:active {
        background-color: #8f8;
        text-decoration: underline;
    }
    `