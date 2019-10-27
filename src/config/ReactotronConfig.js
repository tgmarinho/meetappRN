import Reactotron from 'reactotron-react-native';
import { reactotronRedux } from 'reactotron-redux';
import reactotronSaga from 'reactotron-redux-saga';

// change it for your local ip machine
const IP_ADDRESS = '192.168.0.10';

if (__DEV__) {
  const tron = Reactotron.configure({ host: IP_ADDRESS })
    .useReactNative()
    .use(reactotronRedux())
    .use(reactotronSaga())
    .connect();

  tron.clear();

  console.tron = tron;
}
