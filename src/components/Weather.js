import React from "react";

class Weather extends React.Component {
    render(){
        return(
            <div className="weather__info">

                {
                    this.props.city && this.props.country && <p className="weather__key">Location: 
                    <spam className="weather__value"> { this.props.city}, { this.props.country}</spam>
                    </p>
                    }
                {
                    this.props.temperature && <p className="weather__key">Temperature: 
                    <spam className="weather__value"> { this.props.temperature}</spam>
                    </p>
                    }
                {
                    this.props.humidity && <p className="weather__key">Humidity: 
                    <spam className="weather__value"> { this.props.humidity}</spam>
                    </p>
                    }
                {
                    this.props.description && <p className="weather__key">Atmosphere: 
                    <spam className="weather__value"> { this.props.description}</spam>
                    </p>
                    }
                {
                    this.props.error && <p className="weather__error"> { this.props.error} </p>
                    }
               

            </div>
        );
    }
}

export default Weather;