import React from "react";
import { View, Text, FlatList, Image } from "react-native";
import Card from "./Card";

const ImgList = ({ photos }) => {
  const renderItem = ({ item }) => (
    <Card name={item.user.name} image={item.urls.small} />
  );

  return (
    <View>
      <FlatList
        data={photos}
        numColumns={2}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
    </View>
  );
};

export default ImgList;
