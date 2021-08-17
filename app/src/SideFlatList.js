import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';

export default function SideFlatList(props) {

    const [alphabets, setAlphabets] = React.useState([
        {name: 'A'},
        {name: 'B'},
        {name: 'C'},
        {name: 'D'},
        {name: 'E'},
        {name: 'F'},
        {name: 'G'},
        {name: 'H'},
    ]);

    const [numbers, setNumbers] = React.useState([
        {name: '8'},
        {name: '7'},
        {name: '6'},
        {name: '5'},
        {name: '4'},
        {name: '3'},
        {name: '2'},
        {name: '1'},
    ]);

    return (
        <View style={[props.style, styles.mainContainer]}>
            <FlatList
                data={props.dataType === 'alphabets' ? alphabets : numbers}
                horizontal={props.horizontal}
                scrollEnabled={false}
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
                renderItem={({item}) =>
                    <View style={[props.horizontal ? styles.cellHorizontal : styles.cellVertical, {
                        flex: 1,
                        backgroundColor: 'black',
                    }]}>
                        <Text style={styles.cellTextStyle}> {item.name} </Text>
                    </View>
                }>
            </FlatList>
        </View>
    );
}

const styles = StyleSheet.create({
    mainContainer: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black',
    },
    cellHorizontal: {
        width: 45, height: 20,
    },
    cellVertical: {
        width: 15, height: 50, justifyContent: 'center',
    },
    cellTextStyle: {
        textAlign: 'center',
        color: 'white',
        fontWeight: 'bold',
    },
});
