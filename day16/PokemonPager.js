class PokemonPager extends React.Component {
    state = {
        id: 1
    }

    render() {

        return (
            <div >
                <h1 className="">
                    <span>Pokemon Pager
                        <span className="uk-label"></span>
                    </span>
                </h1>
                <Pokemon id={this.state.id} />
                <ul className="uk-pagination uk-flex-center">
                    <li>
                        <a
                            href=""
                            onClick={this
                            .paginate
                            .bind(this, -1)}>
                            <span data-uk-pagination-previous={''}></span>
                        </a>
                    </li>
                    <li>
                        <a
                            href=""
                            onClick={this
                            .paginate
                            .bind(this, 1)}>
                            <span data-uk-pagination-next={''}></span>
                        </a>
                    </li>
                </ul>
            </div>
        )
    }

    paginate(number, e) {
        var newId = this.state.id + number;
        e.preventDefault();
        this.setState({id: newId})
    }
}