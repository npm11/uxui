import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontSize, Color, FontFamily, Border } from "../GlobalStyles";

const Notification2 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.notification}>
      <View style={styles.rectangleParent}>
        <View style={styles.frameChild} />
        <View style={styles.frameItem} />
      </View>
      <View style={[styles.pageHeader, styles.iconParentPosition]}>
        <Text style={[styles.filter, styles.filterTypo]} />
        <Text style={styles.nofication}>Nofication</Text>
        <View style={styles.backParent}>
          <Text style={[styles.back, styles.backTypo]}>Back</Text>
          <Pressable
            style={[styles.next, styles.backPosition]}
            onPress={() => navigation.navigate("ProfilePhotos")}
          >
            <Text style={styles.backTypo}>Next</Text>
          </Pressable>
        </View>
      </View>
      <View style={[styles.recentlyParent, styles.iconParentPosition]}>
        <Text style={[styles.recently, styles.recentlyFlexBox]}>Recently</Text>
        <Text style={[styles.clearAll, styles.allTypo]}>Clear all</Text>
        <View
          style={[
            styles.mdideleteEmptyOutlineParent,
            styles.iconParentPosition,
          ]}
        >
          <Image
            style={[
              styles.mdideleteEmptyOutlineIcon,
              styles.iconParentPosition,
            ]}
            contentFit="cover"
            source={require("../assets/mdideleteemptyoutline.png")}
          />
          <Text style={styles.noRecentNotification}>
            No recent notification
          </Text>
        </View>
      </View>
      <View style={[styles.rectangleGroup, styles.iconParentPosition]}>
        <View style={styles.frameInner} />
        <View style={styles.topDivider} />
        <View style={[styles.frameParent, styles.markAllAsFlexBox]}>
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
              <View
                style={[styles.rectangleView, styles.frameChild1Position]}
              />
              <Image
                style={[styles.vectorIcon, styles.iconParentPosition]}
                contentFit="cover"
                source={require("../assets/vector1.png")}
              />
            </View>
            <Image
              style={[styles.rectangleIcon, styles.iconParentPosition]}
              contentFit="cover"
              source={require("../assets/rectangle-2517.png")}
            />
          </View>
          <Pressable
            style={styles.container}
            onPress={() => navigation.navigate("ProfilePhotos")}
          >
            <View style={styles.rectangleContainer}>
              <View style={[styles.frameChild1, styles.frameChild1Position]} />
              <Image
                style={styles.combinedShapeIcon}
                contentFit="cover"
                source={require("../assets/combined-shape1.png")}
              />
            </View>
          </Pressable>
        </View>
      </View>
      <Text style={[styles.markAllAs, styles.markAllAsFlexBox]}>
        Mark all as read
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  iconParentPosition: {
    left: "50%",
    position: "absolute",
  },
  filterTypo: {
    textAlign: "right",
    fontSize: FontSize.uI16Medium1_size,
    right: 0,
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
  recentlyFlexBox: {
    alignItems: "center",
    position: "absolute",
  },
  allTypo: {
    height: 15,
    color: Color.colorRoyalblue_100,
    display: "flex",
    fontFamily: FontFamily.overline,
    fontWeight: "600",
  },
  markAllAsFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    left: "50%",
    position: "absolute",
  },
  frameChild1Position: {
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
    textAlign: "right",
    fontSize: FontSize.uI16Medium1_size,
    top: 8,
    position: "absolute",
  },
  nofication: {
    marginLeft: -76.5,
    fontSize: FontSize.uI30Semi_size,
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    textAlign: "center",
    color: Color.lightGray0,
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
    top: 8,
    left: 0,
    position: "absolute",
  },
  pageHeader: {
    marginLeft: -162,
    width: 325,
    height: 36,
    top: 28,
    left: "50%",
  },
  recently: {
    left: 4,
    fontSize: FontSize.size_xl,
    color: Color.colorDarkslategray_100,
    width: 88,
    height: 21,
    display: "flex",
    alignItems: "center",
    fontFamily: FontFamily.overline,
    fontWeight: "600",
    textAlign: "left",
    top: 0,
  },
  clearAll: {
    top: 6,
    width: 70,
    alignItems: "center",
    position: "absolute",
    textAlign: "right",
    fontSize: FontSize.uI16Medium1_size,
    right: 0,
    height: 15,
    color: Color.colorRoyalblue_100,
  },
  mdideleteEmptyOutlineIcon: {
    marginLeft: -25,
    width: 50,
    height: 50,
    top: 28,
    left: "50%",
    overflow: "hidden",
  },
  noRecentNotification: {
    marginLeft: -79,
    top: 3,
    fontSize: FontSize.size_mini,
    color: "#a3a3a3",
    fontFamily: FontFamily.overline,
    fontWeight: "600",
    textAlign: "left",
    left: "50%",
    position: "absolute",
  },
  mdideleteEmptyOutlineParent: {
    marginLeft: -104.5,
    top: 71,
    width: 210,
    height: 99,
  },
  recentlyParent: {
    marginLeft: -157,
    top: 111,
    width: 315,
    height: 180,
  },
  frameInner: {
    height: 71,
    top: 1,
    width: 360,
    left: 0,
    position: "absolute",
    backgroundColor: Color.lightGray0,
  },
  topDivider: {
    backgroundColor: Color.colorSilver_100,
    height: 1,
    top: 1,
    right: 0,
    left: 0,
    position: "absolute",
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
  rectangleView: {
    backgroundColor: Color.colorRoyalblue_200,
  },
  vectorIcon: {
    marginLeft: -9,
    top: 4,
    width: 18,
    height: 24,
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
    top: 0,
  },
  frameChild1: {
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
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  frameParent: {
    marginLeft: -146.5,
    flexDirection: "row",
    top: 1,
  },
  rectangleGroup: {
    marginLeft: -180,
    bottom: 0,
    height: 72,
    width: 360,
  },
  markAllAs: {
    marginLeft: -70,
    top: 689,
    fontSize: FontSize.size_mid,
    width: 141,
    height: 15,
    color: Color.colorRoyalblue_100,
    display: "flex",
    fontFamily: FontFamily.overline,
    fontWeight: "600",
    textAlign: "center",
  },
  notification: {
    flex: 1,
    overflow: "hidden",
    height: 800,
    width: "100%",
    backgroundColor: Color.lightGray0,
  },
});

export default Notification2;
