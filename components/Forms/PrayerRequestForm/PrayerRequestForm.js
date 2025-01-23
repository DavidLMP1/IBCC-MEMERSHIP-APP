import React, { useState } from "react";
import { useFormik } from "formik";
import { View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { initialValues, validationSchema } from "./PrayerRequestForm.data";
import { Icon, Button, Input } from "react-native-elements";
import { styles } from "./PrayerRequestForm.styles";

export default function PrayerRequestForm() {
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
        onChangeText={(text) => formik.setFieldValue("name", text)}
        errorMessage={formik.errors.email}
      />
      <Input
        placeholder="Correo electrónico"
        containerStyle={styles.input}
        inputContainerStyle={styles.inputCont}
        inputStyle={styles.inputStyle}
        onChangeText={(text) => formik.setFieldValue("email", text)}
        errorMessage={formik.errors.email}
      />
      <Input
        placeholder="Teléfono"
        containerStyle={styles.input}
        inputContainerStyle={styles.inputCont}
        inputStyle={styles.inputStyle}
        onChangeText={(text) => formik.setFieldValue("phone", text)}
        errorMessage={formik.errors.email}
      />
      <Input
        placeholder="Petición de oración"
        containerStyle={styles.input}
        inputContainerStyle={styles.inputCont}
        inputStyle={styles.inputStyle}
        onChangeText={(text) => formik.setFieldValue("prayer_request", text)}
        errorMessage={formik.errors.email}
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
  );
}
