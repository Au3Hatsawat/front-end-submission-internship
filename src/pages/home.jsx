import axios from "axios";
import { useEffect, useRef, useState } from "react";
import TopSection from "../sections/top_section/top_section";
import MiddleSection from "../sections/middle_section/middle_section";
import FooterSection from "../sections/footer_section/footer_section";
import { useNavigate } from "react-router-dom";



function HomePage() {
  const [data , setData] = useState([]);
  const [page , setPage] = useState(1);
  const [allData , setAllData] = useState([]);
  const [error , setError] = useState("");
  const [loading , setLoading] = useState(false);
  const [categories , setCategories] = useState("All");
  const [booksInCart , setBooksInCart] = useState([]);
  const [currentSection , setCurrentSection] = useState([]);
  const [maxPage , setMaxPage] = useState(1);
  const totalBooksPerPage = 12;
  const HomeRef = useRef();
  const [searchList , setSearchList] = useState([]);
  const [dataSearch , setDataSearch] = useState("");


  const RefFormat = {
    "name" : "Home",
    "Ref" : HomeRef
  }

  const setRefToSection = (Ref) => {
    setCurrentSection((prev) => [...new Set([...prev , Ref])]);
  }

  const fetchSearchList = async () => {
    try {
      setLoading(true);
      const res = await axios.get(`http://localhost:8080/products/`);
      const data_format = await res.data;
      setSearchList(data_format);
    } catch(error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  //For Each Pages...
  const fetchData = async () => {
    try{
      setLoading(true);
      if(dataSearch !== ""){
        const res = await axios.get(`http://localhost:8080/products/name/${dataSearch}`);
        const data_format = await res.data;
        setData([]);
        setData((prev)=>[...prev,data_format]);
      }else if(categories === "All"){
        const res = await axios.get(`http://localhost:8080/products/pages/${page}`);
        const data_format = await res.data;
        setData(data_format);
      }else if(categories !== "All"){
        const res = await axios.get(`http://localhost:8080/products/categories/${categories}/${page}`);
        const data_format = await res.data;
        setData(data_format);
      }

    } catch (e) {
       setError(e);
       setData([]);
    } finally {
      setLoading(false);
    }
  };

  //For Select Type...
  const fetchAllData = async () => {
    try{
      setLoading(true);
      if(categories === "All"){
        const res = await axios.get('http://localhost:8080/products/');
        const data_format = await res.data;
        setAllData(data_format);
        setMaxPage(Math.floor(data_format?.length/totalBooksPerPage % 1 === 0 ? data_format?.length/totalBooksPerPage : data_format?.length/totalBooksPerPage + 1));
      }else {
        const res = await axios.get(`http://localhost:8080/products/categories/${categories}`);
        const data_format = await res.data;
        setAllData(data_format);
        setMaxPage(Math.floor(data_format?.length/totalBooksPerPage % 1 === 0 ? data_format?.length/totalBooksPerPage : data_format?.length/totalBooksPerPage + 1));
      }
    } catch (e) {
      setError(e);
      setMaxPage(1);
      setAllData([]);
    } finally { 
      setLoading(false);
      setPage(1);
    }
   
  };

  useEffect(()=>{
    fetchAllData();
    setRefToSection(RefFormat);
  },[categories]);

  useEffect(()=>{
    fetchData();
  },[page,categories,dataSearch]);

  useEffect(()=>{
    fetchSearchList();
  },[])

  const onPressDecrement = () => setPage((prevCount) => (Math.max(prevCount - 1,1)));
  const onPressPlus = () => setPage((nextCount) => (Math.min(nextCount+1,maxPage)));

  const navigate = useNavigate();

  const transferDataFunc = () => {
    navigate('/cart' , {state : booksInCart});
  }

  // console.log(data);

  return (
    <div ref={HomeRef} className=' font-mono flex flex-col h-max bg-gradient-to-br from-orange-100 from-15% via-white via-30% to-purple-100 to-90%'>
      {/* Top_section */}
        <TopSection 
        booksInCart={booksInCart}
        currentSection={currentSection}
        searchList={searchList}
        setDataSearch={setDataSearch}
        dataSearch={dataSearch}
        transferDataFunc={transferDataFunc}
        />
      
      {/* Middle_section */}
       <MiddleSection 
       allData={allData} 
       page={page} 
       data={data} 
       setPage={setPage} 
       onPressDecrement={onPressDecrement}
       onPressPlus={onPressPlus}
       maxPage={maxPage}
       setCategories={setCategories}
       setBooksInCart={setBooksInCart}
       setRefToSection={setRefToSection}
       loading={loading}
       error={error}
       currentSection={currentSection}
       setDataSearch={setDataSearch}
       />

      <FooterSection 
      setRefToSection={setRefToSection}
      currentSection={currentSection}
      />

    </div>
  )
}

export default HomePage;
