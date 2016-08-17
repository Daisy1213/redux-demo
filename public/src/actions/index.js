import request from 'superagent';

export const REQUEST_TODOS = 'REQUEST_TODOS';
export const RECEIVE_TODOS = 'RECEIVE_TODOS';

export const requestTodos = ()=> {
  return {
    type: REQUEST_TODOS
  }
};

export const receiveTodos = (todos)=> {
  return {
    type: RECEIVE_TODOS,
    data: todos
  }
};

export const fetchTodos = ()=> {//异步action  去抓取todos
  return (dispatch)=> {
    dispatch(requestTodos());//注释这行圈圈消失
    request.get('/todos')
        .end((err, res)=> {
          dispatch(receiveTodos(res.body));
        });
  }
};
//抛出一个请求，让服务器返回一个结果