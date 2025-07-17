import { MapContainer, TileLayer } from 'react-leaflet';
import "leaflet/dist/leaflet.css";
import { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import L from 'leaflet';

const Map = ({ className, children }) => {

    const { theme } = useContext(ThemeContext);
    

    return(
        <>
        <div className={ className }>
            <MapContainer className='h-full z-0' center={[50.36527, 3.07527]} zoom={17}>
                <TileLayer
                    attribution='<a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> | <a href="https://carto.com/attributions">CARTO</a>'
                    url={ `https://{s}.basemaps.cartocdn.com/${theme == 'capa2025-dark' ? 'dark_all' : 'light_all'}/{z}/{x}/{y}${L.Browser.retina ? '@2x.png' : '.png'}` }
                    subdomains='abcd'
                    maxZoom={20}
                    minZoom={0}
                />
                { children }
            </MapContainer>
        </div>
        </>
    );
}

export default Map;