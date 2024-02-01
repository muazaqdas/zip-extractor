import React, {useState} from 'react';
import './App.css';
// import Content from './Components/Content';
// import Footer from './Components/Footer';
// import Heading from './Components/Heading';

// function App() {
//   return (
//     <div className="App">
//     <Heading/>
//     <Content/>
//     <Footer/>
//     </div>
//   );
// }

// export default App;
const Students = ["Maria","Francisco","Roland","Helen"];

function App(){


  const [state1, setstate1] = useState("Pending")
  const [state2, setstate2] = useState("Pending")
  const [state3, setstate3] = useState("Pending")
  const [state4, setstate4] = useState("Pending")


  function clickHandler1(){
    setstate1("Corrected")
  }
  function clickHandler2(){
    setstate2("Corrected")
  }
  function clickHandler3(){
    setstate3("Corrected")
  }
  function clickHandler4(){
    setstate4("Corrected")
  }

  return(
    <table>
    <thead>

    <tr> 
      <th>Students Name</th>
      <th>Correction Status </th>
      <th>Passed</th> 
    </tr>
    </thead>
    <tbody>
        <tr> 
          <td>{Students[0]}</td>
          <td>{state1}<button onClick={clickHandler1}> Click to check</button> </td>
        </tr>
        <tr> 
          <td>{Students[1]}</td>
          <td>{state2}<button onClick={clickHandler2}> Click to check</button> </td>
        </tr>
        <tr> 
          <td>{Students[2]}</td>
          <td>{state3}<button onClick={clickHandler3}> Click to check</button> </td>
        </tr>
        <tr> 
          <td>{Students[3]}</td>
          <td>{state4}<button onClick={clickHandler4}> Click to check</button> </td>
        </tr>
    </tbody>
    </table>
  );
}

export default App;