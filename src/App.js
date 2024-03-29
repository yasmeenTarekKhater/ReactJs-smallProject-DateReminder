import { Container } from "react-bootstrap";
import "./App.css";
import data from "./mydates";
import DateCounts from "./components/DateCounts";
import DateList from "./components/DateList";
import DateActions from "./components/DateActions";
import { useState } from "react";
function App() {
  const [dates,setDates]=useState(data);
  const deleteHandle=()=>{
    setDates([])
  }
  const showHandle=()=>{
    setDates(data);
  }
  return (
    <div className="App font">
      <Container className="py-3">
        <DateCounts data={dates}/>
        <DateList data={dates}/>
        <DateActions deleteHandle={deleteHandle} showHandle={showHandle}/>
      </Container>
    </div>
  );
}

export default App;
