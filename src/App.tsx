import { HomeInfoBox } from "./components/HomeInfoBox"
import { NavBAr } from "./components/NavNar"
import { HomeInfoBoxData } from "./data/HomeInfoBoxData"
import { motion

 } from "framer-motion"
function App() {

  return (
    <>
      <div className=" flex flex-col items-center w-screen h-[100vh] bg-black px-4">
        <NavBAr/>
        <motion.div className="text-5xl font-bold bg-gradient-to-tl from-blue-800 via-indigo-800 to-zinc-400 bg-clip-text text-transparent overflow-visible p-4 mt-8"
          initial={{opacity:0,scale:0}}
          animate={{opacity:1,scale:1}}
          transition={{duration:.5, ease:"linear"}}
        >
            Start Improving Your Memory Now
          </motion.div>
        <div className="grid grid-cols-2 grid-rows-2 w-[60%] gap-6 mt-12 ">
          {HomeInfoBoxData.map((item,index)=>(<HomeInfoBox key={index} {...item}/>))}
        </div>
      </div>
    </>
  )
}

export default App
