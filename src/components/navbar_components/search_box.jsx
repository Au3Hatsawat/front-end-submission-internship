import { faMagnifyingGlass, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SearchLists from "./search_list";
import { useState } from "react";

const SearchBox = (prop) => {
  const {searchList , setDataSearch} = prop;
  const [isFocus , setIsFocus] = useState(false);
  const [search , setSearch] = useState("");

  const whenEnter=(e)=>{
    if (e.keyCode === 13){
      setDataSearch(search);
    }
  }

  return (
    <div>
      <div className="flex justify-center items-center gap-2 w-fit h-fit bg-gray-100 rounded-2xl px-6 py-3 ">
        <div>
          <FontAwesomeIcon icon={faMagnifyingGlass} size="lg" />
        </div>
        <div>
          <input onKeyDown={(e)=>whenEnter(e)} value={search} onChange={(e)=>setSearch(e.target.value)} onFocus={()=>setIsFocus(true)} className="focus:outline-0" type="text" placeholder="Search" />
        </div>
        <div onClick={()=>setIsFocus(false)} className={`${isFocus ? "flex" : "hidden"} cursor-pointer`}>
          <FontAwesomeIcon icon={faXmark}/>
        </div>
      </div>
      <div className={`${isFocus ? "" : "hidden"} absolute mt-0.5 overflow-y-auto w-[16.563rem] h-80 no-scrollbar bg-gray-100 rounded-2xl`}>
        {
          searchList?.filter((books)=> {
            const searchInput = search.toLowerCase();
            const booksName = books.product_name.toLowerCase();
            return searchInput.toLowerCase() === '' ? books : booksName.includes(searchInput);
          } ).map((obj , idx)=>(
            <SearchLists key={idx} name={obj.product_name} setDataSearch={setDataSearch} setSearch={setSearch}/>
          ))
        }
      </div>
    </div>
  );
};

export default SearchBox;
