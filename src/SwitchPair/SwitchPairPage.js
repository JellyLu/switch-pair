import React, { useState } from "react";
import { chunk, indexOf, remove } from "lodash";
import { NameList } from "./NameList";
import { PairList } from "./PairList";

export const SwitchPairPage = () => {
  const [names, setNames] = useState([]);
  const [pairList, setPairList] = useState([]);
  const [newName, setNewName] = useState("");

  const addName = () => {
    if (newName === "") {
      return;
    }
    if (indexOf(names, newName) === -1) {
      setNames([...names, newName]);
      setNewName("");
    } else {
      alert("Name is already exist");
    }
  };

  const deleteName = (name) => {
    const namesWithoutSelectedName = remove(names, (item) => item !== name);
    setNames(namesWithoutSelectedName);
  }

  const switchPair = () => {
    const pairs = chunk(names, 2);
    setPairList(pairs);
  }

  return <div>
    <header>Switch Pair</header>
    <NameList names={names} onDeleteName={deleteName} />
    <div>
      <input value={newName} onChange={(e) => { setNewName(e.target.value)}}/>
      <button onClick={addName}>Add Name</button>
    </div>
    <button onClick={switchPair}>Switch</button>
    <PairList pairs={pairList} />
  </div>
};
