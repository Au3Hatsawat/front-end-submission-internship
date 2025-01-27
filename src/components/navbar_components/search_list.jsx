import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const SearchLists = (prop) => {
    const [isMouseEnter , setIsMouseEnter] = useState(false);
    const {name , setDataSearch , setSearch} = prop;
    return (
        <div 
        onClick={()=>{
          setDataSearch(name);
          setSearch(name);
        }}
        onMouseEnter={()=>setIsMouseEnter(true)} 
        onMouseLeave={()=>setIsMouseEnter(false)} 
        className="px-6 py-5 flex justify-between hover:bg-gray-200 cursor-pointer">
          <div>{name}</div>
          <div className={`${isMouseEnter ? "flex" : "hidden"} new-text items-center`}><FontAwesomeIcon icon={faAngleRight} /></div>
        </div>
    );
};

export default SearchLists;