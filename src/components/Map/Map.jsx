import React from "react";
import {Paper, Typography, useMediaQuery} from '@material-ui/core';
import LocationOnOutlinedIcon from '@material-ui/icons';
import Rating from '@mui/material/Rating';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import useStyles from './styles';

const containerStyle = {
    width: '100%',
    height: '100%',
    borderRadius: '6px',
  };

const Map = () => { 
    const classes = useStyles();
    const isMobile = useMediaQuery('(min-width:600px)');



    const defaultProps = {
        center: {
          lat: 32.817725,
          lng: 35.210751
        },
        zoom: 14
      };



      const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyD_1xKlAlU1mLdHS7tXl4Iczo5SyFHjWq4"
      })
    
      const [map, setMap] = React.useState(null)
    
      const onLoad = React.useCallback(function callback(map) {
        const bounds = new window.google.maps.LatLngBounds(defaultProps.center);
        map.fitBounds(bounds);
        setMap(map)
      }, [])
    
      const onUnmount = React.useCallback(function callback(map) {
        setMap(null)
      }, [])

    return isLoaded ? (
       <div className={classes.mapContainer}>
        
        <GoogleMap
        mapContainerStyle={containerStyle}
        center={defaultProps.center}
        zoom={defaultProps.zoom}
        onLoad={onLoad}
        onUnmount={onUnmount}
        options={''}
        onChange={''}
        onChildClick={''}
         >
        <></>
      </GoogleMap>
      
        </div>
    ) : <></>
}


export default Map;