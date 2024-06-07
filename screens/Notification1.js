import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontSize, Color, FontFamily, Border } from "../GlobalStyles";

const Notification1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.notification}>
      <View style={styles.rectangleParent}>
        <View style={styles.frameChild} />
        <View style={styles.frameItem} />
      </View>
      <View style={styles.pageHeader}>
        <Text style={[styles.filter, styles.filterTypo]} />
        <Text style={styles.nofication}>Nofication</Text>
        <View style={[styles.backParent, styles.filterPosition]}>
          <Text style={[styles.back, styles.backTypo]}>Back</Text>
          <Pressable
            style={[styles.next, styles.backPosition]}
            onPress={() => navigation.navigate("ProfilePhotos")}
          >
            <Text style={styles.backTypo}>Next</Text>
          </Pressable>
        </View>
      </View>
      <Image
        style={[styles.notificationChild, styles.notificationChildLayout]}
        contentFit="cover"
        source={require("../assets/line-17.png")}
      />
      <View style={[styles.beforeParent, styles.parentPosition]}>
        <Text style={[styles.before, styles.beforeTypo]}>Before</Text>
        <View style={[styles.frameWrapper, styles.frameLayout]}>
          <View style={styles.frameParent}>
            <View style={[styles.frameGroup, styles.frameLayout]}>
              <Image
                style={styles.frameInner}
                contentFit="cover"
                source={require("../assets/frame-496214.png")}
              />
              <View style={[styles.kpiEduParent, styles.kpiParentPosition]}>
                <Text style={[styles.kpiEdu, styles.kpiPosition]}>KPI EDU</Text>
                <Text
                  style={[styles.youHaveA, styles.youTypo]}
                >{`You have a task at 08:00 10/11
Japanese Minitest`}</Text>
                <Text style={[styles.dayAgo, styles.agoTypo]}>1 day ago</Text>
              </View>
            </View>
            <View style={[styles.frameContainer, styles.frameLayout]}>
              <Image
                style={styles.frameInner}
                contentFit="cover"
                source={require("../assets/frame-496214.png")}
              />
              <View style={[styles.kpiEduParent, styles.kpiParentPosition]}>
                <Text style={[styles.kpiEdu, styles.kpiPosition]}>KPI EDU</Text>
                <Text
                  style={[styles.youHaveA, styles.youTypo]}
                >{`You have a task at 08:00 10/11
Japanese Minitest`}</Text>
                <Text style={[styles.dayAgo, styles.agoTypo]}>1 day ago</Text>
              </View>
            </View>
            <View style={[styles.frameContainer, styles.frameLayout]}>
              <Image
                style={styles.frameInner}
                contentFit="cover"
                source={require("../assets/frame-496214.png")}
              />
              <View style={[styles.kpiEduParent, styles.kpiParentPosition]}>
                <Text style={[styles.kpiEdu, styles.kpiPosition]}>KPI EDU</Text>
                <Text
                  style={[styles.youHaveA, styles.youTypo]}
                >{`You have a task at 08:00 10/11
Japanese Minitest`}</Text>
                <Text style={[styles.dayAgo, styles.agoTypo]}>1 day ago</Text>
              </View>
            </View>
            <View style={[styles.frameContainer, styles.frameLayout]}>
              <Image
                style={styles.frameInner}
                contentFit="cover"
                source={require("../assets/frame-496214.png")}
              />
              <View style={[styles.kpiEduParent, styles.kpiParentPosition]}>
                <Text style={[styles.kpiEdu, styles.kpiPosition]}>KPI EDU</Text>
                <Text
                  style={[styles.youHaveA, styles.youTypo]}
                >{`You have a task at 08:00 10/11
Japanese Minitest`}</Text>
                <Text style={[styles.dayAgo, styles.agoTypo]}>1 day ago</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.recentlyParent, styles.parentPosition]}>
        <Text style={[styles.recently, styles.beforeTypo]}>Recently</Text>
        <View style={[styles.frameParent2, styles.framePosition]}>
          <View style={[styles.frameParent3, styles.frameParentLayout]}>
            <Image
              style={styles.frameInner}
              contentFit="cover"
              source={require("../assets/frame-496214.png")}
            />
            <View style={[styles.kpiEduParent2, styles.kpiParentPosition]}>
              <Text style={[styles.kpiEdu4, styles.kpiPosition]}>KPI EDU</Text>
              <Text
                style={[styles.youHaveA4, styles.youTypo]}
              >{`You have a task at 15:00 11/11
Color Design`}</Text>
              <Text style={[styles.minutesAgo, styles.agoTypo]}>
                1 minutes ago
              </Text>
            </View>
            <Image
              style={styles.ellipseIcon}
              contentFit="cover"
              source={require("../assets/ellipse-33.png")}
            />
          </View>
          <View style={[styles.frameParent4, styles.frameParentLayout]}>
            <Image
              style={styles.frameInner}
              contentFit="cover"
              source={require("../assets/frame-496214.png")}
            />
            <View style={[styles.kpiEduParent2, styles.kpiParentPosition]}>
              <Text style={[styles.kpiEdu4, styles.kpiPosition]}>KPI EDU</Text>
              <Text
                style={[styles.youHaveA4, styles.youTypo]}
              >{`You have a task at 15:00 11/11
Color Design`}</Text>
              <Text style={[styles.minutesAgo, styles.agoTypo]}>
                1 minutes ago
              </Text>
            </View>
            <Image
              style={styles.ellipseIcon}
              contentFit="cover"
              source={require("../assets/ellipse-33.png")}
            />
          </View>
        </View>
        <Pressable
          style={styles.clearAll}
          onPress={() => navigation.navigate("Notification2")}
        >
          <Text style={[styles.clearAll1, styles.allTypo]}>Clear all</Text>
        </Pressable>
      </View>
      <View style={styles.rectangleGroup}>
        <View style={[styles.rectangleView, styles.topDividerPosition]} />
        <View style={[styles.topDivider, styles.topDividerPosition]} />
        <View style={[styles.frameParent5, styles.topDividerPosition]}>
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
          <View style={styles.container}>
            <View style={styles.rectangleContainer}>
              <View style={[styles.frameChild6, styles.frameChildPosition]} />
              <Image
                style={styles.vectorIcon}
                contentFit="cover"
                source={require("../assets/vector1.png")}
              />
            </View>
            <Image
              style={styles.rectangleIcon}
              contentFit="cover"
              source={require("../assets/rectangle-2517.png")}
            />
          </View>
          <Pressable
            style={styles.container}
            onPress={() => navigation.navigate("ProfilePhotos")}
          >
            <View style={styles.rectangleContainer}>
              <View style={[styles.frameChild7, styles.frameChildPosition]} />
              <Image
                style={[
                  styles.combinedShapeIcon,
                  styles.notificationChildLayout,
                ]}
                contentFit="cover"
                source={require("../assets/combined-shape1.png")}
              />
            </View>
          </Pressable>
        </View>
      </View>
      <Pressable
        style={styles.markAllAsContainer}
        onPress={() => navigation.navigate("NotificationMaskRead")}
      >
        <Text style={[styles.markAllAsRead, styles.allTypo]}>
          Mark all as read
        </Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  filterTypo: {
    textAlign: "right",
    fontSize: FontSize.uI16Medium1_size,
  },
  filterPosition: {
    top: 8,
    position: "absolute",
  },
  backTypo: {
    textAlign: "left",
    marginTop: -9.5,
    color: Color.lightGray0,
    fontFamily: FontFamily.uI16Medium1,
    fontWeight: "500",
    fontSize: FontSize.uI16Medium1_size,
  },
  backPosition: {
    top: "50%",
    position: "absolute",
  },
  notificationChildLayout: {
    maxHeight: "100%",
    position: "absolute",
  },
  parentPosition: {
    width: 315,
    marginLeft: -157,
    left: "50%",
    position: "absolute",
  },
  beforeTypo: {
    height: 21,
    display: "flex",
    color: Color.colorDarkslategray_100,
    fontSize: FontSize.size_xl,
    left: 4,
    alignItems: "center",
    fontFamily: FontFamily.overline,
    fontWeight: "600",
    textAlign: "left",
    position: "absolute",
  },
  frameLayout: {
    width: 264,
    height: 68,
  },
  kpiParentPosition: {
    width: 198,
    left: 66,
    top: 0,
    position: "absolute",
  },
  kpiPosition: {
    left: "0%",
    top: "0%",
    width: "64.44%",
    fontSize: FontSize.size_mid,
    color: Color.colorDarkslategray_100,
    textAlign: "left",
    position: "absolute",
  },
  youTypo: {
    fontSize: FontSize.size_xs,
    left: "0%",
    color: Color.colorDarkslategray_100,
    textAlign: "left",
    position: "absolute",
    width: "100%",
  },
  agoTypo: {
    color: Color.colorRoyalblue_100,
    fontSize: FontSize.size_3xs,
    width: "64.65%",
    left: "0%",
    textAlign: "left",
    position: "absolute",
  },
  framePosition: {
    left: 13,
    position: "absolute",
  },
  frameParentLayout: {
    width: 302,
    height: 67,
  },
  allTypo: {
    height: 15,
    color: Color.colorRoyalblue_100,
    alignItems: "center",
    display: "flex",
    fontFamily: FontFamily.overline,
    fontWeight: "600",
  },
  topDividerPosition: {
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
  frameChild: {
    height: 194,
    backgroundColor: Color.colorRoyalblue_200,
    right: 0,
    left: 0,
    top: 0,
    position: "absolute",
  },
  frameItem: {
    top: 80,
    shadowColor: "rgba(75, 75, 75, 0.15)",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 16,
    elevation: 16,
    shadowOpacity: 1,
    borderRadius: Border.br_base,
    height: 720,
    width: 360,
    left: 0,
    position: "absolute",
    backgroundColor: Color.lightGray0,
  },
  rectangleParent: {
    width: 360,
    left: 0,
    top: 0,
    position: "absolute",
    height: 800,
  },
  filter: {
    color: Color.greenPrimary,
    fontFamily: FontFamily.uI16Medium1,
    fontWeight: "500",
    top: 8,
    position: "absolute",
    right: 0,
  },
  nofication: {
    marginLeft: -76.5,
    fontSize: FontSize.uI30Semi_size,
    textAlign: "center",
    color: Color.lightGray0,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    left: "50%",
    top: 0,
    position: "absolute",
  },
  back: {
    top: "50%",
    position: "absolute",
    left: 0,
  },
  next: {
    right: 0,
  },
  backParent: {
    right: 6,
    height: 19,
    left: 0,
  },
  pageHeader: {
    marginLeft: -162,
    top: 28,
    width: 325,
    height: 36,
    left: "50%",
    position: "absolute",
  },
  notificationChild: {
    marginLeft: -173,
    top: 310,
    width: 346,
    left: "50%",
  },
  before: {
    top: 3,
    width: 76,
  },
  frameInner: {
    top: 10,
    width: 48,
    height: 48,
    left: 0,
    position: "absolute",
  },
  kpiEdu: {
    height: "32.35%",
    fontSize: FontSize.size_mid,
    fontFamily: FontFamily.overline,
    fontWeight: "600",
    left: "0%",
    top: "0%",
    width: "64.44%",
  },
  youHaveA: {
    height: "39.71%",
    top: "32.35%",
    fontFamily: FontFamily.uI16Medium1,
    fontWeight: "500",
  },
  dayAgo: {
    height: "19.12%",
    top: "80.88%",
    fontFamily: FontFamily.uI16Medium1,
    fontWeight: "500",
  },
  kpiEduParent: {
    height: 68,
  },
  frameGroup: {
    height: 68,
  },
  frameContainer: {
    marginTop: 12,
    height: 68,
  },
  frameParent: {
    width: 307,
    justifyContent: "center",
    left: 0,
    top: 0,
    position: "absolute",
  },
  frameWrapper: {
    top: 38,
    height: 68,
    left: 13,
    position: "absolute",
  },
  beforeParent: {
    top: 322,
    height: 346,
  },
  recently: {
    width: 88,
    top: 0,
  },
  kpiEdu4: {
    height: "32.84%",
    fontSize: FontSize.size_mid,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
  },
  youHaveA4: {
    height: "40.3%",
    top: "32.84%",
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
  },
  minutesAgo: {
    height: "19.4%",
    top: "80.6%",
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
  },
  kpiEduParent2: {
    height: 67,
  },
  ellipseIcon: {
    top: 27,
    left: 293,
    width: 9,
    height: 9,
    position: "absolute",
  },
  frameParent3: {
    height: 67,
  },
  frameParent4: {
    height: 67,
    marginTop: 12,
  },
  frameParent2: {
    top: 36,
  },
  clearAll1: {
    width: 70,
    textAlign: "right",
    fontSize: FontSize.uI16Medium1_size,
  },
  clearAll: {
    top: 6,
    right: 0,
    position: "absolute",
  },
  recentlyParent: {
    top: 111,
    height: 180,
  },
  rectangleView: {
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
  frameChild6: {
    backgroundColor: Color.colorRoyalblue_200,
  },
  vectorIcon: {
    marginLeft: -9,
    top: 4,
    width: 18,
    height: 24,
    left: "50%",
    position: "absolute",
  },
  rectangleContainer: {
    top: 19,
    left: 9,
    height: 32,
    width: 32,
    position: "absolute",
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
  frameChild7: {
    backgroundColor: Color.gray02,
  },
  combinedShapeIcon: {
    height: "68.75%",
    width: "62.5%",
    top: "15.63%",
    right: "18.75%",
    bottom: "15.63%",
    left: "18.75%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  frameParent5: {
    marginLeft: -146.5,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    top: 1,
    left: "50%",
  },
  rectangleGroup: {
    marginLeft: -180,
    bottom: 0,
    height: 72,
    left: "50%",
    width: 360,
    position: "absolute",
  },
  markAllAsRead: {
    marginLeft: -70,
    width: 141,
    fontSize: FontSize.size_mid,
    justifyContent: "center",
    textAlign: "center",
  },
  markAllAsContainer: {
    top: 689,
    left: "50%",
    position: "absolute",
  },
  notification: {
    flex: 1,
    overflow: "hidden",
    height: 800,
    width: "100%",
    backgroundColor: Color.lightGray0,
  },
});

export default Notification1;
