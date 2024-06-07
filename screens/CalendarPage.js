import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const CalendarPage = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.calendarPage}>
      <View style={styles.backgroundParent}>
        <Image
          style={styles.backgroundIcon}
          contentFit="cover"
          source={require("../assets/background.png")}
        />
        <View style={[styles.frameWrapper, styles.frameFlexBox]}>
          <View style={styles.frameContainer}>
            <View style={styles.frameParent}>
              <View style={styles.blackwhiteDesignParent}>
                <Text
                  style={[styles.blackwhiteDesign, styles.backTypo]}
                >{`Black&White Design`}</Text>
                <Text style={[styles.text, styles.textTypo2]}>
                  14:50 - 15:10
                </Text>
                <View style={[styles.divider, styles.dividerLayout]} />
                <Image
                  style={styles.icon}
                  contentFit="cover"
                  source={require("../assets/icon.png")}
                />
              </View>
              <View style={styles.colorDesignParent}>
                <Text style={[styles.colorDesign, styles.backTypo]}>
                  Color Design
                </Text>
                <Text style={[styles.text1, styles.textTypo2]}>
                  15:30 - 15:40
                </Text>
                <View style={[styles.divider1, styles.dividerLayout]} />
                <Image
                  style={styles.icon}
                  contentFit="cover"
                  source={require("../assets/icon1.png")}
                />
              </View>
              <View style={styles.colorDesignParent}>
                <Text style={[styles.colorDesign, styles.backTypo]}>
                  Mobile design
                </Text>
                <Text style={[styles.text1, styles.textTypo2]}>
                  18:00 - 19:00
                </Text>
                <View style={[styles.divider1, styles.dividerLayout]} />
                <Image
                  style={styles.icon}
                  contentFit="cover"
                  source={require("../assets/icon1.png")}
                />
              </View>
              <View style={styles.colorDesignParent}>
                <Text style={[styles.colorDesign, styles.backTypo]}>
                  App builder for Android
                </Text>
                <Text style={[styles.text3, styles.textTypo2]}>
                  20:00 - 22:00
                </Text>
                <View style={[styles.divider1, styles.dividerLayout]} />
                <Image
                  style={styles.icon}
                  contentFit="cover"
                  source={require("../assets/icon1.png")}
                />
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.pageHeaderParent}>
        <View style={styles.pageHeader}>
          <Text style={[styles.next, styles.nextTypo]}>Next</Text>
          <Text style={[styles.march, styles.marchPosition]}>Nov, 2024</Text>
          <Image
            style={styles.iconx}
            contentFit="cover"
            source={require("../assets/iconx.png")}
          />
          <Text style={[styles.back, styles.backPosition]}>Back</Text>
        </View>
        <Image
          style={[styles.keyboardArrowLeft, styles.text9Position]}
          contentFit="cover"
          source={require("../assets/keyboard-arrow-left.png")}
        />
        <Image
          style={[styles.keyboardArrowRight, styles.combinedShapeIconLayout]}
          contentFit="cover"
          source={require("../assets/keyboard-arrow-right.png")}
        />
      </View>
      <View style={styles.calendarParent}>
        <Text style={[styles.calendar, styles.marchPosition]}>Calendar</Text>
        <View style={styles.nextParent}>
          <Text style={[styles.next1, styles.nextTypo]}>Next</Text>
          <Pressable
            style={styles.backPosition}
            onPress={() => navigation.navigate("ToDoList")}
          >
            <Text style={[styles.back2, styles.backTypo]}>Back</Text>
          </Pressable>
        </View>
      </View>
      <View style={[styles.rectangleParent, styles.calendar1Position]}>
        <View style={[styles.frameChild, styles.frameChildLayout]} />
        <View style={[styles.calendar1, styles.calendar1Position]}>
          <View style={[styles.daysOfWeek, styles.calendarrowLayout]}>
            <Text style={[styles.mo, styles.textTypo1]}>Mo</Text>
            <Text style={[styles.tu, styles.textTypo1]}>Tu</Text>
            <Text style={[styles.we, styles.textTypo1]}>We</Text>
            <Text style={[styles.th, styles.textTypo1]}>Th</Text>
            <Text style={[styles.fr, styles.textTypo1]}>Fr</Text>
            <Text style={[styles.sa, styles.textTypo1]}>Sa</Text>
            <Text style={[styles.su, styles.textTypo1]}>Su</Text>
          </View>
          <View style={styles.days}>
            <View style={[styles.calendarrow01, styles.calendarrowLayout]}>
              <Text style={[styles.text4, styles.textTypo]}>29</Text>
              <Text style={[styles.text5, styles.textPosition2]}>30</Text>
              <Text style={[styles.text6, styles.textPosition1]}>31</Text>
              <Text style={[styles.text7, styles.textTypo1]}>1</Text>
              <Text style={[styles.text8, styles.textTypo1]}>2</Text>
              <Text style={[styles.text9, styles.textTypo1]}>3</Text>
              <Text style={[styles.text10, styles.textPosition]}>4</Text>
            </View>
            <View style={[styles.calendarrow02, styles.calendarrowLayout]}>
              <Text style={[styles.text11, styles.textTypo]}>5</Text>
              <Text style={[styles.text12, styles.textPosition2]}>6</Text>
              <Text style={[styles.text13, styles.textPosition1]}>7</Text>
              <Text style={[styles.text7, styles.textTypo1]}>8</Text>
              <Text style={[styles.text8, styles.textTypo1]}>9</Text>
              <Text style={[styles.text9, styles.textTypo1]}>10</Text>
              <Text style={[styles.text10, styles.textPosition]}>11</Text>
            </View>
            <View style={[styles.calendarrow03, styles.calendarrowLayout]}>
              <Text style={[styles.text11, styles.textTypo]}>12</Text>
              <Text style={[styles.text12, styles.textPosition2]}>13</Text>
              <Text style={[styles.text13, styles.textPosition1]}>14</Text>
              <Pressable
                style={styles.text28Position}
                onPress={() => navigation.navigate("CalendarPage1")}
              >
                <Text style={[styles.text21, styles.textTypo1]}>15</Text>
              </Pressable>
              <Text style={[styles.text22, styles.textTypo]}>16</Text>
              <Text style={[styles.text9, styles.textTypo1]}>17</Text>
              <Text style={[styles.text10, styles.textPosition]}>18</Text>
            </View>
            <View style={[styles.calendarrow04, styles.calendarrowLayout]}>
              <Text style={[styles.text11, styles.textTypo]}>19</Text>
              <Text style={[styles.text12, styles.textPosition2]}>20</Text>
              <Text style={[styles.text13, styles.textPosition1]}>21</Text>
              <Text style={[styles.text28, styles.text28Position]}>22</Text>
              <Text style={[styles.text22, styles.textTypo]}>23</Text>
              <Text style={[styles.text9, styles.textTypo1]}>24</Text>
              <Text style={[styles.text10, styles.textPosition]}>25</Text>
            </View>
            <View style={[styles.calendarrow05, styles.calendarrowLayout]}>
              <Text style={[styles.text11, styles.textTypo]}>26</Text>
              <Text style={[styles.text12, styles.textPosition2]}>27</Text>
              <Text style={[styles.text13, styles.textPosition1]}>28</Text>
              <Text style={[styles.text28, styles.text28Position]}>29</Text>
              <Text style={[styles.text22, styles.textTypo]}>30</Text>
              <Text style={[styles.text9, styles.textTypo1]}>31</Text>
              <Text style={[styles.text38, styles.textPosition]}>1</Text>
            </View>
          </View>
        </View>
        <Image
          style={[styles.frameItem, styles.frameItemLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-62.png")}
        />
      </View>
      <Image
        style={[styles.calendarPageChild, styles.frameItemLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-63.png")}
      />
      <View style={styles.rectangleGroup}>
        <View style={[styles.frameInner, styles.framePosition]} />
        <View style={[styles.topDivider, styles.framePosition]} />
        <View style={[styles.frameGroup, styles.framePosition]}>
          <Pressable
            style={styles.wrapper}
            onPress={() => navigation.navigate("KPICompletionProgress")}
          >
            <Image
              style={styles.icon4}
              contentFit="cover"
              source={require("../assets/frame-496334.png")}
            />
          </Pressable>
          <Pressable
            style={styles.container}
            onPress={() => navigation.navigate("ToDoList")}
          >
            <Image
              style={styles.icon4}
              contentFit="cover"
              source={require("../assets/frame-496326.png")}
            />
          </Pressable>
          <View style={styles.container}>
            <Image
              style={[styles.frameIcon, styles.frameLayout]}
              contentFit="cover"
              source={require("../assets/frame-496328.png")}
            />
            <View style={[styles.rectangleView, styles.frameChildLayout]} />
          </View>
          <Pressable
            style={styles.container}
            onPress={() => navigation.navigate("Notification1")}
          >
            <View style={[styles.frameIcon, styles.frameLayout]}>
              <View style={[styles.frameChild1, styles.frameLayout]} />
              <Image
                style={styles.vectorIcon}
                contentFit="cover"
                source={require("../assets/vector.png")}
              />
            </View>
          </Pressable>
          <Pressable
            style={styles.container}
            onPress={() => navigation.navigate("ProfilePhotos")}
          >
            <View style={[styles.frameIcon, styles.frameLayout]}>
              <View style={[styles.frameChild1, styles.frameLayout]} />
              <Image
                style={[
                  styles.combinedShapeIcon,
                  styles.combinedShapeIconLayout,
                ]}
                contentFit="cover"
                source={require("../assets/combined-shape.png")}
              />
            </View>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  frameFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    left: "50%",
  },
  backTypo: {
    textAlign: "left",
    fontFamily: FontFamily.uI16Medium1,
    fontWeight: "500",
    fontSize: FontSize.uI16Medium1_size,
  },
  textTypo2: {
    fontFamily: FontFamily.interLight,
    fontStyle: "italic",
    fontSize: FontSize.bodyMedium_size,
    textAlign: "left",
    top: 0,
    position: "absolute",
  },
  dividerLayout: {
    height: 1,
    right: 0,
  },
  nextTypo: {
    textAlign: "right",
    fontFamily: FontFamily.uI16Medium1,
    fontWeight: "500",
    fontSize: FontSize.uI16Medium1_size,
    right: 0,
    position: "absolute",
  },
  marchPosition: {
    textAlign: "center",
    color: Color.lightGray0,
    left: "50%",
    top: 0,
    position: "absolute",
  },
  backPosition: {
    top: "50%",
    left: 0,
    position: "absolute",
  },
  text9Position: {
    width: 24,
    top: 0,
    position: "absolute",
  },
  combinedShapeIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  calendar1Position: {
    height: 286,
    left: "50%",
    position: "absolute",
  },
  frameChildLayout: {
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  calendarrowLayout: {
    height: 17,
    position: "absolute",
  },
  textTypo1: {
    fontFamily: FontFamily.uI14Regular,
    textAlign: "center",
    fontSize: FontSize.bodyMedium_size,
  },
  textTypo: {
    width: 22,
    fontFamily: FontFamily.uI14Regular,
    textAlign: "center",
    fontSize: FontSize.bodyMedium_size,
    top: 0,
    position: "absolute",
  },
  textPosition2: {
    left: 58,
    width: 22,
    fontFamily: FontFamily.uI14Regular,
    textAlign: "center",
    fontSize: FontSize.bodyMedium_size,
    top: 0,
    position: "absolute",
  },
  textPosition1: {
    width: 19,
    left: 113,
    fontFamily: FontFamily.uI14Regular,
    textAlign: "center",
    fontSize: FontSize.bodyMedium_size,
    top: 0,
    position: "absolute",
  },
  textPosition: {
    left: 308,
    fontFamily: FontFamily.uI14Regular,
    width: 23,
    textAlign: "center",
    fontSize: FontSize.bodyMedium_size,
    top: 0,
    position: "absolute",
  },
  text28Position: {
    left: 166,
    top: 0,
    position: "absolute",
  },
  frameItemLayout: {
    height: 5,
    width: 5,
    position: "absolute",
  },
  framePosition: {
    top: 1,
    position: "absolute",
  },
  frameLayout: {
    height: 32,
    width: 32,
    position: "absolute",
  },
  backgroundIcon: {
    height: 180,
    maxWidth: "100%",
    left: 0,
    right: 0,
    top: 0,
    position: "absolute",
    overflow: "hidden",
  },
  blackwhiteDesign: {
    color: Color.black03,
    left: 32,
    fontFamily: FontFamily.uI16Medium1,
    fontWeight: "500",
    fontSize: FontSize.uI16Medium1_size,
    top: 0,
    position: "absolute",
  },
  text: {
    right: 5,
    color: Color.black03,
  },
  divider: {
    borderTopWidth: 1,
    borderColor: Color.gray02,
    borderStyle: "solid",
    top: 35,
    height: 1,
    position: "absolute",
    left: 0,
  },
  icon: {
    top: 2,
    width: 16,
    height: 16,
    left: 0,
    position: "absolute",
  },
  blackwhiteDesignParent: {
    height: 35,
    width: 329,
  },
  colorDesign: {
    color: Color.lightGray11,
    left: 32,
    fontFamily: FontFamily.uI16Medium1,
    fontWeight: "500",
    fontSize: FontSize.uI16Medium1_size,
    top: 0,
    position: "absolute",
  },
  text1: {
    right: 4,
    color: Color.lightGray11,
  },
  divider1: {
    left: 1,
    borderTopWidth: 1,
    borderColor: Color.gray02,
    borderStyle: "solid",
    top: 35,
    height: 1,
    position: "absolute",
  },
  colorDesignParent: {
    width: 330,
    marginTop: 16,
    height: 35,
  },
  text3: {
    color: Color.lightGray11,
    right: 0,
  },
  frameParent: {
    marginLeft: -164.5,
    left: "50%",
    top: 0,
    position: "absolute",
  },
  frameContainer: {
    height: 188,
    width: 329,
  },
  frameWrapper: {
    marginLeft: -164,
    top: 462,
    position: "absolute",
  },
  backgroundParent: {
    height: 650,
    left: 0,
    right: 0,
    top: 0,
    position: "absolute",
  },
  next: {
    display: "none",
    color: Color.greenPrimary1,
    top: 8,
  },
  march: {
    marginLeft: -48.5,
    fontSize: FontSize.size_xl,
    fontWeight: "600",
    fontFamily: FontFamily.overline,
  },
  iconx: {
    top: 5,
    height: 23,
    width: 23,
    display: "none",
    left: 0,
    position: "absolute",
  },
  back: {
    marginTop: -10,
    display: "none",
    color: Color.greenPrimary1,
    textAlign: "left",
    fontFamily: FontFamily.uI16Medium1,
    fontWeight: "500",
    fontSize: FontSize.uI16Medium1_size,
  },
  pageHeader: {
    marginLeft: -54.5,
    width: 103,
    height: 24,
    left: "50%",
    top: 0,
    position: "absolute",
  },
  keyboardArrowLeft: {
    height: 24,
    left: 0,
    overflow: "hidden",
  },
  keyboardArrowRight: {
    width: "15.29%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "84.71%",
    height: "100%",
  },
  pageHeaderParent: {
    marginLeft: -77,
    top: 106,
    width: 157,
    height: 24,
    left: "50%",
    position: "absolute",
  },
  calendar: {
    marginLeft: -66.5,
    fontSize: FontSize.uI30Semi_size,
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
  },
  next1: {
    color: Color.lightGray0,
    top: 0,
  },
  back2: {
    marginTop: -9.5,
    color: Color.lightGray0,
  },
  nextParent: {
    right: 6,
    height: 19,
    top: 8,
    left: 0,
    position: "absolute",
  },
  calendarParent: {
    top: 60,
    right: 17,
    left: 18,
    height: 36,
    position: "absolute",
  },
  frameChild: {
    top: 92,
    left: 310,
    backgroundColor: "#8bb9ff",
    width: 42,
    height: 42,
  },
  mo: {
    marginLeft: -162,
    color: Color.lightGray0,
    left: "50%",
    top: 0,
    position: "absolute",
  },
  tu: {
    marginLeft: -108,
    color: Color.lightGray0,
    left: "50%",
    top: 0,
    position: "absolute",
  },
  we: {
    marginLeft: -56,
    color: Color.lightGray0,
    left: "50%",
    top: 0,
    position: "absolute",
  },
  th: {
    marginLeft: 0,
    color: Color.lightGray0,
    left: "50%",
    top: 0,
    position: "absolute",
  },
  fr: {
    marginLeft: 50,
    color: Color.lightGray0,
    left: "50%",
    top: 0,
    position: "absolute",
  },
  sa: {
    marginLeft: 96,
    color: Color.lightGray0,
    left: "50%",
    top: 0,
    position: "absolute",
  },
  su: {
    marginLeft: 144,
    color: Color.lightGray0,
    left: "50%",
    top: 0,
    position: "absolute",
  },
  daysOfWeek: {
    marginLeft: -160.5,
    width: 324,
    left: "50%",
    top: 0,
  },
  text4: {
    color: Color.gray03,
    left: 0,
  },
  text5: {
    color: Color.gray03,
  },
  text6: {
    color: Color.gray03,
  },
  text7: {
    left: 173,
    width: 8,
    color: Color.lightGray11,
    top: 0,
    position: "absolute",
  },
  text8: {
    left: 219,
    width: 11,
    color: Color.lightGray11,
    top: 0,
    position: "absolute",
  },
  text9: {
    left: 260,
    width: 24,
    top: 0,
    position: "absolute",
    color: Color.lightGray11,
  },
  text10: {
    color: Color.lightGray11,
  },
  calendarrow01: {
    width: 331,
    left: 0,
    top: 0,
  },
  text11: {
    color: Color.lightGray11,
    left: 0,
  },
  text12: {
    color: Color.lightGray11,
  },
  text13: {
    color: Color.lightGray11,
  },
  calendarrow02: {
    top: 57,
    width: 331,
    left: 0,
  },
  text21: {
    width: 23,
    color: Color.lightGray11,
  },
  text22: {
    left: 213,
    color: Color.lightGray11,
  },
  calendarrow03: {
    top: 114,
    width: 331,
    left: 0,
  },
  text28: {
    fontFamily: FontFamily.uI14Regular,
    textAlign: "center",
    fontSize: FontSize.bodyMedium_size,
    width: 23,
    color: Color.lightGray11,
  },
  calendarrow04: {
    top: 171,
    width: 331,
    left: 0,
  },
  text38: {
    color: Color.gray03,
  },
  calendarrow05: {
    top: 220,
    width: 331,
    left: 0,
  },
  days: {
    top: 49,
    height: 237,
    width: 331,
    left: 0,
    position: "absolute",
  },
  calendar1: {
    marginLeft: -165.5,
    width: 331,
    top: 0,
  },
  frameItem: {
    top: 99,
    left: 329,
  },
  rectangleParent: {
    marginLeft: -177,
    top: 149,
    width: 355,
  },
  calendarPageChild: {
    top: 306,
    left: 191,
  },
  frameInner: {
    height: 71,
    width: 360,
    left: 0,
    backgroundColor: Color.lightGray0,
  },
  topDivider: {
    backgroundColor: Color.colorSilver_100,
    height: 1,
    right: 0,
    left: 0,
  },
  icon4: {
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
  frameIcon: {
    top: 19,
    left: 9,
  },
  rectangleView: {
    marginLeft: -24.5,
    backgroundColor: Color.colorRoyalblue_200,
    height: 4,
    width: 49,
    left: "50%",
    top: 0,
  },
  frameChild1: {
    marginLeft: -16,
    borderRadius: Border.br_81xl,
    backgroundColor: Color.gray02,
    left: "50%",
    top: 0,
  },
  vectorIcon: {
    marginLeft: -9,
    top: 4,
    width: 18,
    height: 24,
    left: "50%",
    position: "absolute",
  },
  combinedShapeIcon: {
    height: "68.75%",
    width: "62.5%",
    top: "15.63%",
    right: "18.75%",
    bottom: "15.63%",
    left: "18.75%",
  },
  frameGroup: {
    marginLeft: -146,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    left: "50%",
  },
  rectangleGroup: {
    marginLeft: -180,
    bottom: 0,
    height: 72,
    width: 360,
    left: "50%",
    position: "absolute",
  },
  calendarPage: {
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.lightGray0,
  },
});

export default CalendarPage;
