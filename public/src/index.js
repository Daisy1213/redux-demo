import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk'; //中间件 把异步变成同步
import createLogger from 'redux-logger'; //记录日志
import App from './components/App';
import rootReducer from './reducers';
import { fetchTodos } from './actions';

const store = createStore(
    rootReducer,
    applyMiddleware(thunkMiddleware)//应用这个中间件
);

store.dispatch(fetchTodos());//应用一打开，显示列表

/*store.dispatch({
    type: 'INIT'
});*/ //默认初始化,这个时候state是udefined

render(
    <Provider store={store}> /*把创建的store给provider*/
      <App />
    </Provider>,
    document.getElementById('app')
);