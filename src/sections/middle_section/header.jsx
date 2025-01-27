import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import pic from "../../assets/image_mock_up/the_road.webp";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const HeaderMiddleSection = (prop) => {
  const {currentSection} = prop
  const [isMouseEnter, setIsMouseEnter] = useState(false);
  const scrollhandle = (Ref) => {
    Ref.current?.scrollIntoView({
        behavior: 'smooth',
    })
}

  return (
    <div className="lg:grid lg:grid-cols-2 lg:py-10 my-5 lg:my-10">
      <div className="grid lg:gap-4">
        <div className="text-4xl font-semibold">
          <div>You Forget What You Want To Remember</div>
          <div>And You Remember What You Want To Forget.</div>
        </div>
        <div className="text-lg font-medium mt-2 mb-5 lg:mb-10">
          <div> - The Road,</div>
          <div>Cormac McCarthy</div>
        </div>
        <div 
        onClick={()=>scrollhandle(currentSection[1]?.Ref)}
        onMouseEnter={() => setIsMouseEnter(true)} 
        onMouseLeave={() => setIsMouseEnter(false)} 
        className={`flex w-fit px-4 py-3 h-fit items-center gap-5 drop-shadow-2xl bg-green-300 rounded-2xl text-white cursor-pointer`}>
          <FontAwesomeIcon icon={faBagShopping} size="lg" />
          <div className={` ${isMouseEnter ? "flex" : "hidden"} new-text font-semibold text-lg `}>Purchase Now</div>
        </div>
      </div>
      <div className="hidden lg:flex justify-center">
        <div className="absolute bg-orange-200 blur-sm p-45 rounded-full"></div>
        <img
          className="rotate-23 w-96 object-contain z-0 transition-all"
          src={pic}
        />
      </div>
    </div>
  );
};

export default HeaderMiddleSection;
