import _ from '../../component/function';
import { StyleSheet } from "react-native";
export default StyleSheet.create({
  container: {
    flex: 1,
  },
  containerInfo: {
    flexDirection: 'row'
  },
  btn: {
    height: _.hp(5),
    width: _.wp(10),
  },
  header: {
    width: _.wp(100),
    height: _.hp(6),
    backgroundColor: 'white',
    alignItems: 'center',
    flexDirection: 'row'
  },
  iconBack: {
    width: _.wp(8),
    height: _.hp(8),
    resizeMode: "contain"
  }
});