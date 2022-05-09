import React from "react";
import {
  View,
  TouchableOpacity,
  Image,
  TouchableOpacityProps,
  ImageProps,
} from "react-native";

import { styles } from "./styles";

interface Props extends TouchableOpacityProps {
  title: string;
  image: ImageProps;
}

export function Option() {
  return <TouchableOpacity style={styles.container}></TouchableOpacity>;
}
