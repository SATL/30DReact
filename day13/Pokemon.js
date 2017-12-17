const fetchPokemon = (id, cb) => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then(res => res.json())
        .then(cb);
}

class Pokemon extends React.Component {

    state = {
        character: null
    }

    componentDidMount() {
        fetchPokemon(this.props.id || 1, item =>{
            this.setState({character:item})
        })
    }


    render(){
        return this.state.character?(
            <div>
                <h2>{this.state.character.name}</h2>
            </div>
        ): (<div>Loading</div>)
    }
}