import {widthPercentageToDP , heightPercentageToDP } from 'react-native-responsive-screen';
import { RFValue } from "react-native-responsive-fontsize";
import { Dimensions } from "react-native";
var width = Dimensions.get("window").width;
const Func = {
  FormatNumber: function(val){
      var parts = val.toString().split(".");
      parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ".");
      return parts.join(".");
  },
  wp: function(val){
    return widthPercentageToDP(val+"%");
  },
  hp: function(val){
    return heightPercentageToDP(val+"%");
  },
  fz: function(val){
    return RFValue(val,width);
  }
}

export default Func;
