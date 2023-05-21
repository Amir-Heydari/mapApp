import React, { useEffect, useState } from "react";
import { StyleSheet, TouchableOpacity, View, Text } from "react-native";
import { MaterialIcons } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';



function Footer({setMapType, mapType, setMarkerColor, setPolygon, setPolyline}) {
  const [mapTypeColor,setMapTypeColor] = useState("gray");

  
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={()=>{
        setMapType(mapType === 'terrain' ? 'hybrid' : 'terrain');
        setMapTypeColor(mapType === 'terrain' ? "black" : "gray" )
      }} style={styles.mapType}>
      <MaterialIcons name="satellite" size={35} color={mapTypeColor} />
      </TouchableOpacity>


      <View style={styles.markerColorView}>
      <TouchableOpacity onPress={()=>{setMarkerColor("red")}}>
        <Ionicons name="radio-button-on" size={30} color="red" />
      </TouchableOpacity>


      <TouchableOpacity onPress={()=>{setMarkerColor("blue")}}>
        <Ionicons name="radio-button-on" size={30} color="blue" />
      </TouchableOpacity>


      <TouchableOpacity onPress={()=>{setMarkerColor("green")}}>
        <Ionicons name="radio-button-on" size={30} color="green" />
      </TouchableOpacity>
      </View>
      
      <TouchableOpacity style={{display:"flex",flexDirection:"row",alignItems:"flex-end"}} onPress={()=>{setPolygon([])}}>
        <FontAwesome5 name="draw-polygon" size={30} color="black" />
        <Entypo name="cross" size={17} color="black" />
      </TouchableOpacity>

      <TouchableOpacity onPress={()=>{setPolyline([])}}>
        <MaterialCommunityIcons name="vector-polyline-remove" size={30} color="black" />
      </TouchableOpacity>
      

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    height: "100%",
    backgroundColor:"#F1F6F9",
    justifyContent:"space-around"
  },
  mapType: {
    flex: 0.15,
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    
  },
  markerColorView:{
    display:"flex",
    flexDirection:"row"
  }
});

export default Footer;
