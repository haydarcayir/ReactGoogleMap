import React from "react"

class Button extends React.Component {

    render(){
        return(
            <div>
                <button>{this.props.btnName}</button>
            </div>
        )
    }
}

export default Button