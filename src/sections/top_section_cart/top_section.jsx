import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TopSection = (prop) => {
  const {transferDataFunc} = prop;
  return (
    <div className="sticky z-10 top-0 lg:px-52 py-5 bg-white lg:flex justify-between drop-shadow-2xl">
        {/* Nav_Bar */}
        <div className="lg:flex gap-10 drop-shadow-2xl items-center">
            <div onClick={()=>transferDataFunc()} className="px-4 py-2 w-fit h-fit cursor-pointer drop-shadow-2xl rounded-2xl transition-all hover:bg-gray-100">
                <FontAwesomeIcon icon={faAngleLeft}/>
            </div>  
        </div>

        {/* Search&Cart */}
        
      </div>
  );
};

export default TopSection;
