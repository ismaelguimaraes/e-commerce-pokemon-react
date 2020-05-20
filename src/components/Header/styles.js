import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Card = styled.button`
    background: none;
    border: 0;
    display: flex;
    align-items: center;
    text-decoration: none;
    transition: opacity 0.4s;

    &:hover {
        opacity: 0.7;
        text-decoration: none;
    }

    div {
        text-align: right;
        margin-left: 6px;

        strong {
            display: block;
            color: #FFFFFF;
        }

        span {
            font-size: 12px;
            color: #FFFFFF;
        }
    }
`;