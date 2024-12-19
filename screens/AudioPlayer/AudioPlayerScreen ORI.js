import React, { useState, useEffect } from 'react';
import { Button, View, Text } from 'react-native';
import { Audio } from 'expo-av';

const AudioPlayer = () => {
  const [sound, setSound] = useState();
  const [isPlaying, setIsPlaying] = useState(false);
  const [status, setStatus] = useState();

  // Cargar el archivo de audio
  const loadAudio = async () => {
    const { sound } = await Audio.Sound.createAsync(
      { uri: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3' }, // Aquí pones la URL del audio
      { shouldPlay: false } // Iniciar sin reproducir
    );
    setSound(sound);
     // Configurar el modo de audio en segundo plano
     await Audio.setAudioModeAsync({
      allowsRecordingIOS: false,
      staysActiveInBackground: true, // Mantiene el audio en segundo plano
      interruptionModeIOS: 2,
      playsInSilentModeIOS: true, // Permite reproducción aunque el teléfono esté en modo silencioso
      shouldDuckAndroid: true,
      interruptionModeAndroid: 2,
    });
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

  // Limpiar recursos cuando el componente se desmonte
  useEffect(() => {
    loadAudio();

    return () => {
      if (sound) {
        sound.unloadAsync(); // Descargar el archivo de audio cuando el componente se desmonte
      }
    };
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>{isPlaying ? 'Reproduciendo audio...' : 'Audio detenido'}</Text>
      <Button title={isPlaying ? 'Detener' : 'Reproducir'} onPress={isPlaying ? stopAudio : playAudio} />
    </View>
  );
};

export default AudioPlayer;

