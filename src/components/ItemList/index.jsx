import React from 'react';
import './styles.css';

 function ItemList({title, description, action}) {
  return (
    <div className='item-list'>
      <strong>{title}</strong>
      <p>{description}</p>
        <hr />
        {action}
    </div>
  
  )
}

export default  ItemList;