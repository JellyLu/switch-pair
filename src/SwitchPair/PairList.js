import React from "react";
import {
  SmileOutlined,
} from '@ant-design/icons';

export const PairList = ({ pairs }) => {
  const listItems = pairs.map((pair, index) => {
    const [first, second] = pair;
    return (<div key={`pair-${index}`}>
      <span>{first}</span>
      {second
        ? <>
            <SmileOutlined/>
            <span>{second}</span>
          </>
        : <SmileOutlined rotate={180}/>
      }
    </div>);
  });
  return (
    <ul>{listItems}</ul>
  );
};
