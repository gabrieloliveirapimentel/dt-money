import styled from "styled-components";

export const SearchFormContainer = styled.form`
    display: flex;
    gap: 1rem;

    input {
        flex: 1;
        border-radius: 6px;
        border: 0;
        padding: 1rem;
        
        background: ${props => props.theme['gray-900']};
        color: ${props => props.theme['gray-300']};

        &::placeholder {
            color: ${props => props.theme['gray-500']};
        }
    }

    button {
        width: 120px;
        
        display: flex;
        justify-content: center;
        align-items: center;

        gap: 0.75rem;
        padding: 1rem;        

        border: 0;
        border: 1px solid ${props => props.theme['green-500']};

        font-weight: bold;
        border-radius: 6px;
    }

    button[type="submit"] {
        color: ${props => props.theme.white};
        background-color: ${props => props.theme['green-500']};

        &:disabled {
            opacity: 0.7;
            cursor: not-allowed;
        }
        
        &:not(:disabled):hover {
            background: ${props => props.theme['green-700']};
            border-color: ${props => props.theme['green-700']};
            color: ${props => props.theme.white};

            transition: background-color 0.5s, color 0.5s, border-color 0.5s;
        }
    }

    button[type="reset"] {
        background: transparent;
        color: ${props => props.theme['green-300']};
        
        &:disabled {
            opacity: 0.7;
            cursor: not-allowed;
        }
        
        &:not(:disabled):hover {
            border-color: ${props => props.theme['green-500']};
            color: ${props => props.theme['green-500']};

            transition: background-color 0.5s, color 0.5s, border-color 0.5s;
        }
    }
`