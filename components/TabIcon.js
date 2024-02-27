import React from "react";
import { View, Image } from "react-native";
import { COLORS } from "../constants";

const TabIcon = ({ focused, icon }) => {
  return (
    <View
      style={{
        alignItems: "center",
        justifyContent: "center",
        height: 80,
        width: 50,
      }}
    >
      <Image
        source={icon}
        resizeMode="contain"
        style={{
          width: 28,
          height: 28,
          tintColor: focused ? COLORS.darkGreen : COLORS.lightLime,
        }}
      />
      {focused && (
        <View
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            bottom: 8,
            height: 5,
            backgroundColor: COLORS.darkGreen,
            borderTopLeftRadius: 5,
            borderTopRightRadius: 5,
          }}
        />
      )}
    </View>
  );
};

export default TabIcon;
