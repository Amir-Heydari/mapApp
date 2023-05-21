import React, { useEffect, useState } from "react";
import MapView, { Callout, Circle, Marker, Overlay, Polygon, Polyline } from "react-native-maps";
import { StyleSheet, View, Text, LayoutAnimation } from "react-native";
import Footer from "./components/Footer";
import CustomMarker from "./components/CustomMarker";


// hybrid,terrain
export default function App() {
  const coordinates = { 
    latitude: 35.715209,
    longitude: 51.382274,
    latitudeDelta: 0.08,
    longitudeDelta: 0.04,}

  const [polygon,setPolygon] = useState([])

  const [mapType, setMapType] = useState("terrain");

  const [polyline, setPolyline] = useState([])

  const [markerColor, setMarkerColor] = useState("red")
  
  return (
    <View style={styles.container}>
      <View style={styles.mapView}>
        <MapView
          style={styles.map}
          region={coordinates}
          mapType={mapType}
          provider="google"
          onLongPress={(e)=>{
            setPolygon([...polygon , e.nativeEvent.coordinate]);
          }}

          onPress={(e)=>{
            setPolyline([...polyline, e.nativeEvent.coordinate])
          }}
        >
          
          {
            polygon.map((v,i)=>{
              
              return(
                <Marker key={i} coordinate={v}
                draggable={true}
                pinColor={markerColor}
                onDragEnd={(e)=>{
                }}
                >
                
                </Marker>
              )   
               }) 
          }
            {polygon.length>2 ? <Polygon coordinates={polygon} fillColor="rgba(100, 200, 200, 0.3)" /> : null
          }


            {polyline.map((v,i)=>{
              return(
                <Marker key={i} coordinate={v}><CustomMarker/></Marker>
              )
            })}


            <Polyline coordinates={polyline} />
            
          </MapView>
      </View>

      
          
      <View style={styles.footerView}>
        <Footer setMapType={setMapType} mapType={mapType} setPolyline={setPolyline} setPolygon={setPolygon} setMarkerColor={setMarkerColor} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mapView: {
    flex: 0.92,
  },
  map: {
    width: "100%",
    height: "100%",
  },
  footerView: {
    flex: 0.08,
  },
});
