import React, { useEffect, useState } from "react";
import { FlatList, Text, TouchableOpacity, Button } from "react-native";
import { apiUrl } from "../../enviroment";
import { Audio } from "expo-av";
import { Loading } from "../../components/Shared";

const AudioList = () => {
  const [audios, setAudios] = useState([]);
  const [sound, setSound] = useState();
  const [isPlaying, setIsPlaying] = useState(false);
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

  // Cargar el archivo de audio
  const loadAudio = async (url) => {
    setIsLoading(true);
    const { sound } = await Audio.Sound.createAsync(
      { uri: url }, // Aquí pones la URL del audio
      { shouldPlay: false } // Iniciar sin reproducir
    );
    setSound(sound);
    setIsLoading(false);
  };

  // Reproducir el audio
  const playAudio = async () => {
    if (sound) {
      await sound.playAsync();
      setIsPlaying(true);
    }
  };

  // Detener el audio
  const stopAudio = async () => {
    if (sound) {
      await sound.stopAsync();
      setIsPlaying(false);
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
            <Text>
              {isPlaying ? "Reproduciendo audio..." : "Audio detenido"}
            </Text>
            <Button
              title={"Cargar audio"}
              onPress={() => loadAudio(item.url)}
            />
            <Button
              title={isPlaying ? "Detener" : "Reproducir"}
              onPress={isPlaying ? stopAudio : playAudio}
            />
          </TouchableOpacity>
        )}
      />
    );
  }
};

export default AudioList;
