import React from "react"
import "../css/list.css"

class List extends React.Component{


    state = {
        places : []
    }


    componentDidMount() {
        this.setState({
            places : [...this.props.place]
        })
    }


    componentWillReceiveProps(nextProps) {
        this.setState({
            places : [...nextProps.place]
        })
    }


    render(){
        const list =  this.state.places.map((place,index) => {
            return(
                <div id="listdiv" key={index}>
                    {place}
                </div>
            )
        })
        return(
            <div>
                {list}
            </div>
        )
    }
}


export default List