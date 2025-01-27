import { faHouse, faIcons, faStore } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useRef } from "react";

const FooterSection = (prop) => {
  const {setRefToSection , currentSection} = prop;
  const ContactAboutRef = useRef();
  const RefFormat = {
    "name" : "About&Contact",
    "Ref" : ContactAboutRef
  };

  const scrollhandle = (Ref) => {
    Ref.current?.scrollIntoView({
        behavior: 'smooth',
    })
}

  useEffect(()=>{
    setRefToSection(RefFormat);
  },[]);


  return (
    <div ref={ContactAboutRef} className="bg-white drop-shadow-2xl py-5 lg:py-20 lg:px-52 sticky bottom-0 lg:static flex flex-col gap-10">
      <div className="hidden lg:flex justify-center text-xl">
        Thank You For Supporting..
      </div>
      <div className="flex justify-center gap-24">
        <div onClick={()=>scrollhandle(currentSection[3]?.Ref)} className="w-fit h-fit bg-white drop-shadow-2xl hover:bg-gray-100 rounded-full p-3 cursor-pointer">
          <FontAwesomeIcon icon={faHouse} size="lg" />
        </div>
        <div onClick={()=>scrollhandle(currentSection[0]?.Ref)} className="w-fit h-fit bg-white drop-shadow-2xl hover:bg-gray-100 rounded-full p-3 cursor-pointer">
          <FontAwesomeIcon icon={faIcons} size="lg" />
        </div>
        <div onClick={()=>scrollhandle(currentSection[1]?.Ref)} className="w-fit h-fit bg-white drop-shadow-2xl hover:bg-gray-100 rounded-full p-3 cursor-pointer">
          <FontAwesomeIcon icon={faStore} size="lg" />
        </div>
      </div>
    </div>
  );
};

export default FooterSection;
