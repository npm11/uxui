import React, { useState, useCallback } from "react";
import { StyleSheet, View, Text, Pressable, Modal } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import Frame1 from "../components/Frame1";
import { Color, FontFamily, Border, FontSize } from "../GlobalStyles";

const KPICompletionProgressDetail = () => {
  const [frameContainer15Visible, setFrameContainer15Visible] = useState(false);
  const navigation = useNavigation();

  const openFrameContainer15 = useCallback(() => {
    setFrameContainer15Visible(true);
  }, []);

  const closeFrameContainer15 = useCallback(() => {
    setFrameContainer15Visible(false);
  }, []);

  return (
    <>
      <View style={styles.kpiCompletionProgressdetail}>
        <View style={[styles.rectangleParent, styles.frameChildPosition]}>
          <View style={[styles.frameChild, styles.frameChildBg1]} />
          <View style={[styles.search, styles.searchLayout]}>
            <View style={[styles.searchChild, styles.searchLayout]} />
            <View style={styles.searchTaskDocumentsActiviParent}>
              <Text
                style={styles.searchTaskDocuments}
              >{`Search Task, Documents, Activities... `}</Text>
              <Image
                style={[
                  styles.iconlylightOutlinesearch,
                  styles.component24ChildLayout,
                ]}
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
                <Text style={[styles.logout1, styles.logout1Typo]}>Logout</Text>
              </Pressable>
            </View>
          </View>
        </View>
        <View style={styles.frameParent}>
          <View style={styles.frameGroup}>
            <View style={[styles.rectangleGroup, styles.rectangleGroupLayout]}>
              <View style={[styles.frameItem, styles.frameLayout]} />
              <View
                style={[styles.rectangleContainer, styles.frameChildLayout1]}
              >
                <View style={[styles.frameInner, styles.frameChildLayout1]} />
                <Text style={[styles.notStarted, styles.doneTypo]}>
                  Not Started
                </Text>
              </View>
              <View style={styles.builderForAndParent}>
                <Text style={[styles.builderForAnd, styles.googleApiClr]}>
                  Builder for And...
                </Text>
                <Text style={[styles.processing0, styles.processingLayout]}>
                  Processing 0%
                </Text>
                <Text
                  style={[styles.monMay27, styles.processingTypo]}
                >{`10:00 Mon May 27 - 23:59 Thu May 30
 `}</Text>
              </View>
              <Text style={[styles.view, styles.viewTypo]}>View</Text>
              <Image
                style={[styles.rectangleIcon, styles.component24Layout]}
                contentFit="cover"
                source={require("../assets/rectangle-17.png")}
              />
            </View>
            <View style={[styles.frameView, styles.frameViewLayout]}>
              <View style={[styles.frameItem, styles.frameLayout]} />
              <Text style={[styles.view1, styles.viewTypo]}>View</Text>
              <Image
                style={[styles.rectangleIcon, styles.component24Layout]}
                contentFit="cover"
                source={require("../assets/rectangle-16.png")}
              />
              <View style={styles.builderForAndParent}>
                <Text style={[styles.layoutDesgin, styles.googleApiClr]}>
                  Layout Desgin
                </Text>
                <Text style={[styles.processing100, styles.googleApiTypo]}>
                  Processing 100%
                </Text>
                <Text
                  style={[styles.monMay27, styles.processingTypo]}
                >{`10:00 Mon May 27 - 23:59 Thu May 30
 `}</Text>
              </View>
              <View
                style={[styles.rectangleContainer, styles.frameChildLayout1]}
              >
                <View style={[styles.frameChild2, styles.frameChildLayout1]} />
                <Text style={[styles.done, styles.doneTypo]}>Done</Text>
              </View>
            </View>
            <View style={[styles.rectangleParent2, styles.frameViewLayout]}>
              <View style={[styles.frameChild3, styles.frameLayout]} />
              <Image
                style={[styles.frameChild4, styles.frameChild4Position]}
                contentFit="cover"
                source={require("../assets/rectangle-16.png")}
              />
              <Text style={[styles.view2, styles.viewTypo]}>View</Text>
              <View style={styles.builderForAndParent}>
                <Text style={[styles.googleApi, styles.googleApiTypo]}>
                  Google API
                </Text>
                <Text style={[styles.processing100, styles.googleApiTypo]}>
                  Processing 100%
                </Text>
                <Text
                  style={[styles.monMay27, styles.processingTypo]}
                >{`10:00 Mon May 27 - 23:59 Thu May 30
 `}</Text>
              </View>
              <View
                style={[styles.rectangleContainer, styles.frameChildLayout1]}
              >
                <View style={[styles.frameChild2, styles.frameChildLayout1]} />
                <Text style={[styles.done, styles.doneTypo]}>Done</Text>
              </View>
            </View>
            <Pressable
              style={[styles.framePressable, styles.rectangleGroupLayout]}
              onPress={openFrameContainer15}
            >
              <View style={[styles.frameChild3, styles.frameLayout]} />
              <Text style={[styles.view2, styles.viewTypo]}>View</Text>
              <View style={styles.frameChild4Position}>
                <View style={[styles.component24, styles.component24Layout]}>
                  <Image
                    style={[
                      styles.component24Child,
                      styles.component24ChildLayout,
                    ]}
                    contentFit="cover"
                    source={require("../assets/rectangle-171.png")}
                  />
                  <View
                    style={[styles.component24Item, styles.frameChildBg1]}
                  />
                </View>
              </View>
              <View style={styles.builderForAndParent}>
                <Text style={[styles.colorDesign, styles.googleApiClr]}>
                  Color Design
                </Text>
                <Text style={[styles.processing50, styles.processingLayout]}>
                  Processing 50%
                </Text>
                <Text
                  style={[styles.monMay27, styles.processingTypo]}
                >{`10:00 Mon May 27 - 23:59 Thu May 30
 `}</Text>
              </View>
              <View
                style={[styles.rectangleContainer, styles.frameChildLayout1]}
              >
                <View style={[styles.frameChild7, styles.frameChildLayout1]} />
                <Text style={[styles.inProgress, styles.doneTypo]}>
                  In progress
                </Text>
              </View>
            </Pressable>
          </View>
          <View style={[styles.scroll, styles.scrollLayout]}>
            <View style={[styles.scrollChild, styles.scrollLayout]} />
            <View style={styles.scrollItem} />
          </View>
          <View style={styles.frameContainer}>
            <View style={styles.salesWebsiteDesignParent}>
              <Text
                style={styles.salesWebsiteDesign}
              >{`Sales website design `}</Text>
              <Text
                style={[styles.wedMay8, styles.wedMay8Layout]}
              >{`10:00 Wed May 8 - 23:59 Thu May 30
 `}</Text>
              <Pressable
                style={[styles.wrapper, styles.wedMay8Layout]}
                onPress={() => navigation.navigate("KPICompletionProgress")}
              >
                <Image
                  style={styles.icon}
                  contentFit="cover"
                  source={require("../assets/frame-496402.png")}
                />
              </Pressable>
            </View>
            <Pressable
              style={[styles.rectangleParent5, styles.frameChild8Layout]}
              onPress={() =>
                navigation.navigate("KPICompletionProgressDetail2")
              }
            >
              <View style={[styles.frameChild8, styles.frameChildBg]} />
              <View style={styles.frameParent1}>
                <Image
                  style={styles.frameIcon}
                  contentFit="cover"
                  source={require("../assets/frame-4963181.png")}
                />
                <Text style={[styles.editPlan, styles.editPlanFlexBox]}>
                  Edit plan
                </Text>
              </View>
            </Pressable>
          </View>
          <View style={[styles.frameParent2, styles.parentLayout]}>
            <View
              style={[styles.descriptionParent, styles.saleWebDesignLayout]}
            >
              <Text style={styles.description}>Description</Text>
              <Text
                style={[styles.saleWebDesign, styles.saleWebDesignLayout]}
              >{`Sale web design creates attractive, user-friendly websites for selling products or services online. `}</Text>
            </View>
            <View style={[styles.chart3Parent, styles.parentLayout]}>
              <Image
                style={[styles.chart3Parent, styles.parentLayout]}
                contentFit="cover"
                source={require("../assets/chart-3.png")}
              />
              <Text style={[styles.text, styles.textLayout]}>50%</Text>
            </View>
          </View>
        </View>
        <Image
          style={styles.kpiCompletionProgressdetailChild}
          contentFit="cover"
          source={require("../assets/line-172.png")}
        />
        <View style={[styles.rectangleParent6, styles.topDividerPosition1]}>
          <View style={[styles.frameChild9, styles.topDividerPosition1]} />
          <View style={[styles.topDivider, styles.topDividerPosition]} />
          <View style={[styles.frameWrapper, styles.topDividerPosition]}>
            <View style={[styles.frameParent3, styles.editPlanFlexBox]}>
              <View style={styles.frameParent4}>
                <Image
                  style={[styles.frameChild10, styles.frameChildLayout]}
                  contentFit="cover"
                  source={require("../assets/frame-496339.png")}
                />
                <View style={[styles.frameChild11, styles.frameChildBg1]} />
              </View>
              <Pressable
                style={styles.container}
                onPress={() => navigation.navigate("ToDoList")}
              >
                <Image
                  style={styles.icon}
                  contentFit="cover"
                  source={require("../assets/frame-496326.png")}
                />
              </Pressable>
              <Pressable
                style={styles.container}
                onPress={() => navigation.navigate("CalendarPage")}
              >
                <Image
                  style={styles.icon}
                  contentFit="cover"
                  source={require("../assets/frame-496332.png")}
                />
              </Pressable>
              <Pressable
                style={styles.container}
                onPress={() => navigation.navigate("Notification1")}
              >
                <View style={[styles.frameChild10, styles.frameChildLayout]}>
                  <View
                    style={[styles.frameChild12, styles.frameChildLayout]}
                  />
                  <Image
                    style={[styles.vectorIcon, styles.textLayout]}
                    contentFit="cover"
                    source={require("../assets/vector.png")}
                  />
                </View>
              </Pressable>
              <Pressable
                style={styles.container}
                onPress={() => navigation.navigate("ProfilePhotos")}
              >
                <View style={[styles.frameChild10, styles.frameChildLayout]}>
                  <View
                    style={[styles.frameChild12, styles.frameChildLayout]}
                  />
                  <Image
                    style={[
                      styles.combinedShapeIcon,
                      styles.component24ChildLayout,
                    ]}
                    contentFit="cover"
                    source={require("../assets/combined-shape.png")}
                  />
                </View>
              </Pressable>
            </View>
          </View>
        </View>
      </View>

      <Modal animationType="fade" transparent visible={frameContainer15Visible}>
        <View style={styles.frameContainer15Overlay}>
          <Pressable
            style={styles.frameContainer15Bg}
            onPress={closeFrameContainer15}
          />
          <Frame1 onClose={closeFrameContainer15} />
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  frameChildPosition: {
    height: 201,
    left: 0,
    top: 0,
  },
  frameChildBg1: {
    backgroundColor: Color.colorRoyalblue_200,
    position: "absolute",
  },
  searchLayout: {
    height: 41,
    width: 344,
    position: "absolute",
  },
  component24ChildLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  next1Typo: {
    textAlign: "right",
    fontWeight: "500",
  },
  logout1Typo: {
    fontWeight: "500",
    fontFamily: FontFamily.uI16Medium1,
  },
  rectangleGroupLayout: {
    height: 85,
    width: 356,
    position: "absolute",
  },
  frameLayout: {
    width: 322,
    backgroundColor: Color.colorGainsboro_400,
    height: 85,
    borderRadius: Border.br_xl,
    top: 0,
    position: "absolute",
  },
  frameChildLayout1: {
    height: 43,
    width: 91,
    position: "absolute",
  },
  doneTypo: {
    height: 17,
    letterSpacing: -0.4,
    color: Color.lightGray11,
    fontSize: FontSize.size_xs,
    top: 13,
    left: "50%",
    textAlign: "left",
    fontFamily: FontFamily.openSansSemiBold,
    fontWeight: "600",
    position: "absolute",
  },
  googleApiClr: {
    color: Color.colorDarkslategray_100,
    fontSize: FontSize.uI16Medium1_size,
    height: 19,
    top: 0,
  },
  processingLayout: {
    height: 15,
    top: 25,
    fontSize: FontSize.size_xs,
    color: Color.colorGray_100,
  },
  processingTypo: {
    fontFamily: FontFamily.outfitBold,
    fontWeight: "700",
    textAlign: "left",
    left: 0,
    position: "absolute",
  },
  viewTypo: {
    color: Color.colorRoyalblue_200,
    fontSize: FontSize.bodyMedium_size,
    fontFamily: FontFamily.outfitBold,
    textAlign: "center",
    fontWeight: "700",
    position: "absolute",
  },
  component24Layout: {
    height: 5,
    width: 85,
    position: "absolute",
  },
  frameViewLayout: {
    width: 363,
    height: 85,
    position: "absolute",
  },
  googleApiTypo: {
    width: 95,
    fontFamily: FontFamily.outfitBold,
    fontWeight: "700",
    textAlign: "left",
    left: 0,
    position: "absolute",
  },
  frameChild4Position: {
    left: 133,
    height: 5,
    width: 85,
    top: 43,
    position: "absolute",
  },
  scrollLayout: {
    height: 375,
    width: 4,
    position: "absolute",
  },
  wedMay8Layout: {
    height: 16,
    position: "absolute",
  },
  frameChild8Layout: {
    width: 70,
    height: 54,
    position: "absolute",
  },
  frameChildBg: {
    backgroundColor: Color.gray02,
    left: "50%",
  },
  editPlanFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
  },
  parentLayout: {
    height: 119,
    position: "absolute",
  },
  saleWebDesignLayout: {
    width: 177,
    position: "absolute",
  },
  textLayout: {
    height: 24,
    position: "absolute",
  },
  topDividerPosition1: {
    marginLeft: -180,
    left: "50%",
    width: 360,
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
  frameChild: {
    right: 0,
    height: 201,
    left: 0,
    top: 0,
  },
  searchChild: {
    borderRadius: Border.br_31xl,
    left: 0,
    top: 0,
    backgroundColor: Color.lightGray0,
  },
  searchTaskDocuments: {
    left: 36,
    fontSize: FontSize.size_mini,
    width: 266,
    height: 19,
    color: Color.colorGray_100,
    fontFamily: FontFamily.openSansSemiBold,
    textAlign: "left",
    fontWeight: "600",
    top: 2,
    position: "absolute",
  },
  iconlylightOutlinesearch: {
    width: "7.71%",
    right: "92.29%",
    bottom: "0%",
    left: "0%",
    top: "0%",
    height: "100%",
  },
  searchTaskDocumentsActiviParent: {
    top: 9,
    left: 26,
    width: 301,
    height: 23,
    position: "absolute",
  },
  search: {
    top: 81,
    left: 8,
  },
  myKpi: {
    marginTop: -18,
    marginLeft: -41.5,
    fontSize: FontSize.uI30Semi_size,
    fontFamily: FontFamily.interBold,
    width: 101,
    textAlign: "center",
    color: Color.lightGray0,
    fontWeight: "700",
    top: "50%",
    height: 36,
    left: "50%",
    position: "absolute",
  },
  next1: {
    marginTop: -10.5,
    width: 36,
    height: 18,
    fontFamily: FontFamily.uI16Medium1,
    fontSize: FontSize.uI16Medium1_size,
    color: Color.lightGray0,
  },
  next: {
    top: "50%",
    right: 0,
    position: "absolute",
  },
  logout1: {
    width: 54,
    fontFamily: FontFamily.uI16Medium1,
    fontSize: FontSize.uI16Medium1_size,
    color: Color.lightGray0,
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
    height: 201,
    position: "absolute",
    overflow: "hidden",
    backgroundColor: Color.lightGray0,
  },
  frameItem: {
    left: 15,
  },
  frameInner: {
    backgroundColor: "#dfdfdf",
    borderRadius: Border.br_3xs,
    left: 0,
    top: 0,
  },
  notStarted: {
    marginLeft: -33.5,
    width: 68,
  },
  rectangleContainer: {
    top: 23,
    left: 234,
  },
  builderForAnd: {
    width: 150,
    fontFamily: FontFamily.outfitBold,
    fontWeight: "700",
    textAlign: "left",
    left: 0,
    position: "absolute",
  },
  processing0: {
    width: 80,
    fontFamily: FontFamily.outfitBold,
    fontWeight: "700",
    textAlign: "left",
    left: 0,
    position: "absolute",
  },
  monMay27: {
    top: 49,
    fontSize: FontSize.overline_size,
    width: 220,
    height: 13,
    color: Color.lightGray11,
  },
  builderForAndParent: {
    top: 12,
    left: 28,
    width: 174,
    height: 62,
    position: "absolute",
  },
  view: {
    left: 183,
    color: Color.colorRoyalblue_200,
    top: 17,
  },
  rectangleIcon: {
    left: 131,
    top: 43,
    width: 85,
    borderRadius: Border.br_31xl,
  },
  rectangleGroup: {
    left: 2,
    top: 0,
  },
  view1: {
    top: 19,
    left: 183,
    color: Color.colorRoyalblue_200,
  },
  layoutDesgin: {
    width: 128,
    fontFamily: FontFamily.outfitBold,
    fontWeight: "700",
    textAlign: "left",
    left: 0,
    position: "absolute",
  },
  processing100: {
    height: 15,
    top: 25,
    fontSize: FontSize.size_xs,
    color: Color.colorGray_100,
  },
  frameChild2: {
    backgroundColor: Color.colorLimegreen_100,
    borderRadius: Border.br_3xs,
    left: 0,
    top: 0,
  },
  done: {
    marginLeft: -14.5,
    width: 31,
  },
  frameView: {
    top: 280,
    left: 2,
  },
  frameChild3: {
    left: 17,
  },
  frameChild4: {
    borderRadius: Border.br_31xl,
  },
  view2: {
    left: 185,
    top: 17,
  },
  googleApi: {
    color: Color.colorDarkslategray_100,
    fontSize: FontSize.uI16Medium1_size,
    height: 19,
    top: 0,
  },
  rectangleParent2: {
    top: 188,
    left: 0,
  },
  frameContainer15Overlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  frameContainer15Bg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  component24Child: {
    height: "92.59%",
    width: "99.77%",
    top: "3.7%",
    right: "0%",
    bottom: "3.7%",
    left: "0.23%",
    borderRadius: Border.br_31xl,
  },
  component24Item: {
    height: "933.33%",
    width: "5.85%",
    right: "35.13%",
    bottom: "-833.33%",
    left: "59.02%",
    transform: [
      {
        rotate: "89.5deg",
      },
    ],
    top: "0%",
    borderRadius: Border.br_31xl,
  },
  component24: {
    left: 0,
    top: 0,
  },
  colorDesign: {
    width: 136,
    fontFamily: FontFamily.outfitBold,
    fontWeight: "700",
    textAlign: "left",
    left: 0,
    position: "absolute",
  },
  processing50: {
    width: 89,
    fontFamily: FontFamily.outfitBold,
    fontWeight: "700",
    textAlign: "left",
    left: 0,
    position: "absolute",
  },
  frameChild7: {
    backgroundColor: "#ccff00",
    borderRadius: Border.br_3xs,
    left: 0,
    top: 0,
  },
  inProgress: {
    marginLeft: -31.5,
    width: 64,
  },
  framePressable: {
    top: 94,
    left: 0,
  },
  frameGroup: {
    marginLeft: -183,
    top: 203,
    width: 365,
    height: 365,
    left: "50%",
    position: "absolute",
  },
  scrollChild: {
    backgroundColor: Color.colorWhitesmoke_200,
    borderRadius: Border.br_31xl,
    left: 0,
    top: 0,
  },
  scrollItem: {
    top: 24,
    height: 134,
    width: 4,
    borderRadius: Border.br_31xl,
    backgroundColor: Color.colorRoyalblue_200,
    left: 0,
    position: "absolute",
  },
  scroll: {
    top: 218,
    left: 368,
  },
  salesWebsiteDesign: {
    left: 45,
    fontSize: FontSize.titlePoppinsLarge_size,
    fontFamily: FontFamily.outfitSemiBold,
    width: 206,
    height: 22,
    color: Color.lightGray11,
    textAlign: "left",
    fontWeight: "600",
    top: 0,
    position: "absolute",
  },
  wedMay8: {
    top: 30,
    left: 19,
    fontSize: FontSize.size_smi,
    fontFamily: FontFamily.outfitMedium,
    width: 232,
    color: Color.lightGray11,
    textAlign: "right",
    fontWeight: "500",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  wrapper: {
    top: 7,
    width: 16,
    left: 0,
  },
  salesWebsiteDesignParent: {
    height: 46,
    width: 232,
    top: 4,
    left: 0,
    position: "absolute",
  },
  frameChild8: {
    marginTop: -27,
    marginLeft: -35,
    width: 70,
    height: 54,
    position: "absolute",
    borderRadius: Border.br_3xs,
    top: "50%",
  },
  frameIcon: {
    width: 25,
    height: 25,
    left: 15,
    top: 2,
    position: "absolute",
  },
  editPlan: {
    fontSize: FontSize.size_4xs,
    letterSpacing: 0.2,
    display: "flex",
    height: 10,
    bottom: 0,
    width: 53,
    color: Color.lightGray11,
    fontFamily: FontFamily.uI16Medium1,
    fontWeight: "500",
    textAlign: "center",
    left: 0,
  },
  frameParent1: {
    marginLeft: -26,
    top: 8,
    height: 39,
    width: 53,
    left: "50%",
    position: "absolute",
  },
  rectangleParent5: {
    left: 262,
    top: 0,
  },
  frameContainer: {
    left: 14,
    height: 54,
    width: 332,
    top: 17,
    position: "absolute",
  },
  description: {
    left: 1,
    width: 83,
    fontSize: FontSize.bodyMedium_size,
    fontFamily: FontFamily.outfitBold,
    color: Color.lightGray11,
    fontWeight: "700",
    textAlign: "left",
    top: 0,
    position: "absolute",
  },
  saleWebDesign: {
    top: 22,
    fontFamily: FontFamily.outfitRegular,
    height: 64,
    color: Color.lightGray11,
    fontSize: FontSize.size_xs,
    width: 177,
    textAlign: "left",
    left: 0,
  },
  descriptionParent: {
    left: 148,
    height: 86,
    width: 177,
    top: 13,
  },
  chart3Parent: {
    width: 123,
    left: 0,
    top: 0,
  },
  text: {
    top: 44,
    left: 39,
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.openSansBold,
    width: 46,
    color: Color.lightGray11,
    fontWeight: "700",
    height: 24,
    textAlign: "left",
  },
  frameParent2: {
    top: 84,
    width: 325,
    left: 17,
  },
  frameParent: {
    top: 143,
    height: 586,
    borderRadius: Border.br_xl,
    width: 360,
    left: 0,
    position: "absolute",
    overflow: "hidden",
    backgroundColor: Color.lightGray0,
  },
  kpiCompletionProgressdetailChild: {
    marginLeft: -166,
    top: 224,
    width: 332,
    left: "50%",
    maxHeight: "100%",
    position: "absolute",
  },
  frameChild9: {
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
    left: "50%",
    width: 360,
  },
  frameChild10: {
    left: 9,
    top: 19,
  },
  frameChild11: {
    marginLeft: -24.5,
    height: 4,
    width: 49,
    borderRadius: Border.br_3xs,
    left: "50%",
    top: 0,
  },
  frameParent4: {
    width: 49,
    height: 71,
  },
  container: {
    marginLeft: 12,
    width: 49,
    height: 71,
  },
  frameChild12: {
    marginLeft: -16,
    borderRadius: Border.br_81xl,
    backgroundColor: Color.gray02,
    left: "50%",
    top: 0,
  },
  vectorIcon: {
    marginLeft: -9,
    width: 18,
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
  },
  frameParent3: {
    marginLeft: -146.5,
    flexDirection: "row",
    left: "50%",
    top: 0,
  },
  frameWrapper: {
    left: 16,
    width: 329,
    height: 71,
  },
  rectangleParent6: {
    height: 72,
    bottom: 0,
    position: "absolute",
  },
  kpiCompletionProgressdetail: {
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.lightGray0,
  },
});

export default KPICompletionProgressDetail;
