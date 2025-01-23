import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Player from './Btn'
import Btn from './Btn'
import PlacesInfo from './Places'
import Home from './Home'
import CardInfo from './CardList'
import CardList from './CardList'
import size from './Size'
import Size from './Size'
import ParleG from './ParleG'

function App() {

  // let eleBtn=["Home","AboutUs","Our Products","Pricing","Contact Us"]

  // let name1="Virat";
  // let name2="Mahendra";
  // let name3="Rohit";

  // let names=["Virat","Mahendra","Rohit"]

  // const [count, setCount] = useState(0)
  // let image1="/images/amitabh4.jpg";
  // let image2="/images/aamir5.jpg";
  // let playerName="Virat Kohli"
  // let playerObject1={name:"Mahendra",runs:75}
  // let playerObject2={name:"Virat",runs:195}
  // let playerObject3={name:"Rohit",runs:89}

  // let studentList = [
  //   { name: "Shweta", marks: 39 },
  //   { name: "Mamta", marks: 75 },
  //   { name: "Mona", marks: 19 },
  //   { name: "Nitu", marks: 91 },
  //   { name: "Rita", marks: 83 },
  // ];


  return (
    <>

      {/* <Size/> */}
      <ParleG/>

      {/* <h2 className="text-red">Places To Visit in Pune</h2>
      <Home></Home> */}

      {/* <CardList></CardList> */}

      {/* <h1 className={studentList[0].marks>40? "green":"red"}>
        {studentList[0].name} {studentList[0].marks} - {studentList[0].marks > 40 ? "Passed":"Failed"}
      </h1> 
      <h1 className={studentList[1].marks>40? "green":"red"}>
        {studentList[1].name} {studentList[1].marks} - {studentList[0].marks > 40 ? "Passed":"Failed"}
      </h1>
      <h1 className={studentList[2].marks>40? "green":"red"}>
        {studentList[2].name} {studentList[2].marks} - {studentList[0].marks > 40 ? "Passed":"Failed"}
      </h1>
      <h1 className={studentList[3].marks>40? "green":"red"}>
        {studentList[3].name} {studentList[3].marks} - {studentList[0].marks > 40 ? "Passed":"Failed"}
      </h1>
      <h1 className={studentList[4].marks>40? "green":"red"}>
        {studentList[4].name} {studentList[4].marks} - {studentList[0].marks > 40 ? "Passed":"Failed"}
      </h1> */}



      {/* <div className="mt">
        <Btn Student={studentList[0]} /> &nbsp;
        <Btn Student={studentList[1]} /> &nbsp;
        <Btn Student={studentList[2]} /> &nbsp;
        <Btn Student={studentList[3]} /> &nbsp;
        <Btn Student={studentList[4]} /> &nbsp;

        
      </div> */}


      {/* <Player playerName={names[0]} />
      <Player playerName={names[1]} />
      <Player playerName={names[2]} /> */}

      {/* <div>
        <a href="https://vite.dev" target="_blank">
          <img src={image1} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={image2} className="logo react" alt="React logo" />
        </a>
      </div> */}
      {/* <h1>Welcome To React</h1> */}

      {/* <h1>Hello {playerName}</h1> */}
      {/* <h3 className={playerObject1.runs>=100? "blue":"red"} >
        Hello {playerObject1.name} 
        {playerObject1.runs>=100 && "Cheers for Century "}
        {playerObject1.runs>=100 && (<img src={"/images/"+playerObject1.name+".jpg"} />
        )}
      </h3>
      <h3 className={playerObject2.runs>=100? "blue":"red"} >
        Hello {playerObject2.name} 
        {playerObject2.runs>=100?"Cheers for Century ":""}
        {playerObject2.runs>=100? (<img src={"/images/"+playerObject2.name+".jpg"}  />
        ):null}{" "} 
      </h3>
      <h3 className={playerObject3.runs>=100? "blue":"red"} >
        Hello {playerObject3.name} 
        {playerObject3.runs>=100?"Cheers for Century ":""}
        {playerObject3.runs>=100? (<img src={"/images/"+playerObject3.name+".jpg"}  />
        ):null}{" "} 
      </h3 > */}

      {/* <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  )
}


export default App
