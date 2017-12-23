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

export class Pokemon extends React.Component {

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

    openModal(){
        UIkit.modal("#modal-full", {}).show();
    }

    componentWillUnmount(){
        console.log('unmount')
        UIkit.modal("#modal-full", {}).$destroy(true);
        
    }

    componentDidCatch(){
        console.log('catched');
    }
    

    render() {
        var back = {
            
        }

        return this.state.character
            ? (
                <div className="uk-card uk-card-small uk-margin">
                    <div className="uk-card-header">
                        <div className="uk-grid-small uk-flex-middle" data-uk-grid>
                            <div className="uk-width-auto">
                                <img onClick={this.openModal.bind(this)} data-uk-scrollspy="cls:uk-animation-slide-left"
                                    className="uk-border-circle"
                                    src={this.state.character.sprites.front_default} title="yellow" data-uk-tooltip/>
                            </div>
                            <div className="uk-width-expand">
                                <h3 className="uk-card-title uk-margin-remove-bottom">{this.state.character.name}</h3>
                                <p className="uk-text-meta uk-margin-remove-top">
                                    Order: <span>{this.state.character.order}</span>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="uk-card-body ">
                            <ul className="uk-list uk-list-bullet uk-list-small " data-uk-scrollspy="target: > li; cls:uk-animation-fade; delay: 500" >
                                {this
                                    .state
                                    .character
                                    .abilities
                                    .map(item => (
                                        <li key={item.ability.name} className="uk-margin-remove-bottom uk-margin-remove-top">{item.ability.name}</li>
                                    ))}
                            </ul>
                        </div>
                    </div>
                    <div id="modal-full" className="uk-modal-full" data-uk-modal={''}>
                    <div className="uk-modal-dialog">
                        <button className="uk-modal-close-full uk-close-large" type="button" data-uk-close></button>
                        <div className="uk-grid-collapse uk-child-width-1-2@s uk-flex-middle" data-uk-grid={''}>
                            <div className="uk-background-cover" style={{'backgroundImage': "url('https://wallpapercave.com/wp/wp1809906.png')"}} data-uk-height-viewport></div>
                            <div className="uk-padding-large">
                                <h1>Headline</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            </div>
                        </div>
                    </div>
                </div>
                </div>

                

            )
            : (
                <div className="uk-flex uk-flex-center">
                    <Loader/>
                </div>
            )
    }
}