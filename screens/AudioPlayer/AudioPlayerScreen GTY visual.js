import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

export default function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const progress = 1;
  const onRewind = () => {};
  const onForward = () => {};
  const onMore = () => {};
  const onPlayPause = handlePlayPause;
  return (
    <View style={styles.container}>
      <LinearGradient colors={["#1a1a1a", "#000000"]} style={styles.gradient}>
        <View style={styles.content}>
          <View style={styles.header}>
            <Text style={styles.title}>GRACIA</Text>
            <Text style={styles.subtitle}>Vosotr</Text>
          </View>

          <View style={styles.messageContainer}>
            <Text style={styles.message} numberOfLines={2}>
              El regreso de Jesús a Nazaret: Ministerio en la sin...
            </Text>
            <Text style={styles.submessage}>
              ¿Soy el tipo de persona que Dios salva?
            </Text>
          </View>

          <View style={styles.progressContainer}>
            <View style={styles.progressBar}>
              <View style={[styles.progress, { width: `${progress}%` }]} />
            </View>
            <View style={styles.timeContainer}>
              <Text style={styles.time}>00:05</Text>
              <Text style={styles.time}>-1:07:34</Text>
            </View>
          </View>

          <View style={styles.controls}>
            <TouchableOpacity onPress={onRewind}>
              <View style={styles.speedButton}>
                <Text style={styles.speedText}>1X</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={onRewind}>
              <Ionicons name="play-back" size={24} color="white" />
            </TouchableOpacity>

            <TouchableOpacity onPress={onPlayPause} style={styles.playButton}>
              <Ionicons
                name={isPlaying ? "pause" : "play"}
                size={32}
                color="white"
              />
            </TouchableOpacity>

            <TouchableOpacity onPress={onForward}>
              <Ionicons name="play-forward" size={24} color="white" />
            </TouchableOpacity>

            <TouchableOpacity onPress={onMore}>
              <Ionicons name="ellipsis-horizontal" size={24} color="white" />
            </TouchableOpacity>
          </View>
        </View>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  gradient: {
    flex: 1,
  },
  content: {
    flex: 1,
    padding: 20,
    justifyContent: "space-between",
  },
  header: {
    alignItems: "center",
    marginTop: 40,
  },
  title: {
    fontSize: 48,
    fontWeight: "bold",
    color: "white",
    letterSpacing: 2,
  },
  subtitle: {
    fontSize: 32,
    color: "white",
    fontStyle: "italic",
    marginTop: -10,
  },
  messageContainer: {
    alignItems: "center",
    marginVertical: 40,
  },
  message: {
    fontSize: 18,
    color: "white",
    textAlign: "center",
    marginBottom: 8,
  },
  submessage: {
    fontSize: 16,
    color: "#999",
    textAlign: "center",
  },
  progressContainer: {
    marginBottom: 30,
  },
  progressBar: {
    height: 3,
    backgroundColor: "#333",
    borderRadius: 1.5,
    marginBottom: 10,
  },
  progress: {
    height: "100%",
    backgroundColor: "white",
    borderRadius: 1.5,
  },
  timeContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  time: {
    color: "#999",
    fontSize: 12,
  },
  controls: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 40,
  },
  playButton: {
    width: 64,
    height: 64,
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    borderRadius: 32,
    justifyContent: "center",
    alignItems: "center",
  },
  speedButton: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    borderRadius: 16,
  },
  speedText: {
    color: "white",
    fontSize: 14,
    fontWeight: "600",
  },
});
