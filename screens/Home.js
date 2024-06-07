import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Padding, Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const Home = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.home}>
      <Pressable
        style={[styles.buttonprimary, styles.buttonprimarySpaceBlock]}
        onPress={() => navigation.navigate("LogIn")}
      >
        <Text style={[styles.login, styles.loginTypo]}>Log In</Text>
      </Pressable>
      <Pressable
        style={[styles.buttonprimary1, styles.buttonprimarySpaceBlock]}
        onPress={() => navigation.navigate("SignUp")}
      >
        <Text style={[styles.login, styles.loginTypo]}>Sign Up</Text>
      </Pressable>
      <Text style={[styles.letsGetStarted, styles.orTypo]}>
        Let’s get started by
      </Text>
      <Text style={[styles.or, styles.orTypo]}>or</Text>
      <View style={styles.keyboardArrowDownParent}>
        <Image
          style={[styles.keyboardArrowDown, styles.bottomPosition]}
          contentFit="cover"
          source={require("../assets/keyboard-arrow-down.png")}
        />
        <Text style={[styles.languages, styles.bottomPosition]}>Languages</Text>
      </View>
      <View style={styles.homeChild} />
      <View style={[styles.groupParent, styles.bottomPosition]}>
        <Image
          style={styles.frameChild}
          contentFit="cover"
          source={require("../assets/group-1.png")}
        />
        <Text style={styles.kpiEdu}>
          <Text style={styles.kpi}>KPI</Text>
          <Text style={styles.edu}> Edu</Text>
        </Text>
      </View>
      <View style={[styles.bottom, styles.bottomPosition]}>
        <Text style={[styles.term, styles.termTypo]}>Term</Text>
        <Text style={[styles.introduce, styles.termTypo]}>Introduce</Text>
        <Text style={[styles.privacy, styles.termTypo]}>Privacy</Text>
        <Text style={[styles.help, styles.termTypo]}>Help</Text>
        <Text style={[styles.name2024, styles.termTypo]}>Name © 2024</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonprimarySpaceBlock: {
    paddingVertical: Padding.p_base,
    paddingHorizontal: Padding.p_13xl,
    width: 343,
    backgroundColor: Color.colorRoyalblue_200,
    borderRadius: Border.br_81xl,
    marginLeft: -170,
    alignItems: "center",
    left: "50%",
    position: "absolute",
  },
  loginTypo: {
    textAlign: "center",
    fontFamily: FontFamily.overline,
    fontWeight: "600",
  },
  orTypo: {
    fontSize: FontSize.size_5xl,
    color: Color.lightGray11,
    textAlign: "center",
    fontFamily: FontFamily.overline,
    fontWeight: "600",
    left: "50%",
    position: "absolute",
  },
  bottomPosition: {
    top: "50%",
    left: "50%",
    position: "absolute",
  },
  termTypo: {
    fontSize: FontSize.size_xs,
    top: "50%",
    textAlign: "center",
    fontFamily: FontFamily.overline,
    fontWeight: "600",
    left: "50%",
    position: "absolute",
  },
  login: {
    fontSize: FontSize.uI16Medium1_size,
    color: Color.lightGray0,
  },
  buttonprimary: {
    bottom: 433,
  },
  buttonprimary1: {
    bottom: 327,
  },
  letsGetStarted: {
    marginLeft: -111,
    top: 279,
    color: Color.lightGray11,
  },
  or: {
    marginLeft: -13,
    top: 392,
    color: Color.lightGray11,
  },
  keyboardArrowDown: {
    marginTop: -8,
    marginLeft: 20,
    width: 16,
    height: 16,
    overflow: "hidden",
  },
  languages: {
    marginTop: -6,
    marginLeft: -36,
    fontSize: FontSize.size_3xs,
    color: Color.colorDimgray_100,
    textAlign: "center",
    fontFamily: FontFamily.overline,
    fontWeight: "600",
  },
  keyboardArrowDownParent: {
    top: 14,
    left: 157,
    width: 72,
    height: 16,
    position: "absolute",
  },
  homeChild: {
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
  frameChild: {
    width: 44,
    height: 51,
  },
  kpi: {
    color: Color.colorOrange,
  },
  edu: {
    color: Color.colorDodgerblue,
  },
  kpiEdu: {
    fontSize: FontSize.size_13xl,
    fontWeight: "700",
    fontFamily: FontFamily.ubuntuBold,
    textAlign: "left",
    width: 123,
    height: 38,
    marginLeft: 16,
  },
  groupParent: {
    marginTop: -369,
    marginLeft: -92,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    top: "50%",
  },
  term: {
    marginLeft: -33.5,
    color: Color.greenPrimary,
    marginTop: -23.5,
    fontSize: FontSize.size_xs,
  },
  introduce: {
    marginLeft: -111.5,
    marginTop: -23.5,
    fontSize: FontSize.size_xs,
    color: Color.colorDimgray_100,
  },
  privacy: {
    marginLeft: 18.5,
    marginTop: -23.5,
    fontSize: FontSize.size_xs,
    color: Color.colorDimgray_100,
  },
  help: {
    marginLeft: 84.5,
    marginTop: -23.5,
    fontSize: FontSize.size_xs,
    color: Color.colorDimgray_100,
  },
  name2024: {
    marginTop: 8.5,
    marginLeft: -43.5,
    color: Color.lightGray11,
  },
  bottom: {
    marginTop: 324,
    marginLeft: -112,
    width: 223,
    height: 47,
  },
  home: {
    backgroundColor: Color.lightGray0,
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
  },
});

export default Home;
