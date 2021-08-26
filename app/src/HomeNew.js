// import React from 'react';
import React, {useEffect, useState} from 'react';
import {FlatList, Image, LogBox, StyleSheet, View} from 'react-native';
import SideFlatList from './SideFlatList';
import Images from '../res/ImageConst/Images';
import Buttons from './Buttons';

let colorFlag = true;
let whitesTurn = true;

export default function HomeNew(props) {

    let [chessBoxes, setChessBoxesArray] = useState([]);
    //let [colorFlag, setColorFlag] = useState(true);
    //let [whitesTurn, setWhitesTurn] = useState(true);
    const [alphabets] = useState([{key: 'A'}, {key: 'B'}, {key: 'C'}, {key: 'D'}, {key: 'E'}, {key: 'F'}, {key: 'G'}, {key: 'H'}]);

    useEffect(() => {
        LogBox.ignoreAllLogs(true);

        console.log('CHESS BOXES BEFORE :>>> ', chessBoxes);
        for (let i = 8; i > 0; i--) {
            for (let j = 0; j < 8; j++) {
                let item = {
                    id: chessBoxes.length,
                    name: alphabets[j].key + (i),
                    color: colorFlag ? 'white' : 'black',
                    img: setImage(i, j),
                };
                colorFlag = (j === 7 ? colorFlag : !colorFlag);
                chessBoxes.push(item);
                setChessBoxesArray(chessBoxes);
            }
        }
        console.log('CHESS BOXES AFTER :>>> ', chessBoxes);
    }, [setChessBoxesArray]);

    return (
        <View style={styles.mainContainer}>
            <SideFlatList horizontal={true} dataType={'alphabets'}/>
            <View style={{flexDirection: 'row'}}>
                <SideFlatList style={{flex: 0.04}} horizontal={false} dataType={'numbers'}/>
                <FlatList
                    data={chessBoxes}
                    style={styles.mainFlatList}
                    renderItem={renderItem}
                    numColumns={8}
                    keyExtractor={item => item._id}
                />
                <SideFlatList style={{flex: 0.04}} horizontal={false} dataType={'numbers'}/>
            </View>
            <SideFlatList horizontal={true} dataType={'alphabets'}/>

            <View style={{
                flexDirection: 'row',
                position: 'absolute',
                bottom: 0,
                flex: 1,
                justifyContent: 'space-between',
                padding: 8,
            }}>
                <Buttons style={[styles.touchableTextStyle, {backgroundColor: '#FF847C', marginRight: 4}]}
                         onPress={() => {
                             resetPieces();
                         }} btnText={'Reset'} btnTextStyle={styles.btnTextStyle}>
                </Buttons>
                <Buttons style={[styles.touchableTextStyle, {backgroundColor: '#E84A5F', marginRight: 4}]}
                         onPress={() => {
                             makeRandomMove();
                         }} btnText={'Random'} btnTextStyle={styles.btnTextStyle}>
                </Buttons>
            </View>
        </View>
    );

    function renderItem(item) {
        console.log('ARRAY ITEM :>>> ', item);
        return (
            <View style={[styles.chessBoxBlockStyle, {backgroundColor: item.color}]}>
                <Image style={styles.chessBoxImageStyle} source={item.img} resizeMode={'contain'}/>
            </View>
        );
    }

    function setImage(i, j) {
        switch (i) {
            case 8:
                return Images.BLACK[j].img;

            case 7:
                return Images.BLACK_PAWN;

            case 2:
                return Images.WHITE_PAWN;

            case 1:
                return Images.WHITE[j].img;

            default:
                return null;
        }
    }

    function makeRandomMove() {
        let randNo = Math.floor(Math.random() * 5);

        switch (randNo) {
            //King's Pawn Opening
            case 0:
                console.log(randNo + ' :>>> King\'s Pawn Opening || ', 'whitesTurn :>>> ' + whitesTurn);
                makeMove(whitesTurn ? 'E2' : 'E7', whitesTurn ? 'E4' : 'E5', whitesTurn ? Images.WHITE_PAWN : Images.BLACK_PAWN);
                break;

            //Queen's Pawn Opening
            case 1:
                console.log(randNo + ' :>>> Queen\'s Pawn Opening || ', 'whitesTurn :>>> ' + whitesTurn);
                makeMove(whitesTurn ? 'D2' : 'D7', whitesTurn ? 'D4' : 'D5', whitesTurn ? Images.WHITE_PAWN : Images.BLACK_PAWN);
                break;

            //Reti Opening
            case 2:
                console.log(randNo + ' :>>> Reti Opening || ', 'whitesTurn :>>> ' + whitesTurn);
                makeMove(whitesTurn ? 'G1' : 'B8', whitesTurn ? 'F3' : 'C6', whitesTurn ? Images.WHITE[1].img : Images.BLACK[1].img);
                break;

            //English Opening
            case 3:
                console.log(randNo + ' :>>> English Opening || ', 'whitesTurn :>>> ' + whitesTurn);
                makeMove(whitesTurn ? 'C2' : 'F7', whitesTurn ? 'C4' : 'F5', whitesTurn ? Images.WHITE_PAWN : Images.BLACK_PAWN);
                break;

            //Kings Fianchetto Opening
            case 4:
                console.log(randNo + ' :>>> Kings Fianchetto Opening || ', 'whitesTurn :>>> ' + whitesTurn);
                makeMove(whitesTurn ? 'G2' : 'B7', whitesTurn ? 'G3' : 'B6', whitesTurn ? Images.WHITE_PAWN : Images.BLACK_PAWN);
                break;
        }
    }

    function makeMove(currentPlace, nextPlace, chessPieceImage) {
        try {
            let boxes = chessBoxes;

            var currentObj = chessBoxes.filter(obj => {
                return obj.name === currentPlace;
            });
            boxes[currentObj[0].id] = {...boxes[currentObj[0].id], img: null};

            var nextObj = chessBoxes.filter(obj => {
                return obj.name === nextPlace;
            });
            boxes[nextObj[0].id] = {...boxes[nextObj[0].id], img: chessPieceImage};

            if (currentObj[0].img != null && nextObj[0].img == null) {
                setChessBoxesArray(boxes);
                whitesTurn = !whitesTurn;
                return true;
            } else {
                alert('Place is occupied. Can\'t make this move');
            }
        } catch (e) {
            console.log('Error in makeMove() :>>> ', e);
        }

        return false;
    }

    function resetPieces() {
        setChessBoxesArray([]);
        colorFlag = true;
        whitesTurn = true;
        useEffect();
    }

    function loadChessBoxesArray() {
        setChessBoxesArray([]);
        console.log('CHESS BOXES BEFORE :>>> ', chessBoxes);
        for (let i = 8; i > 0; i--) {
            for (let j = 0; j < 8; j++) {
                let item = {
                    id: chessBoxes.length,
                    name: alphabets[j].key + (i),
                    color: colorFlag ? 'white' : 'black',
                    img: setImage(i, j),
                };
                colorFlag = (j === 7 ? colorFlag : !colorFlag);
                chessBoxes.push(item);
                setChessBoxesArray(chessBoxes);
            }
        }
        console.log('CHESS BOXES AFTER :>>> ', chessBoxes);
    }
}

const styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: '#2A363B', justifyContent: 'center', flex: 1,
    },
    mainFlatList: {
        borderColor: 'white', borderWidth: 2,
    },
    chessBoxBlockStyle: {
        justifyContent: 'center', flex: 1, alignItems: 'center', height: 50, width: 20,
    },
    chessBoxImageStyle: {
        width: 35, height: 35,
    },
    touchableTextStyle: {
        width: '49%', height: 50, justifyContent: 'center', borderRadius: 5,
    },
    btnTextStyle: {
        fontSize: 20, textAlign: 'center', color: '#2A363B', fontWeight: 'bold',
    },
});
