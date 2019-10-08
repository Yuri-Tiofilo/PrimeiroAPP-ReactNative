/**
 * @format
 */

import {AppRegistry} from 'react-native';
//import App from './src/App';
import {name as appName} from './app.json';
import menu from './src/menu';



AppRegistry.registerComponent(appName, () => menu);
