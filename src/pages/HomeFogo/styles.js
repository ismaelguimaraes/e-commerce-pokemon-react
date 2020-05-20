import styled from 'styled-components';

import { MdSearch } from 'react-icons/md';
import { Navbar, Input } from 'reactstrap';

export const NavbarFogo = styled(Navbar)`
    background-color: ${props => props.bgColor};
`;

export const InputFogo = styled(Input)`
    border-radius: 0;
`;

export const Search = styled(MdSearch)`
    position: absolute;
    right: 0;
    top: 50%;
    transform: translate(-50%, -50%);
    /* color: ${props => props.color}; */
`;