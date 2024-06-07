import * as React from "react";
import { StyleSheet, View, Text, Pressable, ScrollView } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, Border, FontSize } from "../GlobalStyles";

const KPICompletionProgress = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.kpiCompletionProgress}>
      <View style={styles.pageHeader}>
        <View style={styles.pageHeaderChild} />
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
      <View style={styles.kpiCompletionProgressInner}>
        <View style={[styles.rectangleParent, styles.frameChild1Position]}>
          <View style={styles.frameChild} />
          <View style={[styles.searchParent, styles.frameItemLayout]}>
            <View style={[styles.search, styles.searchLayout]}>
              <View
                style={[
                  styles.searchTaskDocumentsActiviParent,
                  styles.searchLayout,
                ]}
              >
                <Text
                  style={[styles.searchTaskDocuments, styles.nameTypo]}
                >{`Search Task, Documents, Activities... `}</Text>
                <Image
                  style={styles.iconlylightOutlinesearch}
                  contentFit="cover"
                  source={require("../assets/iconlylight-outlinesearch.png")}
                />
              </View>
            </View>
            <View style={[styles.frameItem, styles.frameItemLayout]} />
          </View>
          <Text style={[styles.completionProgress, styles.textTypo]}>
            Completion Progress
          </Text>
          <View style={[styles.frameParent, styles.frameParentFlexBox]}>
            <View style={styles.sortByParent}>
              <Text style={[styles.sortBy, styles.sortByClr]}>Sort by</Text>
              <View style={styles.textField}>
                <Image
                  style={styles.iconChevronLeft}
                  contentFit="cover"
                  source={require("../assets/icon--chevron-left.png")}
                />
                <View style={styles.nameWrapper}>
                  <Text style={[styles.name, styles.nameTypo]}>name</Text>
                </View>
              </View>
            </View>
            <Pressable
              style={[styles.rectangleGroup, styles.frameInnerLayout]}
              onPress={() =>
                navigation.navigate("KPICompletionProgressDetail1")
              }
            >
              <View style={[styles.frameInner, styles.framePosition]} />
              <View style={styles.frameGroup}>
                <Image
                  style={styles.frameIcon}
                  contentFit="cover"
                  source={require("../assets/frame-496318.png")}
                />
                <Text style={[styles.addPlan, styles.sortByClr]}>Add plan</Text>
              </View>
            </Pressable>
          </View>
          <ScrollView
            style={styles.frameContainer}
            horizontal={HORIZONTAL}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.frameScrollViewContent}
          >
            <View
              style={[styles.rectangleContainer, styles.rectangleParentLayout1]}
            >
              <View style={styles.rectangleView} />
              <View style={[styles.frameChild1, styles.frameChild1Position]} />
              <View
                style={[styles.salesWebsiteDesignParent, styles.salesLayout]}
              >
                <Text
                  style={[styles.salesWebsiteDesign, styles.salesLayout]}
                >{`Sales website design `}</Text>
                <Text style={[styles.time, styles.timeTypo]}>Time:</Text>
                <Text
                  style={[styles.wedMay8, styles.timeTypo]}
                >{`10:00 Wed May 8 - 23:59 Thu May 30
 `}</Text>
              </View>
              <View style={[styles.groupParent, styles.groupLayout]}>
                <Image
                  style={[styles.groupChild, styles.groupLayout]}
                  contentFit="cover"
                  source={require("../assets/group-19.png")}
                />
                <Text style={[styles.text, styles.textTypo]}>50%</Text>
              </View>
              <Pressable
                style={[styles.mingcutedownFill, styles.iconLayout1]}
                onPress={() =>
                  navigation.navigate("KPICompletionProgressDetail")
                }
              >
                <Image
                  style={[styles.icon, styles.iconLayout]}
                  contentFit="cover"
                  source={require("../assets/mingcutedownfill.png")}
                />
              </Pressable>
            </View>
            <View style={[styles.frameView, styles.rectangleParentLayout]}>
              <View style={styles.rectangleView} />
              <View
                style={[styles.salesWebsiteDesignParent, styles.salesLayout]}
              >
                <Text
                  style={[styles.salesWebsiteDesign, styles.salesLayout]}
                >{`Sales website design `}</Text>
                <Text style={[styles.time, styles.timeTypo]}>Time:</Text>
                <Text
                  style={[styles.wedMay8, styles.timeTypo]}
                >{`10:00 Wed May 8 - 23:59 Thu May 30
 `}</Text>
              </View>
              <View style={[styles.groupParent, styles.groupLayout]}>
                <Image
                  style={[styles.groupChild, styles.groupLayout]}
                  contentFit="cover"
                  source={require("../assets/group-19.png")}
                />
                <Text style={[styles.text, styles.textTypo]}>50%</Text>
              </View>
              <Image
                style={[styles.mingcutedownFillIcon, styles.iconSpaceBlock]}
                contentFit="cover"
                source={require("../assets/mingcutedownfill.png")}
              />
              <View style={[styles.frameChild1, styles.frameChild1Position]} />
            </View>
            <View
              style={[styles.rectangleParent1, styles.rectangleParentLayout]}
            >
              <View style={styles.rectangleView} />
              <View
                style={[styles.salesWebsiteDesignParent, styles.salesLayout]}
              >
                <Text
                  style={[styles.salesWebsiteDesign, styles.salesLayout]}
                >{`Sales website design `}</Text>
                <Text style={[styles.time, styles.timeTypo]}>Time:</Text>
                <Text
                  style={[styles.wedMay8, styles.timeTypo]}
                >{`10:00 Wed May 8 - 23:59 Thu May 30
 `}</Text>
              </View>
              <View style={[styles.groupParent, styles.groupLayout]}>
                <Image
                  style={[styles.groupChild, styles.groupLayout]}
                  contentFit="cover"
                  source={require("../assets/group-19.png")}
                />
                <Text style={[styles.text, styles.textTypo]}>50%</Text>
              </View>
              <Image
                style={[styles.mingcutedownFillIcon, styles.iconSpaceBlock]}
                contentFit="cover"
                source={require("../assets/mingcutedownfill.png")}
              />
              <View style={[styles.frameChild1, styles.frameChild1Position]} />
            </View>
            <View
              style={[styles.rectangleParent2, styles.rectangleParentLayout]}
            >
              <View style={styles.rectangleView} />
              <View
                style={[styles.salesWebsiteDesignParent, styles.salesLayout]}
              >
                <Text
                  style={[styles.salesWebsiteDesign, styles.salesLayout]}
                >{`Sales website design `}</Text>
                <Text style={[styles.time, styles.timeTypo]}>Time:</Text>
                <Text
                  style={[styles.wedMay8, styles.timeTypo]}
                >{`10:00 Wed May 8 - 23:59 Thu May 30
 `}</Text>
              </View>
              <View style={[styles.groupParent, styles.groupLayout]}>
                <Image
                  style={[styles.groupChild, styles.groupLayout]}
                  contentFit="cover"
                  source={require("../assets/group-19.png")}
                />
                <Text style={[styles.text, styles.textTypo]}>50%</Text>
              </View>
              <Image
                style={[styles.mingcutedownFillIcon, styles.iconSpaceBlock]}
                contentFit="cover"
                source={require("../assets/mingcutedownfill.png")}
              />
              <View style={[styles.frameChild1, styles.frameChild1Position]} />
            </View>
            <View
              style={[styles.rectangleParent3, styles.rectangleParentLayout1]}
            >
              <View style={styles.rectangleView} />
              <View
                style={[styles.salesWebsiteDesignParent, styles.salesLayout]}
              >
                <Text
                  style={[styles.salesWebsiteDesign, styles.salesLayout]}
                >{`Sales website design `}</Text>
                <Text style={[styles.time, styles.timeTypo]}>Time:</Text>
                <Text
                  style={[styles.wedMay8, styles.timeTypo]}
                >{`10:00 Wed May 8 - 23:59 Thu May 30
 `}</Text>
              </View>
              <View style={[styles.groupParent, styles.groupLayout]}>
                <Image
                  style={[styles.groupChild, styles.groupLayout]}
                  contentFit="cover"
                  source={require("../assets/group-19.png")}
                />
                <Text style={[styles.text, styles.textTypo]}>50%</Text>
              </View>
              <Image
                style={[styles.mingcutedownFillIcon, styles.iconSpaceBlock]}
                contentFit="cover"
                source={require("../assets/mingcutedownfill.png")}
              />
              <View style={[styles.frameChild1, styles.frameChild1Position]} />
            </View>
            <View
              style={[styles.rectangleParent4, styles.rectangleParentLayout1]}
            >
              <View style={styles.rectangleView} />
              <View
                style={[styles.salesWebsiteDesignParent, styles.salesLayout]}
              >
                <Text
                  style={[styles.salesWebsiteDesign, styles.salesLayout]}
                >{`Sales website design `}</Text>
                <Text style={[styles.time, styles.timeTypo]}>Time:</Text>
                <Text
                  style={[styles.wedMay8, styles.timeTypo]}
                >{`10:00 Wed May 8 - 23:59 Thu May 30
 `}</Text>
              </View>
              <View style={[styles.groupParent, styles.groupLayout]}>
                <Image
                  style={[styles.groupChild, styles.groupLayout]}
                  contentFit="cover"
                  source={require("../assets/group-19.png")}
                />
                <Text style={[styles.text, styles.textTypo]}>50%</Text>
              </View>
              <Image
                style={[styles.mingcutedownFillIcon4, styles.iconLayout1]}
                contentFit="cover"
                source={require("../assets/mingcutedownfill.png")}
              />
              <View style={[styles.frameChild1, styles.frameChild1Position]} />
            </View>
            <View
              style={[styles.rectangleParent5, styles.rectangleParentLayout1]}
            >
              <View style={styles.rectangleView} />
              <View
                style={[styles.salesWebsiteDesignParent, styles.salesLayout]}
              >
                <Text
                  style={[styles.salesWebsiteDesign, styles.salesLayout]}
                >{`Sales website design `}</Text>
                <Text style={[styles.time, styles.timeTypo]}>Time:</Text>
                <Text
                  style={[styles.wedMay8, styles.timeTypo]}
                >{`10:00 Wed May 8 - 23:59 Thu May 30
 `}</Text>
              </View>
              <View style={[styles.groupParent, styles.groupLayout]}>
                <Image
                  style={[styles.groupChild, styles.groupLayout]}
                  contentFit="cover"
                  source={require("../assets/group-19.png")}
                />
                <Text style={[styles.text, styles.textTypo]}>50%</Text>
              </View>
              <Image
                style={[styles.mingcutedownFillIcon4, styles.iconLayout1]}
                contentFit="cover"
                source={require("../assets/mingcutedownfill.png")}
              />
              <View style={[styles.frameChild1, styles.frameChild1Position]} />
            </View>
            <View
              style={[styles.rectangleParent6, styles.rectangleParentLayout1]}
            >
              <View style={styles.rectangleView} />
              <View
                style={[styles.salesWebsiteDesignParent, styles.salesLayout]}
              >
                <Text
                  style={[styles.salesWebsiteDesign, styles.salesLayout]}
                >{`End website design `}</Text>
                <Text style={[styles.time, styles.timeTypo]}>Time:</Text>
                <Text
                  style={[styles.wedMay8, styles.timeTypo]}
                >{`10:00 Wed May 8 - 23:59 Thu May 30
 `}</Text>
              </View>
              <View style={[styles.groupParent, styles.groupLayout]}>
                <Image
                  style={[styles.groupChild, styles.groupLayout]}
                  contentFit="cover"
                  source={require("../assets/group-19.png")}
                />
                <Text style={[styles.text, styles.textTypo]}>50%</Text>
              </View>
              <Image
                style={[styles.mingcutedownFillIcon4, styles.iconLayout1]}
                contentFit="cover"
                source={require("../assets/mingcutedownfill.png")}
              />
              <View style={[styles.frameChild1, styles.frameChild1Position]} />
            </View>
          </ScrollView>
        </View>
      </View>
      <View style={[styles.rectangleParent7, styles.topDividerPosition1]}>
        <View style={[styles.frameChild16, styles.topDividerPosition1]} />
        <View style={[styles.topDivider, styles.topDividerPosition]} />
        <View style={[styles.frameWrapper, styles.topDividerPosition]}>
          <View style={[styles.frameParent1, styles.frameParentFlexBox]}>
            <View style={styles.frameParent2}>
              <Image
                style={[styles.frameChild17, styles.frameChildLayout]}
                contentFit="cover"
                source={require("../assets/frame-496339.png")}
              />
              <View style={[styles.frameChild18, styles.framePosition]} />
            </View>
            <Pressable
              style={styles.wrapper}
              onPress={() => navigation.navigate("ToDoList")}
            >
              <Image
                style={styles.iconLayout}
                contentFit="cover"
                source={require("../assets/frame-496326.png")}
              />
            </Pressable>
            <Pressable
              style={styles.wrapper}
              onPress={() => navigation.navigate("CalendarPage")}
            >
              <Image
                style={styles.iconLayout}
                contentFit="cover"
                source={require("../assets/frame-496332.png")}
              />
            </Pressable>
            <Pressable
              style={styles.wrapper}
              onPress={() => navigation.navigate("Notification1")}
            >
              <View style={[styles.frameChild17, styles.frameChildLayout]}>
                <View style={[styles.frameChild19, styles.frameChildLayout]} />
                <Image
                  style={[styles.vectorIcon, styles.iconLayout1]}
                  contentFit="cover"
                  source={require("../assets/vector.png")}
                />
              </View>
            </Pressable>
            <Pressable
              style={styles.wrapper}
              onPress={() => navigation.navigate("ProfilePhotos")}
            >
              <View style={[styles.frameChild17, styles.frameChildLayout]}>
                <View style={[styles.frameChild19, styles.frameChildLayout]} />
                <Image
                  style={styles.combinedShapeIcon}
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
  frameScrollViewContent: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  next1Typo: {
    fontFamily: FontFamily.uI16Medium1,
    fontWeight: "500",
  },
  frameChild1Position: {
    width: 360,
    left: 0,
    position: "absolute",
  },
  frameItemLayout: {
    height: 38,
    position: "absolute",
  },
  searchLayout: {
    width: 308,
    height: 21,
    top: "50%",
    position: "absolute",
  },
  nameTypo: {
    fontWeight: "600",
    textAlign: "left",
    position: "absolute",
  },
  textTypo: {
    color: Color.colorDarkslategray_100,
    fontFamily: FontFamily.outfitBold,
    fontWeight: "700",
    position: "absolute",
  },
  frameParentFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
  },
  sortByClr: {
    color: Color.lightGray11,
    left: 0,
  },
  frameInnerLayout: {
    height: 54,
    width: 70,
  },
  framePosition: {
    borderRadius: Border.br_3xs,
    left: "50%",
    position: "absolute",
  },
  rectangleParentLayout1: {
    height: 100,
    width: 360,
  },
  salesLayout: {
    width: 197,
    position: "absolute",
  },
  timeTypo: {
    lineHeight: 18,
    color: Color.colorDarkslategray_100,
    fontFamily: FontFamily.outfitBold,
    fontSize: FontSize.size_smi,
    top: 24,
    textAlign: "left",
    fontWeight: "700",
    position: "absolute",
  },
  groupLayout: {
    height: 76,
    width: 78,
    position: "absolute",
  },
  iconLayout1: {
    height: 24,
    position: "absolute",
  },
  iconLayout: {
    height: "100%",
    width: "100%",
  },
  rectangleParentLayout: {
    marginTop: 10,
    height: 100,
    width: 360,
  },
  iconSpaceBlock: {
    marginTop: -19,
    overflow: "hidden",
  },
  topDividerPosition1: {
    marginLeft: -180,
    width: 360,
    left: "50%",
  },
  topDividerPosition: {
    top: 1,
    position: "absolute",
  },
  frameChildLayout: {
    height: 32,
    width: 32,
    position: "absolute",
  },
  pageHeaderChild: {
    top: -28,
    right: -17,
    bottom: -712,
    left: -18,
    backgroundColor: Color.colorRoyalblue_200,
    position: "absolute",
  },
  myKpi: {
    marginTop: -18,
    marginLeft: -41.5,
    fontFamily: FontFamily.interBold,
    width: 101,
    textAlign: "center",
    color: Color.lightGray0,
    fontWeight: "700",
    fontSize: FontSize.uI30Semi_size,
    top: "50%",
    height: 36,
    left: "50%",
    position: "absolute",
  },
  next1: {
    textAlign: "right",
    width: 36,
    height: 18,
    fontSize: FontSize.uI16Medium1_size,
    fontWeight: "500",
    color: Color.lightGray0,
    marginTop: -10.5,
  },
  next: {
    right: 0,
    top: "50%",
    position: "absolute",
  },
  logout1: {
    width: 54,
    textAlign: "left",
    fontSize: FontSize.uI16Medium1_size,
    fontWeight: "500",
    color: Color.lightGray0,
    height: 21,
  },
  logout: {
    left: 0,
    top: 0,
    position: "absolute",
  },
  nextParent: {
    marginTop: -10,
    height: 21,
    left: 0,
    right: 0,
    top: "50%",
    position: "absolute",
  },
  myKpiParent: {
    right: 3,
    left: 3,
    height: 36,
    top: 0,
    position: "absolute",
  },
  pageHeader: {
    marginLeft: -162,
    top: 28,
    width: 325,
    height: 34,
    left: "50%",
    position: "absolute",
  },
  frameChild: {
    bottom: 265,
    borderRadius: Border.br_base,
    left: 0,
    right: 0,
    top: 0,
    position: "absolute",
    backgroundColor: Color.lightGray0,
  },
  searchTaskDocuments: {
    marginTop: -8.5,
    left: 34,
    fontFamily: FontFamily.openSansSemiBold,
    color: Color.colorGray_100,
    width: 274,
    fontSize: FontSize.size_smi,
    fontWeight: "600",
    height: 18,
    top: "50%",
  },
  iconlylightOutlinesearch: {
    width: 20,
    marginTop: -10.5,
    height: 21,
    left: 0,
    top: "50%",
    position: "absolute",
  },
  searchTaskDocumentsActiviParent: {
    marginTop: -10.5,
    left: 0,
  },
  search: {
    marginTop: -11,
    left: 19,
  },
  frameItem: {
    borderRadius: Border.br_31xl,
    backgroundColor: Color.colorGainsboro_400,
    left: 0,
    right: 0,
    top: 0,
  },
  searchParent: {
    right: 17,
    left: 14,
    top: 24,
    height: 38,
  },
  completionProgress: {
    marginLeft: -152,
    top: 84,
    width: 304,
    height: 37,
    textAlign: "center",
    fontSize: FontSize.uI30Semi_size,
    color: Color.colorDarkslategray_100,
    left: "50%",
  },
  sortBy: {
    top: 7,
    fontSize: FontSize.bodyMedium_size,
    letterSpacing: 0.3,
    lineHeight: 20,
    textAlign: "left",
    fontFamily: FontFamily.uI16Medium1,
    fontWeight: "500",
    position: "absolute",
  },
  iconChevronLeft: {
    top: 13,
    right: 10,
    width: 8,
    height: 8,
    position: "absolute",
  },
  name: {
    fontSize: FontSize.overline_size,
    letterSpacing: 0.4,
    lineHeight: 16,
    textTransform: "uppercase",
    fontFamily: FontFamily.overline,
    color: Color.gray700,
    left: 0,
    top: 0,
  },
  nameWrapper: {
    top: 9,
    width: 35,
    height: 16,
    left: 9,
    position: "absolute",
  },
  textField: {
    marginTop: -16.5,
    left: 66,
    borderRadius: Border.br_xs,
    borderStyle: "solid",
    borderColor: Color.colorDimgray_400,
    borderWidth: 1,
    width: 73,
    height: 33,
    top: "50%",
    position: "absolute",
    overflow: "hidden",
  },
  sortByParent: {
    width: 139,
    height: 33,
  },
  frameInner: {
    marginTop: -27,
    marginLeft: -35,
    backgroundColor: Color.gray02,
    height: 54,
    width: 70,
    top: "50%",
  },
  frameIcon: {
    top: -3,
    left: 15,
    width: 25,
    height: 25,
    position: "absolute",
  },
  addPlan: {
    bottom: 1,
    fontSize: FontSize.size_4xs,
    letterSpacing: 0.2,
    display: "flex",
    width: 53,
    height: 10,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    fontFamily: FontFamily.uI16Medium1,
    fontWeight: "500",
    textAlign: "center",
  },
  frameGroup: {
    height: "68.52%",
    top: "22.22%",
    right: 8,
    bottom: "9.26%",
    left: 9,
    position: "absolute",
  },
  rectangleGroup: {
    marginLeft: 30,
  },
  frameParent: {
    marginLeft: -119,
    top: 143,
    flexDirection: "row",
    alignItems: "center",
    left: "50%",
    overflow: "hidden",
  },
  rectangleView: {
    borderRadius: Border.br_xl,
    width: 332,
    height: 85,
    backgroundColor: Color.gray02,
    left: 14,
    top: 0,
    position: "absolute",
  },
  frameChild1: {
    top: 85,
    backgroundColor: Color.colorGray_300,
    height: 15,
  },
  salesWebsiteDesign: {
    height: 22,
    color: Color.lightGray11,
    left: 0,
    fontFamily: FontFamily.outfitBold,
    width: 197,
    textAlign: "left",
    fontSize: FontSize.uI16Medium1_size,
    fontWeight: "700",
    top: 0,
  },
  time: {
    width: 39,
    height: 19,
    left: 0,
  },
  wedMay8: {
    left: 64,
    width: 133,
    height: 37,
  },
  salesWebsiteDesignParent: {
    top: 12,
    left: 30,
    height: 61,
  },
  groupChild: {
    left: 0,
    top: 0,
  },
  text: {
    top: 29,
    left: 26,
    fontSize: FontSize.size_mini,
    width: 33,
    textAlign: "left",
    height: 18,
  },
  groupParent: {
    top: 5,
    left: 227,
  },
  icon: {
    marginTop: -19,
    overflow: "hidden",
  },
  mingcutedownFill: {
    width: 24,
    left: 310,
    height: 24,
    top: "50%",
  },
  rectangleContainer: {
    zIndex: 0,
  },
  mingcutedownFillIcon: {
    height: 24,
    position: "absolute",
    width: 24,
    left: 310,
    top: "50%",
  },
  frameView: {
    zIndex: 1,
  },
  rectangleParent1: {
    zIndex: 2,
  },
  rectangleParent2: {
    zIndex: 3,
  },
  rectangleParent3: {
    top: 440,
    zIndex: 4,
    left: 0,
    position: "absolute",
  },
  mingcutedownFillIcon4: {
    marginTop: 5,
    width: 24,
    left: 310,
    height: 24,
    top: "50%",
    overflow: "hidden",
  },
  rectangleParent4: {
    top: 550,
    zIndex: 5,
    left: 0,
    position: "absolute",
  },
  rectangleParent5: {
    top: 660,
    zIndex: 6,
    left: 0,
    position: "absolute",
  },
  rectangleParent6: {
    top: 770,
    zIndex: 7,
    left: 0,
    position: "absolute",
  },
  frameContainer: {
    marginLeft: -181,
    top: 219,
    left: "50%",
    position: "absolute",
    width: "100%",
  },
  rectangleParent: {
    height: 985,
    top: 0,
  },
  kpiCompletionProgressInner: {
    top: 80,
    height: 720,
    left: 0,
    right: 0,
    position: "absolute",
  },
  frameChild16: {
    marginTop: -35,
    height: 71,
    top: "50%",
    position: "absolute",
    backgroundColor: Color.lightGray0,
  },
  topDivider: {
    backgroundColor: Color.colorSilver_100,
    height: 1,
    marginLeft: -180,
    width: 360,
    left: "50%",
  },
  frameChild17: {
    top: 19,
    left: 9,
  },
  frameChild18: {
    marginLeft: -24.5,
    height: 4,
    width: 49,
    top: 0,
    backgroundColor: Color.colorRoyalblue_200,
  },
  frameParent2: {
    width: 49,
    height: 71,
  },
  wrapper: {
    marginLeft: 12,
    width: 49,
    height: 71,
  },
  frameChild19: {
    marginLeft: -16,
    borderRadius: Border.br_81xl,
    backgroundColor: Color.gray02,
    top: 0,
    left: "50%",
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
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  frameParent1: {
    marginLeft: -146.5,
    flexDirection: "row",
    alignItems: "center",
    left: "50%",
    top: 0,
  },
  frameWrapper: {
    left: 16,
    width: 329,
    height: 71,
  },
  rectangleParent7: {
    bottom: 0,
    height: 72,
    position: "absolute",
  },
  kpiCompletionProgress: {
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.lightGray0,
  },
});

export default KPICompletionProgress;
