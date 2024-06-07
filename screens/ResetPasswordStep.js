import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const ResetPasswordStep = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.resetPasswordstep3}>
      <View style={styles.pageHeader}>
        <Text style={styles.login}>Login</Text>
        <Text style={styles.logIn}>Reset your password</Text>
        <Image
          style={styles.iconx}
          contentFit="cover"
          source={require("../assets/iconx.png")}
        />
        <Text style={[styles.right, styles.rightTypo]}>Right</Text>
      </View>
      <View style={[styles.termParent, styles.rightPosition]}>
        <Text style={[styles.term, styles.termTypo]}>Term</Text>
        <Text style={[styles.introduce, styles.helpTypo]}>Introduce</Text>
        <Text style={[styles.privacy, styles.helpTypo]}>Privacy</Text>
        <Text style={[styles.help, styles.helpTypo]}>Help</Text>
        <Text style={[styles.name2024, styles.termTypo]}>Name © 2024</Text>
      </View>
      <View style={[styles.resetPasswordstep3Child, styles.textFieldBorder]} />
      <View style={styles.logo}>
        <Image
          style={[styles.logoChild, styles.childLayout]}
          contentFit="cover"
          source={require("../assets/group-12.png")}
        />
        <Text style={[styles.kpiEdu, styles.kpiTypo]}>
          <Text style={styles.kpi}>KPI</Text>
          <Text style={styles.edu}> Edu</Text>
        </Text>
      </View>
      <View style={[styles.textField, styles.textFieldBorder]}>
        <View style={styles.inputs}>
          <Text style={[styles.text, styles.textTypo]}>
            Enter your email address
          </Text>
          <View style={styles.inputsChild} />
        </View>
        <Image
          style={[styles.icons, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/icons.png")}
        />
      </View>
      <View style={[styles.border, styles.rightPosition]} />
      <View style={[styles.labelParent, styles.labelParentLayout]}>
        <Text style={[styles.label, styles.textTypo]}>Enter your code</Text>
        <View style={[styles.passwordHideSee, styles.labelParentLayout]}>
          <Image
            style={[styles.icon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/icon4.png")}
          />
          <Text style={styles.hide}>Hide</Text>
        </View>
      </View>
      <Pressable
        style={[styles.backToLoginContainer, styles.rightPosition]}
        onPress={() => navigation.navigate("LogIn")}
      >
        <Text style={[styles.backToLogin, styles.rightTypo]}>
          Back to Login
        </Text>
      </Pressable>
      <View style={styles.messagereceiveParent}>
        <View style={styles.messagereceive}>
          <Image
            style={[styles.bgIcon, styles.childLayout]}
            contentFit="cover"
            source={require("../assets/bg1.png")}
          />
          <Text style={styles.loremIpsumDolor}>
            We've just sent an email containing a verification code to your
            recovery email address. Please check this email for the code and
            enter below.
          </Text>
        </View>
        <Image
          style={[styles.groupChild, styles.childLayout]}
          contentFit="cover"
          source={require("../assets/group-2.png")}
        />
        <Text style={[styles.kpiEdu1, styles.kpiTypo]}>
          <Text style={styles.kpi}>KPI</Text>
          <Text style={styles.edu}> Edu</Text>
        </Text>
      </View>
      <Pressable
        style={[styles.button, styles.buttonLayout]}
        onPress={() => navigation.navigate("ResetPassword")}
      >
        <View style={styles.backWrapper}>
          <Text style={[styles.back, styles.backTypo]}>Back</Text>
        </View>
      </Pressable>
      <Pressable
        style={[styles.button1, styles.buttonLayout]}
        onPress={() => navigation.navigate("ResetPasswordStep1")}
      >
        <View style={styles.backWrapper}>
          <Text style={[styles.submit, styles.backTypo]}>Submit</Text>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  rightTypo: {
    textAlign: "left",
    fontFamily: FontFamily.uI16Medium1,
    fontWeight: "500",
    fontSize: FontSize.uI16Medium1_size,
  },
  rightPosition: {
    top: "50%",
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
  helpTypo: {
    color: Color.colorDimgray_100,
    fontSize: FontSize.size_xs,
    marginTop: -23.5,
    top: "50%",
    textAlign: "center",
    fontFamily: FontFamily.overline,
    fontWeight: "600",
    left: "50%",
    position: "absolute",
  },
  textFieldBorder: {
    borderStyle: "solid",
    position: "absolute",
  },
  childLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    left: "0%",
    position: "absolute",
    overflow: "hidden",
  },
  kpiTypo: {
    fontFamily: FontFamily.ubuntuBold,
    fontWeight: "700",
    textAlign: "left",
    position: "absolute",
  },
  textTypo: {
    fontFamily: FontFamily.poppinsRegular,
    textAlign: "left",
    fontSize: FontSize.uI16Medium1_size,
  },
  iconLayout: {
    width: 24,
    height: 24,
    position: "absolute",
    overflow: "hidden",
  },
  labelParentLayout: {
    height: 27,
    position: "absolute",
  },
  buttonLayout: {
    height: 41,
    borderRadius: Border.br_13xl,
    position: "absolute",
    overflow: "hidden",
  },
  backTypo: {
    display: "flex",
    color: Color.lightGray0,
    fontFamily: FontFamily.poppinsMedium,
    justifyContent: "center",
    fontSize: FontSize.size_lg,
    alignItems: "center",
    textAlign: "center",
    fontWeight: "500",
  },
  login: {
    display: "none",
    textAlign: "right",
    fontFamily: FontFamily.uI16Medium1,
    fontWeight: "500",
    fontSize: FontSize.uI16Medium1_size,
    right: 0,
    color: Color.greenPrimary1,
    top: 8,
    position: "absolute",
  },
  logIn: {
    marginLeft: -150.5,
    fontSize: FontSize.uI30Semi_size,
    textAlign: "center",
    fontFamily: FontFamily.overline,
    fontWeight: "600",
    color: Color.lightGray11,
    top: 0,
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
    top: "50%",
    position: "absolute",
    left: 0,
    display: "none",
    color: Color.greenPrimary1,
    textAlign: "left",
  },
  pageHeader: {
    marginLeft: -174,
    top: 138,
    width: 343,
    height: 36,
    left: "50%",
    position: "absolute",
  },
  term: {
    marginLeft: -33.5,
    color: Color.greenPrimary,
    marginTop: -23.5,
    fontSize: FontSize.size_xs,
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
    fontSize: FontSize.size_xs,
    color: Color.lightGray11,
  },
  termParent: {
    marginTop: 324,
    marginLeft: -111,
    width: 223,
    height: 47,
    left: "50%",
  },
  resetPasswordstep3Child: {
    marginLeft: -158.5,
    top: 701,
    borderColor: Color.colorRoyalblue_200,
    borderTopWidth: 1,
    width: 317,
    height: 1,
    left: "50%",
  },
  logoChild: {
    width: "22.5%",
    right: "77.5%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    maxWidth: "100%",
    left: "0%",
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
    width: 123,
    height: 38,
    top: 8,
    fontFamily: FontFamily.ubuntuBold,
    fontWeight: "700",
  },
  logo: {
    height: "6.29%",
    width: "51.86%",
    top: "7.14%",
    right: "22.53%",
    bottom: "86.58%",
    left: "25.61%",
    position: "absolute",
  },
  text: {
    color: Color.colorDimgray_200,
  },
  inputsChild: {
    backgroundColor: Color.colorGray_200,
    width: 1,
    height: 24,
    display: "none",
  },
  inputs: {
    left: 24,
    alignItems: "center",
    flexDirection: "row",
    top: 15,
    display: "none",
    position: "absolute",
  },
  icons: {
    top: 40,
    right: 24,
    display: "none",
  },
  textField: {
    top: 440,
    borderRadius: Border.br_xs,
    borderColor: Color.colorDimgray_400,
    borderWidth: 1,
    width: 325,
    height: 55,
    left: 25,
    overflow: "hidden",
  },
  border: {
    marginTop: -225,
    marginLeft: -180,
    shadowColor: "rgba(0, 0, 0, 0.2)",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 20,
    elevation: 20,
    shadowOpacity: 1,
    borderRadius: Border.br_31xl,
    backgroundColor: Color.colorDarkolivegreen,
    width: 356,
    height: 162,
    left: "50%",
  },
  label: {
    color: Color.gray04,
    left: 0,
    top: 0,
    position: "absolute",
  },
  icon: {
    top: 3,
    right: 49,
  },
  hide: {
    color: Color.colorDimgray_300,
    fontSize: FontSize.size_lg,
    fontFamily: FontFamily.poppinsRegular,
    top: 0,
    textAlign: "right",
    right: 0,
    position: "absolute",
  },
  passwordHideSee: {
    right: 9,
    width: 73,
    top: 0,
    display: "none",
  },
  labelParent: {
    top: 406,
    width: 293,
    left: 25,
  },
  backToLogin: {
    marginTop: -388,
    color: Color.colorRoyalblue_200,
  },
  backToLoginContainer: {
    left: 14,
  },
  bgIcon: {
    right: "0%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    maxWidth: "100%",
    left: "0%",
    width: "100%",
  },
  loremIpsumDolor: {
    left: 16,
    fontSize: FontSize.bodyMedium_size,
    fontFamily: FontFamily.uI14Regular,
    width: 241,
    height: 72,
    top: 15,
    textAlign: "left",
    color: Color.lightGray11,
    position: "absolute",
  },
  messagereceive: {
    left: 38,
    width: 273,
    height: 131,
    top: 0,
    position: "absolute",
  },
  groupChild: {
    height: "17.27%",
    width: "9.86%",
    top: "75.85%",
    right: "90.14%",
    bottom: "6.89%",
  },
  kpiEdu1: {
    top: 149,
    left: 46,
    fontSize: FontSize.size_xl,
    width: 129,
    height: 34,
  },
  messagereceiveParent: {
    top: 205,
    left: 34,
    width: 311,
    height: 183,
    position: "absolute",
  },
  back: {
    width: 87,
  },
  backWrapper: {
    marginTop: -12.5,
    marginLeft: -190.5,
    justifyContent: "center",
    width: 381,
    alignItems: "center",
    flexDirection: "row",
    top: "50%",
    left: "50%",
    position: "absolute",
  },
  button: {
    top: 522,
    left: 53,
    backgroundColor: Color.colorDarkgray_200,
    width: 113,
  },
  submit: {
    width: 381,
    display: "flex",
    color: Color.lightGray0,
    fontFamily: FontFamily.poppinsMedium,
  },
  button1: {
    top: 524,
    left: 209,
    backgroundColor: Color.colorRoyalblue_200,
    width: 109,
  },
  resetPasswordstep3: {
    backgroundColor: Color.lightGray0,
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
  },
});

export default ResetPasswordStep;
