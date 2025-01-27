const CategoryComponent = (prop) => {
    const { name , setCategories , setDataSearch} = prop;
    return (
        <div onClick={()=> {
            setCategories(name);
            setDataSearch("");
            }} className="flex w-fit h-fit bg-white drop-shadow-2xl px-5 py-3 rounded-2xl cursor-pointer hover:bg-gray-100">
            {name}
        </div>
    );
}

export default CategoryComponent;