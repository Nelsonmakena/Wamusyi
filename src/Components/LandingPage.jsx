import Dish from "./dish";
import landingimage from "../assets/landingpage.png";
import image1 from "../assets/Grilledmeat.png";
import Footer from "./Footer";
import Customerfeedback from "./Customerfeedback";

function Landingpage() {
  return (
    <>
      <style>
        {`
             @keyframes spin {
            0% {
              transform: rotate(0deg);
            }
            100% {
              transform: rotate(360deg);
            }
          }
          .rotate {
            animation: spin 200s linear infinite;
            display: block;
            margin: auto;
            transform-origin: center center;
            
          }
                    `}
      </style>

      <div className="flex flex-row w-full h-screen gap-3">
        <div className="flex flex-col w-1/2 items-center justify-center">
          <h1 className="text-5xl mb-7 font-bold ">
            {" "}
            We Serve The Test You Love
          </h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla
            neque enim est iure eligendi nam laudantium similique itaque harum
            tenetur? Possimus sed vero aut veritatis repudiandae, alias quas
            itaque omnis.
          </p>
          <div className="flex flex-row py-2 gap-3.5 mt-5">
            <button
              type="button"
              className="w-40 py-3  text-sm text-black rounded-lg bg-orange-500"
            >
              <p className="mb-0.5">Explore</p>
            </button>
            <button
              type="button"
              className="w-40 py-3 active:scale-95 transition text-sm text-gray-500 border border-orange-500 rounded-lg bg-transparent"
            >
              <p className="mb-0.5"> Search</p>
            </button>
          </div>
        </div>

        <div class="flex flex-row w-1/2 relative">
          <img
            src={landingimage}
            alt="landing image"
            className="max-h-full max-w-full object-contain rotate overflow-hidden"
          />
          <div className="flex flex-col gap-1.5 items-center">
            <button
              type="button"
              className="w-40 py-3 active:scale-95 transition text-sm text-gray-500 border border-orange-500 rounded-lg bg-transparent"
            >
              <p className="mb-0.5"> Dishes</p>
            </button>
            <button
              type="button"
              className="w-40 py-3 active:scale-95 transition text-sm text-gray-500 border border-orange-500 rounded-lg bg-transparent"
            >
              <p className="mb-0.5"> Dessert</p>
            </button>
            <button
              type="button"
              className="w-40 py-3 active:scale-95 transition text-sm text-gray-500 border border-orange-500 rounded-lg bg-transparent"
            >
              <p className="mb-0.5"> Drinks</p>
            </button>
            <button
              type="button"
              className="w-40 py-3 active:scale-95 transition text-sm text-gray-500 border border-orange-500 rounded-lg bg-transparent"
            >
              <p className="mb-0.5"> Platter</p>
            </button>
            <button
              type="button"
              className="w-40 py-3 active:scale-95 transition text-sm text-gray-500 border border-orange-500 rounded-lg bg-transparent"
            >
              <p className="mb-0.5"> Snacks</p>
            </button>
          </div>
        </div>
      </div>
      {/*popular section*/}
      <div className="w-full h-screen">
        <h1 className="flex justify-center font-bold text-7xl text-orange-900 font-sans px-2 ">
          {" "}
          Popular Dishes{" "}
        </h1>
        <div class="flex flex-row justify-evenly w-full  mt-20  populardishes ">
          <Dish
            name="Nyama choma "
            price="1200/="
            descriprion="Char-grilled to perfection, tender goat/beef cuts served sizzling hot with fresh kachumbari and ugali. The true taste of Kenya on your plate."
            image={image1}
          />
          <Dish
            name="Lobster Thermido"
            price="3500/="
            descriprion="Succulent lobster meat cooked in a creamy white wine and mustard sauce, gratinated with cheese, and served in its shell. A rich and indulgent seafood classic."
          />
          <Dish
            name="pilau"
            price="750/="
            descriprion="Aromatic spiced rice loaded with tender beef or chicken, slow-cooked in traditional coastal flavors. Every spoonful is a celebration."
          />
          <Dish
            name="Duck à l’Orange"
            price="3200/="
            descriprion="Succulent roasted duck glazed with a tangy orange sauce, paired with buttered vegetables and potato gratin. A French classic with a perfect balance of sweet and savory"
          />
        </div>
      </div>
      {/*why us section*/}
      <div className="flex flex-row w-full">
        <div className="w-1/2"></div>
        <div className="w-1/2">
          <h1 className="text-5xl mb-7 font-bold p-1.5 ">
            We are more than Multiple service
          </h1>
          <div className="flex flex-col items-center justify-center">
            <p>
              At Wamusy, we are more than just a restaurant — we are a place
              where passion for food meets the joy of bringing people together.
              Our goal is to give you more than multiple services; we deliver a
              complete dining experience tailored to your lifestyle. From the
              moment you explore our menu online to the time your meal is served
              at your table, we focus on quality, convenience, and care. We
              combine authentic flavors, both local and international, with
              modern dining solutions that make it easy for you to order your
              favorite dishes, reserve your table in seconds, or enjoy our meals
              from the comfort of your home. With fresh ingredients, skilled
              chefs, and a warm atmosphere, Wamusyi is not just where you eat —
              it’s where memories are made and shared.
            </p>
          </div>

          <ul className="">
            <li cla> online oder</li>
            <li> 24/7 service</li>
            <li>clean kitchen</li>
            <li>pre-resevation</li>
            <li>super chefs</li>
          </ul>

          <button
            type="button"
            className="w-40 py-3  text-sm text-black rounded-lg bg-orange-500"
          >
            <p className="mb-0.5">About Us </p>
          </button>
        </div>
      </div>
      {/*Reservations*/}
      <div className="flex flex-row w-full">
        {" "}
        <h1> Do yo have any dinner plan today? reserve your table </h1>
        <p>
          make online reservation, read restaurant reviews from diners and earn
          points toward free meals. OpenTable is real-time online reservation{" "}
        </p>
        <button className="w-40 py-3 active:scale-95 transition text-sm text-gray-500 border border-orange-500 rounded-lg bg-transparent">
          {" "}
          Make Reservation
        </button>
      </div>
      {/*what customer says*/}
      <div className="w-full ">
        <h1 className="flex text-5xl mb-7 font-bold"> What Customer Says?</h1>
        <div className="flex ">
          <Customerfeedback
            name="Nelson Ndolo"
            feedback="The food at Wamusy is absolutely delicious! I ordered the grilled chicken and it tasted just like home. The online order was smooth and delivery was super fast"
          />
          <Customerfeedback
            name="Jane "
            feedback="I reserved a table for my family, and everything was ready when we arrived. The service was friendly, and the food portions were generous. Definitely coming back!"
          />
          <Customerfeedback
            name="Brain"
            feedback="I love how easy it is to order from Wamusy. The app is simple, and the meals are always fresh and well-packed. My favorite is the pizza — tastes amazing!"
          />
          <Customerfeedback
            name="Kelvin"
            feedback="Best dining experience I’ve had in a while. The ambience, food quality, and quick service make Wamusy stand out. 10/10 would recommend to friends."
          />
        </div>
      </div>
    </>
  );
}
export default Landingpage;
