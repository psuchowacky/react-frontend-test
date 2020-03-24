import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Background from '../static/images/space_2.jpeg';
import 'bootstrap/dist/css/bootstrap.min.css';

export class StarshipItem extends Component {
    getStyle = () => {
        return {
            margin: "0 auto",
            width: "500px",
            borderRadius: "25px",
            padding: "10px",
            marginBottom: "10px",
            marginTop: "10px",
            borderStyle: "solid",
            borderWidth: "1px",
            backgroundImage: "url(" + Background + ")"
        }
    }
    
    render() {
        
        const name = this.props.starship.name;
        const crew = this.props.starship.crew !=='0' ? this.props.starship.crew : 'None'
        const passengers = this.props.starship.passengers !=='0' ? this.props.starship.passengers : 'None'
        var hyperdrive_rating = parseFloat(this.props.starship.hyperdrive_rating).toFixed(1)
        var hyperdrive_percent = ((hyperdrive_rating/6) * 100).toString() + "%"
        var customColor = ''
        if(hyperdrive_percent==="NaN%") {
            hyperdrive_percent = "100%"
            customColor = "#808080"
            hyperdrive_rating = "unknown"
        }

        return (
            <div style={{textAlign: "center"}}>
                <div style={this.getStyle()}>
                    <div style= {{textAlign: "left", color: "#ffffff"}}> 
                        <div><label>Name:</label> {name}<br /></div>
                        <div><label>Crew:</label> {crew}<br /></div>
                        <div><label>Passengers:</label> {passengers}<br /></div>
                        <div><label style={{marginRight: "5px"}}>Hyperdrive Class: </label>
                            <div style={{display: "inline-block", width: "70%"}}> 
                                <div className="progress">
                                    <div className="progress-bar" role="progressbar" aria-valuenow= {hyperdrive_percent}
                                    aria-valuemin="0" aria-valuemax="100" style={{width: hyperdrive_percent, textAlign: "center", backgroundColor: customColor}}>
                                        {hyperdrive_rating}/6.0
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

// PropTypes
StarshipItem.propTypes = {
    starship: PropTypes.object.isRequired
}

export default StarshipItem
