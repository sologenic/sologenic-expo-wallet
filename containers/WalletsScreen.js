import React, { useState, useEffect } from "react";
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  ActivityIndicator,
  View,
} from "react-native";
import { connect } from "react-redux";

import Custom_Text from "../components/shared/Custom_Text";
import Custom_Header from "../components/shared/Custom_Header";
import Custom_HeaderTitle from "../components/shared/Custom_HeaderTitle";
import Custom_HeaderButton from "../components/shared/Custom_HeaderButton";
import Custom_IconButton from "../components/shared/Custom_IconButton";
import Fonts from "../constants/Fonts";
import Colors from "../constants/Colors";
import WalletCard from "./WalletCard";
import {
  getMarketData,
  getMarketSevens,
  getBalance,
  connectToRippleApi,
} from "../actions";

function WalletsScreen({
  navigation,
  getMarketData,
  getMarketSevens,
  getBalance,
  connectToRippleApi,
  marketData,
  wallets,
  baseCurrency,
  screenProps: { rootNavigation },
}) {
  // console.log("======================", wallets);
  useEffect(() => {
    connectToRippleApi();
  }, []);

  useEffect(() => {
    getMarketData(baseCurrency.value);
    getMarketSevens();
    // getBalanceAll(wallets);
    // return () => {
    //   testTodoReset();
    // }
  }, [baseCurrency]);

  // console.log(wallets);
  const getBalanceAll = wallets => {
    wallets.map(item => {
      console.log(".walletAddress", item.walletAddress, item.details);
      getBalance(item.id, item.walletAddress);
    });
  };

  return (
    <View style={styles.container}>
      <Custom_Header
        left={<View />}
        center={<Custom_HeaderTitle text="Your Wallets" />}
        right={
          <Custom_HeaderButton
            onPress={() => {
              if (navigation) {
                navigation.navigate({
                  routeName: "SettingsScreen",
                  key: "SettingsScreen",
                });
              } else {
                rootNavigation.navigate({
                  routeName: "SettingsScreen",
                  key: "SettingsScreen",
                });
              }
            }}
            type="icon"
            icon="md-settings"
            iconColor={Colors.text}
          />
        }
      />
      <ScrollView>
        {!marketData ? (
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              marginTop: 30,
            }}
          >
            <ActivityIndicator size="small" color={Colors.darkRed} />
          </View>
        ) : wallets.length > 0 ? (
          <View style={styles.section}>
            {wallets.map((item, index) => {
              // console.log("hey", item.id, item.walletAddress)
              // getBalance(item.id, item.rippleClassicAddress);
              return (
                <View key={index} style={{ marginBottom: 20 }}>
                  <WalletCard
                    navigation={navigation ? navigation : rootNavigation}
                    // defaultCurrency="usd"
                    baseCurrency={baseCurrency}
                    wallet={item}
                    key={index}
                    marketData={marketData}
                  />
                </View>
              );
            })}
          </View>
        ) : (
          <View
            style={[
              styles.section,
              { justifyContent: "center", alignItems: "center" },
            ]}
          >
            <Custom_Text
              value="No Wallets Added"
              size={Fonts.size.large}
              color={Colors.text}
            />
          </View>
        )}
      </ScrollView>
      <View style={styles.footer}>
        <Custom_IconButton
          icon="md-add"
          color={Colors.text}
          onPress={() => {
            if (navigation) {
              navigation.navigate({
                routeName: "AddWalletScreen",
                key: "AddWalletScreen",
              });
            } else {
              rootNavigation.navigate({
                routeName: "AddWalletScreen",
                key: "AddWalletScreen",
              });
            }
          }}
        />
      </View>
    </View>
  );
}

WalletsScreen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  section: {
    marginHorizontal: 20,
    marginTop: 20,
  },
  footer: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "flex-end",
    marginHorizontal: 20,
    marginVertical: 50,
  },
});

const mapStateToProps = ({ marketData, wallets, baseCurrency }) => ({
  marketData,
  wallets,
  baseCurrency,
});

const mapDispatchToProps = dispatch => ({
  getMarketData: baseCurrency => dispatch(getMarketData(baseCurrency)),
  getMarketSevens: () => dispatch(getMarketSevens()),
  getBalance: (id, address) => dispatch(getBalance(id, address)),
  connectToRippleApi: () => dispatch(connectToRippleApi()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(WalletsScreen);
