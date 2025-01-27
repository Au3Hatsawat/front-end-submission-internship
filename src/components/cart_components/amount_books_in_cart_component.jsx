const BluePoint = (prop) => {
    const {booksInCart} = prop;
    return (
        <>
            <div className="absolute bg-blue-400 p-2 animate-ping top-1 right-0 rounded-full w-fit h-fit "></div>
                <div className="absolute bg-blue-400 px-1 top-1 right-0 rounded-full w-fit h-fit text-xs" >
                {booksInCart.length} 
            </div>
        </>
    );
};

export default BluePoint;