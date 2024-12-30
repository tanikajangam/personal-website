
import Navbar from '../components/Navbar';


import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({ subsets: ['latin'], weight: ['400', '700'] });

export default function Home() {
  return (

    <div >
      < Navbar />
      <div className="p-2 h-screen container mx-auto flex md:flex-row sm:flex-col justify-between items-center content-center">
        <div className={`flex h-4/5 flex-col basis-1/2 justify-start content-center p-5 leading-loose tracking-wide ${montserrat.className}`}>
          <h1 className="text-7xl font-bold">Hi, </h1>
          <h1 className="text-7xl font-bold">I'm Tanika. </h1>
          <h2 className="text-4xl font-bold">I build software.</h2>
          <a href="#blog" className="rounded-full ">Check out my blog!</a>


        </div>

        <div className="basis-1/2 h-4/5">
          asdf
        </div>
      </div>
    </div>


  );
}

