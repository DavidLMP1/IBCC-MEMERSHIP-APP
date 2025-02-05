import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Slider from "@react-native-community/slider";
import { Audio } from "expo-av";
import { Ionicons } from "@expo/vector-icons";
import { useRoute } from "@react-navigation/native";
import { Image } from "react-native-elements";
import { COLORS } from "../../constants/index";

const { DARK_BLUE_IBCC, GOLDEN_IBCC } = COLORS;
const AudioPlayer = () => {
  const [sound, setSound] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [position, setPosition] = useState(0);

  const route = useRoute();

  // Extraemos los parámetros enviados desde la pantalla anterior

  const { audioName, audioUrl } = route.params || {};

  const [formattedDuration, setFormattedDuration] = useState("0:00");
  const [formattedPosition, setFormattedPosition] = useState("0:00");

  useEffect(() => {
    return () => {
      if (sound) {
        sound.unloadAsync(); // Libera los recursos al desmontar el componente
      }
    };
  }, [sound]);

  useEffect(() => {
    loadAudio();
    setFormattedDuration("0:00");
    setFormattedPosition("0:00");
  }, [audioUrl]);

  const formatTime = (milliseconds) => {
    const totalSeconds = Math.floor(milliseconds / 1000); // Convertir de milisegundos a segundos
    const minutes = Math.floor(totalSeconds / 60); // Obtener minutos
    const seconds = totalSeconds % 60; // Obtener segundos restantes

    return `${minutes}:${seconds < 10 ? "0" + seconds : seconds}`; // Asegurar dos dígitos para los segundos
  };

  const loadAudio = async () => {
    const { sound } = await Audio.Sound.createAsync(
      { uri: audioUrl },
      { shouldPlay: true }
    );
    setSound(sound);

    sound.setOnPlaybackStatusUpdate((status) => {
      if (status.isLoaded) {
        setDuration(status.durationMillis || 0);
        setPosition(status.positionMillis || 0);
        setIsPlaying(status.isPlaying);

        // Mostrar la duración y la posición formateada
        setFormattedDuration(formatTime(status.durationMillis));
        setFormattedPosition(formatTime(status.positionMillis));
      }
    });
  };

  const playPauseAudio = async () => {
    if (sound) {
      if (isPlaying) {
        await sound.pauseAsync();
      } else {
        await sound.playAsync();
      }
    } else {
      loadAudio();
    }
  };

  const skipTo = async (value) => {
    if (sound) {
      await sound.setPositionAsync(value);
    }
  };

  if (!audioName || !audioUrl) {
    return (
      <View style={styles.container}>
        <Image
          source={require("../../assets/img/logoIbcc.png")}
          style={styles.image}
        />
        <Text style={styles.title}>Selecciona un audio de la lista para reproducir.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/img/logoIbcc.png")}
        style={styles.image}
      />
      {/* Título del audio */}
      <Text style={styles.title}>{audioName}</Text>

      {/* Barra de progreso */}
      <View style={styles.progressContainer}>
        <Slider
          style={styles.slider}
          minimumValue={0}
          maximumValue={duration}
          value={position}
          onValueChange={skipTo}
          minimumTrackTintColor="#FFF"
          maximumTrackTintColor="#ccc"
          thumbTintColor="#FFF"
        />
        <View style={styles.timeContainer}>
          <Text style={styles.timeText}>{formattedPosition}</Text>
          <Text style={styles.timeText}>{formattedDuration}</Text>
        </View>
      </View>

      {/* Controles de reproducción */}
      <View style={styles.controlsContainer}>
        <TouchableOpacity>
          <Ionicons name="play-skip-back" size={40} color="#FFF" />
        </TouchableOpacity>
        <TouchableOpacity onPress={playPauseAudio}>
          <Ionicons
            name={isPlaying ? "pause-circle" : "play-circle"}
            size={60}
            color="#FFF"
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons name="play-skip-forward" size={40} color="#FFF" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#08151a",
    padding: 20,
  },
  title: {
    fontSize: 18,
    color: "#fff",
    marginBottom: 20,
    textAlign: "center",
  },
  progressContainer: {
    width: "100%",
    marginBottom: 30,
  },
  slider: {
    width: "100%",
    height: 40,
  },
  timeContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: -10,
  },
  timeText: {
    color: "#ccc",
    fontSize: 12,
  },
  controlsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    width: "70%",
  },
  image: {
    resizeMode: "contain",
    width: 200,
    height: 200,
    // marginTop: 20,
  },
});

export default AudioPlayer;
