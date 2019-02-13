import React from "react"
import "../css/table.css"


class Table extends React.Component {

    onChange = () => {
        
    }



    render(){
        const lat = this.props.lat
        const lng = this.props.lng
        return(
            <div style={{width:"inherit" , height:"auto" , margin:"0 auto"}}>
                <table>
                    <tbody>          
                        <tr>
                            <td>
                                lat:
                            </td>
                            <td>
                                <input style={{width:"75%"}} placeholder="latitude" onChange={this.onChange} value={lat} ></input>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                lng: 
                            </td>
                            <td>
                                <input  style={{width:"75%"}} placeholder="longtitude" onChange={this.onChange} value={lng}></input>
                            </td>
                        </tr>
                    </tbody>
                </table>

            </div>
        )
    }
}

export default Table