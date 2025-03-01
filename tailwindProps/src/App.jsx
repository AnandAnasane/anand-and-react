import Card from './components/card';
import './App.css'

function App() {
 
  return (
    <>
     <h1 className='text-5xl bg-green-300 p-4 rounded-4xl'>hello this is Tailwind Project</h1>
     <Card username={"SuperMan"} btnTxt='Learn More'/>
     <Card username={"BatMan"} btnTxt='ClickMe'/>

     
     
    </>
    
  );
  
}

export default App
