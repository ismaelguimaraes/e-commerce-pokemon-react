import React from 'react';
import { MdRemoveCircleOutline, MdAddCircleOutline, MdDelete } from 'react-icons/md'

import { connect } from 'react-redux';

import { 
    Container,
    PokemonTable,
    Total
} from './styles';

function Cart({ cart }) {
    return (
        <Container className="container">
            <PokemonTable>
                <thead>
                    <tr>
                        <th />
                        <th>PRODUTO</th> 
                        <th>QUANTIDADE</th> 
                        <th>SUBTOTAL</th> 
                        <th />
                    </tr>
                </thead>
                <tbody>
                    {
                        cart.map(product => (
                            <tr>
                                <td><img src={product.pokemonImage} alt={product.name} /></td>
                                <td>
                                    <strong>{product.name}</strong>
                                    <span>Valor do Pokemon</span>
                                </td>
                                <td>
                                    <div className="d-flex align-items-center">
                                        <button type="button"><MdRemoveCircleOutline size={20} color="#1E90FF" /></button>
                                        <input type="number" readOnly value={1} />
                                        <button type="button"><MdAddCircleOutline size={20} color="#1E90FF" /></button>
                                    </div>
                                </td>
                                <td>
                                    <strong>R$ 258,80</strong>
                                </td>
                                <td>
                                    <button type="button">
                                        <MdDelete size={20} color="#1E90FF" />
                                    </button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </PokemonTable>

            <footer>
                <button type="button">Finalizar Pedido</button>

                <Total>
                    <span>Total</span>
                    <strong>R$ 1920,28</strong>
                </Total>
            </footer>
        </Container>
    );
}

const mapStateToProps = state => ({
    cart: state.cart,
})

export default connect(mapStateToProps)(Cart);