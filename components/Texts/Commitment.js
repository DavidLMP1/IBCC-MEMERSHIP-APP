import React from "react";
import { View, Text } from "react-native";
import { styles } from "./Commitment.styles";

export default function Commitment() {
  return (
    <View style={styles.content}>
      <Text style={styles.title}>Compromiso de Membresía de IBCC</Text>

      <View style={styles.subContent}>
        <Text style={styles.subtittle}>A los nuevos miembros:</Text>
        <Text>
          Estamos agradecidos que usted haya elegido tomar este paso de
          compromiso y convertirse en un miembro de La Iglesia Bíblica Cristiana
          De Cali. Recuerde las responsabilidades que contrae al ser miembro de
          la iglesia. Con la ayuda del Espíritu Santo:
        </Text>
        <Text>
          • ¿Promete usted, diligentemente, ejercer autocontrol de modo que su
          estilo de vida refleje tanto el amor cristiano como la santidad
          personal?
        </Text>
        <Text>
          • ¿Promete seriamente ejercer el cuidado mutuo hacia los miembros del
          cuerpo de Cristo, procurando mantener la unidad, y hacer todo lo que
          pueda para estimular al amor y buenas obras a otros y al mismo tiempo
          buscar ejercer sus dones espirituales en un servicio fiel?
        </Text>
        <Text>
          • ¿Promete contribuir consistentemente, como un buen administrador de
          las bendiciones de Dios, con tiempo, talento y dinero en la medida que
          Dios le prospere, de modo que nuestro ministerio local y mundial pueda
          continuar la expansión del Evangelio?
        </Text>
        <Text>
          • ¿Promete enseñar las verdades bíblicas a su familia y amistades,
          según Dios le dé la oportunidad, con un deseo de verlos venir a Cristo
          y confiar en Él y ser salvos? • ¿Promete siempre tener buena voluntad
          para dar y recibir amonestación e instrucción con mansedumbre y en
          amor?
        </Text>
        <Text>
          • ¿Promete usted orar por el ministerio aquí en esta iglesia, por sus
          hermanos y hermanas en Cristo, y por los perdidos que necesitan al
          Salvador?
        </Text>
      </View>
      <View>
        <Text style={styles.subtittle}>A la congregación:</Text>
        <Text>
          Ustedes también necesitan recordar sus responsabilidades hacia estos
          nuevos miembros.
        </Text>
        <Text>
          ¿Prometen ustedes, con la ayuda del Espíritu Santo, buscar amar,
          alentar, enseñar amonestar, confortar y exhortar a estos nuevos
          miembros, con un deseo genuino para ver a cada uno crecer en el
          conocimiento de Cristo y su Palabra?
        </Text>
      </View>
    </View>
  );
}
