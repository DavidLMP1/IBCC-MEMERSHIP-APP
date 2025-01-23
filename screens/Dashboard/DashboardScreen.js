import React from "react";
import { ScrollView, View, Text, StyleSheet, Image } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const DashboardScreen = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Hero Header */}
      <Image
        source={require("../../assets/img/glory_to_god.jpg")} // Usa una imagen que se asemeje a la de la página de IBCC
        style={styles.heroImage}
      />

      {/* Introducción */}
      <View style={styles.subcontainer}>
        <View style={styles.introContainer}>
          <Text style={styles.title}>
            Iglesia Bíblica Cristiana de Cali (IBCC)
          </Text>
          <Text style={styles.subtitle}>¿Quiénes Somos?</Text>
          <Text style={styles.text}>
            Somos una comunidad de gracia regida por los mandamientos
            establecidos en la Biblia. Nuestra misión es glorificar a Dios y
            extender Su reino viviendo y proclamando la verdad.
          </Text>
        </View>

        {/* Distintivos */}
        <Text style={styles.subtitle}>Nuestros Distintivos</Text>

        <View style={styles.distinctive}>
          <FontAwesome name="book" size={30} color="#2C3E50" />
          <Text style={styles.distinctiveTitle}>Predicación Expositiva</Text>
        </View>
        <Text style={styles.text}>
          Nos enfocamos en que el punto principal del texto bíblico sea el punto
          principal del sermón, recorriendo libros completos de la Biblia para
          su lectura, explicación y aplicación.
        </Text>

        <View style={styles.distinctive}>
          <FontAwesome name="users" size={30} color="#2C3E50" />
          <Text style={styles.distinctiveTitle}>
            Membresía en la Iglesia Local
          </Text>
        </View>

        <Text style={styles.text}>
          Promovemos el compromiso de los creyentes con una congregación local
          para recibir instrucción bíblica, servir, edificarse mutuamente,
          participar en las ordenanzas y llevar el evangelio a los perdidos.
        </Text>

        <View style={styles.distinctive}>
          <FontAwesome name="wechat" size={30} color="#2C3E50" />
          <Text style={styles.distinctiveTitle}>Discipulado y Consejería</Text>
        </View>
        <Text style={styles.text}>
          Creemos en la suficiencia de la Biblia para discipular a nuevos
          creyentes y aconsejar a los cristianos en su camino de fe, basándonos
          completamente en las Sagradas Escrituras.
        </Text>

        <View style={styles.distinctive}>
          <FontAwesome name="home" size={30} color="#2C3E50" />
          <Text style={styles.distinctiveTitle}>
            Modelo Bíblico de la Familia
          </Text>
        </View>
        <Text style={styles.text}>
          Enfatizamos la importancia de edificar familias según el modelo
          establecido en las Escrituras, especialmente en un contexto de
          confusión respecto a los roles del hombre y la mujer.
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // padding: 16,
    backgroundColor: "#fff",
  },
  subcontainer: {
    padding: 16,
  },
  heroImage: {
    width: "100%",
    height: 250,
    resizeMode: "cover",
  },
  introContainer: {
    marginTop: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#2C3E50",
  },
  subtitle: {
    fontSize: 22,
    fontWeight: "bold",
    marginTop: 16,
    color: "#34495E",
  },
  text: {
    fontSize: 16,
    lineHeight: 24,
    color: "#7F8C8D",
  },
  distinctive: {
    marginTop: 16,
    marginBottom: 24,
    flexDirection: "row",
    alignItems: "center",
  },
  distinctiveTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 10,
    color: "#2C3E50",
  },
});

export default DashboardScreen;
