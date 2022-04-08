import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableHighlight,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { useNavigation } from "@react-navigation/native";

const Detail = ({ route }) => {
  const navigation = useNavigation();

  const { name, image } = route.params;

  const handlePress = () => {
    navigation.goBack();
  };

  const handleProfile = () => {
    navigation.navigate("Profile");
  };

  return (
    <View>
      <Image source={{ uri: image }} style={styles.image} />

      <TouchableHighlight onPress={() => handlePress()} style={styles.btnIcon}>
        <Icon style={styles.Icon} name="close" size={40} />
      </TouchableHighlight>

      <View style={styles.cardText}>
        <Text style={styles.txt}>{name}</Text>
        <Text style={styles.votos}>{"200 votos"}</Text>

        <TouchableHighlight
          style={styles.btnProfile}
          onPress={() => handleProfile()}
        >
          <Icon name="person" size={40} style={styles.IconProfile} />
        </TouchableHighlight>

        <View style={styles.contenTxt}>
          <Text style={styles.txtProfile}>{"Usuario X"}</Text>
          <Text style={styles.txt2Profile}>{"View Profile"}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: "100%",
  },
  txt: {
    marginTop: 50,
    fontSize: 30,
    color: "#fff",
    fontWeight: "bold",
    marginRight: 60,
    width: "75%",
    marginTop: 200,
  },
  cardText: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.2)",
    position: "absolute",
    width: "100%",
    height: 230,
    marginTop: "145%",
  },
  votos: {
    color: "#fff",
    marginRight: "70%",
    marginTop: 20,
  },
  btnIcon: {
    position: "absolute",
    marginTop: "12%",
    marginLeft: "4%",
    color: "#fff",
    height: 8,
    width: 35,
    borderRadius: 45,
    justifyContent: "center",
    borderWidth: 2,
    borderColor: "#fff",
  },
  Icon: {
    color: "#fff",
    fontSize: 20,
    marginLeft: "26%",
  },

  btnProfile: {
    backgroundColor: "#fff",
    marginTop: "10%",
    marginRight: "80%",
    borderBottomColor: "#fff",
    borderRadius: 50,
    width: 50,
    height: 50,
  },
  IconProfile: {
    color: "black",
    marginLeft: "10%",
    marginTop: "10%",
  },
  txtProfile: {
    color: "#fff",
  },
  txt2Profile: {
    color: "#fff",
  },
  contenTxt: {
    marginBottom: "50%",
    marginRight: "50%",
    marginTop: -40,
  },
});

export default Detail;
