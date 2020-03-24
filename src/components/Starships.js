import React, { Component } from 'react';
import StarshipItem from './StarshipItem'
import PropTypes from 'prop-types'

class Starships extends Component {

    render () {
        // console.log(this.props.starships)
        return this.props.starships.map((starship) => (
            <StarshipItem
            key={starship.name} 
            starship={starship}/>
        ));
    };
}

// PropTypes
Starships.propTypes = {
    starships: PropTypes.array.isRequired
}

export default Starships;