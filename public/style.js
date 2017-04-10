import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "body": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "border": "none"
    },
    "container": {
        "height": 100 * vh,
        "width": 100 * vw,
        "backgroundImage": "url(\"low_poly.png\")",
        "backgroundRepeat": "no-repeat",
        "backgroundSize": "cover",
        "display": "flex",
        "alignItems": "center",
        "justifyContent": "center"
    },
    "name-img": {
        "width": 70 * vw,
        "marginBottom": 50
    }
});