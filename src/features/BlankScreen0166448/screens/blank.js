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

  state = { TextInput_3: "", TextInput_33: "" }

  render = () => (
    <View>
      <Text style={styles.Text_29}>Welcome!</Text>
      <Image />
      <TextInput
        placeholder="Username"
        value={this.state.TextInput_3}
        onChangeText={nextValue => this.setState({ TextInput_3: nextValue })}
      />
      <TextInput
        placeholder="Password"
        value={this.state.TextInput_33}
        onChangeText={nextValue => this.setState({ TextInput_33: nextValue })}
      />
      <Button
        title="Create Account"
        color="#33e7ff"
        style={styles.Button_35}
        onPress={() => this.props.navigation.navigate("BlankScreen1166449")}
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
  Text_29: { alignSelf: "center" },
  Image_30: {},
  TextInput_3: {},
  TextInput_33: {},
  View_1: {},
  Text_29: { alignSelf: "center" },
  Image_30: {},
  TextInput_3: {},
  TextInput_33: {},
  Button_35: { color: "#ffffff" }
})
