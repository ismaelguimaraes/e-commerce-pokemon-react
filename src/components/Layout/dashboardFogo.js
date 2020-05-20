import React, { Component } from 'react';

import PokemonListFogo from '../CardFogo';

export default class DashboardFogo extends Component {
    render() {
        return(
            <div className="row">
                <div className="col">
                    <PokemonListFogo />
                </div>
            </div>
        )
    }
}