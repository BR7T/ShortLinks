import { AiOutlineLink } from "react-icons/ai";

export default function Header(){
    return(
        <header className="bg-white h-[4.5rem] text-blue-900 flex items-center p-5 font-semibold text-[24px] shadow-sm">
            <div className="flex gap-5 items-center ">
                <AiOutlineLink className="text-[30px]"/>
                Shortfy
            </div>
        </header>
    )
}