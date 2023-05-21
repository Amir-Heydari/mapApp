import React, { useEffect, useState } from "react";
import MapView, { Callout, Circle, Marker, Overlay, Polygon, Polyline } from "react-native-maps";
import { StyleSheet, View, Text, LayoutAnimation } from "react-native";
import Footer from "./components/Footer";
import CustomMarker from "./components/CustomMarker";

// hybrid,terrain
export default function App() {
  const [coordinates, setCoordinates] = useState({
    latitude: 35.715209,
    longitude: 51.382274,
    latitudeDelta: 0.004,
    longitudeDelta: 0.004,
  });
  const [mapType, setMapType] = useState("terrain");

  let polygonCoordinates =[]

  const polygonCoor =[
     {latitude: 35.7183051694137, longitude: 51.37099105864763},
     {latitude: 35.728804422304556, longitude: 51.37358006089926}, 
     {latitude: 35.72901698977975, longitude: 51.3944798335433},
     {latitude: 35.715819583884574, longitude: 51.39181572943926}]
  const [polyShow, setPolyShow] = useState(false);
  return (
    <View style={styles.container}>
      <View style={styles.mapView}>
        <MapView
          style={styles.map}
          region={coordinates}
          mapType={mapType}
          provider="google"
          onLongPress={(e)=>{console.log(e.nativeEvent.coordinate)}}
          
        >
          
          <Marker
            coordinate={polygonCoor[3]}
            title="marker"
            draggable={true}
            onDragStart={(e) => {}}
            onDragEnd={(e) =>{ 
              polygonCoordinates.push({ latitude: e.nativeEvent.coordinate.latitude, longitude: e.nativeEvent.coordinate.longitude })
              console.log(polygonCoordinates)
            }}
          />

          <Marker
            coordinate={polygonCoor[2]}
            title="marker"
            draggable={true}
            onDragStart={(e) => {}}
            onDragEnd={(e) =>{ 
              polygonCoordinates.push({ latitude: e.nativeEvent.coordinate.latitude, longitude: e.nativeEvent.coordinate.longitude })
              console.log(polygonCoordinates)
            }}
          />

          <Marker
            coordinate={polygonCoor[0]}
            title="marker"
            draggable={true}
            onDragStart={(e) => {}}
            onDragEnd={(e) =>{ 
              polygonCoordinates.push({ latitude: e.nativeEvent.coordinate.latitude, longitude: e.nativeEvent.coordinate.longitude })
              console.log(polygonCoordinates)
            }}
          />

          <Marker
            coordinate={polygonCoor[1]}
            draggable={true}
            onDragStart={(e) => {}}
            onDragEnd={(e) =>{ 
              polygonCoordinates.push({ latitude: e.nativeEvent.coordinate.latitude, longitude: e.nativeEvent.coordinate.longitude })
              console.log(polygonCoordinates)
            }}
          />


          <Marker
            coordinate={{"latitude": 35.7138898057689, "longitude": 51.368204914033406}}
            draggable={true}
            onDragStart={(e) => {}}
            onDragEnd={(e) =>{ 
              polygonCoordinates.push({ latitude: e.nativeEvent.coordinate.latitude, longitude: e.nativeEvent.coordinate.longitude })
              console.log(polygonCoordinates)
            }}
          >
            <CustomMarker />
          </Marker>

          {/* {polyShow === true ? <Polygon coordinates={polygonCoordinates} fillColor="#F4A442"/> : <></>}
               */}

              <Polygon coordinates={polygonCoor} fillColor="rgba(100, 200, 200, 0.3)" />

          <Polyline coordinates={[{"latitude": 35.68780177569642, "longitude": 51.3605361431837}, {"latitude": 35.708759564636544, "longitude": 51.40150420367718}]} />
          

          </MapView>
      </View>

      <View style={styles.footerView}>
        <Footer setMapType={setMapType} mapType={mapType} setPolyShow={setPolyShow} polyShow={polyShow} />
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
