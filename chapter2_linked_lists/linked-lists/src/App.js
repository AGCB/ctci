import React, {useState} from 'react';
import './App.css';

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function App() {
  const [linkedList, setlinkedList] = useState(new Node(42))
  const [ addFormValue, setAddFormValue ] = useState('placehodler')

  const createListArray = () => {
    let output = [];
    let currentNode = linkedList;
    while(currentNode) {
      output.push(
        <div style={{
          display:"flex",
          flexDirection: 'column',
          alignItems: 'center',
          border: '3px solid red',
          width: "120px"}}>
          <span>{`value = ${currentNode?.value}`}</span>
          <span>{`next = ${currentNode?.next?.value || 'NONE'}`}</span>
          <span>➡️</span>
        </div>
      )
      currentNode = currentNode.next;
    }
    return output;
  }

  const handleAddFormValueChange = (e) => {
    if(e.target.value === 'placehodler') {
      setAddFormValue('')
    } else setAddFormValue(e.target.value);
  }

  const handleAddFormSubmit = e => {
    e.preventDefault();
    let currentNode = linkedList;
    while(currentNode) {
      if(!currentNode?.value) {
        currentNode.value = new Node(addFormValue)
      }
      currentNode = currentNode.next;
    }
    setlinkedList(linkedList)
    setAddFormValue('')
  }
  return (
    <div className="App">
      <h1>Linked List</h1>
      {
        createListArray()
      }
      <form onSubmit={handleAddFormSubmit}>
        <input value={addFormValue} onChange={e => handleAddFormValueChange(e)}/>
        <button type="submit">CLICK TO ADD A VALUE</button>
      </form>
    </div>
  );
}

export default App;
