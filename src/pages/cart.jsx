import { useLocation, useNavigate } from "react-router-dom";
import MiddleSection from "../sections/middle_section_cart/middle_section";
import TopSection from "../sections/top_section_cart/top_section";
import FooterSection from "../sections/foote_section_cart/footer_section_cart";
import { useEffect, useState } from "react";
import axios from "axios";

const CartPage = () => {
  const { state } = useLocation();
  const [data, setData] = useState({});
  const [promoTotal, setpromoTotal] = useState(0);
  const [subTotal, setSubTotal] = useState(0);

  const postMethod = (data) => {
    const url = 'http://localhost:8080/carts/new';
    try{ 
      axios({
        method: 'post',
        url: url,
        data: data,
        headers: {
        'Content-Type': 'application/json'
        }, 
      })
    }catch(error){  
      console.log(error);
    }finally{
      console.log("Success to create...");
    }
  }


  const updateAmount = (id , newAmount, product_total) => {
    const product_price = data[id].product_price;
    const newTotal = newAmount * product_price;
    console.log(newAmount);
    setData((prev)=>({
        ...prev , 
        [id] : {
            ...prev[id],
            amount : newAmount,
            product_total : newTotal
        }
    }));

    setSubTotal((prevSubTotal) => prevSubTotal - product_total + newTotal);

    if(newAmount < 1){
        setData((prev)=>({
            ...prev , 
            [id] : {
                ...prev[id],
                onRemove : true
            }
        }));
        setpromoTotal((prevPromoTotal) => prevPromoTotal - 1);
    }

  };



  useEffect(() => {
    const count = {};
    let totalTemp = 0;

    state.map((obj) => {
        count[obj._id] = {
          category: obj.category,
          product_name: obj.product_name,
          product_price: obj.product_price,
          product_total: (count[obj._id]?.product_price || 0)  + obj.product_price,
          amount: (count[obj._id]?.amount || 0) + 1,
          _id: obj._id,
          onRemove: false,
        };
        totalTemp += obj.product_price;
      });

    setData(count);
    setpromoTotal(Object.keys(count).length - 1);
    setSubTotal(totalTemp);
    
  }, []);   


  const navigate = useNavigate();

  const transferDataFunc = () => {
    navigate('/');
  }

  console.log(data);
  console.log(subTotal);

  return (
    <div className=" font-mono flex flex-col h-max bg-gradient-to-br from-orange-100 from-15% via-white via-30% to-purple-100 to-90%">
      {/* Top_section */}
      <TopSection 
        transferDataFunc={transferDataFunc}
      />

      {/* Middle_section */}
      <MiddleSection
        data={data}
        subTotal={subTotal}
        promoTotal={promoTotal}
        updateAmount={updateAmount}
        postMethod={postMethod}
        transferDataFunc={transferDataFunc}
      />

      {/* Footer_section */}
      <FooterSection />
    </div>
  );
};

export default CartPage;
