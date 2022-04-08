import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { getImages } from "../api";
import ImgList from "../components/ImgList";

const Home = () => {
  const [photos, setPhotos] = useState([]);

  const loadImages = async () => {
    const res = await getImages();
    setPhotos(res.data);
  };

  useEffect(() => {
    loadImages();
  }, []);

  return (
    <View>
      <ImgList photos={photos} />
    </View>
  );
};

export default Home;
