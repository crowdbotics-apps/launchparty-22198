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
      <Image
        source={{
          uri:
            "https://d3tklmlrp1a8c2.cloudfront.net/media/project_component_resources/Screen_Shot_2020-11-01_at_6.47.24_PM_DZv9jjX.png"
        }}
      />
      <Button
        title="Investors"
        color="#33e7FF"
        style={styles.Button_3}
        onPress={() => alert("Pressed!")}
      />
      <Button
        title="Startups"
        color="#33e7FF"
        style={styles.Button_5}
        onPress={() => alert("Pressed!")}
      />
      <Button title="" color="#158e33" onPress={() => alert("Pressed!")} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16
  },
  View_1: {},
  Image_10: {},
  Button_3: { color: "#ffffff" },
  Button_5: { color: "#ffffff" },
  Button_12: {}
})
