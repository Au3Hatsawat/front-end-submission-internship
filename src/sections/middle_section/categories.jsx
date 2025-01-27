import { useEffect, useRef, useState } from "react";
import CategoryComponent from "../../components/categories_component/category_component";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

const CategoriesSection = (prop) => {
  const {setCategories , setRefToSection , setDataSearch} = prop;
  const [page, setPage] = useState(1);
  const categoryRef = useRef();
  const categories = [
    "All",
    "Arts & Photography",
    "Biographies & Memoirs",
    "Business & Investing",
    "Children's Books",
    "Comics & Graphic Novels",
    "Computers & Technology",
    "Cookbooks, Food & Wine",
    "Crafts, Hobbies & Home",
    "Education & Reference",
    "Health, Fitness & Dieting",
    "History",
    "Humor & Entertainment",
    "Law",
    "Literature & Fiction",
    "Medical Books",
    "Mystery, Thriller & Suspense",
    "Parenting & Relationships",
    "Politics & Social Sciences",
    "Professional & Technical",
    "Religion & Spirituality",
    "Romance",
    "Science & Math",
    "Science Fiction & Fantasy",
    "Self-Help",
    "Sports & Outdoors",
    "Teens",
    "Travel",
  ];

  const RefFormat = {
    "name" : "Categories",
    "Ref" : categoryRef
  };

  useEffect(()=>{
    setRefToSection(RefFormat);
  },[])  

  const onPressDecrement = () => setPage((prevCount) => (Math.max(prevCount - 1,1)));
  const onPressPlus = () => setPage((nextCount) => (Math.min(nextCount+1,3)));
  return (
    <div ref={categoryRef} className="flex flex-col gap-14">
      <div className="flex justify-between">
        <div className="text-4xl font-semibold">Categories</div>
        <div className="flex gap-24">
          <div onClick={onPressDecrement} className="flex items-center cursor-pointer">
            <FontAwesomeIcon icon={faAngleLeft} size="xl" />
          </div>
          <div onClick={onPressPlus} className="flex items-center cursor-pointer">
            <FontAwesomeIcon icon={faAngleRight} size="xl" />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
        {categories
          .filter((item, index) => page == 1 ? index < 10 : page == 2 ? index > 10 && index <= 20 : index > 20 && index < 30)
          .map((item, idx) => (
            <CategoryComponent key={idx} name={item} setCategories={setCategories} setDataSearch={setDataSearch}/>
          ))}
      </div>
    </div>
  );
};

export default CategoriesSection;
