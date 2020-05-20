import React, { useState } from 'react';

import ModalCart from '../../components/Modal';
import Dashboard from '../../components/Layout/dashboard';
import { connect } from 'react-redux';

import '../../components/Header/styles.css';

import { 
    ContainerColuna,
    FinalizarPedido,
    Total
} from './styles';


import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    Form,
    Input,
    Container,
    NavLink, NavItem,
    Button, Modal, ModalHeader, ModalBody, ModalFooter
} from 'reactstrap';
import  { MdSearch, MdShoppingBasket } from 'react-icons/md'
import { Link } from 'react-router-dom'
import Logo from '../../images/logo.png'
import { Card } from '../../components/Header/styles';

function Home({ cart, total }) {

    const [ isOpenCard, setOpenCard ] = useState(false);
    const toggleCard = () => setOpenCard(!isOpenCard);
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    const desconto = (total * 10) / 100;
    const totalDesconto = total - desconto;

    return(
        <>
            <Navbar className="bgBlue" dark expand="md">
                    <Link to="/"><NavbarBrand><img src={Logo} alt="Ícone representativo da Americanas Pokemon" className="imgLogo" /></NavbarBrand></Link>
                    <NavbarToggler onClick={toggle} />
                    <Collapse isOpen={isOpen} navbar>
                        <Form className="ml-auto searchForm">
                        <Input className="inputSearch" type="search" name="search" id="exampleSearch" placeholder="O que você está procurando?" />
                        <MdSearch color="#1E90FF" className="searchIcon" size="32" />
                        </Form>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink href="/">Aéreos</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/fogo">Fogo</NavLink>
                            </NavItem>
                            <Card bgColor="#FFFFFF" onClick={toggleCard}>
                                <MdShoppingBasket size={26} color="#FFFFFF" />
                                <div>
                                <span>{cart.length} itens</span>
                                </div>
                            </Card>
                        </Nav>
                    </Collapse>
            </Navbar>
            <div className="container-fluid">
                <div className="row">
                    { isOpenCard == false ? (
                        <div className="col-md-12">
                            <h1 className="my-5">Confira nossa lista de pokemons aéreos</h1>
                            <Dashboard />
                        </div>
                        ) : (
                            <div className="col-md-9">
                                <h1 className="my-5">Confira nossa lista de pokemons aéreos</h1>
                                <Dashboard />
                            </div>
                        )
                    }
                    
                    { isOpenCard == true ? ( 
                        <ContainerColuna className="col-md-3">
                            <div>
                                <h5 className="mt-4 mb-3">Meu Carrinho</h5>
                                <table style={{width: "100%"}}>
                                    {
                                        cart.map(product => (
                                            <tr key={product.pokemonId} style={{ borderBottom: "1px solid rgba(0,0,0,0.1"}}>
                                                <div className="d-flex justify-content-between align-items-center"> 
                                                    <td><img style={{ width:"3em", height: "3em" }} src={product.pokemonImage} alt={product.name} /></td>
                                                    <td>
                                                        <strong style={{color: "#1E90FF", margin: "0" }}>{product.name}</strong>
                                                    </td>
                                                    <td>
                                                        <strong style={{color: "#1E90FF"}}>R${product.price}</strong>
                                                    </td>
                                                </div>
                                            </tr>
                                        ))
                                    }
                                </table>
                            </div>
                            <footer className="mb-2">
                                <Total>
                                    <span>Sub Total</span>
                                    <strong>R$ {total}</strong>
                                </Total>
                                <Total>
                                    <span>Desconto</span>
                                    <strong>R$ {desconto}</strong>
                                </Total>
                                <Total>
                                    <span>Total</span>
                                    <strong>R$ {totalDesconto}</strong>
                                </Total>
                                <ModalCart buttonLabel="Finalizar Pedido" desconto={desconto} type="button" />
                            </footer>
                        </ContainerColuna>
                    ) : ( 
                        <ContainerColuna className="col-md-3" style={{display: "none"}}>
                            <h5 className="mt-4 mb-3">Meu Carrinho</h5>
                            <table style={{width: "100%"}}>
                                {
                                    cart.map(product => (
                                        <tr key={product.pokemonId} style={{ borderBottom: "1px solid rgba(0,0,0,0.1"}}>
                                            <div className="d-flex justify-content-between align-items-center"> 
                                                <td><img style={{ width:"3em", height: "3em" }} src={product.pokemonImage} alt={product.name} /></td>
                                                <td>
                                                    <strong style={{color: "#1E90FF", margin: "0" }}>{product.name}</strong>
                                                </td>
                                                <td>
                                                    <strong style={{color: "#1E90FF"}}>R$ 258,80</strong>
                                                </td>
                                            </div>
                                        </tr>
                                    ))
                                }
                            </table>
                        </ContainerColuna>
                    ) }
                </div>
            </div>
        </>
    )
}

const mapStateToProps = state => ({
    cart: state.cart.map(product => ({
        ...product,
        subTotal: product.price
    })),
    total: state.cart.reduce((total, product) => {
        return total + product.price;
    }, 0)
})

export default connect(mapStateToProps)(Home);