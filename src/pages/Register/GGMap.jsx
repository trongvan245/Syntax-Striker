import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api'
/** MapComponent
 * to get location information
 */
const MapComponent = ({ showMap, selectedLocation, setSelectedLocation, setShowMap }) => {
  var latSave, lngSave
  const handleMapClick = (event) => {
    const { latLng } = event
    const { lat, lng } = latLng
    latSave = lat
    lngSave = lng
    setSelectedLocation({ lat, lng })
  }

  const mapContainerStyle = {
    height: '400px',
    width: '100%'
  }

  const center = {
    lat: 10.7762,
    lng: 106.6978
  }

  return (
    <div>
      {!showMap && (
        <LoadScript googleMapsApiKey='AIzaSyDtsKofPW2XeYdj7XHjdsMpWgaG3vkafVg' onLoad={() => setShowMap(true)}>
          <GoogleMap mapContainerStyle={mapContainerStyle} center={center} zoom={15} onClick={handleMapClick}>
            {selectedLocation && <Marker position={selectedLocation} />}
          </GoogleMap>
        </LoadScript>
      )}
      {showMap && (
        <GoogleMap mapContainerStyle={mapContainerStyle} center={center} zoom={15} onClick={handleMapClick}>
          {selectedLocation && <Marker position={selectedLocation} />}
        </GoogleMap>
      )}
      {setSelectedLocation && (
        <div>
          Lat: {latSave}, Lng: {lngSave}
        </div>
      )}
      <button onClick={() => setShowMap(false)}>Close</button>
    </div>
  )
}

export default MapComponent
