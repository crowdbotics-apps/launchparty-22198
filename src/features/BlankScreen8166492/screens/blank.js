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

  state = { TextInput_5: "", TextInput_8: "", TextInput_10: "" }

  render = () => (
    <View>
      <Image
        source={{
          uri:
            "https://d3tklmlrp1a8c2.cloudfront.net/media/project_component_resources/Screen_Shot_2020-11-01_at_6.47.24_PM_8sM1o2K.png"
        }}
      />
      <TextInput
        placeholder="Company Name"
        value={this.state.TextInput_5}
        onChangeText={nextValue => this.setState({ TextInput_5: nextValue })}
      />
      <TextInput
        placeholder="E-Mail"
        value={this.state.TextInput_8}
        onChangeText={nextValue => this.setState({ TextInput_8: nextValue })}
      />
      <TextInput
        placeholder="Company Description"
        value={this.state.TextInput_10}
        onChangeText={nextValue => this.setState({ TextInput_10: nextValue })}
      />
      <Button
        title="Join the waitlist!"
        color="#33e7FF"
        style={styles.Button_12}
        onPress={() => alert("Pressed!")}
      />
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
  TextInput_5: {},
  TextInput_8: {},
  TextInput_10: {},
  Button_12: { color: "#ffffff" }
})
