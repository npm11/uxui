import React, { useState, useCallback } from "react";
import { StyleSheet, View, Text, Pressable, Modal } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import Frame from "../components/Frame";
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";

const ProfilePhotos = () => {
  const [editTextVisible, setEditTextVisible] = useState(false);
  const navigation = useNavigation();

  const openEditText = useCallback(() => {
    setEditTextVisible(true);
  }, []);

  const closeEditText = useCallback(() => {
    setEditTextVisible(false);
  }, []);

  return (
    <>
      <View style={styles.profilephotos}>
        <View style={styles.profilephotosChild} />
        <View style={styles.pageHeader}>
          <Text style={styles.setting}>Setting</Text>
          <View style={styles.logoutParent}>
            <Pressable
              style={styles.logout}
              onPress={() => navigation.navigate("Home")}
            >
              <Text style={styles.logout1}>Logout</Text>
            </Pressable>
            <Pressable
              style={[styles.back, styles.backPosition]}
              onPress={() => navigation.navigate("Notification1")}
            >
              <Text style={styles.back1}>Back</Text>
            </Pressable>
          </View>
        </View>
        <View style={styles.frameParent}>
          <Image
            style={styles.frameChild}
            contentFit="cover"
            source={require("../assets/frame-496260.png")}
          />
          <Text style={styles.soict}>SOICT</Text>
          <Text style={styles.soicthusteduvn01}>
            soict@hust.edu.vn | +01 234 567 89
          </Text>
        </View>
        <View style={[styles.rectangleParent, styles.frameLayout]}>
          <View style={[styles.frameItem, styles.frameShadowBox]} />
          <View
            style={[
              styles.linebusinessprofileLineParent,
              styles.iconParentLayout,
            ]}
          >
            <Image
              style={[
                styles.linebusinessprofileLineIcon,
                styles.iconParentLayout,
              ]}
              contentFit="cover"
              source={require("../assets/linebusinessprofileline.png")}
            />
            <Text style={[styles.editProfileInformation, styles.themePosition]}>
              Edit profile information
            </Text>
            <Pressable
              style={[styles.edit, styles.backPosition]}
              onPress={openEditText}
            >
              <Text style={[styles.edit1, styles.onTypo]}>Edit</Text>
            </Pressable>
          </View>
          <View
            style={[
              styles.linemedianotification3LineParent,
              styles.iconParentLayout,
            ]}
          >
            <Image
              style={[
                styles.linebusinessprofileLineIcon,
                styles.iconParentLayout,
              ]}
              contentFit="cover"
              source={require("../assets/linemedianotification3line.png")}
            />
            <Text style={[styles.editProfileInformation, styles.themePosition]}>
              Notifications
            </Text>
            <Text style={[styles.on, styles.onTypo]}>ON</Text>
          </View>
          <View
            style={[styles.lineeditortranslate2Parent, styles.iconParentLayout]}
          >
            <Image
              style={[
                styles.linebusinessprofileLineIcon,
                styles.iconParentLayout,
              ]}
              contentFit="cover"
              source={require("../assets/lineeditortranslate2.png")}
            />
            <Text style={[styles.language, styles.themePosition]}>
              Language
            </Text>
            <Text style={[styles.english, styles.onTypo]}>English</Text>
          </View>
        </View>
        <View style={[styles.rectangleGroup, styles.frameLayout]}>
          <View style={[styles.frameInner, styles.frameShadowBox]} />
          <View
            style={[styles.lineusercontactsLineParent, styles.lineParentLayout]}
          >
            <Image
              style={[
                styles.linebusinessprofileLineIcon,
                styles.iconParentLayout,
              ]}
              contentFit="cover"
              source={require("../assets/lineusercontactsline.png")}
            />
            <Text
              style={[styles.editProfileInformation, styles.themePosition]}
            >{`Help & Support`}</Text>
          </View>
          <View
            style={[
              styles.linecommunicationchatQuoteParent,
              styles.lineParentLayout,
            ]}
          >
            <Image
              style={[
                styles.linebusinessprofileLineIcon,
                styles.iconParentLayout,
              ]}
              contentFit="cover"
              source={require("../assets/linecommunicationchatquoteline.png")}
            />
            <Text style={[styles.editProfileInformation, styles.themePosition]}>
              Contact us
            </Text>
          </View>
          <View
            style={[styles.linesystemlock2LineParent, styles.lineParentLayout]}
          >
            <Image
              style={[
                styles.linebusinessprofileLineIcon,
                styles.iconParentLayout,
              ]}
              contentFit="cover"
              source={require("../assets/linesystemlock2line.png")}
            />
            <Text style={[styles.editProfileInformation, styles.themePosition]}>
              Privacy policy
            </Text>
          </View>
        </View>
        <View style={[styles.rectangleContainer, styles.rectangleLayout]}>
          <View style={[styles.rectangleView, styles.rectangleLayout]} />
          <View
            style={[styles.lineusercontactsLineParent, styles.lineParentLayout]}
          >
            <Image
              style={[
                styles.linebusinessprofileLineIcon,
                styles.iconParentLayout,
              ]}
              contentFit="cover"
              source={require("../assets/linebusinessprojector2line.png")}
            />
            <Text style={[styles.editProfileInformation, styles.themePosition]}>
              Security
            </Text>
          </View>
          <View
            style={[
              styles.linemedianotification3LineParent,
              styles.iconParentLayout,
            ]}
          >
            <Image
              style={[
                styles.linebusinessprofileLineIcon,
                styles.iconParentLayout,
              ]}
              contentFit="cover"
              source={require("../assets/linehealthmentalhealthline.png")}
            />
            <Text style={[styles.theme, styles.themePosition]}>Theme</Text>
            <Text style={[styles.lightMode, styles.onTypo]}>Light mode</Text>
          </View>
        </View>
        <View style={styles.frameView}>
          <View style={[styles.frameChild1, styles.framePosition]} />
          <View style={[styles.topDivider, styles.framePosition]} />
          <View style={[styles.frameGroup, styles.framePosition]}>
            <Pressable
              style={styles.wrapper}
              onPress={() => navigation.navigate("KPICompletionProgress")}
            >
              <Image
                style={styles.icon}
                contentFit="cover"
                source={require("../assets/frame-4963341.png")}
              />
            </Pressable>
            <Pressable
              style={styles.container}
              onPress={() => navigation.navigate("ToDoList")}
            >
              <Image
                style={styles.icon}
                contentFit="cover"
                source={require("../assets/frame-4963261.png")}
              />
            </Pressable>
            <Pressable
              style={styles.container}
              onPress={() => navigation.navigate("CalendarPage")}
            >
              <Image
                style={styles.icon}
                contentFit="cover"
                source={require("../assets/frame-4963321.png")}
              />
            </Pressable>
            <Pressable
              style={styles.container}
              onPress={() => navigation.navigate("Notification1")}
            >
              <View style={styles.rectangleParent1}>
                <View style={[styles.frameChild2, styles.frameChildPosition]} />
                <Image
                  style={[styles.vectorIcon, styles.iconParentLayout]}
                  contentFit="cover"
                  source={require("../assets/vector2.png")}
                />
              </View>
            </Pressable>
            <View style={styles.container}>
              <View style={styles.rectangleParent1}>
                <View style={[styles.frameChild3, styles.frameChildPosition]} />
                <Image
                  style={styles.combinedShapeIcon}
                  contentFit="cover"
                  source={require("../assets/combined-shape2.png")}
                />
              </View>
              <Image
                style={styles.rectangleIcon}
                contentFit="cover"
                source={require("../assets/rectangle-2517.png")}
              />
            </View>
          </View>
        </View>
      </View>

      <Modal animationType="fade" transparent visible={editTextVisible}>
        <View style={styles.editTextOverlay}>
          <Pressable style={styles.editTextBg} onPress={closeEditText} />
          <Frame onClose={closeEditText} />
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  backPosition: {
    top: "50%",
    position: "absolute",
  },
  frameLayout: {
    height: 121,
    width: 342,
    position: "absolute",
  },
  frameShadowBox: {
    borderRadius: Border.br_5xs,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    left: 0,
    top: 0,
    backgroundColor: Color.lightGray0,
  },
  iconParentLayout: {
    height: 24,
    position: "absolute",
  },
  themePosition: {
    left: 37,
    top: "8.33%",
    fontFamily: FontFamily.bodyMedium,
    lineHeight: 20,
    letterSpacing: 0,
    fontSize: FontSize.bodyMedium_size,
    color: Color.lightGray11,
    textAlign: "left",
    position: "absolute",
  },
  onTypo: {
    color: Color.lightPrimary,
    fontFamily: FontFamily.bodyMedium,
    lineHeight: 20,
    letterSpacing: 0,
    fontSize: FontSize.bodyMedium_size,
    textAlign: "right",
  },
  lineParentLayout: {
    width: 277,
    height: 24,
    left: 16,
    position: "absolute",
  },
  rectangleLayout: {
    height: 86,
    width: 342,
    position: "absolute",
  },
  framePosition: {
    top: 1,
    position: "absolute",
  },
  frameChildPosition: {
    borderRadius: Border.br_81xl,
    marginLeft: -16,
    height: 32,
    width: 32,
    left: "50%",
    top: 0,
    position: "absolute",
  },
  profilephotosChild: {
    height: 226,
    backgroundColor: Color.colorRoyalblue_200,
    left: 0,
    right: 0,
    top: 0,
    position: "absolute",
  },
  setting: {
    marginLeft: -53,
    fontSize: FontSize.uI30Semi_size,
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    textAlign: "center",
    color: Color.lightGray0,
    left: "50%",
    top: 0,
    position: "absolute",
  },
  logout1: {
    textAlign: "right",
    fontFamily: FontFamily.uI16Medium1,
    fontWeight: "500",
    fontSize: FontSize.uI16Medium1_size,
    color: Color.lightGray0,
  },
  logout: {
    right: 0,
    top: 0,
    position: "absolute",
  },
  back1: {
    marginTop: -9.5,
    textAlign: "left",
    fontFamily: FontFamily.uI16Medium1,
    fontWeight: "500",
    fontSize: FontSize.uI16Medium1_size,
    color: Color.lightGray0,
  },
  back: {
    left: 0,
  },
  logoutParent: {
    marginLeft: -159,
    top: 8,
    width: 319,
    height: 19,
    left: "50%",
    position: "absolute",
  },
  pageHeader: {
    top: 60,
    right: 16,
    height: 36,
    left: 16,
    position: "absolute",
  },
  frameChild: {
    left: 65,
    width: 139,
    height: 141,
    top: 0,
    position: "absolute",
  },
  soict: {
    top: 138,
    left: 40,
    fontSize: FontSize.titlePoppinsLarge_size,
    lineHeight: 28,
    fontWeight: "600",
    fontFamily: FontFamily.titlePoppinsLarge,
    width: 194,
    color: Color.lightGray11,
    textAlign: "center",
    position: "absolute",
  },
  soicthusteduvn01: {
    top: "87.11%",
    left: "0%",
    fontFamily: FontFamily.bodyMedium,
    lineHeight: 20,
    letterSpacing: 0,
    fontSize: FontSize.bodyMedium_size,
    color: Color.lightGray11,
    textAlign: "center",
    position: "absolute",
    width: "100%",
  },
  frameParent: {
    top: 122,
    left: 50,
    width: 274,
    height: 194,
    position: "absolute",
  },
  frameItem: {
    height: 121,
    width: 342,
    position: "absolute",
  },
  linebusinessprofileLineIcon: {
    width: 24,
    left: 0,
    top: 0,
    overflow: "hidden",
  },
  editProfileInformation: {
    width: 240,
  },
  editTextOverlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  editTextBg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  edit1: {
    marginTop: -10,
    width: 33,
  },
  edit: {
    right: 0,
  },
  linebusinessprofileLineParent: {
    width: 302,
    height: 24,
    left: 16,
    top: 14,
  },
  on: {
    width: "45.03%",
    left: "54.97%",
    top: "8.33%",
    color: Color.lightPrimary,
    position: "absolute",
  },
  linemedianotification3LineParent: {
    top: 49,
    width: 302,
    height: 24,
    left: 16,
  },
  language: {
    width: 72,
  },
  english: {
    width: "21.19%",
    left: "78.81%",
    top: "8.33%",
    color: Color.lightPrimary,
    position: "absolute",
  },
  lineeditortranslate2Parent: {
    top: 86,
    width: 302,
    height: 24,
    left: 16,
  },
  rectangleParent: {
    top: 330,
    left: 16,
  },
  frameInner: {
    height: 121,
    width: 342,
    position: "absolute",
  },
  lineusercontactsLineParent: {
    top: 14,
  },
  linecommunicationchatQuoteParent: {
    top: 49,
  },
  linesystemlock2LineParent: {
    top: 86,
  },
  rectangleGroup: {
    top: 590,
    left: 16,
  },
  rectangleView: {
    borderRadius: Border.br_5xs,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    left: 0,
    top: 0,
    backgroundColor: Color.lightGray0,
  },
  theme: {
    width: 152,
  },
  lightMode: {
    width: "26.49%",
    left: "73.51%",
    top: "8.33%",
    color: Color.lightPrimary,
    position: "absolute",
  },
  rectangleContainer: {
    top: 479,
    left: 16,
  },
  frameChild1: {
    height: 71,
    width: 360,
    left: 0,
    backgroundColor: Color.lightGray0,
  },
  topDivider: {
    backgroundColor: Color.colorSilver_100,
    height: 1,
    left: 0,
    right: 0,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  wrapper: {
    width: 49,
    height: 71,
  },
  container: {
    marginLeft: 12,
    width: 49,
    height: 71,
  },
  frameChild2: {
    backgroundColor: Color.gray02,
  },
  vectorIcon: {
    marginLeft: -9,
    top: 4,
    width: 18,
    left: "50%",
  },
  rectangleParent1: {
    top: 19,
    left: 9,
    height: 32,
    width: 32,
    position: "absolute",
  },
  frameChild3: {
    backgroundColor: Color.colorRoyalblue_200,
  },
  combinedShapeIcon: {
    height: "68.75%",
    width: "62.5%",
    top: "15.63%",
    right: "18.75%",
    bottom: "15.63%",
    left: "18.75%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  rectangleIcon: {
    marginLeft: -24.5,
    borderRadius: Border.br_3xs,
    height: 4,
    width: 49,
    left: "50%",
    top: 0,
    position: "absolute",
  },
  frameGroup: {
    marginLeft: -146.5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    left: "50%",
  },
  frameView: {
    marginLeft: -180,
    bottom: 0,
    height: 72,
    width: 360,
    left: "50%",
    position: "absolute",
  },
  profilephotos: {
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.lightGray0,
  },
});

export default ProfilePhotos;
