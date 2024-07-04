import React, { useEffect, useRef, useState } from "react";
import * as ImagePicker from "expo-image-picker";
import dayjs from "dayjs";
import { useFormik } from "formik";
import { View, Text, ScrollView, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { initialValues, validationSchema } from "./RegisterForm.data";
import { Icon, Button, Input } from "react-native-elements";
import { styles } from "./RegisterForm.styles";
import { MapForm } from "../Forms/MapForm/MapForm";
import DatePickerForm from "../Forms/DatePickerForm/DatePickerForm";
import { apiUrl } from "../../enviroment";

export default function RegisterForm() {
  const [showPassword, setshowPassword] = useState(false);
  const navigation = useNavigation();
  const hiddenPassword = () => {
    setshowPassword((prevState) => !prevState);
  };
  const [user, setUser] = useState({});
  const [date, setDate] = useState("");
  const [image, setImage] = useState(null);

  const apiRoute = `${apiUrl}/auth/register`;

  const register = async (data) => {
    try {
      await fetch(apiRoute, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((response) => {
          if (response.status !== 200) {
            alert("Error with the register");
            throw new Error("Error with the register");
          } else {
            return response.json();
          }
        })
        .then((json) => {
          setUser(json);
        });
    } catch (error) {
      console.log("error register", error);
      alert(error);
    }
  };

  const formik = useFormik({
    initialValues: initialValues(),
    enableReinitialize: true,
    validateOnChange: false,
    validationSchema: validationSchema(),
    onSubmit: async (formValue) => {
      try {
        console.log("form", formValue);
        // formik.resetForm();
        await register(formValue);
      } catch (error) {
        alert(error);
      }
    },
  });

  const [showMap, setShowMap] = useState(false);
  const [showDatePicker, setShowDatePicker] = useState(false);

  const onOpenCloseMap = () => {
    setShowMap((prevState) => !prevState);
  };
  const handleShowDatePicker = () => {
    setShowDatePicker((prevState) => !prevState);
  };

  const openGallery = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
      base64: true,
    });

    const uploadImage = async (image) => {
      const data = `data:${image.mimeType};base64,${image.base64}`;
      setImage(data);
      formik.setFieldValue("photo", data);
    };

    if (!result.canceled && result?.assets?.length > 0) {
      // setIsLoading(true);
      uploadImage(result?.assets[0]);
    }
  };

  return (
    <ScrollView>
      <View style={styles.content}>
        <View style={styles.containerImage}>
          <Image
            style={styles.imageAvatar}
            source={
              image
                ? {
                    uri: image,
                  }
                : require("../../assets/img/defaultFamilyPicture.jpg")
            }
          />
          <Icon
            type="material-community"
            name="camera"
            color="#a7a7a7"
            containerStyle={styles.containerIcon}
            onPress={openGallery}
          />
        </View>
        <Input
          placeholder="Nombres"
          containerStyle={styles.input}
          onChangeText={(text) => formik.setFieldValue("first_name", text)}
          errorMessage={formik.errors.first_name}
          value={formik.values.first_name}
        />
        <Input
          placeholder="Apellidos"
          containerStyle={styles.input}
          onChangeText={(text) => formik.setFieldValue("last_name", text)}
          errorMessage={formik.errors.last_name}
          value={formik.values.last_name}
        />
        <Input
          placeholder="Correo electronico"
          containerStyle={styles.input}
          onChangeText={(text) => formik.setFieldValue("email", text)}
          errorMessage={formik.errors.email}
          value={formik.values.email}
        />
        <Input
          placeholder="Fecha de nacimiento"
          containerStyle={styles.input}
          key={date}
          // onChangeText={(text) => formik.setFieldValue("birthday", text)}
          errorMessage={formik.errors.birthday}
          value={date?.toString()}
          onPress={handleShowDatePicker}
          rightIcon={
            <Icon
              type="material-community"
              name="calendar-month-outline"
              iconStyle={styles.icon}
              onPress={handleShowDatePicker}
            />
          }
        />

        <Input
          placeholder="Telefono"
          containerStyle={styles.input}
          onChangeText={(text) => formik.setFieldValue("phone", text)}
          errorMessage={formik.errors.phone}
          value={formik.values.phone}
        />
        <Input
          placeholder="Contraseña"
          containerStyle={styles.input}
          rightIcon={
            <Icon
              type="material-community"
              name={showPassword ? "eye-off-outline" : "eye-outline"}
              iconStyle={styles.icon}
              onPress={hiddenPassword}
            />
          }
          secureTextEntry={showPassword ? false : true}
          onChangeText={(text) => formik.setFieldValue("password", text)}
          errorMessage={formik.errors.password}
          value={formik.values.password}
        />
        <Input
          placeholder="Direccion"
          containerStyle={styles.input}
          rightIcon={{
            type: "material-community",
            name: "map-marker-radius",
            color: getColorIconMap(formik),
            onPress: onOpenCloseMap,
          }}
          // onChangeText={(text) => formik.setFieldValue("address", text)}
          errorMessage={formik.errors.location}
          onPress={onOpenCloseMap}
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
      <DatePickerForm
        show={showDatePicker}
        close={handleShowDatePicker}
        formik={formik}
        setDate={setDate}
        date={date}
      />
    </ScrollView>
  );
}

const getColorIconMap = (formik) => {
  if (formik.errors.location) return "#ff0000";

  if (formik.values.location) return "green";

  return "#000";
};
