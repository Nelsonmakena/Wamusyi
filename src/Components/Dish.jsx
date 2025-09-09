function Dish({ image, imagename, descriprion, price, name }) {
  return (
    <>
      <div className="p-4 rounded-lg shadow max-w-80 flex flex-col justify-center">
        <img
          className="rounded-md max-h-40 w-full object-fit"
          src={image}
          alt={imagename}
        />
        <div className="">
          <h1 className="flex justify-center pt-2 text-2xl"> {name}</h1>
          <span className="flex justify-center text-xl">⭐ ⭐ ⭐ ⭐ ⭐</span>
        </div>

        <p className="text-gray-500 text-sm my-3 ml-2">{descriprion}</p>
        <div className=" flex flex-row justify-center w-full gap-3">
          <span className="font-bold "> {price}</span>
          <button
            type="button"
            className="px-6 py-2 active:scale-95 transition bg-orange-800 rounded text-white shadow-lg  text-sm font-medium"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </>
  );
}
export default Dish;
