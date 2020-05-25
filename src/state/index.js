import AsyncStorage from '@react-native-community/async-storage';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
// import createSagaMiddleware from 'redux-saga'
import rootReducer from './rootReducer';
// import rootSaga from './rootSaga
import Reactotron from '../../reactotron.config';

const persistConfig = {
  key: 'rootPersist',
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const configureStore = (initialState) => {
  const store = createStore(
    persistedReducer,
    initialState,
    compose(
      applyMiddleware(thunk /*sagaMiddleware*/),
      Reactotron.createEnhancer(),
    ),
  );
  const persistor = persistStore(store);
  return { store, persistor };
};

export default configureStore;
