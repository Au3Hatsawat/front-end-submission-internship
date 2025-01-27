import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import pic from "../../assets/image_mock_up/v1.png"
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";

const BookCard = (prop) => {
  const {name , price , id , category ,setBooksInCart} = prop;

  const dataFrom = {
    "_id" : id,
    "product_name" : name,
    "product_price" : price,
    "category" : category
  };

  return (
    <div className="bg-white mx-10 snap-start scroll-ml-6 rounded-2xl p-3 drop-shadow-xl">
      <div className="flex justify-center">
        <img className="object-contain w-fit rounded-2xl" src={pic}/>
      </div>
      <div className="text-lg truncate">
        {name}
      </div>
      <div className="flex justify-between items-center">
        <div>
          <div className="text-gray-600">
            price
          </div>
          <div className="text-lg">
            ฿ {price}
          </div>
        </div>
        <div onClick={()=>setBooksInCart((prev)=>[...prev,dataFrom])} className="flex justify-center items-center w-fit h-fit rounded-full bg-green-300 p-2 text-white cursor-pointer">
            <FontAwesomeIcon icon={faBagShopping}/>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
