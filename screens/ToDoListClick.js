import React, { useState, useCallback } from "react";
import { StyleSheet, View, Text, Pressable, Modal } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import Frame1 from "../components/Frame1";
import { FontFamily, FontSize, Color, Border, Padding } from "../GlobalStyles";

const ToDoListClick = () => {
  const [frameContainer9Visible, setFrameContainer9Visible] = useState(false);
  const navigation = useNavigation();

  const openFrameContainer9 = useCallback(() => {
    setFrameContainer9Visible(true);
  }, []);

  const closeFrameContainer9 = useCallback(() => {
    setFrameContainer9Visible(false);
  }, []);

  return (
    <>
      <View style={styles.toDoListclick}>
        <View style={styles.pageHeader}>
          <View style={styles.pageHeaderChild} />
          <View style={[styles.frameParent, styles.toDoListPosition]}>
            <View style={[styles.nextParent, styles.nextParentPosition]}>
              <Pressable
                style={[styles.next, styles.nextParentPosition]}
                onPress={() => navigation.navigate("ToDoListClick")}
              >
                <Text style={[styles.next1, styles.next1Typo]}>Next</Text>
              </Pressable>
              <Pressable
                style={styles.back}
                onPress={() => navigation.navigate("KPICompletionProgress")}
              >
                <Text style={[styles.back1, styles.next1Typo]}>Back</Text>
              </Pressable>
            </View>
            <Text style={[styles.toDoList, styles.toDoListPosition]}>
              To-do list
            </Text>
          </View>
        </View>
        <View style={[styles.rectangleParent, styles.nextParentPosition]}>
          <View style={[styles.frameChild, styles.nextParentPosition]} />
          <View style={styles.vectorParent}>
            <Image
              style={styles.frameItem}
              contentFit="cover"
              source={require("../assets/line-171.png")}
            />
            <Text style={styles.weHave4Container}>
              <Text style={styles.weHave}>{`We have `}</Text>
              <Text style={styles.text}>4</Text>
              <Text style={styles.weHave}> tasks today!</Text>
            </Text>
          </View>
          <View style={styles.myDayNovember112024Parent}>
            <Text style={styles.myDayNovemberContainer}>
              <Text style={styles.myDay}>{`My day
`}</Text>
              <Text style={styles.november112024}>November 11, 2024</Text>
            </Text>
            <Pressable
              style={styles.vector}
              onPress={() => navigation.navigate("CalendarPage")}
            >
              <Image
                style={[styles.icon, styles.iconLayout]}
                contentFit="cover"
                source={require("../assets/vector3.png")}
              />
            </Pressable>
          </View>
          <View style={styles.frameGroup}>
            <View style={styles.frameContainer}>
              <View style={[styles.nameParent, styles.nameLayout]}>
                <Text style={[styles.name, styles.nameTypo]}>name</Text>
                <Image
                  style={[styles.icon1, styles.iconPosition1]}
                  contentFit="cover"
                  source={require("../assets/icon2.png")}
                />
                <Image
                  style={[styles.icon2, styles.iconPosition1]}
                  contentFit="cover"
                  source={require("../assets/icon3.png")}
                />
              </View>
              <View style={[styles.nameGroup, styles.nameLayout]}>
                <Text style={[styles.name, styles.nameTypo]}>Time</Text>
                <Image
                  style={[styles.icon3, styles.iconPosition]}
                  contentFit="cover"
                  source={require("../assets/icon2.png")}
                />
                <Image
                  style={[styles.icon4, styles.iconPosition]}
                  contentFit="cover"
                  source={require("../assets/icon3.png")}
                />
              </View>
              <Text style={[styles.status, styles.nameTypo]}>STATUS</Text>
            </View>
            <View style={styles.frameView}>
              <View style={styles.frameInnerLayout}>
                <View style={[styles.frameInner, styles.framePosition]} />
                <Text style={styles.appBuilderFo}>App builder fo...</Text>
                <View style={styles.columnHeader}>
                  <Text style={[styles.text1, styles.textTypo]}>
                    20:00 - 22:00
                  </Text>
                </View>
                <Pressable
                  style={[styles.vector1, styles.vectorLayout]}
                  onPress={() => navigation.navigate("ToDoList")}
                >
                  <Image
                    style={styles.iconLayout1}
                    contentFit="cover"
                    source={require("../assets/vector4.png")}
                  />
                </Pressable>
              </View>
              <View
                style={[
                  styles.rectangleContainer,
                  styles.framePressableSpaceBlock,
                ]}
              >
                <View style={[styles.frameInner, styles.framePosition]} />
                <Image
                  style={[styles.vector1, styles.vectorLayout]}
                  contentFit="cover"
                  source={require("../assets/vector4.png")}
                />
                <Text
                  style={[styles.blackwhite, styles.blackwhiteTypo]}
                >{`Black&White...`}</Text>
                <View style={[styles.columnHeader1, styles.columnSpaceBlock]}>
                  <Text style={[styles.text1, styles.textTypo]}>
                    14:50 - 15:10
                  </Text>
                </View>
              </View>
              <Pressable
                style={[styles.framePressable, styles.framePressableSpaceBlock]}
                onPress={openFrameContainer9}
              >
                <View style={[styles.frameInner, styles.framePosition]} />
                <Text style={[styles.colorDesign, styles.blackwhiteTypo]}>
                  Color Design
                </Text>
                <View style={[styles.columnHeader2, styles.columnSpaceBlock]}>
                  <Text style={[styles.text3, styles.textTypo]}>
                    15:30 - 15:40
                  </Text>
                </View>
                <Pressable
                  style={[styles.carboncheckbox, styles.frameIconLayout]}
                  onPress={() => navigation.navigate("ToDoListClick1")}
                >
                  <Image
                    style={[styles.icon6, styles.iconLayout1]}
                    contentFit="cover"
                    source={require("../assets/carboncheckbox.png")}
                  />
                </Pressable>
              </Pressable>
              <View
                style={[
                  styles.rectangleContainer,
                  styles.framePressableSpaceBlock,
                ]}
              >
                <View style={[styles.frameInner, styles.framePosition]} />
                <Text style={[styles.colorDesign, styles.blackwhiteTypo]}>
                  Mobile desig...
                </Text>
                <View style={[styles.columnHeader1, styles.columnSpaceBlock]}>
                  <Text style={[styles.text3, styles.textTypo]}>
                    18:00 - 19:00
                  </Text>
                </View>
                <Image
                  style={[styles.carboncheckboxIcon, styles.frameIconLayout]}
                  contentFit="cover"
                  source={require("../assets/carboncheckbox.png")}
                />
              </View>
            </View>
          </View>
          <View style={styles.vectorParent}>
            <Image
              style={styles.frameItem}
              contentFit="cover"
              source={require("../assets/line-171.png")}
            />
            <Text style={styles.weHave4Container}>
              <Text style={styles.weHave}>{`We have `}</Text>
              <Text style={styles.text}>4</Text>
              <Text style={styles.weHave}> tasks today!</Text>
            </Text>
          </View>
        </View>
        <View style={[styles.rectangleParent2, styles.frameChild3Layout]}>
          <View style={[styles.frameChild3, styles.frameChild3Layout]} />
          <View style={[styles.topDivider, styles.nextParentPosition]} />
          <View style={styles.frameParent1}>
            <Pressable
              style={styles.wrapper}
              onPress={() => navigation.navigate("KPICompletionProgress")}
            >
              <Image
                style={styles.iconLayout1}
                contentFit="cover"
                source={require("../assets/frame-496334.png")}
              />
            </Pressable>
            <View style={styles.frameParent2}>
              <Image
                style={[styles.frameIcon, styles.frameIconLayout]}
                contentFit="cover"
                source={require("../assets/frame-496325.png")}
              />
              <View style={[styles.frameChild4, styles.framePosition]} />
            </View>
            <Pressable
              style={styles.frameParent2}
              onPress={() => navigation.navigate("CalendarPage")}
            >
              <Image
                style={styles.iconLayout1}
                contentFit="cover"
                source={require("../assets/frame-496332.png")}
              />
            </Pressable>
            <Pressable
              style={styles.frameParent2}
              onPress={() => navigation.navigate("Notification1")}
            >
              <View style={[styles.frameIcon, styles.frameIconLayout]}>
                <View style={[styles.frameChild5, styles.frameIconLayout]} />
                <Image
                  style={[styles.vectorIcon1, styles.vectorLayout]}
                  contentFit="cover"
                  source={require("../assets/vector.png")}
                />
              </View>
            </Pressable>
            <Pressable
              style={styles.frameParent2}
              onPress={() => navigation.navigate("ProfilePhotos")}
            >
              <View style={[styles.frameIcon, styles.frameIconLayout]}>
                <View style={[styles.frameChild5, styles.frameIconLayout]} />
                <Image
                  style={[styles.combinedShapeIcon, styles.iconLayout]}
                  contentFit="cover"
                  source={require("../assets/combined-shape.png")}
                />
              </View>
            </Pressable>
          </View>
        </View>
      </View>

      <Modal animationType="fade" transparent visible={frameContainer9Visible}>
        <View style={styles.frameContainer9Overlay}>
          <Pressable
            style={styles.frameContainer9Bg}
            onPress={closeFrameContainer9}
          />
          <Frame1 onClose={closeFrameContainer9} />
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  toDoListPosition: {
    height: 36,
    top: 0,
    position: "absolute",
  },
  nextParentPosition: {
    right: 0,
    position: "absolute",
  },
  next1Typo: {
    fontFamily: FontFamily.uI16Medium1,
    fontWeight: "500",
    fontSize: FontSize.uI16Medium1_size,
    color: Color.lightGray0,
  },
  iconLayout: {
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
  },
  nameLayout: {
    height: 16,
    position: "absolute",
  },
  nameTypo: {
    color: Color.gray700,
    fontFamily: FontFamily.overline,
    textTransform: "uppercase",
    lineHeight: 16,
    fontSize: FontSize.overline_size,
    fontWeight: "600",
    letterSpacing: 0.4,
    textAlign: "left",
    top: 0,
    position: "absolute",
  },
  iconPosition1: {
    height: 5,
    width: 7,
    borderRadius: Border.br_12xs_5,
    marginLeft: 16.25,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  iconPosition: {
    marginLeft: 13.25,
    height: 5,
    width: 7,
    borderRadius: Border.br_12xs_5,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  framePosition: {
    borderRadius: Border.br_3xs,
    top: 0,
    position: "absolute",
  },
  textTypo: {
    width: 93,
    display: "flex",
    fontFamily: FontFamily.interLight,
    fontStyle: "italic",
    alignItems: "center",
    fontSize: FontSize.bodyMedium_size,
    textAlign: "left",
  },
  vectorLayout: {
    height: 24,
    position: "absolute",
  },
  framePressableSpaceBlock: {
    marginTop: 20,
    height: 55,
  },
  blackwhiteTypo: {
    width: 111,
    height: 19,
    lineHeight: 20,
    letterSpacing: 0.3,
    fontSize: FontSize.bodyMedium_size,
    textAlign: "left",
    fontFamily: FontFamily.uI16Medium1,
    fontWeight: "500",
    left: 18,
    position: "absolute",
  },
  columnSpaceBlock: {
    width: 91,
    paddingVertical: Padding.p_xs,
    paddingHorizontal: 0,
    alignItems: "center",
    flexDirection: "row",
    left: 146,
    position: "absolute",
  },
  frameIconLayout: {
    height: 32,
    width: 32,
    position: "absolute",
  },
  iconLayout1: {
    height: "100%",
    width: "100%",
  },
  frameChild3Layout: {
    width: 360,
    position: "absolute",
  },
  pageHeaderChild: {
    top: -28,
    right: -17,
    bottom: -721,
    left: -18,
    backgroundColor: Color.colorRoyalblue_200,
    position: "absolute",
  },
  next1: {
    marginTop: -10.5,
    textAlign: "right",
    width: 36,
    height: 18,
    color: Color.lightGray0,
  },
  next: {
    top: "50%",
    right: 0,
  },
  back1: {
    width: 38,
    textAlign: "left",
    color: Color.lightGray0,
    height: 21,
  },
  back: {
    left: 0,
    top: 0,
    position: "absolute",
  },
  nextParent: {
    marginTop: -10,
    height: 21,
    left: 0,
    top: "50%",
    right: 0,
  },
  toDoList: {
    marginLeft: -70.5,
    fontSize: FontSize.uI30Semi_size,
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    textAlign: "center",
    width: 141,
    left: "50%",
    color: Color.lightGray0,
  },
  frameParent: {
    right: 3,
    left: 3,
  },
  pageHeader: {
    top: 28,
    right: 17,
    height: 34,
    left: 18,
    position: "absolute",
  },
  frameChild: {
    borderRadius: Border.br_base,
    bottom: 0,
    left: 0,
    top: 0,
    backgroundColor: Color.lightGray0,
  },
  frameItem: {
    top: 38,
    width: 232,
    maxHeight: "100%",
    left: 0,
    position: "absolute",
  },
  weHave: {
    color: Color.lightGray11,
  },
  text: {
    color: Color.colorOrange,
  },
  weHave4Container: {
    marginLeft: -106,
    fontFamily: FontFamily.outfitMedium,
    letterSpacing: 0.4,
    fontSize: FontSize.size_xl,
    left: "50%",
    textAlign: "left",
    fontWeight: "500",
    top: 0,
    position: "absolute",
  },
  vectorParent: {
    top: 90,
    right: 66,
    left: 62,
    height: 38,
    position: "absolute",
  },
  myDay: {
    fontFamily: FontFamily.openSansSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_xl,
  },
  november112024: {
    fontWeight: "300",
    fontFamily: FontFamily.openSansLight,
    fontSize: FontSize.bodyMedium_size,
  },
  myDayNovemberContainer: {
    color: Color.lightGray11,
    textAlign: "left",
    left: 0,
    top: 0,
    position: "absolute",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  vector: {
    left: "90.23%",
    top: "5.31%",
    right: "0%",
    bottom: "25.1%",
    width: "9.77%",
    height: "69.59%",
    position: "absolute",
  },
  myDayNovember112024Parent: {
    top: 17,
    right: 25,
    left: 26,
    height: 49,
    position: "absolute",
  },
  name: {
    left: 0,
  },
  icon1: {
    marginTop: 1,
  },
  icon2: {
    marginTop: -6,
  },
  nameParent: {
    left: 33,
    width: 47,
    top: 1,
  },
  icon3: {
    marginTop: 1,
  },
  icon4: {
    marginTop: -6,
  },
  nameGroup: {
    left: 157,
    width: 41,
    top: 0,
  },
  status: {
    left: 246,
  },
  frameContainer: {
    left: 34,
    width: 292,
    height: 17,
    top: 0,
    position: "absolute",
  },
  frameInner: {
    backgroundColor: Color.colorGainsboro_300,
    opacity: 0.3,
    height: 55,
    width: 311,
    left: 0,
  },
  appBuilderFo: {
    top: 18,
    width: 117,
    height: 19,
    lineHeight: 20,
    letterSpacing: 0.3,
    color: Color.colorDarkgray_300,
    fontSize: FontSize.bodyMedium_size,
    textAlign: "left",
    fontFamily: FontFamily.uI16Medium1,
    fontWeight: "500",
    left: 18,
    position: "absolute",
  },
  text1: {
    color: Color.colorDarkgray_300,
  },
  columnHeader: {
    top: 6,
    width: 92,
    paddingVertical: Padding.p_xs,
    paddingHorizontal: 0,
    left: 146,
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
  vector1: {
    left: 273,
    top: 16,
    width: 24,
  },
  frameInnerLayout: {
    height: 55,
    width: 311,
  },
  blackwhite: {
    top: 19,
    color: Color.colorDarkgray_300,
  },
  columnHeader1: {
    top: 8,
  },
  rectangleContainer: {
    width: 311,
    marginTop: 20,
  },
  frameContainer9Overlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  frameContainer9Bg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  colorDesign: {
    top: 20,
    color: Color.gray900,
  },
  text3: {
    color: Color.lightGray11,
  },
  columnHeader2: {
    top: 14,
    height: 29,
  },
  icon6: {
    overflow: "hidden",
  },
  carboncheckbox: {
    top: 13,
    left: 269,
    width: 32,
  },
  framePressable: {
    width: 261,
  },
  carboncheckboxIcon: {
    top: 12,
    left: 269,
    width: 32,
    overflow: "hidden",
  },
  frameView: {
    top: 32,
    left: 19,
    position: "absolute",
  },
  frameGroup: {
    marginLeft: -174,
    top: 152,
    width: 349,
    height: 318,
    left: "50%",
    position: "absolute",
  },
  rectangleParent: {
    top: 80,
    height: 720,
    left: 0,
  },
  frameChild3: {
    height: 71,
    top: 1,
    left: 0,
    backgroundColor: Color.lightGray0,
  },
  topDivider: {
    backgroundColor: Color.colorSilver_100,
    height: 1,
    top: 1,
    left: 0,
  },
  wrapper: {
    width: 49,
    height: 71,
  },
  frameIcon: {
    left: 9,
    top: 19,
  },
  frameChild4: {
    marginLeft: -24.5,
    height: 4,
    width: 49,
    left: "50%",
    backgroundColor: Color.colorRoyalblue_200,
  },
  frameParent2: {
    marginLeft: 12,
    width: 49,
    height: 71,
  },
  frameChild5: {
    marginLeft: -16,
    borderRadius: Border.br_81xl,
    backgroundColor: Color.gray02,
    left: "50%",
    top: 0,
  },
  vectorIcon1: {
    marginLeft: -9,
    top: 4,
    width: 18,
    left: "50%",
  },
  combinedShapeIcon: {
    height: "68.75%",
    width: "62.5%",
    top: "15.63%",
    right: "18.75%",
    bottom: "15.63%",
    left: "18.75%",
    position: "absolute",
  },
  frameParent1: {
    marginLeft: -146,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    top: 1,
    left: "50%",
    position: "absolute",
  },
  rectangleParent2: {
    marginLeft: -180,
    height: 72,
    bottom: 0,
    left: "50%",
  },
  toDoListclick: {
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.lightGray0,
  },
});

export default ToDoListClick;
