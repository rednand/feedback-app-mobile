import React from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import SuccessImg from "../../assets/success.png";
import { Copyright } from "../Copyright";
import { styles } from "./styles";

interface Props {
  onSendAnotherFeedback: () => void;
}
export function Sucess({ onSendAnotherFeedback }: Props) {
  return (
    <View style={styles.container}>
      <Image source={SuccessImg} style={styles.image} />

      <Text style={styles.title}>Agradecemos o feedback</Text>
      <TouchableOpacity 
      onPress={onSendAnotherFeedback} style={styles.button}>
        <Text style={styles.buttonTitle}>Quero enviar outro</Text>
      </TouchableOpacity>
      <Copyright />
    </View>
  );
}
