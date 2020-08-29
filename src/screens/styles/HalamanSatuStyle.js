import { StyleSheet } from "react-native";
import _ from '../../component/function';
export default StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontSize: _.fz(15),
    // height:_.hp(20)
  },
  btn: {
    color: 'white'
  },
  stretch: {
    width: _.wp(90),
    height: _.hp(20),
    resizeMode: 'stretch',
  },
  title: {
    fontWeight: 'bold'
  },
  source: {
    fontSize: _.fz(7)
  },
  header: {
    width: _.wp(100),
    height: _.hp(5),
    backgroundColor: 'white',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent:'space-between'
  },
  icon: {
    // width: _.wp(10),
    // height: _.hp(5),
    resizeMode: "center",
    marginHorizontal:_.wp(2),
    fontSize:_.fz(15)
  },
  headerContainer:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    flex:3
  },
  headerText:{
    flex:1,
    fontSize:_.fz(7)
  },
  headerHome:{
    fontSize:_.fz(7),
  }
});