import React, { useState } from "react";
import { useFormik } from "formik";
import { View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { initialValues, validationSchema } from "./SetingsForm.data";
import { Icon, Button, Input } from "react-native-elements";
import { styles } from "./SettingsForm.styles";

export default function SettingsForm() {
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

  return (
    <View style={styles.content}>
      <Input
        placeholder="Nombres"
        containerStyle={styles.input}
        inputContainerStyle={styles.inputCont}
        inputStyle={styles.inputStyle}
        onChangeText={(text) => formik.setFieldValue("email", text)}
        errorMessage={formik.errors.email}
      />
      <Input
        placeholder="Apellidos"
        containerStyle={styles.input}
        inputContainerStyle={styles.inputCont}
        inputStyle={styles.inputStyle}
        onChangeText={(text) => formik.setFieldValue("email", text)}
        errorMessage={formik.errors.email}
      />
      <Input
        placeholder="Correo electronico"
        containerStyle={styles.input}
        inputContainerStyle={styles.inputCont}
        inputStyle={styles.inputStyle}
        onChangeText={(text) => formik.setFieldValue("email", text)}
        errorMessage={formik.errors.email}
      />
      <Input
        placeholder="Fecha de cumpleaños"
        containerStyle={styles.input}
        inputContainerStyle={styles.inputCont}
        inputStyle={styles.inputStyle}
        onChangeText={(text) => formik.setFieldValue("email", text)}
        errorMessage={formik.errors.email}
      />
      <Input
        placeholder="Telefono"
        containerStyle={styles.input}
        inputContainerStyle={styles.inputCont}
        inputStyle={styles.inputStyle}
        onChangeText={(text) => formik.setFieldValue("email", text)}
        errorMessage={formik.errors.email}
      />
      <Input
        placeholder="Contraseña"
        containerStyle={styles.input}
        inputContainerStyle={styles.inputCont}
        inputStyle={styles.inputStyle}
        secureTextEntry={showPassword ? false : true}
        onChangeText={(text) => formik.setFieldValue("password", text)}
        errorMessage={formik.errors.password}
      />
      <Button
        title="Editar"
        containerStyle={styles.btnContainer}
        buttonStyle={styles.btn}
        titleStyle={styles.titleBtn}
        onPress={formik.handleSubmit}
        loading={formik.isSubmitting}
      />
    </View>
  );
}
