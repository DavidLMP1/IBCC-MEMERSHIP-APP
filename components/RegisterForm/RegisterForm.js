import React, { useState } from "react";
import { useFormik } from "formik";
import { View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { initialValues, validationSchema } from "./RegisterForm.data";
import { Icon, Button, Input } from "react-native-elements";
import { styles } from "./RegisterForm.styles";
import { MapForm } from "../Forms/MapForm/MapForm";

export default function RegisterForm() {
  const [showPassword, setshowPassword] = useState(false);
  const navigation = useNavigation();
  const hiddenPassword = () => {
    setshowPassword((prevState) => !prevState);
  };
  const [user, setUser] = useState({});

  const formik = useFormik({
    initialValues: initialValues(),
    validateOnChange: false,
    validationSchema: validationSchema(),
    onSubmit: async (formValue) => {
      try {
        console.log(formValue);
      } catch (error) {
        alert(error);
      }
    },
  });

  const [showMap, setShowMap] = useState(false);

  const onOpenCloseMap = () => {
    setShowMap((prevState) => !prevState);
  };

  return (
    <>
      <View style={styles.content}>
        <Input
          placeholder="Nombres"
          containerStyle={styles.input}
          onChangeText={(text) => formik.setFieldValue("first_name", text)}
          errorMessage={formik.errors.email}
        />
        <Input
          placeholder="Apellidos"
          containerStyle={styles.input}
          onChangeText={(text) => formik.setFieldValue("last_name", text)}
          errorMessage={formik.errors.email}
        />
        <Input
          placeholder="Correo electronico"
          containerStyle={styles.input}
          onChangeText={(text) => formik.setFieldValue("email", text)}
          errorMessage={formik.errors.email}
        />
        <Input
          placeholder="Fecha de cumpleaños"
          containerStyle={styles.input}
          onChangeText={(text) => formik.setFieldValue("birthday", text)}
          errorMessage={formik.errors.email}
        />
        <Input
          placeholder="Telefono"
          containerStyle={styles.input}
          onChangeText={(text) => formik.setFieldValue("phone", text)}
          errorMessage={formik.errors.email}
        />
        <Input
          placeholder="Contraseña"
          containerStyle={styles.input}
          secureTextEntry={showPassword ? false : true}
          onChangeText={(text) => formik.setFieldValue("password", text)}
          errorMessage={formik.errors.password}
        />
        <Input
          placeholder="Direccion"
          rightIcon={{
            type: "material-community",
            name: "map-marker-radius",
            color: getColorIconMap(formik),
            onPress: onOpenCloseMap,
          }}
          onChangeText={(text) => formik.setFieldValue("address", text)}
          errorMessage={formik.errors.address}
        />
        <Button
          title="Enviar"
          containerStyle={styles.btnContainer}
          buttonStyle={styles.btn}
          titleStyle={styles.titleBtn}
          onPress={formik.handleSubmit}
          loading={formik.isSubmitting}
        />
      </View>
      <MapForm show={showMap} close={onOpenCloseMap} formik={formik} />
    </>
  );
}

const getColorIconMap = (formik) => {
  if (formik.errors.location) return "#ff0000";

  if (formik.values.location) return "darkred";

  return "#c2c2c2";
};
