import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Modal,
  TouchableWithoutFeedback,
  Text
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

import Colors from "../../constants/Colors";
import Fonts from "../../constants/Fonts";
import Custom_Text from "../../components/shared/Custom_Text";
import Custom_Button from "../../components/shared/Custom_Button";

export default function DeleteWalletModal({
  onPress,
  onClose,
  modalVisible,
  style,
}) {
  return (
    <Modal visible={modalVisible} animationType="none" transparent={true}>
      <TouchableOpacity style={styles.modalContainer} activeOpacity={1}>
        <View style={styles.modalBody} activeOpacity={1}>
          <TouchableWithoutFeedback>
            <View>
              <View
                style={[
                  styles.section,
                  { height: 70, alignItems: "flex-start", marginRight: 60 }
                ]}
              >
                <Custom_Text
                  value="Delete this Wallet?"
                  size={20}
                  color={Colors.text}
                  isBold
                />
              </View>
              <View style={[styles.section, { marginBottom: 20, width: 230 }]}>
                <Custom_Text
                  value={`Are you sure you would like to delete this wallet?`}
                  size={Fonts.size.small}
                  color={Colors.text}
                />
              </View>
              <View style={styles.line} />
              <View style={[styles.section, { height: 50 }]} />
              {/* <View
                style={[
                  styles.section,
                  { height: 50, position: "absolute", right: 0, bottom: 0 }
                ]}
              >
                <Custom_Button
                  text="VIEW WALLET"
                  onPress={onClose}
                  color={Colors.freshGreen}
                  size={16}
                  textStyle={{ letterSpacing: 1.2 }}
                  style={{ backgroundColor: "transparent" }}
                />
              </View> */}
              <View style={{ flexDirection: 'row' }}>
                <View style={[styles.section, { height: 50, position: 'absolute', right: 130, bottom: 0 }]}>
                  <Custom_Button
                    text="CANCEL"
                    onPress={onClose}
                    color={Colors.lightGray}
                    size={16}
                    textStyle={{ letterSpacing: 1.2 }}
                    style={{ backgroundColor: "transparent" }}
                  />
                </View>
                <View style={[styles.section, { height: 50, position: 'absolute', right: 0, bottom: 0 }]}>
                  <Custom_Button
                    text="DELETE"
                    onPress={onPress}
                    color={Colors.errorBackground}
                    size={16}
                    textStyle={{ letterSpacing: 1.2 }}
                    style={{ backgroundColor: "transparent" }}
                  />
                </View>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableOpacity>
    </Modal>
  );
}

DeleteWalletModal.propTypes = {
  onPress: PropTypes.func,
  onClose: PropTypes.func,
  pressed: PropTypes.bool,
  style: PropTypes.shape({})
};

DeleteWalletModal.defaultProps = {
  onPress: () => {},
  onClose: () => {},
  pressed: false
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.cloud,
    // zIndex: 50,
    // opacity: 0.8,
    paddingHorizontal: 40
  },
  modalBody: {
    backgroundColor: Colors.darkerGray,
    // backgroundColor: 'red',
    borderRadius: 10
    // height: 100,
    // width: 200,
    // zIndex: 20,
  },
  section: {
    justifyContent: "center",
    alignItems: "flex-start",
    marginHorizontal: 24
  },
  line: {
    height: 1,
    backgroundColor: Colors.grayText
  }
});
