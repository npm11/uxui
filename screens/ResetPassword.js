import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const ResetPassword = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.resetPassword}>
      <View style={[styles.bottom, styles.resetPosition]}>
        <Text style={[styles.term, styles.termTypo]}>Term</Text>
        <Text style={[styles.introduce, styles.helpTypo]}>Introduce</Text>
        <Text style={[styles.privacy, styles.helpTypo]}>Privacy</Text>
        <Text style={[styles.help, styles.helpTypo]}>Help</Text>
        <Text style={[styles.name2024, styles.name2024Position]}>
          Name © 2024
        </Text>
      </View>
      <View style={[styles.textFieldParent, styles.textLayout]}>
        <View style={[styles.textField, styles.textLayout]} />
        <View style={styles.labelWrapper}>
          <Text style={styles.label}>Email address</Text>
        </View>
      </View>
      <View style={[styles.frameParent, styles.framePosition]}>
        <Image
          style={[styles.frameChild, styles.framePosition]}
          contentFit="cover"
          source={require("../assets/group-1.png")}
        />
        <View style={[styles.kpiEduWrapper, styles.kpiPosition]}>
          <Text style={[styles.kpiEdu, styles.kpiPosition]}>
            <Text style={styles.kpi}>KPI</Text>
            <Text style={styles.edu}> Edu</Text>
          </Text>
        </View>
      </View>
      <Pressable
        style={[styles.backToLoginWrapper, styles.resetPosition]}
        onPress={() => navigation.navigate("LogIn")}
      >
        <Text style={[styles.backToLogin, styles.backToLoginTypo]}>
          Back to Login
        </Text>
      </Pressable>
      <View style={styles.frameGroup}>
        <Image
          style={styles.frameItemPosition}
          contentFit="cover"
          source={require("../assets/frame-496071.png")}
        />
        <View style={[styles.messagereceive, styles.frameItemPosition]}>
          <Text style={[styles.enterYourUser, styles.name2024Position]}>
            Enter your user account's verified email address and we will send
            you a password reset link.
          </Text>
        </View>
      </View>
      <Image
        style={[styles.resetPasswordChild, styles.resetPosition]}
        contentFit="cover"
        source={require("../assets/frame-496063.png")}
      />
      <Pressable
        style={[styles.button, styles.textLayout]}
        onPress={() => navigation.navigate("ResetPasswordStep")}
      >
        <Text style={[styles.sendPasswordReset, styles.backToLoginTypo]}>
          Send password reset email
        </Text>
      </Pressable>
      <Image
        style={[styles.resetPasswordItem, styles.resetPosition]}
        contentFit="cover"
        source={require("../assets/frame-496076.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  resetPosition: {
    top: "50%",
    position: "absolute",
    left: "50%",
  },
  termTypo: {
    fontFamily: FontFamily.overline,
    fontWeight: "600",
    fontSize: FontSize.size_xs,
    textAlign: "center",
  },
  helpTypo: {
    color: Color.colorDimgray_100,
    textAlign: "center",
    fontFamily: FontFamily.overline,
    fontWeight: "600",
    fontSize: FontSize.size_xs,
    marginTop: -23.5,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  name2024Position: {
    color: Color.lightGray11,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  textLayout: {
    width: 309,
    position: "absolute",
    overflow: "hidden",
  },
  framePosition: {
    height: 51,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  kpiPosition: {
    height: 38,
    width: 123,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  backToLoginTypo: {
    fontWeight: "500",
    fontSize: FontSize.uI16Medium1_size,
    top: "50%",
    position: "absolute",
  },
  frameItemPosition: {
    marginLeft: -136.5,
    marginTop: -65.5,
    height: 131,
    width: 273,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  term: {
    marginLeft: -33.5,
    color: Color.greenPrimary,
    textAlign: "center",
    marginTop: -23.5,
    fontFamily: FontFamily.overline,
    fontWeight: "600",
    fontSize: FontSize.size_xs,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  introduce: {
    marginLeft: -111.5,
  },
  privacy: {
    marginLeft: 18.5,
  },
  help: {
    marginLeft: 84.5,
  },
  name2024: {
    marginTop: 8.5,
    marginLeft: -43.5,
    textAlign: "center",
    fontFamily: FontFamily.overline,
    fontWeight: "600",
    fontSize: FontSize.size_xs,
  },
  bottom: {
    marginTop: 324,
    marginLeft: -111,
    width: 223,
    height: 47,
    left: "50%",
    overflow: "hidden",
  },
  textField: {
    top: 34,
    borderRadius: Border.br_xs,
    borderStyle: "solid",
    borderColor: Color.colorDimgray_400,
    borderWidth: 1,
    height: 55,
    left: 0,
  },
  label: {
    fontFamily: FontFamily.poppinsRegular,
    color: Color.gray04,
    textAlign: "left",
    fontSize: FontSize.uI16Medium1_size,
    top: 0,
    left: 0,
    position: "absolute",
  },
  labelWrapper: {
    width: 113,
    height: 27,
    top: 0,
    left: 0,
    position: "absolute",
  },
  textFieldParent: {
    marginTop: 3,
    height: 89,
    marginLeft: -155,
    width: 309,
    left: "50%",
    top: "50%",
  },
  frameChild: {
    marginTop: -25.55,
    marginLeft: -91.5,
    width: 44,
  },
  kpi: {
    color: Color.colorOrange,
  },
  edu: {
    color: Color.colorDodgerblue,
  },
  kpiEdu: {
    marginTop: -19,
    marginLeft: -61.5,
    fontSize: FontSize.size_13xl,
    fontWeight: "700",
    fontFamily: FontFamily.ubuntuBold,
    textAlign: "left",
  },
  kpiEduWrapper: {
    marginTop: -18.55,
    marginLeft: -31.5,
  },
  frameParent: {
    marginTop: -332,
    marginLeft: -92,
    width: 183,
  },
  backToLogin: {
    marginTop: -9.5,
    fontFamily: FontFamily.uI16Medium1,
    color: Color.colorRoyalblue_200,
    textAlign: "left",
    left: 0,
  },
  backToLoginWrapper: {
    marginTop: -388,
    marginLeft: -174,
    width: 104,
    height: 19,
    left: "50%",
    overflow: "hidden",
  },
  enterYourUser: {
    marginTop: -50.5,
    marginLeft: -120.5,
    fontSize: FontSize.bodyMedium_size,
    fontFamily: FontFamily.uI14Regular,
    width: 241,
    height: 72,
    textAlign: "left",
  },
  messagereceive: {
    borderRadius: Border.br_3xs,
  },
  frameGroup: {
    marginTop: -201,
    marginLeft: -128,
    height: 131,
    width: 273,
    left: "50%",
    top: "50%",
    position: "absolute",
    overflow: "hidden",
  },
  resetPasswordChild: {
    marginTop: -55,
    marginLeft: -157,
    width: 122,
    height: 39,
    left: "50%",
    overflow: "hidden",
  },
  sendPasswordReset: {
    marginTop: -12,
    marginLeft: -109.5,
    fontFamily: FontFamily.poppinsMedium,
    color: Color.lightGray0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 219,
    textAlign: "center",
    left: "50%",
  },
  button: {
    marginTop: 119,
    borderRadius: Border.br_13xl,
    backgroundColor: Color.colorRoyalblue_200,
    height: 42,
    marginLeft: -155,
    width: 309,
    left: "50%",
    top: "50%",
  },
  resetPasswordItem: {
    marginTop: 295,
    marginLeft: -158,
    maxHeight: "100%",
    width: 316,
    left: "50%",
  },
  resetPassword: {
    backgroundColor: Color.lightGray0,
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
  },
});

export default ResetPassword;
