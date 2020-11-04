import React from "react";

export const NameList = ({ names, onDeleteName }) => {
  const listItems = names.map((name, index) =>
    <div key={`${name}-${index}`}>
      <span>{name}</span>
      <button onClick={() => {onDeleteName(name);}}>x</button>
    </div>
  );
  return (
    <ul>{listItems}</ul>
  );
};
