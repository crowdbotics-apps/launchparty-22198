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

  state = {
    TextInput_3: "",
    TextInput_5: "",
    TextInput_12: "",
    TextInput_22: "",
    TextInput_7: ""
  }

  render = () => (
    <View>
      <TextInput
        placeholder="Card number"
        value={this.state.TextInput_3}
        onChangeText={nextValue => this.setState({ TextInput_3: nextValue })}
      />
      <TextInput
        placeholder="Name on card"
        value={this.state.TextInput_5}
        onChangeText={nextValue => this.setState({ TextInput_5: nextValue })}
      />
      <TextInput
        placeholder="Expiration Month (MM)"
        style={styles.TextInput_12}
        value={this.state.TextInput_12}
        onChangeText={nextValue => this.setState({ TextInput_12: nextValue })}
      />
      <TextInput
        placeholder="Expiration Year (YYYY)"
        style={styles.TextInput_22}
        value={this.state.TextInput_22}
        onChangeText={nextValue => this.setState({ TextInput_22: nextValue })}
      />
      <TextInput
        placeholder="CVC Code"
        value={this.state.TextInput_7}
        onChangeText={nextValue => this.setState({ TextInput_7: nextValue })}
      />
      <Button
        title="Purchase"
        color="#33f1ff"
        style={styles.Button_24}
        onPress={() => alert("Pressed!")}
      />
      <Button title="Press me!" onPress={() => alert("Pressed!")} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16
  },

  View_1: {},
  TextInput_3: {},
  TextInput_5: {},
  TextInput_7: {},
  View_1: {},
  TextInput_3: {},
  TextInput_5: {},
  TextInput_12: { paddingLeft: 0, paddingRight: 0 },
  TextInput_22: { paddingLeft: 0, paddingRight: 0 },
  TextInput_7: {},
  Button_24: { color: "#ffffff" },
  View_1: {},
  TextInput_3: {},
  TextInput_5: {},
  TextInput_12: { paddingLeft: 0, paddingRight: 0 },
  TextInput_22: { paddingLeft: 0, paddingRight: 0 },
  TextInput_7: {},
  Button_24: { color: "#ffffff" },
  View_1: {},
  TextInput_3: {},
  TextInput_5: {},
  TextInput_12: { paddingLeft: 0, paddingRight: 0 },
  TextInput_22: { paddingLeft: 0, paddingRight: 0 },
  TextInput_7: {},
  Button_24: { color: "#ffffff" },
  Button_26: {}
})
