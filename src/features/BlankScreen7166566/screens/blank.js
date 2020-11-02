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
            "https://d3tklmlrp1a8c2.cloudfront.net/media/project_component_resources/Screen_Shot_2020-11-01_at_6.47.24_PM_Giv7PSc.png"
        }}
      />
      <Button
        title="Investors"
        color="#247d89"
        style={styles.Button_6}
        onPress={() => this.props.navigation.navigate("BlankScreen8166564")}
      />
      <Button
        title="Startups"
        color="#247d89"
        style={styles.Button_8}
        onPress={() => this.props.navigation.navigate("BlankScreen11166500")}
      />
      <Button title="" color="#000000" onPress={() => alert("Pressed!")} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16
  },
  View_1: {},
  Image_3: {},
  Button_6: { color: "#ffffff" },
  Button_8: { color: "#ffffff" },
  Button_10: {}
})
