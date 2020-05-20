import React, { Component } from 'react';
import axios from 'axios';

import PokemonCard from './PokemonCard';

export default class PokemonList extends Component {

    state = {
        url: "https://pokeapi.co/api/v2/type/3",
        pokemon: null
    };

    async componentDidMount() {
        const res = await axios.get(this.state.url);
        this.setState({ pokemon: res.data['pokemon'] });
        console.log(res.data['pokemon'])
    }

    render() {
        return(
            <>
                { this.state.pokemon ? (    
                    <div className="row">
                        {
                            this.state.pokemon.map(pokemon => (
                                <PokemonCard
                                    key={pokemon.pokemon.name}
                                    name={pokemon.pokemon.name}
                                    url={pokemon.pokemon.url}
                                    price={pokemon.slot}
                                />
                            ))
                        }
                    </div>
                ) : (<h1>Carregando lista de pokemon</h1>)}
            </>
        )
    }
}