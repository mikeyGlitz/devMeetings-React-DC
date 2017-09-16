import React from 'react';

export default ({ user }) => {
  return (
    <div className="user-display">
      <header><h3>User:</h3></header>
      <p><b>Name:</b>&nbsp;{user.name}</p>
      <p><b>Email:</b>&nbsp;{user.email}</p>
      <p><b>Address:</b>&nbsp;{user.address}</p>
      <p><b>Phone #</b>&nbsp;{user.phone}</p>
      <div><b>Tags:</b></div>
      <div>{user.tags && user.tags.map((tag, i) => <span key={i}><i>{tag}</i>,&nbsp;</span>)}</div>
    </div>
  )
};
