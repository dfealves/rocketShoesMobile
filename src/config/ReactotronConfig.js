// import Reactotron from 'reactotron-react-native';
// import { reactotronRedux } from 'reactotron-redux';
// import reactotronSaga from 'reactotron-redux-saga';

// if (__DEV__) {
//   const tron = Reactotron.configure()
//     .use(reactotronRedux())
//     .use(reactotronSaga())
//     .useReactNative()
//     .connect();

//   console.tron = tron;

//   tron.clear();
// }
// import Reactotron from 'reactotron-react-native';

import Reactotron from 'reactotron-react-native';
import { reactotronRedux } from 'reactotron-redux';

if (process.env.NODE_ENV === 'development') {
  const tron = Reactotron.configure()
    .use(reactotronRedux())
    .connect();

  tron.clear();

  console.tron = tron;
}
