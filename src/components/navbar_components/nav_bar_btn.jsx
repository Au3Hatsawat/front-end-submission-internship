
const NavBtn = (prop) => {
    const { name , Ref} = prop;
    const scrollhandle = (Ref) => {
        Ref.current?.scrollIntoView({
            behavior: 'smooth',
        })
    }
    return (
        <div onClick={()=>scrollhandle(Ref)} className="px-4 py-2 w-fit h-fit cursor-pointer rounded-2xl transition-all hover:bg-gray-100">
            {name}
          </div>
    );
}

export default NavBtn;
