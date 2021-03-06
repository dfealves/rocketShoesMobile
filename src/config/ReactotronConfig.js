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
import reactotronSaga from 'reactotron-redux-saga';

if (process.env.NODE_ENV === 'development') {
  const tron = Reactotron.configure()
    .use(reactotronRedux())
    .use(reactotronSaga())
    .connect();

  tron.clear();

  console.tron = tron;
}
