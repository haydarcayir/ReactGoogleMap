import React from "react"
import "../css/form.css"
import Input from "./Input"
import Table from "./Table"


const styleBtn = {
    width : "60%",
    height : "30px",
    borderRadius : "10px",
    backgroundColor : "rgb(245,155,0,0.8)",
    border :" none",
    color : "white",
    fontWeight : "bold"
}

class Form extends React.Component {

    state = {
        text : ""
    }
    takeLetter = (e) => {
        this.setState({
            text : e
        })
    }

    onClickBtn = () => {
        this.props.placeName(this.state.text)
        this.setState({
            text : ""
        })
    }


    render(){
        const backgroundColor = this.state.text === "" ? "rgb(203,59,19,0.8)" : "rgb(135,195,128,0.8)"
        return(
            <div style={{transition:this.props.style.transition , opacity:this.props.style.opacity }} onSubmit={this.onSubmit}>
                <div className="placeform">
                    <Input placeholder="type name of place" height="30px" mrgBottom="10px" width="80%" letter={this.takeLetter} 
                        backgroundColor={backgroundColor} value={this.state.text}/>
                    <Table lat={this.props.lat} lng={this.props.lng}/>              
                </div>
                <div>
                    <button style={styleBtn} onClick={this.onClickBtn}>Add</button>
                </div>  
            </div>
            
            
        )
    }
}

export default Form