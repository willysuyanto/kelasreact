import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';

import HalamanSatuScreen from '../screens/HalamanSatuScreen';
import HalamanDuaScreen from '../screens/HalamanDuaScreen';

const MainNavigator = createStackNavigator({
    HalamanSatu: {screen: HalamanSatuScreen},
    HalamanDua: {screen: HalamanDuaScreen},
  },
  {
    initialRouteName: "HalamanSatu",
    headerMode: "none"
  });

const App = createAppContainer(MainNavigator);

export default App;

