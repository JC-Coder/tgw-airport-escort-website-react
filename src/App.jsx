import styles from "./style";

import { Navbar } from "./components";
import plane1 from "./assets/airplane2.png";
import travellers from './assets/travellers.png'
import { testimonails } from "./constants";

const App = () => {
  return (
    <div className="w-full overflow-hidden">
      <div className="main">
        <Navbar />

        <div className="hero h-full flex flex-col items-center justify-center space-y-5 pb-20 relative">
          <h1 className="md:text-7xl text-4xl font-bold text-white text-center">
            Welcome To <span className="cs-text-yellow">Tribal</span> Gateway
          </h1>
          <h3 className="md:text-4xl text-2xl font-medium text-white">
            Airport Conceirge Service
          </h3>
          <img src={plane1} alt="" className="mx-auto plane-anim w-[700px]" />

          <div className="absolute bottom-20 flex justify-between items-center w-full md:px-[6rem]">
            <p className="font-medium md:text-2xl text-lg text-white hidden md:block">
              Comfort, Ease , Security!
            </p>
            <button className="px-4 py-2 text-md font-semibold rounded-full text-gray-100 mx-auto md:mx-0">
              Book An Escort
            </button>
          </div>
        </div>
      </div>

      {/* about section  */}
      <div id="about" className={`my-20 ${styles.paddingX} grid md:grid-cols-2 gap-10 items-center`}>
        <img src={travellers} className='' alt="" />

        <div className="md:text-left text-center">
          <h3 className="md:text-5xl text-4xl font-bold">About Us?</h3>
          <p className="mt-5 text-gray-600">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum odit cumque at, aliquam, quas provident voluptatum minima aut reiciendis culpa deleniti, minus unde nostrum mollitia labore itaque eius ipsum inventore deserunt rerum maiores laboriosam animi voluptatem sint! Sapiente, reprehenderit repellat. Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, velit quod omnis minima reprehenderit architecto! Distinctio nihil itaque commodi modi.</p>
        </div>
      </div>

      {/* testimonial section  */}
      <div id="testimonial" className={`${styles.paddingX}`}>
        <h3 className="md:text-5xl text-4xl text-center font-bold">What Our Customers Are Saying </h3>

        <div className="grid md:grid-cols-2 gap-6 mt-10">
          {testimonails.map((item, index) => (
            <div className="bg-gray-100 p-4 rounded-lg flex justify-between">
              <img src={item.image} className='w-[5rem] h-[5rem] rounded-full' alt="" />

              <div className="ml-5">
                <p className="font-medium text-lg capitalize">{item.name}</p>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
