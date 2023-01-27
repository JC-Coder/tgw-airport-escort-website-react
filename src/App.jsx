import styles from "./style";

import { Footer, FooterCTA, Navbar } from "./components";
import plane1 from './assets/airplane2.png';

const App = () => {
  return (
    <div className="w-full overflow-hidden">
      <div className="main">
        <Navbar />

        <div className="hero h-full flex flex-col items-center justify-center space-y-5 md:pb-20 relative">
          <h1 className="md:text-7xl text-4xl font-bold ">Welcome To Tribal Gateway</h1>
          <h3 className="md:text-4xl text-3xl font-medium">Airport Conceirge Service</h3>
          <img src={plane1} alt="" className="mx-auto plane-anim w-[700px]"/>

          <div className="absolute bottom-20 flex justify-between items-center w-full px-[6rem]">
            <p className="font-medium md:text-2xl text-lg">Comfort, Ease , Security!</p>
            <button className="px-4 py-2 text-md font-semibold rounded-full text-gray-100">Book An Escort</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
