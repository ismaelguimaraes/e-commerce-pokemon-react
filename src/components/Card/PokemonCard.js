import React, { Component } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'

import { MdReport, MdSearch, MdStar, MdStarBorder, MdStarHalf } from 'react-icons/md';

import Loader from './loader.gif';

const Imagem = styled.img`
    width: 8em;
    height: 8em;
    display: none;
`

class PokemonCard extends Component {

    state = {
        name: '',
        imageUrl: '',
        pokemonId: '',
        price: '',
        novoPrice: '',
        imageLoading: true,
        toManyRequests: false,
    }

    componentDidMount() {
        const { name, url, price } = this.props;
        const pokemonId = url.split("/")[url.split('/').length - 2];
        const pokemonImage = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`
    
        const novoPreco = price * 100;
        
        this.setState({ name, pokemonImage, pokemonId, price: novoPreco })

    }

    handleAddProduct = product => {
        const { dispatch } = this.props;

        dispatch({
            type: 'ADD_TO_CART',
            product,
        })
    }

    render() {
        return(
            <div className="col-md-3 col-sm-6 mb-5">
                <div className="card">
                    <div className="card-header d-flex align-items-center justify-content-between" style={{backgroundColor:"#1E90FF"}}>
                        <div>
                            <MdStar size="12" color="#FFFFFF" />
                            <MdStar size="12" color="#FFFFFF" />
                            <MdStar size="12" color="#FFFFFF" />
                            <MdStarHalf size="12" color="#FFFFFF"/>
                            <MdStarBorder size="12" color="#FFFFFF" />
                        </div>
                        <div>
                            <MdSearch size="14" className="mr-2" color="#FFFFFF" />
                            <MdReport size="14" color="#FFFFFF" />
                        </div>
                    </div>
                    
                    { this.state.imageLoading ? (
                        <img src={Loader} style={{ width: '2em', height: '2em' }} className="card-img-top rounded mx-auto mt-5 mb-4" alt="Loader" />
                    ) : null }

                    <Imagem className="card-img-top rounded mx-auto mt-2" style={ this.state.toManyRequests ? { display: "none" } : this.state.imageLoading ? null : {display: "block"} } onError={() => this.setState({toManyRequests: true})} onLoad={() => this.setState({ imageLoading: false })} src={this.state.pokemonImage} />
                    
                    { this.state.toManyRequests ? (
                        <h6 className="mx-auto"><span className="badge badge-danger my-2">Muitas requisições</span></h6>
                    ) : null }
                    
                    <div className="card-body">
                        <h6 className="card-title my-0" style={{color: "rgb(102, 102, 102)"}}>{this.state.name.toLowerCase().split(' ').map(letter => letter.charAt(0).toUpperCase() + letter.substring(1)).join(' ')}</h6>
                        <h5 className="card-title" style={{ fontSize: "14" }}><strong>Preço: R${this.state.price}</strong></h5>
                    </div>

                    <div className="card-body mx-auto">
                        <button className="btn btn-danger" onClick={() => this.handleAddProduct(this.state)} style={{ backgroundColor: "#1E90FF", border: "none" }}>Adicionar ao Carrinho</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect()(PokemonCard);