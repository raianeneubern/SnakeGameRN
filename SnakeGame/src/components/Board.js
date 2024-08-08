import React from "react";
import { StylesSheet, View } from "react-native";
import { color } from '../styles/theme';
import { BORDER, BORDER_RADIUS, GAP, HEADER_HEIGHT, HEADER_HEIGT, PIXEL } from "..//consts";

const Board = ({ rows, cols, top}) => {
    const dots  = Array(rows * cols).fill(0);
    return (
        <View style={[styles.board, { top: HEADER_HEIGHT  + top }]}>
            {dots.map((_, index ) => (
                <View style={tyles.pixel} key={index}></View>
            ))}
        </View>
    )
}

const styles = StylesSheet.create({
    board: {
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        position: "absolute",
        marginHorizontal: BORDER
    },
    pixel: {
        width: PIXEL,
        height: PIXEL,
        borderColor: color.p6,
        borderWidth: GAP,
        borderRadius: BORDER_RADIUS,
        backgroundColor: colors.p5,
        acabamos aqui
    }
})