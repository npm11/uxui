import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Border, FontFamily, FontSize, Color, Padding } from "../GlobalStyles";

const KPICompletionProgressDetail1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.kpiCompletionProgressdetail}>
      <View style={[styles.rectangleParent, styles.frameChildPosition]}>
        <View style={[styles.frameChild, styles.frameChildPosition]} />
        <View style={[styles.search, styles.searchLayout]}>
          <View style={[styles.searchChild, styles.childPosition]} />
          <View style={styles.searchTaskDocumentsActiviParent}>
            <Text
              style={[styles.searchTaskDocuments, styles.taskLayout]}
            >{`Search Task, Documents, Activities... `}</Text>
            <Image
              style={[styles.iconlylightOutlinesearch, styles.iconLayout1]}
              contentFit="cover"
              source={require("../assets/iconlylight-outlinesearch1.png")}
            />
          </View>
        </View>
        <View style={styles.myKpiParent}>
          <Text style={styles.myKpi}>My KPI</Text>
          <View style={styles.nextParent}>
            <Pressable
              style={styles.next}
              onPress={() => navigation.navigate("ToDoList")}
            >
              <Text style={[styles.next1, styles.next1Typo]}>Next</Text>
            </Pressable>
            <Pressable
              style={styles.logout}
              onPress={() => navigation.navigate("Home")}
            >
              <Text style={[styles.logout1, styles.next1Typo]}>Logout</Text>
            </Pressable>
          </View>
        </View>
      </View>
      <View style={[styles.scrollParent, styles.parentLayout]}>
        <View style={[styles.scroll, styles.scrollLayout]}>
          <View style={[styles.scrollChild, styles.scrollLayout]} />
          <View style={[styles.scrollItem, styles.scrollItemPosition]} />
        </View>
        <View style={[styles.frameWrapper, styles.frameWrapperLayout]}>
          <View style={[styles.createNewPlanWrapper, styles.searchLayout]}>
            <Text style={[styles.createNewPlan, styles.createNewPlanPosition]}>
              Create new plan
            </Text>
          </View>
        </View>
        <View style={[styles.frameParent, styles.frameParentFlexBox]}>
          <View style={styles.planNameParent}>
            <Text style={[styles.planName, styles.fromTypo]}>Plan name</Text>
            <View style={[styles.rectangleWrapper, styles.groupChildPosition1]}>
              <View style={[styles.groupChild, styles.groupChildBorder]} />
            </View>
            <Text style={[styles.enterPlanName, styles.enterTypo]}>
              Enter plan name here
            </Text>
          </View>
          <View style={styles.fromParent}>
            <Text style={[styles.from, styles.fromTypo]}>From</Text>
            <View style={[styles.groupParent, styles.groupLayout1]}>
              <View style={[styles.rectangleGroup, styles.rectanglePosition]}>
                <View style={[styles.groupChild, styles.groupChildBorder]} />
                <Text style={[styles.text, styles.hTypo]}>30</Text>
                <Image
                  style={[styles.caretdownIcon, styles.caretdownIconLayout]}
                  contentFit="cover"
                  source={require("../assets/caretdown4.png")}
                />
              </View>
              <View
                style={[styles.rectangleContainer, styles.rectanglePosition]}
              >
                <View style={[styles.groupChild, styles.groupChildBorder]} />
                <Text style={styles.april}>April</Text>
                <Image
                  style={[styles.caretdownIcon1, styles.caretdownIconLayout]}
                  contentFit="cover"
                  source={require("../assets/caretdown5.png")}
                />
              </View>
              <View style={styles.groupView}>
                <View style={[styles.rectangleView, styles.text1Layout]} />
                <Text style={[styles.text1, styles.text1Layout]}>2024</Text>
                <Image
                  style={styles.caretdownIcon2}
                  contentFit="cover"
                  source={require("../assets/caretdown6.png")}
                />
              </View>
              <Image
                style={[styles.iconinterfacescalendar, styles.iconLayout1]}
                contentFit="cover"
                source={require("../assets/iconinterfacescalendar11.png")}
              />
            </View>
            <View style={[styles.groupContainer, styles.groupLayout1]}>
              <View
                style={[
                  styles.rectangleParent1,
                  styles.rectangleParentPosition,
                ]}
              >
                <View style={[styles.groupChild, styles.groupChildBorder]} />
                <Text style={[styles.h, styles.hTypo]}>20h</Text>
                <Image
                  style={[styles.caretdownIcon3, styles.caretdownIconPosition]}
                  contentFit="cover"
                  source={require("../assets/caretdown7.png")}
                />
              </View>
              <View
                style={[
                  styles.rectangleParent2,
                  styles.rectangleParentPosition,
                ]}
              >
                <View style={[styles.groupChild, styles.groupChildBorder]} />
                <Text style={[styles.m, styles.hTypo]}>30m</Text>
                <Image
                  style={[styles.caretdownIcon4, styles.caretdownIconPosition]}
                  contentFit="cover"
                  source={require("../assets/caretdown8.png")}
                />
              </View>
            </View>
          </View>
          <View style={styles.fromParent}>
            <Text style={[styles.from, styles.fromTypo]}>To</Text>
            <View style={[styles.groupParent, styles.groupLayout1]}>
              <View style={[styles.rectangleGroup, styles.rectanglePosition]}>
                <View style={[styles.groupChild, styles.groupChildBorder]} />
                <Text style={[styles.text, styles.hTypo]}>30</Text>
                <Image
                  style={[styles.caretdownIcon, styles.caretdownIconLayout]}
                  contentFit="cover"
                  source={require("../assets/caretdown4.png")}
                />
              </View>
              <View
                style={[styles.rectangleContainer, styles.rectanglePosition]}
              >
                <View style={[styles.groupChild, styles.groupChildBorder]} />
                <Text style={styles.april}>April</Text>
                <Image
                  style={[styles.caretdownIcon1, styles.caretdownIconLayout]}
                  contentFit="cover"
                  source={require("../assets/caretdown5.png")}
                />
              </View>
              <View style={styles.groupView}>
                <View style={[styles.rectangleView, styles.text1Layout]} />
                <Text style={[styles.text1, styles.text1Layout]}>2024</Text>
                <Image
                  style={styles.caretdownIcon2}
                  contentFit="cover"
                  source={require("../assets/caretdown6.png")}
                />
              </View>
              <Image
                style={[styles.iconinterfacescalendar, styles.iconLayout1]}
                contentFit="cover"
                source={require("../assets/iconinterfacescalendar11.png")}
              />
            </View>
            <View style={[styles.groupContainer, styles.groupLayout1]}>
              <View
                style={[
                  styles.rectangleParent1,
                  styles.rectangleParentPosition,
                ]}
              >
                <View style={[styles.groupChild, styles.groupChildBorder]} />
                <Text style={[styles.h, styles.hTypo]}>20h</Text>
                <Image
                  style={[styles.caretdownIcon3, styles.caretdownIconPosition]}
                  contentFit="cover"
                  source={require("../assets/caretdown7.png")}
                />
              </View>
              <View
                style={[
                  styles.rectangleParent2,
                  styles.rectangleParentPosition,
                ]}
              >
                <View style={[styles.groupChild, styles.groupChildBorder]} />
                <Text style={[styles.m, styles.hTypo]}>30m</Text>
                <Image
                  style={[styles.caretdownIcon4, styles.caretdownIconPosition]}
                  contentFit="cover"
                  source={require("../assets/caretdown8.png")}
                />
              </View>
            </View>
          </View>
          <View style={styles.descriptionParent}>
            <Text style={[styles.description, styles.fromTypo]}>
              Description
            </Text>
            <View style={[styles.groupParent2, styles.groupLayout]}>
              <View style={[styles.rectangleFrame, styles.groupLayout]}>
                <View style={[styles.groupChild8, styles.groupLayout]} />
              </View>
              <Text style={[styles.pleaseEnterDescription, styles.enterTypo]}>
                Please enter description (/250)
              </Text>
            </View>
          </View>
          <View style={styles.frameGroup}>
            <View style={[styles.frameContainer, styles.scrollItemPosition]}>
              <View style={styles.taskLayout}>
                <Text style={[styles.taskName, styles.text4Layout]}>
                  Task name
                </Text>
                <Text style={styles.april82024}>
                  April 8, 2024 15:30 - 15:40
                </Text>
                <Text style={[styles.text4, styles.text4Layout]}>1</Text>
                <Image
                  style={[
                    styles.materialSymbolsLightdeleteIcon,
                    styles.iconLayout,
                  ]}
                  contentFit="cover"
                  source={require("../assets/materialsymbolslightdeleteoutline.png")}
                />
              </View>
              <View style={[styles.taskNameGroup, styles.taskLayout]}>
                <Text style={[styles.taskName, styles.text4Layout]}>
                  Task name
                </Text>
                <Text style={styles.april82024}>
                  April 8, 2024 15:30 - 15:40
                </Text>
                <Text style={[styles.text4, styles.text4Layout]}>2</Text>
                <Image
                  style={[
                    styles.materialSymbolsLightdeleteIcon,
                    styles.iconLayout,
                  ]}
                  contentFit="cover"
                  source={require("../assets/materialsymbolslightdeleteoutline.png")}
                />
              </View>
              <View style={[styles.taskNameGroup, styles.taskLayout]}>
                <Text style={[styles.taskName, styles.text4Layout]}>
                  Task name
                </Text>
                <Text style={styles.april82024}>
                  April 8, 2024 15:30 - 15:40
                </Text>
                <Text style={[styles.text4, styles.text4Layout]}>3</Text>
                <Image
                  style={[
                    styles.materialSymbolsLightdeleteIcon,
                    styles.iconLayout,
                  ]}
                  contentFit="cover"
                  source={require("../assets/materialsymbolslightdeleteoutline.png")}
                />
              </View>
            </View>
            <View style={styles.rectangleParent8}>
              <View style={[styles.frameItem, styles.frameLayout1]} />
              <View style={[styles.frameInner, styles.frameLayout1]} />
            </View>
            <Image
              style={[styles.carbonaddFilledIcon, styles.text4Layout]}
              contentFit="cover"
              source={require("../assets/carbonaddfilled.png")}
            />
            <View style={styles.taskListOptionalParent}>
              <Text
                style={[
                  styles.taskListOptionalContainer,
                  styles.createNewPlanPosition,
                ]}
              >
                <Text style={styles.taskTypo}>Task list (</Text>
                <Text style={styles.optional}>Optional</Text>
                <Text style={styles.taskTypo}>)</Text>
              </Text>
              <Image
                style={[styles.vectorIcon, styles.iconLayout1]}
                contentFit="cover"
                source={require("../assets/vector6.png")}
              />
            </View>
          </View>
          <View style={styles.groupParent3}>
            <Pressable
              style={[styles.groupPressable, styles.groupChildLayout]}
              onPress={() => navigation.navigate("KPICompletionProgress")}
            >
              <View style={[styles.groupChild9, styles.groupChildPosition]} />
              <Text style={[styles.save, styles.saveTypo]}>Save</Text>
            </Pressable>
            <Pressable
              style={[styles.rectangleParent9, styles.groupChildLayout]}
              onPress={() => navigation.navigate("KPICompletionProgress")}
            >
              <View style={[styles.groupChild10, styles.groupChildPosition]} />
              <Text style={[styles.cancel, styles.saveTypo]}>Cancel</Text>
            </Pressable>
          </View>
        </View>
      </View>
      <Image
        style={[
          styles.kpiCompletionProgressdetailChild,
          styles.frameWrapperLayout,
        ]}
        contentFit="cover"
        source={require("../assets/line-172.png")}
      />
      <View style={[styles.rectangleParent10, styles.topDividerPosition]}>
        <View style={[styles.frameChild1, styles.topDividerPosition]} />
        <View style={[styles.topDivider, styles.topDividerPosition]} />
        <View style={styles.frameWrapper1}>
          <View style={[styles.frameParent1, styles.frameParentFlexBox]}>
            <View style={styles.frameParent2}>
              <Image
                style={[styles.frameIcon, styles.frameLayout]}
                contentFit="cover"
                source={require("../assets/frame-496339.png")}
              />
              <View style={[styles.frameChild2, styles.groupChildPosition]} />
            </View>
            <Pressable
              style={styles.wrapper}
              onPress={() => navigation.navigate("ToDoList")}
            >
              <Image
                style={styles.icon}
                contentFit="cover"
                source={require("../assets/frame-496326.png")}
              />
            </Pressable>
            <Pressable
              style={styles.wrapper}
              onPress={() => navigation.navigate("CalendarPage")}
            >
              <Image
                style={styles.icon}
                contentFit="cover"
                source={require("../assets/frame-496332.png")}
              />
            </Pressable>
            <Pressable
              style={styles.wrapper}
              onPress={() => navigation.navigate("Notification1")}
            >
              <View style={[styles.frameIcon, styles.frameLayout]}>
                <View style={[styles.frameChild3, styles.frameLayout]} />
                <Image
                  style={[styles.vectorIcon1, styles.iconLayout]}
                  contentFit="cover"
                  source={require("../assets/vector.png")}
                />
              </View>
            </Pressable>
            <Pressable
              style={styles.wrapper}
              onPress={() => navigation.navigate("ProfilePhotos")}
            >
              <View style={[styles.frameIcon, styles.frameLayout]}>
                <View style={[styles.frameChild3, styles.frameLayout]} />
                <Image
                  style={[styles.combinedShapeIcon, styles.iconLayout1]}
                  contentFit="cover"
                  source={require("../assets/combined-shape.png")}
                />
              </View>
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  frameChildPosition: {
    height: 201,
    left: 0,
    top: 0,
    position: "absolute",
  },
  searchLayout: {
    height: 41,
    position: "absolute",
  },
  childPosition: {
    borderRadius: Border.br_31xl,
    left: 0,
    top: 0,
  },
  taskLayout: {
    height: 19,
    width: 266,
  },
  iconLayout1: {
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  next1Typo: {
    fontFamily: FontFamily.uI16Medium1,
    fontWeight: "500",
    fontSize: FontSize.uI16Medium1_size,
    color: Color.lightGray0,
  },
  parentLayout: {
    width: 360,
    overflow: "hidden",
    backgroundColor: Color.lightGray0,
  },
  scrollLayout: {
    height: 375,
    width: 4,
    position: "absolute",
  },
  scrollItemPosition: {
    top: 24,
    left: 0,
    position: "absolute",
  },
  frameWrapperLayout: {
    width: 332,
    position: "absolute",
  },
  createNewPlanPosition: {
    color: Color.lightGray11,
    textAlign: "left",
    left: 0,
    top: 0,
    position: "absolute",
  },
  frameParentFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    left: "50%",
    position: "absolute",
  },
  fromTypo: {
    display: "flex",
    lineHeight: 20,
    fontSize: FontSize.size_smi,
    alignItems: "center",
    color: Color.lightGray11,
    left: "0%",
    textAlign: "left",
    fontFamily: FontFamily.openSansSemiBold,
    fontWeight: "600",
    position: "absolute",
  },
  groupChildPosition1: {
    bottom: "0%",
    top: "0%",
    height: "100%",
  },
  groupChildBorder: {
    borderWidth: 1,
    borderColor: Color.colorGainsboro_200,
    borderStyle: "solid",
    borderRadius: Border.br_9xs,
    backgroundColor: Color.lightGray0,
  },
  enterTypo: {
    color: Color.black03,
    fontFamily: FontFamily.notoSansItalic,
    lineHeight: 24,
    fontStyle: "italic",
    display: "flex",
    alignItems: "center",
    textAlign: "left",
  },
  groupLayout1: {
    height: 30,
    position: "absolute",
  },
  rectanglePosition: {
    top: "0.66%",
    width: "28.31%",
    height: "99.34%",
    bottom: "0%",
    position: "absolute",
  },
  hTypo: {
    left: "13.33%",
    height: "55%",
    width: "43.46%",
    color: Color.black03,
    fontFamily: FontFamily.notoSansItalic,
    fontStyle: "italic",
    lineHeight: 24,
    display: "flex",
    fontSize: FontSize.size_smi,
    alignItems: "center",
    textAlign: "left",
    position: "absolute",
  },
  caretdownIconLayout: {
    height: 8,
    width: 9,
    top: 13,
    position: "absolute",
  },
  text1Layout: {
    height: "99.33%",
    position: "absolute",
  },
  rectangleParentPosition: {
    width: "46.73%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
  },
  caretdownIconPosition: {
    top: 12,
    height: 8,
    width: 9,
    position: "absolute",
  },
  groupLayout: {
    height: 64,
    width: 325,
    left: 0,
    position: "absolute",
  },
  text4Layout: {
    height: 16,
    position: "absolute",
  },
  iconLayout: {
    width: 18,
    position: "absolute",
  },
  frameLayout1: {
    width: 5,
    height: 78,
    borderRadius: Border.br_31xl,
    left: 0,
    top: 0,
    position: "absolute",
  },
  groupChildLayout: {
    width: 107,
    height: 35,
  },
  groupChildPosition: {
    borderRadius: Border.br_3xs,
    top: 0,
    position: "absolute",
  },
  saveTypo: {
    fontFamily: FontFamily.openSansBold,
    fontSize: FontSize.bodyMedium_size,
    height: 18,
    color: Color.lightGray0,
    fontWeight: "700",
    textAlign: "left",
    top: 9,
    position: "absolute",
  },
  topDividerPosition: {
    marginLeft: -180,
    left: "50%",
    width: 360,
    position: "absolute",
  },
  frameLayout: {
    height: 32,
    width: 32,
    position: "absolute",
  },
  frameChild: {
    backgroundColor: Color.colorRoyalblue_200,
    right: 0,
  },
  searchChild: {
    height: 41,
    position: "absolute",
    width: 344,
    backgroundColor: Color.lightGray0,
  },
  searchTaskDocuments: {
    top: 2,
    left: 36,
    fontSize: FontSize.size_mini,
    color: Color.colorGray_100,
    textAlign: "left",
    fontFamily: FontFamily.openSansSemiBold,
    fontWeight: "600",
    position: "absolute",
  },
  iconlylightOutlinesearch: {
    width: "7.71%",
    right: "92.29%",
    maxHeight: "100%",
    left: "0%",
    bottom: "0%",
    top: "0%",
    height: "100%",
  },
  searchTaskDocumentsActiviParent: {
    left: 26,
    width: 301,
    height: 23,
    top: 9,
    position: "absolute",
  },
  search: {
    top: 81,
    left: 8,
    width: 344,
    height: 41,
  },
  myKpi: {
    marginTop: -18,
    marginLeft: -41.5,
    fontFamily: FontFamily.interBold,
    textAlign: "center",
    width: 101,
    color: Color.lightGray0,
    fontWeight: "700",
    fontSize: FontSize.uI30Semi_size,
    top: "50%",
    height: 36,
    left: "50%",
    position: "absolute",
  },
  next1: {
    marginTop: -10.5,
    textAlign: "right",
    width: 36,
    height: 18,
  },
  next: {
    top: "50%",
    right: 0,
    position: "absolute",
  },
  logout1: {
    width: 54,
    height: 21,
    textAlign: "left",
  },
  logout: {
    left: 0,
    top: 0,
    position: "absolute",
  },
  nextParent: {
    marginTop: -10,
    height: 21,
    top: "50%",
    right: 0,
    left: 0,
    position: "absolute",
  },
  myKpiParent: {
    marginLeft: -162,
    top: 28,
    width: 319,
    height: 36,
    left: "50%",
    position: "absolute",
  },
  rectangleParent: {
    width: 360,
    overflow: "hidden",
    backgroundColor: Color.lightGray0,
  },
  scrollChild: {
    backgroundColor: Color.colorWhitesmoke_200,
    borderRadius: Border.br_31xl,
    left: 0,
    top: 0,
  },
  scrollItem: {
    height: 134,
    width: 4,
    top: 24,
    borderRadius: Border.br_31xl,
    backgroundColor: Color.colorRoyalblue_200,
  },
  scroll: {
    top: 218,
    left: 368,
  },
  createNewPlan: {
    fontFamily: FontFamily.outfitSemiBold,
    height: 37,
    width: 232,
    fontSize: FontSize.uI30Semi_size,
    color: Color.lightGray11,
    fontWeight: "600",
  },
  createNewPlanWrapper: {
    marginLeft: -116,
    width: 232,
    bottom: 0,
    left: "50%",
  },
  frameWrapper: {
    top: 17,
    left: 14,
    height: 54,
  },
  planName: {
    height: "59.26%",
    width: "24.01%",
    top: "22.22%",
  },
  groupChild: {
    right: "0%",
    left: "0%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  rectangleWrapper: {
    width: "72.1%",
    left: "27.9%",
    right: "0%",
    position: "absolute",
  },
  enterPlanName: {
    height: "62.96%",
    width: "48.02%",
    top: "18.52%",
    left: "30.64%",
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.notoSansItalic,
    lineHeight: 24,
    position: "absolute",
  },
  planNameParent: {
    height: 27,
    width: 329,
  },
  from: {
    height: "35.71%",
    width: "11.91%",
    top: "1.43%",
  },
  text: {
    top: "22.67%",
  },
  caretdownIcon: {
    left: 59,
  },
  rectangleGroup: {
    right: "71.69%",
    left: "0%",
  },
  april: {
    height: "56%",
    top: "23%",
    left: "13.97%",
    width: "43.46%",
    color: Color.black03,
    fontFamily: FontFamily.notoSansItalic,
    fontStyle: "italic",
    lineHeight: 24,
    display: "flex",
    fontSize: FontSize.size_smi,
    alignItems: "center",
    textAlign: "left",
    position: "absolute",
  },
  caretdownIcon1: {
    left: 61,
  },
  rectangleContainer: {
    right: "39.64%",
    left: "32.05%",
  },
  rectangleView: {
    width: "99.1%",
    right: "0.9%",
    bottom: "0.67%",
    borderWidth: 1,
    borderColor: Color.colorGainsboro_200,
    borderStyle: "solid",
    borderRadius: Border.br_9xs,
    backgroundColor: Color.lightGray0,
    left: "0%",
    top: "0%",
  },
  text1: {
    width: "88.72%",
    top: "0.67%",
    left: "11.28%",
    color: Color.black03,
    fontFamily: FontFamily.notoSansItalic,
    lineHeight: 24,
    fontStyle: "italic",
    display: "flex",
    alignItems: "center",
    textAlign: "left",
    fontSize: FontSize.size_smi,
  },
  caretdownIcon2: {
    left: 60,
    height: 7,
    width: 9,
    top: 13,
    position: "absolute",
  },
  groupView: {
    right: "8.13%",
    bottom: "0.66%",
    left: "63.56%",
    width: "28.31%",
    height: "99.34%",
    top: "0%",
    position: "absolute",
  },
  iconinterfacescalendar: {
    height: "49.34%",
    width: "5.99%",
    top: "26.49%",
    bottom: "24.17%",
    left: "94.01%",
    right: "0%",
    maxHeight: "100%",
  },
  groupParent: {
    width: 275,
    right: 0,
    top: 0,
  },
  h: {
    top: "17.67%",
  },
  caretdownIcon3: {
    left: 59,
  },
  rectangleParent1: {
    right: "53.27%",
    left: "0%",
  },
  m: {
    top: "22.33%",
  },
  caretdownIcon4: {
    left: 61,
  },
  rectangleParent2: {
    left: "53.27%",
    right: "0%",
  },
  groupContainer: {
    top: 40,
    left: 52,
    width: 167,
  },
  fromParent: {
    width: 327,
    height: 70,
    marginTop: 15,
  },
  description: {
    height: "18.65%",
    width: "24.31%",
    top: "0%",
  },
  groupChild8: {
    borderWidth: 1,
    borderColor: Color.colorGainsboro_200,
    borderStyle: "solid",
    borderRadius: Border.br_9xs,
    backgroundColor: Color.lightGray0,
    top: 0,
  },
  rectangleFrame: {
    top: 0,
  },
  pleaseEnterDescription: {
    height: "15.05%",
    width: "66.49%",
    top: "13.32%",
    left: "2.46%",
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.notoSansItalic,
    lineHeight: 24,
    position: "absolute",
  },
  groupParent2: {
    top: 22,
  },
  descriptionParent: {
    height: 86,
    width: 325,
    marginTop: 15,
  },
  taskName: {
    left: 18,
    width: 67,
    letterSpacing: 0.2,
    height: 16,
    fontSize: FontSize.size_3xs,
    color: Color.black03,
    lineHeight: 20,
    fontFamily: FontFamily.uI16Medium1,
    fontWeight: "500",
    textAlign: "left",
    top: 0,
  },
  april82024: {
    left: 98,
    fontWeight: "300",
    fontFamily: FontFamily.interLight,
    width: 126,
    top: 4,
    fontSize: FontSize.size_3xs,
    color: Color.black03,
    fontStyle: "italic",
    display: "flex",
    alignItems: "center",
    textAlign: "left",
    position: "absolute",
  },
  text4: {
    width: 6,
    letterSpacing: 0.2,
    height: 16,
    fontSize: FontSize.size_3xs,
    color: Color.black03,
    lineHeight: 20,
    fontFamily: FontFamily.uI16Medium1,
    fontWeight: "500",
    textAlign: "left",
    top: 0,
    left: 0,
  },
  materialSymbolsLightdeleteIcon: {
    left: 250,
    top: 1,
    height: 18,
    overflow: "hidden",
  },
  taskNameGroup: {
    marginTop: 11,
  },
  frameContainer: {
    paddingHorizontal: Padding.p_base,
    paddingVertical: Padding.p_12xs,
  },
  frameItem: {
    backgroundColor: Color.colorGainsboro_100,
  },
  frameInner: {
    backgroundColor: Color.colorRoyalblue_200,
  },
  rectangleParent8: {
    top: 26,
    left: 309,
    height: 78,
    width: 4,
    position: "absolute",
  },
  carbonaddFilledIcon: {
    marginLeft: 105,
    top: 3,
    width: 16,
    left: "50%",
    overflow: "hidden",
  },
  taskTypo: {
    fontFamily: FontFamily.openSansSemiBold,
    fontWeight: "600",
  },
  optional: {
    fontFamily: FontFamily.openSansSemiBoldItalic,
    fontStyle: "italic",
    fontWeight: "600",
  },
  taskListOptionalContainer: {
    width: 118,
    fontSize: FontSize.size_smi,
  },
  vectorIcon: {
    height: "77.78%",
    width: "9.86%",
    top: "16.67%",
    right: "4.23%",
    bottom: "5.56%",
    left: "85.92%",
    maxHeight: "100%",
  },
  taskListOptionalParent: {
    top: -2,
    width: 142,
    height: 18,
    left: 0,
    position: "absolute",
  },
  frameGroup: {
    width: 324,
    height: 104,
    marginTop: 15,
  },
  groupChild9: {
    backgroundColor: Color.colorLimegreen_200,
    width: 107,
    height: 35,
    left: 0,
  },
  save: {
    left: 37,
    width: 34,
  },
  groupPressable: {
    left: 148,
    top: 0,
    position: "absolute",
  },
  groupChild10: {
    backgroundColor: Color.colorGold,
    width: 107,
    height: 35,
    left: 0,
  },
  cancel: {
    left: 29,
    width: 48,
  },
  rectangleParent9: {
    left: 0,
    top: 0,
    position: "absolute",
  },
  groupParent3: {
    width: 250,
    height: 35,
    marginTop: 15,
  },
  frameParent: {
    marginLeft: -164.8,
    top: 98,
  },
  scrollParent: {
    top: 143,
    borderRadius: Border.br_xl,
    height: 586,
    left: 0,
    position: "absolute",
  },
  kpiCompletionProgressdetailChild: {
    marginLeft: -166,
    top: 224,
    left: "50%",
    maxHeight: "100%",
  },
  frameChild1: {
    marginTop: -35,
    height: 71,
    top: "50%",
    backgroundColor: Color.lightGray0,
  },
  topDivider: {
    backgroundColor: Color.colorSilver_100,
    height: 1,
    top: 1,
  },
  frameIcon: {
    top: 19,
    left: 9,
  },
  frameChild2: {
    marginLeft: -24.5,
    height: 4,
    width: 49,
    left: "50%",
    backgroundColor: Color.colorRoyalblue_200,
  },
  frameParent2: {
    width: 49,
    height: 71,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  wrapper: {
    marginLeft: 12,
    width: 49,
    height: 71,
  },
  frameChild3: {
    marginLeft: -16,
    borderRadius: Border.br_81xl,
    backgroundColor: Color.gray02,
    left: "50%",
    top: 0,
  },
  vectorIcon1: {
    marginLeft: -9,
    height: 24,
    top: 4,
    left: "50%",
  },
  combinedShapeIcon: {
    height: "68.75%",
    width: "62.5%",
    top: "15.63%",
    right: "18.75%",
    bottom: "15.63%",
    left: "18.75%",
    maxHeight: "100%",
  },
  frameParent1: {
    marginLeft: -146.5,
    flexDirection: "row",
    top: 0,
  },
  frameWrapper1: {
    left: 16,
    height: 71,
    top: 1,
    width: 329,
    position: "absolute",
  },
  rectangleParent10: {
    height: 72,
    bottom: 0,
  },
  kpiCompletionProgressdetail: {
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.lightGray0,
  },
});

export default KPICompletionProgressDetail1;
