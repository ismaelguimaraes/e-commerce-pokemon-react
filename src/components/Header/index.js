import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  Form,
  Input,
  Container
} from 'reactstrap';

import  { MdSearch, MdShoppingBasket } from 'react-icons/md'
import Logo from '../../images/logo.png'
import './styles.css';

import { Card } from './styles';

function Header({ cartSize }) {

  const [ isOpenCard, setOpenCard ] = useState(false);

  const toggleCard = () => setOpenCard(!isOpenCard);

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar className="bgBlue" dark expand="md">
        <Container>
          <Link to="/"><NavbarBrand><img src={Logo} alt="Ícone representativo da Americanas Pokemon" className="imgLogo" /></NavbarBrand></Link>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Form className="ml-auto searchForm">
              <Input className="inputSearch" type="search" name="search" id="exampleSearch" placeholder="O que você está procurando?" />
              <MdSearch color="#1E90FF" className="searchIcon" size="32" />
            </Form>
            <Nav className="ml-auto" navbar>
              {/* <NavItem>
                <NavLink href="/components/">Aéreos</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/">Fogo</NavLink>
              </NavItem> */}
              <Card onClick={toggleCard}>
                <MdShoppingBasket size={26} color="#FFFFFF" />
                <div>
                  <span>{cartSize} itens</span>
                </div>
              </Card>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>

      <div className="row">
        <div className="col-md-9"></div>
        { isOpenCard ? (
          <div className="col-md-3">
            Teste
          </div>
        ) : null }
      </div>

      {console.log(isOpenCard)}
    </div>
  );
}

export default connect(state => ({
  cartSize: state.cart.length,
}))(Header);