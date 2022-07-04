import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { QRGenerator } from "../src";

const example = () => {
  return (
    <View style={styles.container}>
      <QRGenerator style={styles.qr} ecl="L" value="any value" />
    </View>
  );
};

export default example;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  qr: {
    width: 250,
    height: 250,
  },
});
