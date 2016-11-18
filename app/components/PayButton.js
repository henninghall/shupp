import React, {Component} from "react";
import {StyleSheet, Text, Alert, View, TouchableHighlight} from "react-native";

export default class PayButton extends Component {

    render() {

        return (
            <TouchableHighlight style={styles.container} onPress={this.onPressButton} >
                <Text style={styles.buttonText}>Pay</Text>
            </TouchableHighlight>
        )
    }

    onPressButton() {
        Alert.alert('Payment received','Please come again!',);
    }

}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 20,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#e05a06',
        borderRadius: 15,
    },
    buttonText: {
        fontSize: 25,
        color: 'white',
    }
});
