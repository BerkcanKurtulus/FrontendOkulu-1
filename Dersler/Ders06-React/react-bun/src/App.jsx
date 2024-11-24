import ListItem from "./components/ListItem.jsx";
import "./App.css";
import styled from "styled-components";
import { useEffect, useState } from "react";

function App() {
  const [value, setValue] = useState(0);
  const students = ["Ali", "Veli", "Ayşe", "Fatma"];
  const Button1 = styled.button`
    background-color: red;
    border-radius: 25px;
    color: white;
    padding: 5px 20px;
  `;
  const Button2 = styled(Button1)`
    background-color: blue;
    font-size: ${(props) => props.size}px;
  `;
  useEffect(() => {
    console.log("Component Yüklendi");
  }, []);
  useEffect(() => {
    console.log("Butona Tıklandı");
  }, [value]);

  return (
    <>
      <ul>
        <h1>Merhaba Dünya!</h1>
        {students.map((student, index) => {
          return <ListItem key={index} student={student} value={value} />;
        })}
      </ul>
      <button onClick={() => setValue(value + 1)}>Arttır</button>
      <Button1>Styled Button</Button1>
      <Button2 size="30">Styled Button 2</Button2>
    </>
  );
}

export default App;
