import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
} from "react-native";
import { getImages } from "../api";
import ImgList from "../components/ImgList";
import Icon from "react-native-vector-icons/MaterialIcons";
import { useNavigation } from "@react-navigation/native";

const Profile = () => {
  const navigation = useNavigation();
  const [photos, setPhotos] = useState([]);

  const handlePress = () => {
    navigation.goBack();
  };

  const loadImages = async () => {
    const res = await getImages();
    setPhotos(res.data);
  };

  useEffect(() => {
    loadImages();
  }, []);

  return (
    <View>
      <View>
        <View style={styles.container}>
          <TouchableHighlight
            onPress={() => handlePress()}
            style={styles.btnIcon}
          >
            <Icon style={styles.Icon} name="close" size={40} />
          </TouchableHighlight>
        </View>
        <View style={styles.personBox}>
          <Icon style={styles.person} name="person" size={80} />
        </View>
        <Text style={styles.txt1}>{"Usuario X"}</Text>
        <Text style={styles.txt2}>
          {
            "British architect whose company, Foster + Partners, maintains an international design practice famous for high-tech architecture."
          }
        </Text>
        <Text style={styles.txt3}>{"My Photos"}</Text>
      </View>
      <View style={styles.cards}>
        <ImgList photos={photos} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
    marginRight: 300,
    marginTop: 50,
  },
  btnIcon: {
    color: "black",
    height: 42,
    width: 42,
    borderRadius: 45,
    justifyContent: "center",
    borderWidth: 2,
    borderColor: "black",
  },
  Icon: {
    color: "black",
    fontSize: 20,
    marginLeft: "23%",
  },
  person: {
    width: "70%",
    color: "#fff",
    marginTop: "15%",
    marginLeft: "13%",
  },
  personBox: {
    backgroundColor: "black",
    width: "27%",
    height: "33%",
    borderRadius: 100,
    marginLeft: "5%",
  },
  txt1: {
    fontSize: 40,
    marginLeft: "35%",
    marginTop: "-30%",
  },
  txt2: {
    fontSize: 20,
    marginLeft: "35%",
    color: "grey",
  },
  txt3: {
    fontSize: 70,
    width: "100%",
    marginLeft: "15%",
    marginTop: "5%",
    marginBottom: "-50%",
  },
});

export default Profile;
