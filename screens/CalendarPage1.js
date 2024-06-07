import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Linking, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const CalendarPage1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.calendarPage15}>
      <View style={styles.backgroundParent}>
        <Image
          style={styles.backgroundIcon}
          contentFit="cover"
          source={require("../assets/background.png")}
        />
        <View style={styles.datagraphResultParent}>
          <View style={styles.datagraphLayout}>
            <Text style={[styles.aiProject, styles.backTypo]}>AI Project</Text>
            <Text style={[styles.text, styles.textTypo2]}>11:30 - 13:40</Text>
            <View style={[styles.divider, styles.dividerPosition]} />
            <Image
              style={styles.icon}
              contentFit="cover"
              source={require("../assets/icon1.png")}
            />
          </View>
          <View style={[styles.datagraphResult1, styles.datagraphLayout]}>
            <Text style={[styles.aiProject, styles.backTypo]}>
              Graduation Research
            </Text>
            <Text style={[styles.text1, styles.textTypo2]}>15:00 - 15:30</Text>
            <View style={[styles.divider, styles.dividerPosition]} />
            <Image
              style={styles.icon}
              contentFit="cover"
              source={require("../assets/icon1.png")}
            />
          </View>
          <View style={[styles.datagraphResult1, styles.datagraphLayout]}>
            <Text style={[styles.aiProject, styles.backTypo]}>
              English Course
            </Text>
            <Text style={[styles.text1, styles.textTypo2]}>19:00 - 21:00</Text>
            <View style={[styles.divider, styles.dividerPosition]} />
            <Image
              style={styles.icon}
              contentFit="cover"
              source={require("../assets/icon1.png")}
            />
          </View>
        </View>
      </View>
      <View style={[styles.vectorParent, styles.calendarLayout]}>
        <Pressable
          style={[styles.wrapper, styles.wrapperLayout]}
          onPress={() => navigation.navigate("CalendarPage")}
        >
          <Image
            style={styles.icon3}
            contentFit="cover"
            source={require("../assets/rectangle-242.png")}
          />
        </Pressable>
        <View style={[styles.calendar, styles.calendarLayout]}>
          <Image
            style={[styles.calendarChild, styles.wrapperLayout]}
            contentFit="cover"
            source={require("../assets/rectangle-2421.png")}
          />
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
              <Text style={[styles.text3, styles.textTypo]}>29</Text>
              <Text style={[styles.text4, styles.textPosition2]}>30</Text>
              <Text style={[styles.text5, styles.textPosition1]}>31</Text>
              <Text style={[styles.text6, styles.textTypo1]}>1</Text>
              <Text style={[styles.text7, styles.textTypo1]}>2</Text>
              <Text style={[styles.text8, styles.text8Layout]}>3</Text>
              <Text style={[styles.text9, styles.textPosition]}>4</Text>
            </View>
            <View style={[styles.calendarrow02, styles.calendarrowLayout]}>
              <Text style={[styles.text10, styles.textTypo]}>5</Text>
              <Text style={[styles.text11, styles.textPosition2]}>6</Text>
              <Text style={[styles.text12, styles.textPosition1]}>7</Text>
              <Text style={[styles.text6, styles.textTypo1]}>8</Text>
              <Text style={[styles.text7, styles.textTypo1]}>9</Text>
              <Text style={[styles.text8, styles.text8Layout]}>10</Text>
              <Pressable
                style={styles.textPosition}
                onPress={() => navigation.navigate("CalendarPage")}
              >
                <Text style={[styles.text16, styles.textTypo1]}>11</Text>
              </Pressable>
            </View>
            <View style={[styles.calendarrow03, styles.calendarrowLayout]}>
              <Text style={[styles.text10, styles.textTypo]}>12</Text>
              <Text style={[styles.text11, styles.textPosition2]}>13</Text>
              <Text style={[styles.text12, styles.textPosition1]}>14</Text>
              <Text style={[styles.text20, styles.textTypo1]}>15</Text>
              <Text style={[styles.text21, styles.textTypo]}>16</Text>
              <Text style={[styles.text8, styles.text8Layout]}>17</Text>
              <Text style={[styles.text9, styles.textPosition]}>18</Text>
            </View>
            <View style={[styles.calendarrow04, styles.calendarrowLayout]}>
              <Text style={[styles.text10, styles.textTypo]}>19</Text>
              <Text style={[styles.text11, styles.textPosition2]}>20</Text>
              <Text style={[styles.text12, styles.textPosition1]}>21</Text>
              <Text style={[styles.text20, styles.textTypo1]}>22</Text>
              <Text style={[styles.text21, styles.textTypo]}>23</Text>
              <Text style={[styles.text8, styles.text8Layout]}>24</Text>
              <Text style={[styles.text9, styles.textPosition]}>25</Text>
            </View>
            <View style={[styles.calendarrow05, styles.calendarrowLayout]}>
              <Text style={[styles.text10, styles.textTypo]}>26</Text>
              <Text style={[styles.text11, styles.textPosition2]}>27</Text>
              <Text style={[styles.text12, styles.textPosition1]}>28</Text>
              <Text style={[styles.text20, styles.textTypo1]}>29</Text>
              <Text style={[styles.text21, styles.textTypo]}>30</Text>
              <Text style={[styles.text8, styles.text8Layout]}>31</Text>
              <Text style={[styles.text37, styles.textPosition]}>1</Text>
            </View>
          </View>
        </View>
        <Pressable
          style={styles.container}
          onPress={() => navigation.navigate("CalendarPage")}
        >
          <Image
            style={styles.icon4}
            contentFit="cover"
            source={require("../assets/ellipse-62.png")}
          />
        </Pressable>
      </View>
      <View style={[styles.pageHeaderParent, styles.pageLayout]}>
        <View style={[styles.pageHeader, styles.pageLayout]}>
          <Text style={[styles.next, styles.nextTypo]}>Next</Text>
          <Text style={styles.march}>Nov, 2024</Text>
          <Image
            style={styles.iconx}
            contentFit="cover"
            source={require("../assets/iconx.png")}
          />
          <Text style={[styles.back, styles.backPosition]}>Back</Text>
        </View>
        <Image
          style={[styles.keyboardArrowLeft, styles.pageLayout]}
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
        <Text style={styles.calendar1}>Calendar</Text>
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
      <View style={styles.rectangleParent}>
        <View style={[styles.frameChild, styles.framePosition]} />
        <View style={[styles.topDivider, styles.framePosition]} />
        <View style={[styles.frameParent, styles.framePosition]}>
          <Pressable
            style={styles.frame}
            onPress={() => navigation.navigate("KPICompletionProgress")}
          >
            <Image
              style={styles.icon4}
              contentFit="cover"
              source={require("../assets/frame-496334.png")}
            />
          </Pressable>
          <Pressable
            style={styles.framePressable}
            onPress={() => navigation.navigate("ToDoList")}
          >
            <Image
              style={styles.icon4}
              contentFit="cover"
              source={require("../assets/frame-496326.png")}
            />
          </Pressable>
          <View style={styles.framePressable}>
            <Image
              style={[styles.frameItem, styles.frameItemLayout]}
              contentFit="cover"
              source={require("../assets/frame-496328.png")}
            />
            <View style={styles.frameInner} />
          </View>
          <Pressable
            style={styles.framePressable}
            onPress={() => navigation.navigate("Notification1")}
          >
            <View style={[styles.frameItem, styles.frameItemLayout]}>
              <View style={[styles.rectangleView, styles.frameItemLayout]} />
              <Image
                style={[styles.vectorIcon, styles.pageLayout]}
                contentFit="cover"
                source={require("../assets/vector.png")}
              />
            </View>
          </Pressable>
          <Pressable
            style={styles.framePressable}
            onPress={() => navigation.navigate("ProfilePhotos")}
          >
            <View style={[styles.frameItem, styles.frameItemLayout]}>
              <View style={[styles.rectangleView, styles.frameItemLayout]} />
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
    color: Color.lightGray11,
    top: 0,
    position: "absolute",
  },
  dividerPosition: {
    height: 1,
    right: 0,
    left: 0,
  },
  datagraphLayout: {
    height: 35,
    width: 329,
  },
  calendarLayout: {
    height: 286,
    position: "absolute",
  },
  wrapperLayout: {
    height: 42,
    width: 42,
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
    textAlign: "center",
    fontFamily: FontFamily.uI14Regular,
    fontSize: FontSize.bodyMedium_size,
    top: 0,
    position: "absolute",
  },
  textPosition2: {
    left: 58,
    width: 22,
    textAlign: "center",
    fontFamily: FontFamily.uI14Regular,
    fontSize: FontSize.bodyMedium_size,
    top: 0,
    position: "absolute",
  },
  textPosition1: {
    width: 19,
    left: 113,
    textAlign: "center",
    fontFamily: FontFamily.uI14Regular,
    fontSize: FontSize.bodyMedium_size,
    top: 0,
    position: "absolute",
  },
  text8Layout: {
    width: 24,
    top: 0,
  },
  textPosition: {
    left: 308,
    top: 0,
    position: "absolute",
  },
  pageLayout: {
    height: 24,
    position: "absolute",
  },
  nextTypo: {
    textAlign: "right",
    fontFamily: FontFamily.uI16Medium1,
    fontWeight: "500",
    fontSize: FontSize.uI16Medium1_size,
    right: 0,
    position: "absolute",
  },
  backPosition: {
    top: "50%",
    left: 0,
    position: "absolute",
  },
  combinedShapeIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  framePosition: {
    top: 1,
    position: "absolute",
  },
  frameItemLayout: {
    height: 32,
    width: 32,
    position: "absolute",
  },
  backgroundIcon: {
    height: 180,
    maxWidth: "100%",
    right: 0,
    left: 0,
    top: 0,
    position: "absolute",
    overflow: "hidden",
  },
  aiProject: {
    left: 31,
    color: Color.lightGray11,
    top: 0,
    position: "absolute",
  },
  text: {
    right: 6,
  },
  divider: {
    top: 35,
    borderStyle: "solid",
    borderColor: Color.gray02,
    borderTopWidth: 1,
    position: "absolute",
  },
  icon: {
    top: 2,
    width: 16,
    height: 16,
    left: 0,
    position: "absolute",
  },
  text1: {
    right: 4,
  },
  datagraphResult1: {
    marginTop: 16,
  },
  datagraphResultParent: {
    marginLeft: -164,
    top: 462,
    left: "50%",
    position: "absolute",
  },
  backgroundParent: {
    height: 650,
    width: 360,
    left: 0,
    top: 0,
    position: "absolute",
  },
  icon3: {
    height: "100%",
    borderRadius: Border.br_3xs,
    width: "100%",
  },
  wrapper: {
    left: 310,
    top: 92,
  },
  calendarChild: {
    top: 150,
    left: 157,
    borderRadius: Border.br_3xs,
  },
  mo: {
    marginLeft: -162,
    textAlign: "center",
    color: Color.lightGray0,
    left: "50%",
    top: 0,
    position: "absolute",
  },
  tu: {
    marginLeft: -108,
    textAlign: "center",
    color: Color.lightGray0,
    left: "50%",
    top: 0,
    position: "absolute",
  },
  we: {
    marginLeft: -56,
    textAlign: "center",
    color: Color.lightGray0,
    left: "50%",
    top: 0,
    position: "absolute",
  },
  th: {
    marginLeft: 0,
    textAlign: "center",
    color: Color.lightGray0,
    left: "50%",
    top: 0,
    position: "absolute",
  },
  fr: {
    marginLeft: 50,
    textAlign: "center",
    color: Color.lightGray0,
    left: "50%",
    top: 0,
    position: "absolute",
  },
  sa: {
    marginLeft: 96,
    textAlign: "center",
    color: Color.lightGray0,
    left: "50%",
    top: 0,
    position: "absolute",
  },
  su: {
    marginLeft: 144,
    textAlign: "center",
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
  text3: {
    color: Color.gray03,
    left: 0,
  },
  text4: {
    color: Color.gray03,
  },
  text5: {
    color: Color.gray03,
  },
  text6: {
    left: 173,
    width: 8,
    textAlign: "center",
    color: Color.lightGray11,
    top: 0,
    position: "absolute",
  },
  text7: {
    left: 219,
    width: 11,
    textAlign: "center",
    color: Color.lightGray11,
    top: 0,
    position: "absolute",
  },
  text8: {
    left: 260,
    textAlign: "center",
    fontFamily: FontFamily.uI14Regular,
    fontSize: FontSize.bodyMedium_size,
    color: Color.lightGray11,
    position: "absolute",
  },
  text9: {
    width: 23,
    textAlign: "center",
    fontFamily: FontFamily.uI14Regular,
    fontSize: FontSize.bodyMedium_size,
    color: Color.lightGray11,
  },
  calendarrow01: {
    width: 331,
    left: 0,
    top: 0,
  },
  text10: {
    color: Color.lightGray11,
    left: 0,
  },
  text11: {
    color: Color.lightGray11,
  },
  text12: {
    color: Color.lightGray11,
  },
  text16: {
    width: 23,
    textAlign: "center",
    color: Color.lightGray11,
  },
  calendarrow02: {
    top: 57,
    width: 331,
    left: 0,
  },
  text20: {
    left: 166,
    width: 23,
    textAlign: "center",
    color: Color.lightGray11,
    top: 0,
    position: "absolute",
  },
  text21: {
    left: 213,
    color: Color.lightGray11,
  },
  calendarrow03: {
    top: 114,
    width: 331,
    left: 0,
  },
  calendarrow04: {
    top: 171,
    width: 331,
    left: 0,
  },
  text37: {
    width: 23,
    color: Color.gray03,
    textAlign: "center",
    fontFamily: FontFamily.uI14Regular,
    fontSize: FontSize.bodyMedium_size,
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
  calendar: {
    left: 12,
    width: 331,
    top: 0,
  },
  icon4: {
    height: "100%",
    width: "100%",
  },
  container: {
    left: 329,
    top: 99,
    width: 5,
    height: 5,
    position: "absolute",
  },
  vectorParent: {
    marginLeft: -177,
    top: 149,
    width: 355,
    left: "50%",
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
    textAlign: "center",
    color: Color.lightGray0,
    left: "50%",
    top: 0,
    position: "absolute",
  },
  iconx: {
    top: 5,
    height: 23,
    display: "none",
    width: 23,
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
    left: "50%",
    top: 0,
  },
  keyboardArrowLeft: {
    width: 24,
    top: 0,
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
    left: "50%",
  },
  calendar1: {
    marginLeft: -66.5,
    fontSize: FontSize.uI30Semi_size,
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    textAlign: "center",
    color: Color.lightGray0,
    left: "50%",
    top: 0,
    position: "absolute",
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
    marginLeft: -162.5,
    width: 319,
    height: 19,
    top: 8,
    left: "50%",
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
  frame: {
    width: 49,
    height: 71,
  },
  framePressable: {
    marginLeft: 12,
    width: 49,
    height: 71,
  },
  frameItem: {
    top: 19,
    left: 9,
  },
  frameInner: {
    marginLeft: -24.5,
    backgroundColor: Color.colorRoyalblue_200,
    height: 4,
    width: 49,
    borderRadius: Border.br_3xs,
    left: "50%",
    top: 0,
    position: "absolute",
  },
  rectangleView: {
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
    left: "50%",
  },
  combinedShapeIcon: {
    height: "68.75%",
    width: "62.5%",
    top: "15.63%",
    right: "18.75%",
    bottom: "15.63%",
    left: "18.75%",
  },
  frameParent: {
    marginLeft: -146,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    left: "50%",
  },
  rectangleParent: {
    marginLeft: -180,
    bottom: 0,
    height: 72,
    left: "50%",
    width: 360,
    position: "absolute",
  },
  calendarPage15: {
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.lightGray0,
  },
});

export default CalendarPage1;
