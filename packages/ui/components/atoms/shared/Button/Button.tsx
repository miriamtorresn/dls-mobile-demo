import React from 'react';
import {
  StyleSheet,
  Text,
  GestureResponderEvent,
  Pressable
} from "react-native";

export interface ButtonProps {
  text: string;
  onPress: (event: GestureResponderEvent) => void;
  role?: 'primary' | 'secondary'
}

export const Button: React.FC<ButtonProps> = (props) => {
  const {
    text,
    onPress,
    role = 'primary'
  } = props;
  
  const buttonStyles = StyleSheet.flatten([styles.button, styles[role]]);

  return (
    <Pressable style={buttonStyles} onPress={onPress}>
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    maxWidth: 200,
    textAlign: "center",
    borderRadius: 10,
    paddingTop: 14,
    paddingBottom: 14,
    paddingLeft: 30,
    paddingRight: 30,
    fontSize: "15px",
  },
  text: {
    color: "white",
  },
  primary: {
    backgroundColor: "#2f80ed",
  },
  secondary: {
    backgroundColor: "#333333",
  }
});
