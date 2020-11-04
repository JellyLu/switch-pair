import React from "react";
import { Button, List } from "antd";
import "./NameList.css";
import { DeleteOutlined } from '@ant-design/icons';

export const NameList = ({ names, onDeleteName }) => (
  <List
    size="large"
    dataSource={names}
    renderItem={name => <List.Item className="row">
      <span className="name plainText">{name}</span>
      <Button shape="circle" icon={<DeleteOutlined />} onClick={() => {onDeleteName(name);}} />
    </List.Item>}
  />
);
