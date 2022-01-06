import './InterMap.css'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

delete L.Icon.Default.prototype._getIconUrl;

  // dependance to install :

    // npm install react react-dom leaflet

    // npm install react-leaflet

    // npm install -D @types/leaflet


    // customize marker

L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    // iconUrl: require('../inter-map/Discord_Emote_Maker.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    // iconSize: new L.Point(65, 75),
    // shadowUrl: null,
    // shadowSize: null,
    // shadowAnchor: null,
});




export default function Intermap() {

  const coordinates = [48.858391668046615, 2.2944894906678655] ;

    return (
        <div className="inter-contain">
            <MapContainer className="map-container" center={coordinates} zoom={13} scrollWheelZoom={false}>
                <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
                <Marker position={coordinates}>
                    <Popup>
                        MEH <br /> MEH
                    </Popup>
                </Marker>
            </MapContainer>
        </div>
    )

}