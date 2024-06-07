import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Padding, Border } from "../GlobalStyles";

const LogIn = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.logIn}>
      <View style={styles.pageHeader}>
        <Text style={[styles.login, styles.showClr]}>Login</Text>
        <Text style={[styles.logIn1, styles.logIn1Typo]}>Log In</Text>
        <Image
          style={styles.iconx}
          contentFit="cover"
          source={require("../assets/iconx.png")}
        />
        <Text style={[styles.right, styles.showClr]}>Right</Text>
      </View>
      <View style={[styles.inputtext, styles.inputtextPosition]}>
        <Image
          style={[styles.bgIcon, styles.bgIconPosition]}
          contentFit="cover"
          source={require("../assets/bg.png")}
        />
        <Text style={[styles.email, styles.showPosition]}>Email</Text>
        <Text style={[styles.show, styles.showPosition]}>Show</Text>
      </View>
      <View style={[styles.inputtext1, styles.inputtextPosition]}>
        <Image
          style={[styles.bgIcon, styles.bgIconPosition]}
          contentFit="cover"
          source={require("../assets/bg.png")}
        />
        <Text style={[styles.email, styles.showPosition]}>Password</Text>
        <Text style={[styles.show1, styles.showPosition]}>Show</Text>
      </View>
      <Pressable
        style={[styles.buttonprimary, styles.buttonprimarySpaceBlock]}
        onPress={() => navigation.navigate("KPICompletionProgress")}
      >
        <Text style={styles.logIn2}>Log In</Text>
      </Pressable>
      <View style={[styles.termParent, styles.termParentPosition]}>
        <Text style={[styles.term, styles.termTypo]}>Term</Text>
        <Text style={[styles.introduce, styles.termTypo]}>Introduce</Text>
        <Text style={[styles.privacy, styles.termTypo]}>Privacy</Text>
        <Text style={[styles.help, styles.termTypo]}>Help</Text>
        <Text style={[styles.name2024, styles.termTypo]}>Name © 2024</Text>
      </View>
      <View style={styles.logInChild} />
      <View style={styles.logo}>
        <Image
          style={[styles.logoChild, styles.bgIconPosition]}
          contentFit="cover"
          source={require("../assets/group-11.png")}
        />
        <Text style={styles.kpiEdu}>
          <Text style={styles.kpi}>KPI</Text>
          <Text style={styles.edu}> Edu</Text>
        </Text>
      </View>
      <Text style={[styles.dontHaveAn, styles.termParentPosition]}>
        Don’t have an account?
      </Text>
      <Pressable
        style={[styles.buttonprimary1, styles.buttonprimarySpaceBlock]}
        onPress={() => navigation.navigate("SignUp")}
      >
        <Text style={styles.logIn2}>Sign Up</Text>
      </Pressable>
      <Text style={[styles.orLogIn, styles.termTypo]}>Or Log In With</Text>
      <View style={styles.facebookIconParent}>
        <Image
          style={[styles.facebookIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/facebookicon.png")}
        />
        <Image
          style={[styles.googleIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/googleicon.png")}
        />
      </View>
      <View style={styles.checkBox}>
        <Image
          style={styles.checkBoxIcon}
          contentFit="cover"
          source={require("../assets/check-box.png")}
        />
        <Text style={[styles.iWantTo, styles.iWantToTypo]}>Remember me</Text>
      </View>
      <Pressable
        style={styles.forgetYourPasswordContainer}
        onPress={() => navigation.navigate("ResetPassword")}
      >
        <Text style={[styles.forgetYourPassword, styles.iWantToTypo]}>
          Forget your password
        </Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  showClr: {
    color: Color.greenPrimary1,
    display: "none",
  },
  logIn1Typo: {
    color: Color.lightGray11,
    fontFamily: FontFamily.overline,
    fontWeight: "600",
  },
  inputtextPosition: {
    height: 50,
    left: 18,
    right: 16,
    position: "absolute",
  },
  bgIconPosition: {
    maxHeight: "100%",
    maxWidth: "100%",
    left: "0%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  showPosition: {
    marginTop: -9,
    top: "50%",
    fontFamily: FontFamily.uI16Medium1,
    fontWeight: "500",
    fontSize: FontSize.uI16Medium1_size,
    position: "absolute",
  },
  buttonprimarySpaceBlock: {
    paddingVertical: Padding.p_base,
    paddingHorizontal: Padding.p_13xl,
    alignItems: "center",
    backgroundColor: Color.colorRoyalblue_200,
    borderRadius: Border.br_81xl,
    position: "absolute",
  },
  termParentPosition: {
    width: 223,
    marginLeft: -111,
    left: "50%",
    position: "absolute",
  },
  termTypo: {
    fontSize: FontSize.size_xs,
    textAlign: "center",
    left: "50%",
    position: "absolute",
  },
  iconLayout: {
    width: 48,
    height: 48,
    top: 0,
    position: "absolute",
    overflow: "hidden",
  },
  iWantToTypo: {
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.uI16Medium1_size,
  },
  login: {
    right: 0,
    display: "none",
    textAlign: "right",
    fontFamily: FontFamily.uI16Medium1,
    fontSize: FontSize.uI16Medium1_size,
    color: Color.greenPrimary1,
    fontWeight: "500",
    position: "absolute",
    top: 8,
  },
  logIn1: {
    marginLeft: -42.5,
    fontSize: FontSize.uI30Semi_size,
    textAlign: "center",
    top: 0,
    color: Color.lightGray11,
    left: "50%",
    position: "absolute",
  },
  iconx: {
    top: 5,
    width: 23,
    height: 23,
    left: 0,
    display: "none",
    position: "absolute",
  },
  right: {
    marginTop: -10,
    textAlign: "left",
    top: "50%",
    left: 0,
    display: "none",
    fontFamily: FontFamily.uI16Medium1,
    fontSize: FontSize.uI16Medium1_size,
    color: Color.greenPrimary1,
    fontWeight: "500",
    position: "absolute",
  },
  pageHeader: {
    marginLeft: -171,
    top: 102,
    width: 343,
    height: 36,
    left: "50%",
    position: "absolute",
  },
  bgIcon: {
    right: "0%",
    borderRadius: Border.br_5xs,
    width: "100%",
  },
  email: {
    color: Color.gray03,
    left: 16,
    textAlign: "left",
  },
  show: {
    right: 16,
    display: "none",
    textAlign: "right",
    color: Color.greenPrimary1,
  },
  inputtext: {
    top: 191,
  },
  show1: {
    color: Color.colorDimgray_100,
    right: 16,
    textAlign: "right",
  },
  inputtext1: {
    top: 261,
  },
  logIn2: {
    color: Color.lightGray0,
    textAlign: "center",
    fontFamily: FontFamily.overline,
    fontWeight: "600",
    fontSize: FontSize.uI16Medium1_size,
  },
  buttonprimary: {
    bottom: 348,
    left: 16,
    right: 16,
  },
  term: {
    marginLeft: -33.5,
    color: Color.greenPrimary,
    marginTop: -23.5,
    fontSize: FontSize.size_xs,
    top: "50%",
    fontFamily: FontFamily.overline,
    fontWeight: "600",
  },
  introduce: {
    marginLeft: -111.5,
    marginTop: -23.5,
    fontSize: FontSize.size_xs,
    top: "50%",
    fontFamily: FontFamily.overline,
    fontWeight: "600",
    color: Color.colorDimgray_100,
  },
  privacy: {
    marginLeft: 18.5,
    marginTop: -23.5,
    fontSize: FontSize.size_xs,
    top: "50%",
    fontFamily: FontFamily.overline,
    fontWeight: "600",
    color: Color.colorDimgray_100,
  },
  help: {
    marginLeft: 84.5,
    marginTop: -23.5,
    fontSize: FontSize.size_xs,
    top: "50%",
    fontFamily: FontFamily.overline,
    fontWeight: "600",
    color: Color.colorDimgray_100,
  },
  name2024: {
    marginTop: 8.5,
    marginLeft: -43.5,
    top: "50%",
    color: Color.lightGray11,
    fontFamily: FontFamily.overline,
    fontWeight: "600",
  },
  termParent: {
    marginTop: 324,
    height: 47,
    top: "50%",
  },
  logInChild: {
    marginLeft: -158.5,
    top: 701,
    borderStyle: "solid",
    borderColor: Color.colorRoyalblue_200,
    borderTopWidth: 1,
    width: 317,
    height: 1,
    left: "50%",
    position: "absolute",
  },
  logoChild: {
    width: "22.5%",
    right: "77.5%",
  },
  kpi: {
    color: Color.colorOrange,
  },
  edu: {
    color: Color.colorDodgerblue,
  },
  kpiEdu: {
    left: 64,
    fontSize: FontSize.size_13xl,
    fontWeight: "700",
    fontFamily: FontFamily.ubuntuBold,
    width: 123,
    height: 38,
    textAlign: "left",
    top: 8,
    position: "absolute",
  },
  logo: {
    height: "6.29%",
    width: "51.86%",
    top: "4.56%",
    right: "22.53%",
    bottom: "89.15%",
    left: "25.61%",
    position: "absolute",
  },
  dontHaveAn: {
    top: 569,
    fontSize: FontSize.size_lg,
    fontFamily: FontFamily.poppinsMedium,
    height: 24,
    color: Color.colorDarkslategray_100,
    textAlign: "center",
    fontWeight: "500",
    width: 223,
    marginLeft: -111,
  },
  buttonprimary1: {
    marginLeft: -164,
    bottom: 142,
    width: 328,
    left: "50%",
  },
  orLogIn: {
    marginLeft: -38,
    top: 469,
    lineHeight: 16,
    fontFamily: FontFamily.manropeRegular,
    color: Color.lightGray7,
  },
  facebookIcon: {
    left: 118,
  },
  googleIcon: {
    left: 0,
  },
  facebookIconParent: {
    marginLeft: -83,
    top: 502,
    width: 166,
    height: 48,
    left: "50%",
    position: "absolute",
  },
  checkBoxIcon: {
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  iWantTo: {
    marginLeft: 8,
    color: Color.colorDarkslategray_100,
    textAlign: "left",
  },
  checkBox: {
    top: 361,
    left: 23,
    width: 152,
    height: 29,
    flexDirection: "row",
    paddingTop: Padding.p_5xs,
    paddingRight: Padding.p_5xs,
    paddingBottom: Padding.p_5xs,
    position: "absolute",
  },
  forgetYourPassword: {
    textDecoration: "underline",
    color: Color.colorGray_200,
    width: 184,
    height: 23,
    textAlign: "right",
  },
  forgetYourPasswordContainer: {
    left: 160,
    top: 316,
    position: "absolute",
  },
  logIn: {
    backgroundColor: Color.lightGray0,
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
  },
});

export default LogIn;
