import { IconType } from "react-icons";
import { IoMdAdd } from "react-icons/io";
import { GrInProgress } from "react-icons/gr";
import { RiSecurePaymentFill } from "react-icons/ri";
import { IoGameControllerOutline } from "react-icons/io5";
import { GiProgression } from "react-icons/gi";


export type HomeInfoBoxProps={
    width:string,
    height:string,
    icon:IconType,
    heading:string,
    content:String,
    iconBgColor:string
}
export const HomeInfoBoxData:HomeInfoBoxProps[]=[
    {
        width:"w-[100%]",
        height:"h-44",
        icon:IoMdAdd,
        heading:"Create New FlashCards",
        content:"hello there",
        iconBgColor:"bg-green-600"
    },
    {
        width:"w-[100%]",
        height:"h-44",
        icon:GiProgression,
        heading:"Progress Bar",
        content:"hello there",
        iconBgColor:"bg-blue-600"
    },
    {
        width:"w-[100%]",
        height:"h-44",
        icon:RiSecurePaymentFill,
        heading:"User Authentication(Using JWT)",
        content:"hello there",
        iconBgColor:"bg-purple-600"
    },
    {
        width:"w-[100%]",
        height:"h-44",
        icon:IoGameControllerOutline,
        heading:"Gamificaiton",
        content:"hello there",
        iconBgColor:"bg-yellow-600"
    }
]