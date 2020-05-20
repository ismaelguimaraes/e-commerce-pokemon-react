import React, { useState } from 'react';
import  { MdShoppingCart } from 'react-icons/md'
import { Link } from 'react-router-dom'
import Logo from '../../images/logo.png'
import { Card } from '../../components/Header/styles';
import { connect } from 'react-redux';

import ModalCart from '../../components/Modal';
import DashboardFogo from '../../components/Layout/dashboardFogo';

import {
    NavbarFogo,
    InputFogo,
    Search
} from './styles';

import { 
    ContainerColuna,
    FinalizarPedido,
    Total
} from '../Home/styles';

import {
    Collapse,
    NavbarToggler,
    NavbarBrand,
    Nav,
    Form,
    NavLink,
    NavItem,
    Container,
    Row,
    Col
} from 'reactstrap';

function HomeFogo({ cart, total }) {

    const [ isOpenCard, setOpenCard ] = useState(false);
    const toggleCard = () => setOpenCard(!isOpenCard);
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    const desconto = (total * 10) / 100;
    const totalDesconto = total - desconto;

    return(
        <>
            <NavbarFogo bgColor="#B22222" dark expand="md">
               <Container>
                    <Link to="/"><NavbarBrand><img src={Logo} alt="Ícone representativo da Americanas Pokemon" className="imgLogo" /></NavbarBrand></Link>
                    <NavbarToggler onClick={toggle} />
                    <Collapse isOpen={isOpen} navbar>
                        <Form className="ml-auto searchForm">
                            <InputFogo className="inputSearch" type="search" name="search" id="exampleSearch" placeholder="O que você está procurando?" />
                            <Search color="#B22222" size="32" />
                        </Form>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink href="/">Aéreos</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/fogo">Fogo</NavLink>
                            </NavItem>
                            <Card onClick={toggleCard}>
                                <MdShoppingCart size={18} color="#FFFFFF" />
                                <div>
                                <span>{cart.length} itens</span>
                                </div>
                            </Card>
                        </Nav>
                    </Collapse>
                </Container>
            </NavbarFogo>

            { 
                isOpenCard == false ? (
                    <Container>
                        <h1 className="my-5 text-center">Confira nossa lista de pokemons tipo Fogo</h1>
                        <DashboardFogo />

                    </Container>
                ) : (
                    <Container fluid={true}>
                        <Row>
                            <Col md="9">
                                <h1 className="my-5 text-center">Confira nossa lista de pokemons tipo Fogo</h1>
                                <DashboardFogo />
                            </Col>
                            <ContainerColuna style={{ height: "calc(100vh - 63px)"}} className="col-md-3">
                                <div>
                                    <h5 className="mt-4 mb-3">Meu Carrinho</h5>
                                    <table style={{width: "100%"}}>
                                        {
                                            cart.map(product => (
                                                <tr key={product.pokemonId} style={{ borderBottom: "1px solid rgba(0,0,0,0.1"}}>
                                                    <div className="d-flex justify-content-between align-items-center"> 
                                                        <td><img style={{ width:"3em", height: "3em" }} src={product.pokemonImage} alt={product.name} /></td>
                                                        <td>
                                                            <strong style={{color: "#B22222", margin: "0" }}>{product.name}</strong>
                                                        </td>
                                                        <td>
                                                            <strong style={{color: "#B22222"}}>R${product.price}</strong>
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
                        </Row>
                    </Container>
                )
            }
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

export default connect(mapStateToProps)(HomeFogo);