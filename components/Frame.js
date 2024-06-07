import React, { memo } from "react";
import { View, StyleSheet, Text } from "react-native";
import { Image } from "expo-image";
import { Padding, FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const Frame = memo(({ onClose }) => {
  return (
    <View style={[styles.rectangleParent, styles.wrapIconLayout]}>
      <View style={[styles.frameChild, styles.frameChildPosition]} />
      <View style={[styles.bigOutlineParent, styles.valueFlexBox]}>
        <View style={styles.bigOutline}>
          <View style={[styles.value, styles.valuePosition]}>
            <Text style={[styles.soict, styles.textTypo]}>SOICT</Text>
            <Image
              style={styles.cancelIcon}
              contentFit="cover"
              source={require("../assets/cancel.png")}
            />
          </View>
          <View style={styles.bigChildPosition} />
          <Text style={[styles.label, styles.labelTypo1]}>Full name</Text>
        </View>
        <View style={[styles.bigOutline1, styles.bigSpaceBlock]}>
          <View style={[styles.value1, styles.valuePosition]}>
            <Text style={[styles.soict, styles.textTypo]}>soict_hust</Text>
            <Image
              style={styles.cancelIcon}
              contentFit="cover"
              source={require("../assets/cancel.png")}
            />
          </View>
          <View style={styles.bigChildPosition} />
          <Text style={styles.label1}>Nick name</Text>
        </View>
        <View style={[styles.bigOutline2, styles.bigSpaceBlock]}>
          <View style={[styles.value2, styles.valuePosition]}>
            <Text style={[styles.soicthusteduvn, styles.textTypo]}>
              soict@hust.edu.vn
            </Text>
            <Image
              style={styles.cancelIcon}
              contentFit="cover"
              source={require("../assets/cancel.png")}
            />
          </View>
          <View style={styles.bigChildPosition} />
          <Text style={[styles.label, styles.labelTypo1]}>Email</Text>
        </View>
        <View style={[styles.bigOutline2, styles.bigSpaceBlock]}>
          <View
            style={[styles.bigOutlinedefaultChild, styles.bigChildPosition]}
          />
          <Text style={[styles.text, styles.textTypo]}>+84-123-456-789</Text>
          <Text style={[styles.label3, styles.labelTypo]}>Phone number</Text>
          <Image
            style={[styles.wrapIcon, styles.wrapIconLayout]}
            contentFit="cover"
            source={require("../assets/wrap.png")}
          />
        </View>
        <View style={[styles.bigOutline1, styles.bigSpaceBlock]}>
          <View style={[styles.bigOutlineselect, styles.bigLayout]}>
            <View
              style={[styles.bigOutlinedefaultChild, styles.bigChildPosition]}
            />
            <Text style={[styles.vietNam, styles.textTypo]}>Viet Nam</Text>
            <Text style={[styles.label4, styles.labelTypo]}>Country</Text>
            <Image
              style={styles.arrowDropDownIcon}
              contentFit="cover"
              source={require("../assets/arrow-drop-down.png")}
            />
          </View>
          <View style={[styles.bigOutline3, styles.bigLayout]}>
            <View style={[styles.value3, styles.valuePosition]}>
              <Text style={[styles.soict, styles.textTypo]}>Male</Text>
              <Image
                style={styles.cancelIcon}
                contentFit="cover"
                source={require("../assets/cancel.png")}
              />
            </View>
            <View style={styles.bigChildPosition} />
            <View style={styles.label5}>
              <Text style={styles.labelTypo1}>Genre</Text>
            </View>
          </View>
        </View>
        <View style={[styles.bigOutline2, styles.bigSpaceBlock]}>
          <View style={[styles.value3, styles.valuePosition]}>
            <Text style={[styles.soict, styles.textTypo]}>
              01 Dai Co Viet, Hai Ba Trung, Ha Noi
            </Text>
            <Image
              style={styles.cancelIcon}
              contentFit="cover"
              source={require("../assets/cancel.png")}
            />
          </View>
          <View style={styles.bigChildPosition} />
          <Text style={[styles.label7, styles.labelTypo1]}>Address</Text>
        </View>
        <View style={styles.groupParent}>
          <View style={[styles.rectangleGroup, styles.rectangleLayout]}>
            <View style={[styles.groupChild, styles.groupLayout]} />
            <Text style={[styles.save, styles.saveTypo]}>Save</Text>
          </View>
          <View style={[styles.rectangleContainer, styles.rectangleLayout]}>
            <View style={[styles.groupItem, styles.groupLayout]} />
            <Text style={[styles.cancel, styles.saveTypo]}>Cancel</Text>
          </View>
        </View>
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  wrapIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
  },
  frameChildPosition: {
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  valueFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  valuePosition: {
    paddingVertical: 0,
    paddingHorizontal: Padding.p_base,
    flexDirection: "row",
    right: 0,
    left: 0,
    position: "absolute",
  },
  textTypo: {
    textAlign: "left",
    fontFamily: FontFamily.bodyMedium,
    letterSpacing: 0,
    fontSize: FontSize.bodyMedium_size,
  },
  labelTypo1: {
    lineHeight: 16,
    fontSize: FontSize.size_3xs,
    textAlign: "left",
    color: Color.lightGray10,
    fontFamily: FontFamily.bodyMedium,
    letterSpacing: 0,
  },
  bigSpaceBlock: {
    marginTop: 20,
    width: 271,
  },
  bigChildPosition: {
    borderWidth: 1,
    borderColor: Color.colorDarkgray_100,
    borderStyle: "solid",
    borderRadius: Border.br_5xs,
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    width: "100%",
    height: "100%",
    position: "absolute",
  },
  labelTypo: {
    color: Color.lightGray7,
    top: 4,
    lineHeight: 16,
    fontSize: FontSize.size_3xs,
    textAlign: "left",
    fontFamily: FontFamily.bodyMedium,
    letterSpacing: 0,
    position: "absolute",
  },
  bigLayout: {
    width: 129,
    top: 0,
    height: 41,
    position: "absolute",
  },
  rectangleLayout: {
    width: 95,
    height: 36,
    top: 0,
    position: "absolute",
  },
  groupLayout: {
    borderRadius: Border.br_3xs,
    width: 95,
    height: 36,
    top: 0,
    left: 0,
    position: "absolute",
  },
  saveTypo: {
    textAlign: "center",
    color: Color.lightGray0,
    fontFamily: FontFamily.openSansBold,
    fontWeight: "700",
    top: 9,
    fontSize: FontSize.bodyMedium_size,
    position: "absolute",
  },
  frameChild: {
    marginTop: -226,
    marginLeft: -152.5,
    borderRadius: Border.br_xl,
    backgroundColor: Color.colorWhitesmoke_100,
    height: 452,
    width: 305,
  },
  soict: {
    color: Color.lightGray10,
    lineHeight: 18,
    textAlign: "left",
    fontFamily: FontFamily.bodyMedium,
    letterSpacing: 0,
    fontSize: FontSize.bodyMedium_size,
    flex: 1,
  },
  cancelIcon: {
    width: 16,
    display: "none",
    marginLeft: 8,
    overflow: "hidden",
    height: 16,
  },
  value: {
    top: 21,
    justifyContent: "center",
    alignItems: "center",
  },
  label: {
    top: 6,
    left: 16,
    position: "absolute",
  },
  bigOutline: {
    height: 42,
    width: 271,
  },
  value1: {
    top: 22,
    alignItems: "flex-end",
    height: 16,
  },
  label1: {
    left: 12,
    top: 4,
    lineHeight: 16,
    fontSize: FontSize.size_3xs,
    textAlign: "left",
    color: Color.lightGray10,
    fontFamily: FontFamily.bodyMedium,
    letterSpacing: 0,
    position: "absolute",
  },
  bigOutline1: {
    height: 41,
    marginTop: 20,
  },
  soicthusteduvn: {
    lineHeight: 20,
    color: Color.lightGray11,
    textAlign: "left",
    fontFamily: FontFamily.bodyMedium,
    letterSpacing: 0,
    fontSize: FontSize.bodyMedium_size,
    flex: 1,
  },
  value2: {
    height: 18,
    top: 21,
    justifyContent: "center",
    alignItems: "center",
  },
  bigOutline2: {
    height: 42,
  },
  bigOutlinedefaultChild: {
    backgroundColor: Color.lightPrimary5,
  },
  text: {
    left: 69,
    color: Color.lightGray10,
    lineHeight: 18,
    textAlign: "left",
    fontFamily: FontFamily.bodyMedium,
    letterSpacing: 0,
    fontSize: FontSize.bodyMedium_size,
    top: 21,
    position: "absolute",
  },
  label3: {
    left: 70,
  },
  wrapIcon: {
    height: "43.57%",
    width: "9.67%",
    top: "28.57%",
    right: "81.96%",
    bottom: "27.86%",
    left: "8.38%",
    overflow: "hidden",
    position: "absolute",
  },
  vietNam: {
    bottom: 3,
    display: "flex",
    width: 97,
    left: 16,
    color: Color.lightGray10,
    lineHeight: 18,
    textAlign: "left",
    fontFamily: FontFamily.bodyMedium,
    letterSpacing: 0,
    fontSize: FontSize.bodyMedium_size,
    alignItems: "center",
    position: "absolute",
  },
  label4: {
    left: 16,
  },
  arrowDropDownIcon: {
    marginTop: -11.5,
    right: 8,
    width: 24,
    height: 24,
    overflow: "hidden",
    top: "50%",
    position: "absolute",
  },
  bigOutlineselect: {
    left: 0,
  },
  value3: {
    top: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  label5: {
    top: 3,
    left: 16,
    position: "absolute",
  },
  bigOutline3: {
    left: 142,
  },
  label7: {
    top: "7.14%",
    left: 16,
    position: "absolute",
  },
  groupChild: {
    backgroundColor: Color.colorLimegreen_200,
  },
  save: {
    left: 24,
    width: 48,
    height: 18,
  },
  rectangleGroup: {
    left: 118,
  },
  groupItem: {
    backgroundColor: Color.colorGold,
  },
  cancel: {
    left: 14,
    width: 66,
    height: 19,
  },
  rectangleContainer: {
    left: 0,
  },
  groupParent: {
    width: 213,
    height: 36,
    marginTop: 20,
  },
  bigOutlineParent: {
    marginTop: -203,
    marginLeft: -135.5,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  rectangleParent: {
    height: 452,
    width: 305,
  },
});

export default Frame;
