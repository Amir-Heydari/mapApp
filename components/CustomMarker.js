import { View,Image,StyleSheet } from "react-native"
import { Fontisto } from '@expo/vector-icons';
import { useState } from "react";

function CustomMarker({markerColor}) {

  

  return (
   <View style={styles.viewStyle}>
    <Fontisto name="map-marker" size={20} color="#3A98B9" />
   </View>
  )
}


const styles = StyleSheet.create({
    viewStyle :{
      justifyContent:"center",
      alignItems:"center",
    },
    imageStyle:{
    }
})

export default CustomMarker
