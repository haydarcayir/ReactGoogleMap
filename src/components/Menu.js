import React from "react"
import List from "./List"
import Input from "./Input"
import "../css/menu.css"
import Form from "./Form";

class Menu extends React.Component {

    state = {
        places:[],        
        filteredPlace : [],
        opacityBtn : 1,
        opacityForm : 0,
        transitionBtn : "",
        transitionForm : ""

    }

    takeLetter = (e) => {
        const list = this.state.places.filter(place => place.indexOf(e) !== -1 )
        this.setState({
            filteredPlace : [...list]
        })
        this.props.update(list)
    }

    onClickAddPlace = () => {
        this.setState({
            opacityBtn : 0,
            opacityForm : 1,
            transitionBtn : "all 1s ease-out",
            transitionForm : "all 1s ease-in"
        })
       
    }

  
    onPlaceName = (place) => {
        if(place !== ""){
            const latLng = this.props.lat + "-" + this.props.lng
            localStorage.setItem(place , latLng)
            this.setState({
                places:[...this.state.places , place],
                filteredPlace:[...this.state.filteredPlace , place],
                opacityBtn : 1,
                opacityForm : 0,
                transitionBtn : "all 1s ease-in",
                transitionForm : "all 1s ease-out"
            })
            const list = [...this.state.filteredPlace , place]
            this.props.takePlace(list)
        }else{
            alert("enter the name of place")
        }     
    }
 
    render(){
        return(
            <div>
                <div className="menu">
                    <Input letter={this.takeLetter} placeholder="search the place" height="50px" mrgBottom="20px" width="100%"/>
                    <List place={this.state.filteredPlace}/>
                    <button id="addBtn"  onClick={this.onClickAddPlace} style={{transition:this.state.transitionBtn , opacity:this.state.opacityBtn}}>
                        Add Place
                    </button>
                    <Form style={{transition:this.state.transitionForm , opacity:this.state.opacityForm}} lat={this.props.lat} lng={this.props.lng} placeName={this.onPlaceName}/>
                </div>
            </div>
        )
    }
}

export default Menu