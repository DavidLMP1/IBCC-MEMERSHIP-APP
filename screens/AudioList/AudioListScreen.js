import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from "react-native";
import { apiUrl } from "../../enviroment";
import { Loading } from "../../components/Shared/Loading/index";
import { useNavigation } from "@react-navigation/native";

// Simulación de datos para las listas

const AudioList = () => {
  const navigation = useNavigation();
  const [selectedCategory, setSelectedCategory] = useState("recientes");

  const [audios, setAudios] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const data = {
    recientes: audios,
    textoBiblico: [],
    series: [],
  };

  const getAudios = async () => {
    try {
      await fetch(`${apiUrl}/audio`, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
        .then((response) => {
          if (response.status !== 200) {
            alert("Error with get audios");
            throw new Error("Error with get audios");
          } else {
            return response.json();
          }
        })
        .then((json) => {
          setAudios(json);
        })
        .finally(() => setIsLoading(false));
    } catch (error) {
      console.log("error get audio", error);
      alert(error);
    }
  };
  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        style={styles.listItem}
        onPress={() =>
          navigation.navigate("AudioPlayer", {
            audioName: item.name,
            audioUrl: item.url,
          })
        }
      >
        <Text style={styles.date}>{item.date}</Text>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.passage}>{item.scripture}</Text>
      </TouchableOpacity>
    );
  };

  useEffect(() => {
    // Obtener lista de audios desde el backend
    getAudios();
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <View style={styles.container}>
      {/* Barra superior */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => setSelectedCategory("recientes")}>
          <Text
            style={[
              styles.headerText,
              selectedCategory === "recientes" && styles.selected,
            ]}
          >
            Recientes
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setSelectedCategory("textoBiblico")}>
          <Text
            style={[
              styles.headerText,
              selectedCategory === "textoBiblico" && styles.selected,
            ]}
          >
            Texto Bíblico
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setSelectedCategory("series")}>
          <Text
            style={[
              styles.headerText,
              selectedCategory === "series" && styles.selected,
            ]}
          >
            Series
          </Text>
        </TouchableOpacity>
      </View>

      {/* Lista de elementos */}
      <FlatList
        data={data[selectedCategory]}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    paddingTop: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#fff",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  headerText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  selected: {
    color: "#007BFF", // Color para el texto seleccionado
  },
  listItem: {
    backgroundColor: "#fff",
    padding: 15,
    marginVertical: 5,
    marginHorizontal: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  date: {
    fontSize: 14,
    color: "#888",
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
    marginVertical: 5,
  },
  passage: {
    fontSize: 14,
    color: "#888",
  },
});

export default AudioList;
