import React, { useState } from "react";
import { View, Button, Text, Platform } from "react-native";
import { Input } from "react-native-elements";

import * as DocumentPicker from "expo-document-picker";
import * as FileSystem from "expo-file-system";
import { apiUrl } from "../../enviroment";

const UploadAudioScreen = () => {
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [data, setData] = useState(null);

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
    const fileSize = file.size;
    const mbFileSize = fileSize / (1024 * 1024);
    const formattedSizeInMB = Math.floor(mbFileSize * 100) / 100;

      // Crea un objeto FormData con el archivo
      const formData = new FormData();
      // formData.append("audio", {
      //   name: data.name,
      //   uri: fileUri,
      //   size: `${formattedSizeInMB}MB`,
      //   scripture: data.scripture,
      //   date: data.date,
      //   keywords: data.keywords,
      //   playlist: data.playlist,
      //   filename: fileName,
      //   type: fileType,
        
      // });

      formData.append("audio", {
        name: fileName,
        uri: fileUri,
        type: fileType, // Especifica el tipo MIME del archivo
      });
      formData.append("date", data.date);
      formData.append("scripture", data.scripture);
      formData.append("keywords", data.keywords);
      formData.append("playlist", data.playlist);
      formData.append("title", data.name);
      formData.append("size", formattedSizeInMB);
      formData.append("preacher", "Santiago Armel");

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

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Button title="Seleccionar archivo de audio" onPress={pickDocument} />
      <Input
        onChangeText={(value) =>
          setData({
            ...data,
            date: value,
          })
        }
        placeholder="Fecha"
      />
      <Input
        placeholder="Nombre del sermon"
        onChangeText={(value) =>
          setData({
            ...data,
            name: value,
          })
        }
      />
      <Input
        onChangeText={(value) =>
          setData({
            ...data,
            scripture: value,
          })
        }
        placeholder="Texto biblico"
      />
      <Input
        placeholder="Palabras clave"
        onChangeText={(value) =>
          setData({
            ...data,
            keywords: value,
          })
        }
      />
      <Input
        placeholder="Nombre de la serie"
        onChangeText={(value) =>
          setData({
            ...data,
            playlist: value,
          })
        }
      />

      {file && (
        <>
          <View style={{ marginTop: 20 }}>
            <Text>Archivo seleccionado:</Text>
            <Text>Nombre: {file?.name}</Text>
            <Text>URI: {file?.uri}</Text>
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
