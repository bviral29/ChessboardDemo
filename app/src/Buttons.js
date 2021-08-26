import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

export default function Buttons(props) {

    return (
        <TouchableOpacity style={[styles.mainContainer, props.style]} onPress={props.onPress}>
            <Text style={[styles.btnTextStyle, props.btnTextStyle]}>{props.btnText}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    mainContainer: {
        width: '50%',
        height: 50,
        justifyContent: 'center',
    },
    btnTextStyle: {
        fontSize: 24,
        textAlign: 'center',
        color: 'white',
    },
});
