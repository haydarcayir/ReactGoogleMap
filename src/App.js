import React, { Component } from 'react';
import GoogleMap from "./components/GoogleMap"
import Header from "./components/Header"
import Menu from "./components/Menu"
import Hamburger from "./components/Hamburger"
import './css/App.css';

class App extends Component {

  state = {
    filteredList : [],
    opacityMenu : 1,
    transitionMenu :  "all 1s ease-in",
    lat : "",
    lng : ""
  }

  onClickHamburger = () => {
    this.setState({
      opacityMenu : this.state.opacityMenu === 1 ? 0 : 1,
      transitionMenu :  this.state.transitionMenu === "all 1s ease-in" ? "all 1s ease-out" : "all 1s ease-in"
    }) 
  }

  onlatLng = (lat , lng) => {
    this.setState({
      lat : lat,
      lng : lng
    })
  }

  onTakePlace = (list) => {
    this.setState({
      filteredList : list
    })
  }


  onUpdate = (list) => {
    console.log(list)
    this.setState({
      filteredList : list
    })
  }


  render() {
    const backgroundColor = this.state.opacityMenu === 1 ? "" : "#fab800"
    return (
      <div className="App">

        <div style={{width:"100%" , height:"50px"}}>
          <Header/>
        </div>

        <div style={{width:"100%" , height:"670px" , position:"relative"}}>

          <div id="hamburgerdiv" onClick={this.onClickHamburger} style={{background:`${backgroundColor}`}}>
            <Hamburger/>
          </div>

          <div id="menudiv" style={{transition:this.state.transitionMenu , opacity:this.state.opacityMenu}}>
            <Menu lat={this.state.lat} lng={this.state.lng} takePlace={this.onTakePlace} update={this.onUpdate}/>
          </div>

          <div id="googlemapdiv">
            <GoogleMap latLng={this.onlatLng} list={this.state.filteredList}/>
          </div>
          
        </div>

      </div>
    );

  }
}
export default App