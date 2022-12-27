import logo from './logo.svg';
import './App.css';
import Profil from './components/Profil';
import Navbar from './components/Navbar';

function App() {
  const name="Cake chocolat";
  const age="45";
 
  const student={name:"cake noisette", age: 60};
  const students= [{ name: "cake citron", age:50 },
  { name: "cake banan", age:45 },
  { name: "cake fruit sec", age:50 },
  { name: "cake chocalat blanc", age:50 },
  ];
 const handleAd=(x)=> alert(x);
  return (
    <div className="App">
    <Navbar/>
    <Profil nom={name} age={age} student={student} students={students} handleAd={handleAd}/>
    
    </div>
  );
}

export default App;
