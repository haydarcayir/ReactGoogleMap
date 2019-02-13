import React from "react"

class Input extends React.Component {

   
    onChange = (e) => {
        this.props.letter(e.target.value)
    }

    render(){
      
        const inputStyle = {
            borderRadius : "50px",
            width: this.props.width,
            height : this.props.height,
            textAlign : "center",
            border : "none",
            marginBottom : this.props.mrgBottom,
            marginTop : "10px",
            background: this.props.backgroundColor,
            color : "black",
           
        }
        return( 
            <input style= {inputStyle} type="text" placeholder={`${this.props.placeholder}`} onChange={this.onChange} value={this.props.value}/>      
        )
    }
}

export default Input