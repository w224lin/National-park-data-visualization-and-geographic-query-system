// ShowComponent.js
import React from 'react';

const ItemsComponent = ({items}) => {
  return (
    <div>
      <h1>United States National Parks</h1>
      <ul>
        {items.map(item => (
          <li key={item._id}>
            <strong>{item.properties.Name}</strong>
            <p>Code: {item.properties.Code}</p>
            <p>Coordinates: {item.geometry.coordinates.join(', ')}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemsComponent;
