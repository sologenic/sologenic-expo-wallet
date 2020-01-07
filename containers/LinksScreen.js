import React, { useState } from "react";
import { ScrollView, StyleSheet, View, Text } from "react-native";
import RNPickerSelect from "react-native-picker-select";
import {
  MenuProvider,
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger
} from "react-native-popup-menu";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import Constants from "expo-constants";

import Custom_Text from "../components/shared/Custom_Text";
import Custom_Header from "../components/shared/Custom_Header";
import Custom_HeaderTitle from "../components/shared/Custom_HeaderTitle";
import Custom_HeaderButton from "../components/shared/Custom_HeaderButton";
import Custom_Button from "../components/shared/Custom_Button";
import Custom_IconButton from "../components/shared/Custom_IconButton";
import Custom_RadioButton from "../components/shared/Custom_RadioButton";
import Custom_Modal from "../components/shared/Custom_Modal";
import Custom_TextInput from "../components/shared/Custom_TextInput";
import Fonts from "../constants/Fonts";
import Colors from "../constants/Colors";
import Images from "../constants/Images";
import { headerHeight } from "../constants/Layout";
export default function LinksScreen() {
  const [pressed, handlePressDots] = useState(false);
  return (
    <View style={styles.container}>
      <MenuProvider>
        <Custom_Header
          left={
            <Custom_HeaderButton
              onPress={() => {
                console.log("Press!!");
              }}
              type="icon"
              icon="md-arrow-back"
              iconColor={Colors.text}
            />
          }
          center={<Custom_HeaderTitle text="Your Recovery Phrase" />}
          right={
            <Menu onSelect={value => alert(`Selected number: ${value}`)}>
              <MenuTrigger
                children={
                  <View style={{ paddingHorizontal: 15 }}>
                    <MaterialCommunityIcons
                      name="dots-vertical"
                      size={30}
                      color={Colors.text}
                    />
                  </View>
                }
              />
              <MenuOptions
                customStyles={{
                  optionsContainer: {
                    width: 170,
                    backgroundColor: Colors.background,
                    borderWidth: 0.5,
                    borderColor: Colors.grayText,
                    padding: 5,
                    marginTop: headerHeight
                  }
                }}
              >
                <MenuOption value={1}>
                  <Custom_Text
                    value="Change Wallet Nickname"
                    size={Fonts.size.small}
                    color={Colors.text}
                  />
                </MenuOption>
                <View
                  style={{
                    height: 0.4,
                    backgroundColor: Colors.grayText,
                    marginHorizontal: 3,
                    marginVertical: 2
                  }}
                />
                <MenuOption value={2}>
                  <Custom_Text
                    value="Delete Wallet"
                    size={Fonts.size.small}
                    color={Colors.text}
                  />
                </MenuOption>
              </MenuOptions>
            </Menu>
          }
        />
        <ScrollView>
          <View>
            <Custom_Text
              value="To ensure that you have compiled with the steps as instructed, please enter the missing info of your given Recovery"
              size={Fonts.size.normal}
              color={Colors.text}
            />
          </View>
        </ScrollView>
      </MenuProvider>
    </View>
  );
}

LinksScreen.navigationOptions = {
  header: null
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background
  }
});
