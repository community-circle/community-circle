import './SearchMap.css';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

interface Props {
    longitude: number,
    latitude: number
}

const SearchMap = ({ longitude, latitude }: Props) => {

    const mapStyles = {        
        height: "100%",
        width: "100%"
    };
    
    const defaultCenter = {
        lat: latitude, lng: longitude
    }

    return(
        <div className="searchMap">
            <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAP_API!}>
                <GoogleMap
                    mapContainerStyle={mapStyles}
                    zoom={15}
                    center={defaultCenter}/>
            </LoadScript>
        </div>
    );
}

export default SearchMap;
