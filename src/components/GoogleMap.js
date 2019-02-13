import React from "react"
import {Map , GoogleApiWrapper , Marker} from "google-maps-react"

const center = {
    lat: 41.1800,
    lng: 28.8881 
}

class GoogleMap extends React.Component {

    state ={
        lat: "",
        lng: ""
    }

    onMarkerClick = (props, marker, e) => {
        console.log(props)
        console.log(marker)
        console.log(e)
    }

    onClickMap = (props, marker, e) => {
        const {latLng} = e;
        const lat = latLng.lat()
        const lng = latLng.lng()
        this.props.latLng(lat , lng)
        this.setState({
            lat :lat,
            lng :lng
        })
    }  
    render(){
        let lat = ""
        let lng = ""
        
        const markers = this.props.list.map( (l, index) => {
            lat = localStorage.getItem(l).split("-")[0]
            lng = localStorage.getItem(l).split("-")[1]
            return(
                <Marker key={index} name={`${l}`} position={{lat:lat , lng:lng}} onClick={this.onClick}/>
            )
        })
        

        return(
            <div>
                <Map  google={this.props.google} zoom={10} onClick={this.onClickMap} initialCenter={center} >
                    {markers}              
                </Map>
               
            </div>
        )
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyB1iJiAphpeBAVZcZ40nRCJoFmoidCybJQ'
  })(GoogleMap);
   