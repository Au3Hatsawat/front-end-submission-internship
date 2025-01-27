import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import HeaderMiddleSection from "./header";
import {
  faAngleLeft,
  faAngleRight,
  faBookOpen,
  faBoxOpen,
} from "@fortawesome/free-solid-svg-icons";
import BookCard from "../../components/books_components/book_card_component";
import CategoriesSection from "./categories";
import { useEffect, useRef } from "react";

const MiddleSection = (prop) => {
  const {
    data,
    onPressDecrement,
    onPressPlus,
    setCategories,
    setBooksInCart,
    setRefToSection,
    loading,
    page,
    maxPage,
    currentSection,
    setDataSearch
  } = prop;
  const storeRef = useRef();
  const RefFormat = {
    name: "Store",
    Ref: storeRef,
  };

  useEffect(() => {
    setRefToSection(RefFormat);
  }, []);

  return (
    <div className="grid px-4 lg:px-52">
      {/* Middle_section_header */}
      <HeaderMiddleSection 
      setBooksInCart={setBooksInCart}
      currentSection={currentSection}
      />

      {/* Middle_section_Best_Selling */}
      <CategoriesSection
        setCategories={setCategories}
        setRefToSection={setRefToSection}
        setDataSearch={setDataSearch}
      />

      <div ref={storeRef} className="flex flex-col gap-14 my-10 mb-32">
        <div className="flex justify-between">
          <div className="text-4xl font-semibold">Books</div>
          <div className="flex gap-24">
            <div
              onClick={onPressDecrement}
              className="flex items-center cursor-pointer"
            >
              <FontAwesomeIcon icon={faAngleLeft} size="xl" />
            </div>

            <div className="flex items-center gap-5 lg:gap-10">
              <div>
                {page}
              </div>
              <div>
                /
              </div>
              <div>
                {maxPage}
              </div>
            </div>

            <div
              onClick={onPressPlus}
              className="flex items-center cursor-pointer"
            >
              <FontAwesomeIcon icon={faAngleRight} size="xl" />
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          {loading ? (
            <div className="flex gap-10">
              <div className="flex gap-5 justify-center">
                <div className="animate-bounce animate-ping duration-300 ease-out  w-fit h-fit">
                  <FontAwesomeIcon icon={faBookOpen} size="2xl"/>
                </div>
              </div>
            </div>
          ) : data?.length === 0 ?  (
            <div className="flex flex-col justify-center gap-5">
              <div className="flex justify-center">
                <FontAwesomeIcon icon={faBoxOpen} size="4x"/>
              </div>
              <div className="text-2xl font-semibold  flex justify-center">
                No Books Found.
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-y-10 transition-discrete">
              {data?.map((item, idx) => (
                <BookCard
                  key={idx}
                  id={item._id}
                  category={item.category}
                  name={item.product_name}
                  price={item.product_price}
                  setBooksInCart={setBooksInCart}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MiddleSection;
