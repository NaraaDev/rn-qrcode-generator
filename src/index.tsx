import React from "react";
import { StyleProp, View, ViewStyle, StyleSheet } from "react-native";

import { QRCodeErrorCorrectionLevel } from "qrcode";

import Matrix from "./Matrix";

function QRGenerator({
  bgColor = "white",
  fgColor = "black",
  value,
  ecl,
  style,
}: {
  value: string;
  ecl: QRCodeErrorCorrectionLevel;
  style: StyleProp<ViewStyle>;
  bgColor?: string;
  fgColor?: string;
}) {
  const arr = Matrix({ value: value, errorCorrectionLevel: ecl });
  const bgBLack = fgColor;
  const bgWhite = bgColor;

  return (
    <View style={style}>
      {arr.map((item: Array<number>, rowIndex: number) => {
        return (
          <View style={[styles.row, styles.flex]} key={rowIndex}>
            {item.map((_, index) => {
              return (
                <View
                  style={[
                    styles.flex,
                    {
                      backgroundColor: item[index] === 1 ? bgBLack : bgWhite,
                    },
                  ]}
                />
              );
            })}
          </View>
        );
      })}
    </View>
  );
}

export default QRGenerator;

const styles = StyleSheet.create({
  row: { flexDirection: "row" },
  flex: { flex: 1 },
  view: {
    position: "absolute",
    backgroundColor: "red",
  },
});

module.exports = QRGenerator;
