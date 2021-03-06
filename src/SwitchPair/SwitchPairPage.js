import React, { useState } from "react";
import _ from "lodash";
import { indexOf, remove } from "lodash";
import { Button, Divider, Input } from "antd";
import "./SwitchPairPage.css";
import { NameList } from "./NameList";
import { PairList } from "./PairList";

export const SwitchPairPage = () => {
  const [names, setNames] = useState(["Jess", "Alex", "Henry", "May", "Niko", "Charis"]);
  const [pairList, setPairList] = useState([]);
  const [newName, setNewName] = useState("");

  const addName = () => {
    if (newName === "") {
      return;
    }
    if (indexOf(names, newName) === -1) {
      setNames([...names, newName]);
    } else {
      alert("Name is already exist");
    }
    setNewName("");
  };

  const deleteName = (name) => {
    const namesWithoutSelectedName = remove(names, (item) => item !== name);
    setNames(namesWithoutSelectedName);
  }

  const switchPair = () => {
    const pairs = _.chain(names)
      .map((a) => ({sort: Math.random(), value: a}))
      .sort((a, b) => (a.sort - b.sort))
      .map((a) => a.value)
      .chunk(2)
      .value();

    setPairList(pairs);
  }

  return <>
    <h1 className="header">Switch Pair</h1>
    <div className="container">
      <div className="addNameRow">
        <Input className="newNameInput plainText" value={newName} onChange={(e) => {setNewName(e.target.value);}}/>
        <Button className="addNewNameButton plainText" onClick={addName}>Add Name</Button>
      </div>
      <Divider dashed className="divider plainText">Team members</Divider>
      <NameList names={names} onDeleteName={deleteName} />
      <Divider dashed className="divider" />
      <div>
        <Button className="switchPairButton plainText" onClick={switchPair} type="primary">Switch Pair</Button>
      </div>
      <Divider dashed className="divider plainText">Pairs</Divider>
      <PairList pairs={pairList} />
    </div>
  </>
};
