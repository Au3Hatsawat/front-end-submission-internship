import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ProductList from "../../components/cart_components/list_in_cart_component";
import { faBoxOpen } from "@fortawesome/free-solid-svg-icons";

const MiddleSection = (prop) => {
    const {data , subTotal , promoTotal  , updateAmount , postMethod , transferDataFunc} = prop;
    const promoSaleTotal = (subTotal * (promoTotal*10)/100);
    const total = (subTotal - promoSaleTotal);

    const sendHttp = () => {
        const products = [];
        if(Object.keys(data)?.length === 0) return transferDataFunc();
        Object.keys(data)?.filter((key)=> data[key]?.amount > 0).map((key , idx) => {
            products[idx] = {
                "product_Id" : key,
                "amount" : data[key].amount,
            }
        });
        const dataFormated = {
            "products" : products
        }
        
        postMethod(dataFormated);
        transferDataFunc();
    }

    console.log(promoTotal);
  return (
    <div className="grid px-4 lg:px-52">
      {/* Middle_section_header */}
        <div className="flex gap-5 lg:py-10 my-5 lg:my-10">
            <div className="text-4xl font-semibold">
                Your Cart
            </div>
        </div>
      {/* Middle_section_list_items */}
        <div className="lg:flex justify-around mb-10">
            <div className="flex flex-col gap-5 overflow-y-auto h-[75vh] no-scrollbar">
            {
                Object.keys(data)?.length === 0 ?(
                    <div className="flex flex-col p-10">
                        <div className="flex justify-center">
                            <FontAwesomeIcon icon={faBoxOpen} size="4x"/> 
                        </div>
                        <div className="text-2xl flex justify-center">
                            Your cart is empty
                        </div>
                        <div>
                            Looks like you haven&apos;t made your choice yet...
                        </div>
                    </div>
                ) :
                (Object.keys(data)?.map((key)=>(
                    <ProductList key={data[key]._id} id={key} onRemove={data[key].onRemove} updateAmount={updateAmount} name={data[key].product_name} price={data[key].product_price} total={data[key].product_total} amount={data[key].amount} category={data[key].category}/>
                )))
            }
            </div>
            <div className="flex flex-col p-10 gap-3 bg-white lg:w-[40%] mt-5 lg:mt-0 h-fit drop-shadow-2xl rounded-2xl">
                <div className="pb-10 text-2xl font-semibold">Summary</div>
                <div className="flex justify-between text-lg">
                    <div>Subtotal</div>
                    <div>{subTotal}</div>
                </div>
                <div className="flex justify-between text-lg">
                    <div>
                        Promotion
                    </div>
                    <div>
                        {promoSaleTotal}
                    </div>
                </div>
                <div className="flex justify-between mt-6">
                    <div className="text-2xl font-semibold">
                        Total
                    </div>
                    <div className="text-2xl font-semibold">
                        {total}
                    </div>
                </div>
                <div className="flex justify-center">
                    <div onClick={()=>sendHttp()} className="flex justify-center w-fit h-fit bg-green-200 px-16 cursor-pointer py-3 rounded-2xl">
                        Checkout
                    </div>
                </div>
            </div>
        </div>

    </div>
  );
};

export default MiddleSection;
