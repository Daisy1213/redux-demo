import React from 'react';
import Todo from './Todo';
import {connect} from 'react-redux';

const TodoTable = ({todos, isLoading})=> {
  return (
      <div className="m-t-1">
        <table className="table">
          <thead className="thead-inverse">
          <tr>
            <th>#</th>
            <th>Content</th>
            <th>Completed</th>
          </tr>
          </thead>
          <tbody>
          {                             /*是否转圈圈*/
            isLoading ? (
                <tr >
                  <td className="text-xs-center" colSpan="3">
                    <i className="m-t-1 fa fa-circle-o-notch fa-spin fa-5x fa-fw"></i>
                  </td>
                </tr>
            ) :
                todos.map((val, idx)=> (  /*val里面有text和context*/
                    <Todo
                        key={idx}
                        {...val}   /*延展操作符*/
                        idx={idx}
                    />        /*给子组件传递参数*/
                ))
          }
          </tbody>
        </table>
      </div>

  )
};

const mapStateToProps = state=> state;

const Todos = connect(mapStateToProps)(TodoTable);
/*
 const result = connect(mapStateToProps)
 const Todos = result(TodoTable);
 */

export default Todos;
