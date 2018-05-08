import React from 'react';

const EditExpensePage = (props) => {
  console.log(props);
  return (
    <div>
      <h2>Edit Expenses user id: {props.match.params.id}</h2>
    </div>
  );
};

export default EditExpensePage;
