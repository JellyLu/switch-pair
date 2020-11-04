import React from "react";
import "./PairList.css";
import { SmileOutlined } from '@ant-design/icons';
import { List } from "antd";

export const PairList = ({ pairs }) => {
  return (<List
    size="large"
    dataSource={pairs}
    renderItem={pair => {
      const [first, second] = pair;
      return (<List.Item className="row">
        <span className="plainText pairName">{first}</span>
        {second
          ? <SmileOutlined style={{ fontSize: "24px", color: "red" }}/>
          : <SmileOutlined rotate={180} style={{ fontSize: "24px", color: "#4DAE91" }}/>
        }
        <span className="plainText pairName">{second ? second : ""}</span>
      </List.Item>);
    }}
  />);
};
