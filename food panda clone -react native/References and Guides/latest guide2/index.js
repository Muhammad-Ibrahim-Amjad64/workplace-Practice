/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

import {Provider} from 'react-redux';
import {persistor, store} from './src/store';
import Toast from 'react-native-toast-message';
import {SafeAreaView} from 'react-native';
import LocationDropdown from './src/Common/coustomlocation';
import Myvideos from './src/screens/appScreens/Trainer/Myvideos';
import AddVideo from './src/screens/appScreens/Trainer/AddVideo';
import {PersistGate} from 'redux-persist/lib/integration/react';
import Paymentgate from './src/screens/authScreens/Payments/Paymentgate';

const Root = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <App />
        <Toast position="bottom" />
      </PersistGate>
    </Provider>
  );
};

AppRegistry.registerComponent(appName, () => Root);
