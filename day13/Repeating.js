class List extends React.Component{
    list = [12,32,43,1];

    render(){
        return(
            <ul>
                {
                    this.props.items.map(
                        item =>{
                            return (<li key={item}>{item}</li>)
                        }
                    )
                }
            </ul>
        )
    }


}

class List2 extends React.Component{
    render(){
        return(
            <ul>
                {
                    React.Children.map( this.props.items, i =><li>{i}</li>)
                }
            </ul>
        )
    }
}