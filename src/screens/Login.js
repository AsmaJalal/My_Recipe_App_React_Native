import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  StatusBar,
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { images, COLORS, SIZES, FONTS } from "../constants";
import { CustomButton } from "../components";

const Login = ({ navigation }) => {
  function renderHeader() {
    return (
      <View
        style={{
          height: SIZES.height > 700 ? "65%" : "60%",
        }}
      >
        <ImageBackground
          source={images.loginBackground}
          style={{
            flex: 1,
            justifyContent: "flex-end",
          }}
          resizeMode="cover"
        >
          <LinearGradient
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 1 }}
            colors={[COLORS.transparent, COLORS.darkGreen]}
            style={{
              height: 200,
              justifyContent: "flex-end",
              paddingHorizontal: SIZES.padding,
            }}
          >
            <Text
              style={{
                width: "80%",
                color: COLORS.yellow,
                ...FONTS.largeTitle,
                lineHeight: 45,
              }}
            >
              Easily Cook Delicious Food
            </Text>
          </LinearGradient>
        </ImageBackground>
      </View>
    );
  }

  function renderDetail() {
    return (
      <View
        style={{
          flex: 1,
          paddingHorizontal: SIZES.padding,
        }}
      >
        <Text
          style={{
            marginTop: SIZES.radius,
            width: "70%",
            color: COLORS.white2,
            ...FONTS.body3,
          }}
        >
          Explore over 1500 delicious food recipes at your fingertips and cook with ease!
        </Text>
        <View
          style={{
            flex: 1,
            justifyContent: "center",
          }}
        >
          <CustomButton
            buttonText="Login"
            colors={[COLORS.magenta, COLORS.yellow]}
            onPress={() => navigation.replace("Home")}
            buttonContainerStyle={{
              paddingVertical: 18,
              borderRadius: 20,
            }}
          />
          <CustomButton
            buttonText="Sign Up"
            buttonContainerStyle={{
              paddingVertical: 18,
              borderRadius: 20,
              marginTop: SIZES.radius,
              borderColor: COLORS.yellow,
              borderWidth: 1,
            }}
            colors={[]}
            onPress={() => navigation.replace("Home")}
          />
        </View>
      </View>
    );
  }

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLORS.darkGreen,
      }}
    >
      <StatusBar barStyle="light-content" />
      {renderHeader()}
      {renderDetail()}
    </View>
  );
};

export default Login;
