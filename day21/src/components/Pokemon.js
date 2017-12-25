import React, {Component} from 'react';

import UIkit from 'uikit'

const fetchPokemon = (id) => {
    return fetch(`https://d1s1rehmg7ei44.cloudfront.net/api/v2/pokemon/${id}`).then(res => res.json());
}

const Loader = () => {
    return (
        <div data-uk-spinner={''}></div>
    )
}

export const PokemonLoader = Component => 
    class FetchPokemon extends React.Component {
        state = {
            character: null
        }

        saved = 0;
        componentDidMount() {
            this.getPokemon(this.props.id);
        }

        componentDidUpdate() {
            if (this.props.id != this.saved) {
                this.saved = this.props.id;
                UIkit.grid('#grid');
            }
        }

        componentWillReceiveProps(props) {
            //this.setState({character: null});
            this.getPokemon(props.id);
        }

        getPokemon(id) {
            fetchPokemon(id).then(character => this.setState({character}));
        }

        render() {
            return this.state.character
                ? (<Component character={this.state.character}/>)
                : (
                    <div className="uk-flex uk-flex-center">
                    <Loader/>
                </div>
                );
        }

    }

export const Pokemon = props =>(

            <div className="uk-card uk-card-small uk-margin">
                <div className="uk-card-header">
                    <div className="uk-grid-small uk-flex-middle" data-uk-grid>
                        <div className="uk-width-auto">
                            <img
                                data-uk-scrollspy="cls:uk-animation-slide-left"
                                className="uk-border-circle"
                                src={props.character.sprites.front_default}
                                title="yellow"
                                data-uk-tooltip/>
                        </div>
                        <div className="uk-width-expand">
                            <h3 className="uk-card-title uk-margin-remove-bottom">{props.character.name}</h3>
                            <p className="uk-text-meta uk-margin-remove-top">
                                Order:
                                <span>{props.character.order}</span>
                            </p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="uk-card-body ">
                        <ul
                            className="uk-list uk-list-bullet uk-list-small "
                            data-uk-scrollspy="target: > li; cls:uk-animation-fade; delay: 500">
                            {props
                                .character
                                .abilities
                                .map(item => (
                                    <li
                                        key={item.ability.name}
                                        className="uk-margin-remove-bottom uk-margin-remove-top">{item.ability.name}</li>
                                ))}
                        </ul>
                    </div>
                </div>
            </div>
);