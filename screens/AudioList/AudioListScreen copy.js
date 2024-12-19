import React, { useEffect, useState } from "react";
import { FlatList, Text, TouchableOpacity, Button } from "react-native";
import { apiUrl } from "../../enviroment";
import { Audio } from "expo-av";
import { Loading } from "../../components/Shared";

const AudioList = () => {
  const [audios, setAudios] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

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
          setIsLoading(false);
        });
    } catch (error) {
      console.log("error get audio", error);
      alert(error);
    }
  };

  useEffect(() => {
    // Obtener lista de audios desde el backend
    getAudios();
  }, []);

  if (isLoading) {
    return <Loading />;
  } else {
    return (
      <FlatList
        data={audios}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => (
          <TouchableOpacity>
            <Text>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    );
  }
};

export default AudioList;
