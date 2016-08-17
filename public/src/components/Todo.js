import React from 'react';

const Todo = ({idx, text, completed})=> {
  return (
      <tr>
        <th scope="row">{idx + 1}</th>
        <td>{text}</td>
        <td>{completed ? 'true' : 'false'}</td>
      </tr>
  )
};

export default Todo;