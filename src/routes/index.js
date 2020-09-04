//Import Navigation
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import { createBottomTabNavigator } from "react-navigation-tabs";
import {createDrawerNavigator} from 'react-navigation-drawer';

//import lainnya
import { Icon } from "native-base";
import _ from "../component/function";
import React from 'react';

//Import Screen
import HalamanSatuScreen from '../screens/HalamanSatuScreen';
import HalamanDuaScreen from '../screens/HalamanDuaScreen';
import HalamanTigaScreen from '../screens/HalamanTigaScreen';
import PengaturanScreen from '../screens/PengaturanScreen';
import TentangScreen from '../screens/TentangScreen';

//buat stack menu news
const NewsNavigator = createStackNavigator({
    HalamanSatu:{screen: HalamanSatuScreen},
    HalamanDua: {screen: HalamanDuaScreen},
  },
  {
    initialRouteName: "HalamanSatu",
    headerMode: "none"
  });

//Buat Bottom Navigation
const TabNavigator = createBottomTabNavigator(
  {
    Beranda: NewsNavigator,
    Profil: {screen: HalamanTigaScreen}
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused}) => {
        const { routeName } = navigation.state;
        let source;
        if (routeName === "Beranda") {
          source = 'home'
        } else if (routeName === "Profil") {
          source = "user"
        }
        return (
          <Icon
            type='FontAwesome' 
            name={source}
            style={{fontSize:_.fz(13), alignSelf: "center", color:'red' }}
          />
        );
      }
    }),
    tabBarOptions: {
      activeBackgroundColor: "rgba(255, 185, 185, 0.16)",
      activeTintColor: "#232323",
      inactiveTintColor: "#545454",
      labelStyle: {
        fontSize: _.fz(6),
      },
      style: {
        backgroundColor: "white",
        alignSelf: "center",
        height:_.hp(7),
      }
    }
  }
);


//Buat Drawer
const DrawerNavigator = createDrawerNavigator({
  HalamanHome: {screen: TabNavigator,
    navigationOptions: {
      drawerLabel: 'Home',
      drawerIcon: ({ tintColor }) => (
      <Icon
            type='FontAwesome' 
            name='home'
            style={{fontSize:_.fz(15), alignSelf: "center", color:'red' }}
          />
    ),
    },
  },
  HalamanPengaturan: {screen: PengaturanScreen,
    navigationOptions: {
      drawerLabel: 'Pengaturan',
      drawerIcon: ({ tintColor }) => (
      <Icon
            type='FontAwesome' 
            name='cog'
            style={{fontSize:_.fz(15), alignSelf: "center", color:'red' }}
          />
    ),
    },
  },
  HalamanTentang: {
    screen: TentangScreen,
    navigationOptions: {
      drawerLabel: 'Tentang',
       drawerIcon: ({ tintColor }) => (
      <Icon
            type='FontAwesome' 
            name='info-circle'
            style={{fontSize:_.fz(15), alignSelf: "center", color:'red' }}
          />
    ),
    },
  },
},
{
  tabBarOptions: {
      activeBackgroundColor: "rgba(255, 185, 185, 0.16)",
      activeTintColor: "#232323",
      inactiveTintColor: "#545454",
      labelStyle: {
        fontSize: _.fz(6),
      },
      style: {
        backgroundColor: "white",
        alignSelf: "center",
        height:_.hp(7),
      }
    }
  }
);

const MainNavigator = createStackNavigator({
    DrawerNavigator: DrawerNavigator
  },
  {
    initialRouteName: "DrawerNavigator",
    headerMode: "none"
  });

const App = createAppContainer(MainNavigator);

export default App;

