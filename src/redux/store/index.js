import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import { composeWithDevTools } from 'redux-devtools-extension'; // eslint-disable-line
import createSagaMiddleware from 'redux-saga';
import storage from 'redux-persist/lib/storage';

import rootReducer from '../reducers';
import rootSaga from '../sagas/rootSaga';

const persistConfig = {
  key: 'root',
  storage,
};

const sagaMiddleware = createSagaMiddleware();
const enhancer = composeWithDevTools || compose;
const persistedReducer = persistReducer(persistConfig, rootReducer);

export default () => {
  const store = createStore(persistedReducer, enhancer(
    applyMiddleware(sagaMiddleware)
  ));
  const persistor = persistStore(store);
  sagaMiddleware.run(rootSaga);
  return { store, persistor };
};
