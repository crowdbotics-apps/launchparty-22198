import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet
} from "react-native"
import DateTimePicker from "react-native-datepicker"
import Icon from "react-native-vector-icons/FontAwesome"
import Slider from "@react-native-community/slider"
import { CheckBox } from "react-native-elements"
import { SlideMenuIcon } from "../../../navigator/slideMenuIcon"

export default class Blank extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerLeft: <SlideMenuIcon navigationProps={navigation} />
    }
  }

  state = {}

  render = () => (
    <View>
      <Button
        title="Profile"
        color="#33e7ff"
        style={styles.Button_9}
        onPress={() => alert("Pressed!")}
      />
      <Button
        title="Portfolio"
        color="#33e7FF"
        style={styles.Button_14}
        onPress={() => alert("Pressed!")}
      />
      <Button
        title="Explore"
        color="#33e7FF"
        style={styles.Button_16}
        onPress={() => alert("Pressed!")}
      />
      <Button
        title="Search"
        color="#33e7FF"
        style={styles.Button_18}
        onPress={() => alert("Pressed!")}
      />
      <View>
        <View style={styles.View_23}>
          <Image style={styles.Image_26} />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16
  },
  View_1: {},
  Button_9: { color: "#ffffff", borderColor: "#ffffff", borderWidth: 1 },
  Button_14: { color: "#ffffff" },
  Button_16: { color: "#ffffff" },
  Button_18: {
    marginTop: 5,
    marginBottom: 5,
    paddingLeft: 5,
    paddingRight: 5,
    paddingTop: 5,
    paddingBottom: 5,
    fontSize: 12,
    color: "#ffffff",
    backgroundColor: "#ffffff",
    fontStyle: "normal",
    fontWeight: "normal",
    textAlign: "center",
    textAlignVertical: "center",
    textDecorationLine: "none",
    textTransform: "none",
    lineHeight: 12,
    letterSpacing: 0
  },
  View_22: {},
  View_23: { width: 302, height: 100 },
  Image_26: { width: 300, height: 100, paddingTop: 50 }
})
