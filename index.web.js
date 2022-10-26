import {AppRegistry} from 'react-native';
import App from './shared/src/App';

AppRegistry.registerComponent('demoProj', () => App);

AppRegistry.runApplication('demoProj', {
  initialProps: {},
  rootTag: document.getElementById('app-root'),
});
