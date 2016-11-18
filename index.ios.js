import React, {Component} from "react";
import {AppRegistry} from "react-native";
import App from "./app/components/App";

export default class shupp extends Component {
  render() {
    return (
        <App />
    );
  }
}
AppRegistry.registerComponent('shupp', () => shupp);
