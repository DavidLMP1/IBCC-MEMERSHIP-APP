import React, { useState } from "react";
import { View, Button, Text, Platform } from "react-native";
import { Input } from "react-native-elements";

import * as DocumentPicker from "expo-document-picker";
import * as FileSystem from "expo-file-system";
import { apiUrl } from "../../enviroment";

const UploadAudioScreen = () => {
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);

  // Función para seleccionar el archivo de audio
  const pickDocument = async () => {
    try {
      const result = await DocumentPicker.getDocumentAsync({
        type: "audio/*", // Filtra para que solo se muestren archivos de audio
      });

      console.log("result", result?.assets[0]);

      //   if (result.type === "success") {
      //     setFile(result);
      //   }

      setFile(result?.assets[0]);
    } catch (error) {
      console.log("Error al seleccionar archivo:", error);
    }
  };

  // Función para subir el archivo de audio
  const uploadAudio = async () => {
    if (!file) {
      console.log("No se seleccionó ningún archivo");
      return;
    }

    setUploading(true);

    try {
      // Leemos el archivo con FileSystem
      const fileUri = file.uri;
      const fileName = file.name;
      const fileType = file.mimeType || "audio/mpeg"; // Establecemos un tipo por defecto si no lo hay
      const fileSize = file?.size;

      // Crea un objeto FormData con el archivo
      const formData = new FormData();
      formData.append("audio", {
        uri: fileUri,
        name: fileName,
        type: fileType,
        size: fileSize,
      });

      // Subimos el archivo a un servidor
      const response = await fetch(`${apiUrl}/audio/upload`, {
        method: "POST",
        headers: {
          "Content-Type": "multipart/form-data",
        },
        body: formData,
      });

      if (response.ok) {
        console.log("Archivo subido con éxito");
      } else {
        console.log("Error al subir el archivo");
      }
    } catch (error) {
      console.log("Error al subir el archivo:", error);
    } finally {
      setUploading(false);
    }
  };

  function handleInputChange(event) {
    console.log(event);
    // const target = event.target;
    // const value = target.value;
    // const name = target.name;

    // setData({
    //   ...data,
    //   [name]: value,
    // });
  }

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Button title="Seleccionar archivo de audio" onPress={pickDocument} />
      <Input
        placeholder="Fecha"
        name="Fecha"
        onChangeText={handleInputChange}
      />
      <Input placeholder="Texto biblico" onChangeText={handleInputChange} />
      <Input placeholder="Palabras clave" onChangeText={handleInputChange} />
      <Input
        placeholder="Nombre de la serie"
        onChangeText={handleInputChange}
      />

      {file && (
        <>
          <View style={{ marginTop: 20 }}>
            <Text>Archivo seleccionado:</Text>
            <Text>Nombre: {file.name}</Text>
            <Text>URI: {file.uri}</Text>
          </View>
          <Button
            title={uploading ? "Subiendo..." : "Subir archivo de audio"}
            onPress={uploadAudio}
            disabled={uploading}
          />
        </>
      )}
    </View>
  );
};

export default UploadAudioScreen;
