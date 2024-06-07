import React, { memo } from "react";
import { View, StyleSheet, Text } from "react-native";
import { Image } from "expo-image";
import { FontSize, Color, FontFamily, Border } from "../GlobalStyles";

const Frame1 = memo(({ onClose }) => {
  return (
    <View style={styles.rectangleParent}>
      <View style={styles.frameChild} />
      <View style={styles.frameParent}>
        <View style={styles.taskNameParent}>
          <Text style={[styles.taskName, styles.taskNameTypo]}>Task name</Text>
          <View style={[styles.textField, styles.textBorder]}>
            <Text style={[styles.colorDesign, styles.designTypo]}>
              Color Design
            </Text>
          </View>
        </View>
        <View style={[styles.planParent, styles.parentSpaceBlock]}>
          <Text style={[styles.taskName, styles.taskNameTypo]}>Plan</Text>
          <View style={[styles.textField1, styles.textBorder]}>
            <Image
              style={[styles.iconChevronLeft, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/icon--chevron-left1.png")}
            />
            <Text style={[styles.salesWebsiteDesign, styles.designTypo]}>
              Sales website design
            </Text>
          </View>
        </View>
        <View style={[styles.planParent, styles.parentSpaceBlock]}>
          <Text style={[styles.taskName, styles.taskNameTypo]}>Priority</Text>
          <View style={[styles.textField2, styles.textBorder]}>
            <Image
              style={[styles.iconChevronLeft, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/icon--chevron-left1.png")}
            />
            <Text style={[styles.medium, styles.designTypo]}>Medium</Text>
          </View>
        </View>
        <View style={[styles.descriptionParent, styles.parentSpaceBlock]}>
          <Text style={[styles.description, styles.taskNameTypo]}>
            Description
          </Text>
          <View style={[styles.textField3, styles.textBorder]} />
        </View>
        <View style={[styles.remindMeAtParent, styles.parentSpaceBlock]}>
          <Text style={[styles.description, styles.taskNameTypo]}>
            Remind me at
          </Text>
          <View style={styles.frameGroup}>
            <View style={[styles.groupParent, styles.groupPosition1]}>
              <View style={[styles.rectangleGroup, styles.groupPosition]}>
                <View style={styles.groupChild} />
                <Text style={[styles.h, styles.hTypo]}>20h</Text>
                <Image
                  style={[styles.caretdownIcon, styles.caretdownIconLayout]}
                  contentFit="cover"
                  source={require("../assets/caretdown.png")}
                />
              </View>
              <View style={styles.rectangleContainer}>
                <View style={styles.groupChild} />
                <Text style={[styles.m, styles.hTypo]}>30m</Text>
                <Image
                  style={[styles.caretdownIcon1, styles.caretdownIconLayout]}
                  contentFit="cover"
                  source={require("../assets/caretdown1.png")}
                />
              </View>
            </View>
            <View style={[styles.groupContainer, styles.groupPosition1]}>
              <View style={[styles.groupView, styles.groupPosition]}>
                <View
                  style={[
                    styles.rectangleParent1,
                    styles.rectangleParentPosition,
                  ]}
                >
                  <View style={styles.groupChild} />
                  <Text style={[styles.m, styles.hTypo]}>30</Text>
                  <Image
                    style={[
                      styles.caretdownIcon2,
                      styles.caretdownIconPosition,
                    ]}
                    contentFit="cover"
                    source={require("../assets/caretdown2.png")}
                  />
                </View>
                <View
                  style={[
                    styles.rectangleParent2,
                    styles.rectangleParentPosition,
                  ]}
                >
                  <View style={styles.groupChild} />
                  <Text style={[styles.april, styles.hTypo]}>April</Text>
                  <Image
                    style={[
                      styles.caretdownIcon3,
                      styles.caretdownIconPosition,
                    ]}
                    contentFit="cover"
                    source={require("../assets/caretdown3.png")}
                  />
                </View>
                <View style={[styles.rectangleParent3, styles.groupPosition]}>
                  <View style={styles.groupChild1} />
                  <Text style={styles.text1}>2024</Text>
                  <Image
                    style={[
                      styles.caretdownIcon4,
                      styles.caretdownIconPosition,
                    ]}
                    contentFit="cover"
                    source={require("../assets/caretdown1.png")}
                  />
                </View>
              </View>
              <Image
                style={[styles.iconinterfacescalendar, styles.profilePosition]}
                contentFit="cover"
                source={require("../assets/iconinterfacescalendar1.png")}
              />
            </View>
          </View>
        </View>
        <View style={[styles.planParent, styles.parentSpaceBlock]}>
          <Text style={[styles.taskName, styles.taskNameTypo]}>Status</Text>
          <View style={[styles.profile, styles.profilePosition]}>
            <View style={[styles.profileChild, styles.frameLayout1]} />
            <Text style={[styles.inProgess, styles.inProgessLayout]}>
              In progess
            </Text>
            <Image
              style={[styles.iconChevronLeft2, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/icon--chevron-left2.png")}
            />
          </View>
        </View>
        <View style={[styles.planParent, styles.parentSpaceBlock]}>
          <View style={[styles.textField, styles.textBorder]}>
            <Text style={[styles.inProgess, styles.inProgessLayout]}>50%</Text>
          </View>
          <View style={[styles.processingWrapper, styles.inProgessLayout]}>
            <Text style={[styles.description, styles.taskNameTypo]}>
              Processing
            </Text>
          </View>
        </View>
        <View style={[styles.planParent, styles.parentSpaceBlock]}>
          <Text style={[styles.taskName, styles.taskNameTypo]}>Repeat</Text>
          <View style={[styles.profile, styles.profilePosition]}>
            <View style={[styles.profileChild, styles.frameLayout1]} />
            <Text style={[styles.inProgess, styles.inProgessLayout]}>
              Every day
            </Text>
            <Image
              style={[styles.iconChevronLeft2, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/icon--chevron-left2.png")}
            />
          </View>
        </View>
        <View style={styles.frameContainer}>
          <View style={[styles.frameView, styles.frameLayout]}>
            <View style={[styles.frameItem, styles.frameLayout]} />
            <Text style={[styles.save, styles.saveTypo]}>Save</Text>
          </View>
          <View style={[styles.rectangleParent4, styles.frameLayout]}>
            <View style={[styles.frameInner, styles.frameLayout]} />
            <Text style={[styles.cancel, styles.saveTypo]}>Cancel</Text>
          </View>
        </View>
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  taskNameTypo: {
    textAlign: "left",
    fontSize: FontSize.size_mini,
    color: Color.lightGray11,
    fontFamily: FontFamily.uI16Medium1,
    fontWeight: "500",
    lineHeight: 20,
    letterSpacing: 0.3,
    left: 0,
    position: "absolute",
  },
  textBorder: {
    borderWidth: 1,
    borderColor: Color.colorDimgray_400,
    borderStyle: "solid",
    overflow: "hidden",
    borderRadius: Border.br_xs,
    position: "absolute",
  },
  designTypo: {
    fontSize: FontSize.bodyMedium_size,
    textAlign: "left",
    top: 7,
  },
  parentSpaceBlock: {
    marginTop: 18,
    width: 231,
  },
  iconLayout: {
    height: 8,
    position: "absolute",
  },
  groupPosition1: {
    height: 25,
    left: 0,
    position: "absolute",
  },
  groupPosition: {
    bottom: "0%",
    position: "absolute",
  },
  hTypo: {
    height: 14,
    width: 28,
    display: "flex",
    color: Color.black03,
    fontFamily: FontFamily.notoSansItalic,
    fontStyle: "italic",
    lineHeight: 24,
    fontSize: FontSize.size_4xs,
    textAlign: "left",
    alignItems: "center",
    top: "50%",
    position: "absolute",
  },
  caretdownIconLayout: {
    height: 5,
    width: 6,
    top: 8,
    position: "absolute",
  },
  rectangleParentPosition: {
    top: "0.79%",
    height: "99.21%",
    bottom: "0%",
    position: "absolute",
  },
  caretdownIconPosition: {
    top: 9,
    height: 5,
    width: 6,
    position: "absolute",
  },
  profilePosition: {
    right: 0,
    position: "absolute",
  },
  frameLayout1: {
    borderRadius: Border.br_3xs,
    left: 0,
  },
  inProgessLayout: {
    height: 20,
    position: "absolute",
  },
  frameLayout: {
    width: 95,
    height: 36,
    top: 0,
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
    backgroundColor: Color.colorWhitesmoke_100,
    borderRadius: Border.br_xs,
    left: 0,
    top: 0,
    position: "absolute",
    height: 580,
    width: 304,
  },
  taskName: {
    top: 7,
    textAlign: "left",
    fontSize: FontSize.size_mini,
  },
  colorDesign: {
    color: Color.gray900,
    left: 12,
    fontSize: FontSize.bodyMedium_size,
    fontFamily: FontFamily.uI16Medium1,
    fontWeight: "500",
    lineHeight: 20,
    position: "absolute",
    letterSpacing: 0.3,
  },
  textField: {
    width: 132,
    overflow: "hidden",
    left: 99,
    height: 33,
    top: 0,
  },
  taskNameParent: {
    height: 33,
    width: 231,
  },
  iconChevronLeft: {
    top: 13,
    right: 10,
    width: 8,
  },
  salesWebsiteDesign: {
    left: 12,
    fontSize: FontSize.bodyMedium_size,
    fontFamily: FontFamily.uI16Medium1,
    fontWeight: "500",
    lineHeight: 20,
    position: "absolute",
    color: Color.lightGray11,
  },
  textField1: {
    left: 54,
    width: 177,
    overflow: "hidden",
    height: 33,
    top: 0,
  },
  planParent: {
    height: 33,
  },
  medium: {
    left: 14,
    color: Color.lightGray11,
    fontFamily: FontFamily.uI16Medium1,
    fontWeight: "500",
    lineHeight: 20,
    fontSize: FontSize.bodyMedium_size,
    position: "absolute",
  },
  textField2: {
    left: 131,
    width: 100,
    overflow: "hidden",
    height: 33,
    top: 0,
  },
  description: {
    top: 0,
  },
  textField3: {
    top: 30,
    height: 50,
    overflow: "hidden",
    width: 231,
    left: 0,
  },
  descriptionParent: {
    height: 80,
  },
  groupChild: {
    borderColor: Color.colorGainsboro_200,
    borderRadius: Border.br_9xs,
    width: "100%",
    backgroundColor: Color.lightGray0,
    right: "0%",
    left: "0%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    borderWidth: 1,
    borderStyle: "solid",
    position: "absolute",
  },
  h: {
    marginTop: -8.1,
    left: 9,
    height: 14,
    width: 28,
  },
  caretdownIcon: {
    left: 51,
  },
  rectangleGroup: {
    right: "52.89%",
    left: "0%",
    top: "0%",
    height: "100%",
    bottom: "0%",
    width: "47.11%",
  },
  m: {
    marginTop: -6.9,
    left: 9,
    height: 14,
    width: 28,
  },
  caretdownIcon1: {
    left: 52,
  },
  rectangleContainer: {
    left: "52.89%",
    right: "0%",
    bottom: "0%",
    top: "0%",
    width: "47.11%",
    height: "100%",
    position: "absolute",
  },
  groupParent: {
    top: 28,
    width: 135,
  },
  caretdownIcon2: {
    left: 51,
  },
  rectangleParent1: {
    right: "69.05%",
    width: "30.95%",
    left: "0%",
  },
  april: {
    marginTop: -6.8,
    left: 8,
  },
  caretdownIcon3: {
    left: 50,
  },
  rectangleParent2: {
    width: "30.13%",
    right: "34.4%",
    left: "35.47%",
  },
  groupChild1: {
    bottom: "0.79%",
    height: "99.21%",
    borderColor: Color.colorGainsboro_200,
    backgroundColor: Color.lightGray0,
    borderRadius: Border.br_9xs,
    right: "0%",
    width: "100%",
    left: "0%",
    top: "0%",
    borderWidth: 1,
    borderStyle: "solid",
    position: "absolute",
  },
  text1: {
    marginTop: -12.4,
    left: 7,
    width: 22,
    display: "flex",
    color: Color.black03,
    fontFamily: FontFamily.notoSansItalic,
    fontStyle: "italic",
    lineHeight: 24,
    fontSize: FontSize.size_4xs,
    height: 25,
    textAlign: "left",
    alignItems: "center",
    top: "50%",
    position: "absolute",
  },
  caretdownIcon4: {
    left: 52,
  },
  rectangleParent3: {
    right: "0.05%",
    left: "69%",
    width: "30.95%",
    top: "0%",
    height: "100%",
    bottom: "0%",
  },
  groupView: {
    height: "100.8%",
    width: "89.48%",
    top: "-0.8%",
    right: "10.52%",
    left: "0%",
  },
  iconinterfacescalendar: {
    top: 3,
    width: 20,
    height: 19,
  },
  groupContainer: {
    width: 230,
    top: 0,
  },
  frameGroup: {
    top: 26,
    height: 53,
    width: 230,
    left: 0,
    position: "absolute",
  },
  remindMeAtParent: {
    height: 78,
  },
  profileChild: {
    borderColor: Color.colorLightgray,
    right: 0,
    position: "absolute",
    backgroundColor: Color.lightGray0,
    borderRadius: Border.br_3xs,
    borderWidth: 1,
    borderStyle: "solid",
    height: 33,
    top: 0,
  },
  inProgess: {
    letterSpacing: -0.4,
    fontFamily: FontFamily.openSansRegular,
    width: 73,
    left: 14,
    fontSize: FontSize.bodyMedium_size,
    textAlign: "left",
    top: 7,
    color: Color.lightGray11,
  },
  iconChevronLeft2: {
    top: 14,
    right: 8,
    left: 116,
    overflow: "hidden",
    maxWidth: "100%",
  },
  profile: {
    left: 99,
    height: 33,
    top: 0,
  },
  processingWrapper: {
    width: 83,
    top: 8,
    height: 20,
    left: 0,
  },
  frameItem: {
    backgroundColor: Color.colorLimegreen_200,
    borderRadius: Border.br_3xs,
    left: 0,
  },
  save: {
    left: 24,
    width: 48,
    height: 18,
  },
  frameView: {
    left: 118,
  },
  frameInner: {
    backgroundColor: Color.colorGold,
    borderRadius: Border.br_3xs,
    left: 0,
  },
  cancel: {
    width: 66,
    height: 19,
    left: 14,
  },
  rectangleParent4: {
    left: 0,
  },
  frameContainer: {
    width: 213,
    height: 36,
    marginTop: 18,
  },
  frameParent: {
    marginTop: -268,
    marginLeft: -115,
    left: "50%",
    alignItems: "center",
    top: "50%",
    position: "absolute",
  },
  rectangleParent: {
    maxHeight: "100%",
    maxWidth: "100%",
    height: 580,
    width: 304,
  },
});

export default Frame1;
