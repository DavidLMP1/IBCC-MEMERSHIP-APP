import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { Icon, Button, Input } from "react-native-elements";
import { useFormik } from "formik";
import { useNavigation } from "@react-navigation/native";
import { initialValues, validationSchema } from "./LoginForm.data";
import { styles } from "./LoginForm.styles";
import { apiUrl } from "../../enviroment";
import { saveUsuario } from "../../storage/UserAsyncStorage";

export function LoginForm() {
  const [showPassword, setshowPassword] = useState(false);
  const navigation = useNavigation();
  const hiddenPassword = () => {
    setshowPassword((prevState) => !prevState);
  };
  const [user, setUser] = useState({});

  const apiRoute = `${apiUrl}/auth/login`;

  const login = async (data) => {
    console.log(data);
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
            alert("Error with the login");
            throw new Error("Error with the login");
          } else {
            return response.json();
          }
        })
        .then((json) => {
          setUser(json);
          saveUsuario(json)
          navigation.navigate("Stack");
        });
    } catch (error) {
      console.log("error login", error);
      alert(error);
    }
  };

  const formik = useFormik({
    initialValues: initialValues(),
    validateOnChange: false,
    validationSchema: validationSchema(),
    onSubmit: async (formValue) => {
      try {
        await login(formValue);
      } catch (error) {
        alert(error);        
      }
    },
  });

  return (
    <View style={styles.content}>
      <Input
        placeholder="Correo electronico"
        containerStyle={styles.input}
        inputContainerStyle={styles.inputCont}
        inputStyle={styles.inputStyle}
        rightIcon={
          <Icon type="material-community" name="at" iconStyle={styles.icon} />
        }
        onChangeText={(text) => formik.setFieldValue("email", text)}
        errorMessage={formik.errors.email}
      />
      <Input
        placeholder="Contraseña"
        containerStyle={styles.input} 
        inputContainerStyle={styles.inputCont}   
        inputStyle={styles.inputStyle}    
        secureTextEntry={showPassword ? false : true}
        rightIcon={
          <Icon
            type="material-community"
            name={showPassword ? "eye-off-outline" : "eye-outline"}
            iconStyle={styles.icon}
            onPress={hiddenPassword}
          />
        }
        onChangeText={(text) => formik.setFieldValue("password", text)}
        errorMessage={formik.errors.password}
      />
      <Button
        title="Iniciar Sesión"
        containerStyle={styles.btnContainer}
        buttonStyle={styles.btn}
        titleStyle={styles.titleBtn}
        // onPress={() => {
        //   navigation.navigate("Stack");
        // }}
        onPress={formik.handleSubmit}
        loading={formik.isSubmitting}
      />
    </View>
  );
}
