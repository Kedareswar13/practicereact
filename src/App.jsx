import List from './List.jsx'
function App()
{
  const fruits = [{id : 1, name : "apple", calories: 95},
    {id : 2, name : "orange", calories : 45},
    {id : 3, name : "banana", calories : 105},
    {id : 4, name : "coconut", calories : 159},
    {id : 5, name : "pineapple", calories : 37},
];
  const vegetables = [{id : 1, name : "Carrot", calories: 95},
    {id : 2, name : "Beetroort", calories : 45},
    {id : 3, name : "banana", calories : 105},
    {id : 4, name : "Capsicum", calories : 159},
    {id : 5, name : "Cucumber", calories : 37},
];
  return(<>
  <List items = {fruits} category = "fruits"/>
  <List items = {vegetables} category = "Vegetables"/>
  <List items = {fruits} category = "fruits"/>
  </>);
}
export default App
/*import "./App.css";
import Student from "./Student.jsx";
function App()
{
  return(
    <>
    <Student name="Kedar" age={20}/>
    <Student name="Sumair" age={18}/>
    <Student name="Jayanth" age="18"/>

    </>
  );
}

export default App
*/

/*import Card from "./Card.jsx"
import "./App.css";
function App()
{
  return(
    <div className="app">
    <Card></Card>
    <Card></Card>
    <Card></Card>
    <Card></Card>
    <Card></Card>
    <Card></Card>
    </div>
  );
}

export default App
*/

/*import { useState } from 'react'
import Header from './Header.jsx'
import Food from './Food.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Header></Header>
        <p>He is also very enthusiast and crazy person</p>
        <Food></Food>
      </div>
    </>
  );
}

export default App
*/