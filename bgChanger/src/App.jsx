import { useState } from "react"

function App() {
  const [color, setColor] = useState("olive")


  return (
    <div
      className="w-full h-screen duration-500"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-2 px-3">
        <div className="flex flex-wrap justify-center gap-3 shadow-2xl bg-white px-3 py-2 rounded-3xl">
          <button onClick={()=> setColor("red")}
            className="outline-none px-4 py-1  rounded-full text-white shadow-lg"
            style={{ backgroundColor: "red" }}
          >
            RED
          </button>

          <button onClick={()=> setColor("green")}
            className="outline-none px-4 py-1  rounded-full text-white shadow-lg"
            style={{ backgroundColor: "green" }}
          >
            GREEN
          </button>

          <button onClick={()=> setColor("blue")}
            className="outline-none px-4 py-1  rounded-full text-white shadow-lg"
            style={{ backgroundColor: "blue" }}
          >
            BLUE
          </button>

          <button onClick={()=> setColor("yellow")}
            className="outline-none px-4 py-1 text-black rounded-full shadow-lg"
            style={{ backgroundColor: "yellow" }}
          >
            YELLOW
          </button>

          <button onClick={()=> setColor("pink")}
            className="outline-none px-4 py-1  rounded-full text-black shadow-lg"
            style={{ backgroundColor: "pink" }}
          >
            PINK
          </button>

          <button onClick={()=> setColor("violet")}
            className="outline-none px-4 py-1  rounded-full text-black shadow-lg"
            style={{ backgroundColor: "violet" }}
          >
            VIOLET
          </button>

          <button onClick={()=> setColor("purple")}
            className="outline-none px-4 py-1  rounded-full text-white shadow-lg"
            style={{ backgroundColor: "purple" }}
          >
            PURPLE
          </button>

          <button onClick={()=> setColor("black")}
            className="outline-none px-4 py-1  rounded-full text-white shadow-lg"
            style={{ backgroundColor: "black" }}
          >
            BLACK
          </button>
        </div>
      </div>
    </div>
  );
}

export default App
