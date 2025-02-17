import { HomeInfoBoxProps } from "../data/HomeInfoBoxData"
import {motion} from "framer-motion"

export const HomeInfoBox=({width,height,icon:Icon,heading,content,iconBgColor}:HomeInfoBoxProps)=>{
    return(
        <motion.div
        className={`group flex flex-col ${width} ${height} bg-blue-900/40 rounded-xl p-4 border-2 border-transparent`}
        initial={{ opacity:0, }}
        animate={{ opacity:1, }}
        whileHover={{
          scale: 1.01,
          borderColor: "#00ffcc",
          boxShadow: "0px 0px 12px rgba(0, 21, 255, 0.56)",
        }}
        transition={{duration:.3, }}
        
        >
            <motion.div
            className="group-hover:scale-101  transition-transform duration-10"
            >
            <Icon
                className={`${iconBgColor} w-fit h-fit p-1 rounded-xl`}
                color="white"
                size={60}
            />
            </motion.div>
            <h2 className="text-2xl text-white font-bold group-hover:text-cyan-600 transition-colors duration-10">
            {heading}
            </h2>
            <p className="text-xl text-gray-400 group-hover:text-white transition-colors duration-10">
            {content}
            </p>
        </motion.div>
    )
}