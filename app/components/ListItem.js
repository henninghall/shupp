import React, {Component} from "react";
import {StyleSheet, View, Text} from "react-native";

export default class ListItem extends Component {

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>{this.props.title}</Text>
                <Text style={styles.text}>{this.props.price}:-</Text>
            </View>
        )
    }

}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    text: {
        fontSize: 20,
    }
});
