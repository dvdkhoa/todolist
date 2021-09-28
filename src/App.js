import TodoList from "./components/TodoList";
import Textfield from "@atlaskit/textfield"
import Button from "@atlaskit/button"
import { useCallback, useState } from "react";
import {v4} from "uuid"


function App() {
  
  const [textInput,setTextInput] = useState("");
  const [todoList, settodoList] = useState([]);

  const onChanged_textInput = useCallback((e) => {
    setTextInput(e.target.value);
  },[]);
  
  const addClicked= useCallback((e) => {
    settodoList([
      {
        id: v4(),
        name: textInput,
        isCompleted: false
      },
      ...todoList
    ]);
      setTextInput("");
  },[textInput,todoList])

  const checkClick= useCallback( (id) => {
    console.log("Check")
    const newTodoList = todoList.filter( todo => todo.id !== id )
    console.log(newTodoList)
    settodoList(newTodoList)  
  },[todoList])

  return (
    <>
      <h3>Danh sách cần làm</h3>
      <Textfield name="add-todo" placeholder="Tìm việc cần làm" elemAfterInput={
        <Button isDisabled={!textInput} appearance="primary" onClick={addClicked}>Thêm</Button>
      }
      css={{padding:"2px 4px"}}
      value={textInput}
      onChange={onChanged_textInput}
      ></Textfield>
      <TodoList todoList={todoList} checkClick={checkClick} ></TodoList>
    </>
  );
}

export default App;
