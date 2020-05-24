import AsyncStorage from '@react-native-community/async-storage';
import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
// import createSagaMiddleware from 'redux-saga'
import rootReducer from './rootReducer';
// import rootSaga from './rootSaga

const persistConfig = {
  key: 'rootPersist',
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer /*applyMiddleware(sagaMiddleware)*/);
const persistor = persistStore(store);

export { store, persistor };
