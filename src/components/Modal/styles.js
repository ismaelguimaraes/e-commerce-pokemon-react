import styled from 'styled-components'
import { darken } from 'polished'

import { Button, ModalHeader } from 'reactstrap';

export const ButtonModal = styled(Button)`
    background: #1E90FF;
    color: #FFFFFF;
    width: 100%;
    border: 0;
    border-radius: 4px;
    padding: 12px 20px;
    font-weight: bold;
    text-transform: uppercase;
    transition: background 0.4s;

    &:hover, &:focus {
        background: ${darken(0.2, '#1E90FF' )};
    }
`

export const HeaderModal = styled(ModalHeader)`
    border-bottom: 0;
`;