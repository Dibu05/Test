import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Card = ({ image, name }) => {
  const navigation = useNavigation();

  const handdlePress = () => {
    navigation.navigate("Detail", {
      image: image,
      name: name,
    });
  };

  return (
    <TouchableOpacity style={styles.cardImg} onPress={() => handdlePress()}>
      <Image source={{ uri: image }} style={styles.card} />
      <View style={styles.cardText}>
        <Text style={styles.txt}>{name}</Text>
        <Text style={styles.votos}>{"200 votos"}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardImg: {
    width: 200,
    height: 300,
    marginVertical: 3,
    marginLeft: 2,
  },
  card: {
    borderRadius: 15,
    height: 280,
    width: 180,
    marginLeft: 13,
  },
  txt: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    marginRight: 60,
    width: 100,
  },
  cardText: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.2)",
    position: "absolute",
    width: 180,
    height: 90,
    marginLeft: 13,
    marginTop: 190,
    borderRadius: 2,
    borderBottomStartRadius: 15,
    borderBottomEndRadius: 15,
  },
  votos: {
    color: "#fff",
    marginTop: 10,
    marginRight: 100,
  },
});

export default Card;
