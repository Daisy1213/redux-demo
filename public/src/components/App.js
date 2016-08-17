import React, { Component } from 'react';
import { connect } from 'react-redux';
import Todos from './Todos';
import { fetchTodos } from '../actions';

const App = ({dispatch})=> {
  return (
      <div>
        <div className="m-t-1">
          <button
              type="button"
              className="btn btn-primary"
              onClick={()=> {
                dispatch(fetchTodos()); /*分发action*/
              }}
          >
            Refresh
          </button>
        </div>
        <Todos />
      </div>
  )
};



export default connect()(App);//请求把store传进来，获取到它的dispatch，
// connect（）后返回一个函数 ，函数的作用是把组件和store连接再一起，这个组件就有了state