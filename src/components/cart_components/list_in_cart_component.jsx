import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import pic from "../../assets/image_mock_up/v1.png";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";

const ProductList = (prop) => {
  const { id, updateAmount, name, price, amount, category, onRemove } =
    prop;
  const total = price * amount;
  return (
    <div
      className={`${
        onRemove ? "hidden" : ""
      } bg-white grid grid-rows-[60%_10%_20%_10%] lg:grid-cols-[70%_5%_15%_10%] mx-10 snap-start scroll-ml-6 rounded-2xl p-3 drop-shadow-2xl`}
    >
      <div className="flex gap-5">
        <div className="flex rounded-2xl">
          <img
            className="w-full h-56 lg:h-48 object-cover"
            src={pic}
            loading="lazy"
            alt={""}
          />
        </div>
        <div className="p-2 w-fit">
          <div>{name}</div>
          <div className="opacity-70">{category}</div>
        </div>
      </div>
      <div className="p-2 flex justify-center">{price}</div>
      <div className="flex justify-center items-center lg:items-start">
        <div className="p-2 flex bg-gray-100 lg:ml-3 w-fit h-fit rounded-2xl">
          <div
            onClick={() => {
              updateAmount(id, amount - 1, total);
            }}
            className="border-r pr-2 cursor-pointer"
          >
            <FontAwesomeIcon icon={faMinus} />
          </div>
          <div className="px-3">{amount}</div>
          <div
            onClick={() => {
              updateAmount(id, amount + 1, total);
            }}
            className="border-l pl-2 cursor-pointer"
          >
            <FontAwesomeIcon icon={faPlus} />
          </div>
        </div>
      </div>
      <div className="p-2 flex justify-center">{total}</div>
    </div>
  );
};

export default ProductList;
