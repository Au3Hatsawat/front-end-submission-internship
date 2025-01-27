import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import NavBtn from "../../components/navbar_components/nav_bar_btn";
import SearchBox from "../../components/navbar_components/search_box";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import BluePoint from "../../components/cart_components/amount_books_in_cart_component";

const TopSection = (prop) => {
  const {booksInCart , currentSection , searchList , dataSearch , setDataSearch , transferDataFunc} = prop;
  const NavName = ["Home" , "Categories" , "Store" , "About"];

  return (
    <div className="sticky z-10 top-0 lg:px-52 py-5 bg-white lg:flex justify-between drop-shadow-2xl">
        {/* Nav_Bar */}
        <div className="hidden lg:flex gap-10 drop-shadow-2xl items-center">
              <NavBtn name={NavName[0]} Ref={currentSection[3]?.Ref} />
              <NavBtn name={NavName[1]} Ref={currentSection[0]?.Ref} />
              <NavBtn name={NavName[2]} Ref={currentSection[1]?.Ref} />
              <NavBtn name={NavName[3]} Ref={currentSection[2]?.Ref} />

        </div>

        {/* Search&Cart */}
        <div className="flex top-5 gap-10 justify-center items-center">
          <SearchBox searchList={searchList} dataSearch={dataSearch} setDataSearch={setDataSearch}/>
            <div onClick={()=>transferDataFunc()} className="flex items-center cursor-pointer transition-all hover:bg-gray-100 w-fit h-fit p-3 drop-shadow-2xl rounded-full">
              {
                booksInCart.length > 0 ? <BluePoint booksInCart={booksInCart}/> : ""
              }
              <FontAwesomeIcon icon={faCartShopping} size="lg"/>
            </div>
        </div>
      </div>
  );
};

export default TopSection;
