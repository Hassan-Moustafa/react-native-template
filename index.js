
import {AppRegistry} from 'react-native';
import Routes from './routes';
import {name as appName} from './app.json';
console.disableYellowBox = true;

AppRegistry.registerComponent(appName, () => Routes);
