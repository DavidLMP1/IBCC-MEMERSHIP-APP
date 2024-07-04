import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { Modal } from "../../Shared";
import Toast from "react-native-toast-message";
import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";
import { styles } from "./MapForm.styles";
import { Button } from "react-native-elements";

export function MapForm(props) {
  const { show, close, formik } = props;

  const [location, setLocation] = useState({
    latitude: 3.405982358469664,
    longitude: -76.53764644637704,
    latitudeDelta: 0.0013973053043212502,
    longitudeDelta: 0.0015996024012565613,
  });

  // useEffect(() => {
  //   (async () => {
  //     const { status } = await Location.requestForegroundPermissionsAsync();

  //     if (status !== "granted") {
  //       Toast.show({
  //         type: "info",
  //         position: "bottom",
  //         text1: "Es necesario autorizar la localizacion en ajustes",
  //       });
  //       return;
  //     }
  //     const locationTemp = await Location.getCurrentPositionAsync({});

  //     setLocation({
  //       latitude: locationTemp.coords.latitude,
  //       longitude: locationTemp.coords.longitude,
  //       latitudeDelta: 0.0013973053043212502,
  //       longitudeDelta: 0.0015996024012565613,
  //     });
  //   })();
  // }, []);

  const saveLocation = (e) => {
    formik.setFieldValue("location", location);

    close();
  };

  return (
    <Modal show={show} close={close}>
      <MapView
        initialRegion={location}
        showsUserLocation={true}
        style={styles.mapStyle}
        onRegionChange={(locationTemp) => setLocation(locationTemp)}
      >
        <Marker
          coordinate={location}
          draggable
          // pinColor={"purple"} // any color
          // title={"title"}
          // description={"description"}
        />
      </MapView>
      <View style={styles.mapActions}>
        <Button
          title="Guardar"
          containerStyle={styles.btnMapContainerSave}
          buttonStyle={styles.btnMapSave}
          onPress={saveLocation}
        />
        <Button
          title="Cerrar"
          containerStyle={styles.btnMapContainerCancel}
          buttonStyle={styles.btnMapCancel}
          onPress={close}
        />
      </View>
    </Modal>
  );
}
