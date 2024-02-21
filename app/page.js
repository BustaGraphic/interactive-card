
import Image from "next/image";
import Card from "../public/bg-card-back.png"
import CardFront from "../public/bg-card-front.png"
import PcBG from "../public/bg-main-desktop.png"
import MobBG from "../public/bg-main-mobile.png"

export default function Home() {

  return (
    <main >
      <Image src={MobBG} alt="BackgroundMobile" className=" lg:opacity-0 absolute left-0 w-screen h-[40%] -z-10" />
      <Image src={PcBG} alt="BackgroundPC" className="lg:opacity-100 opacity-0 absolute left-0 h-screen w-[38%] -z-10 " />
      <div className=" lg:flex-row flex-col flex  items-center justify-center h-screen lg:space-x-20  xl:space-x-40 lg:spacey-0 space-y-[4.3rem]">
        <div className=" flex-col px-11 space-y-36 mt-[-7rem]">
          {/* CardFront */}
          <div className="lg:relative flex   items-center text-white left-[-1rem] ">
            <div className="flex-col justify-start m-7 z-10" >

              <div className=" flex justify-start items-center  space-x-5 mb-16">
                <div className=" bg-white 2xl:w-12 2xl:h-12 lg:h-8 lg:w-8 h-14 w-14 rounded-full " />
                <div className=" bg-transparent w-5 h-5 rounded-full border  border-white" />
              </div>
              <div className=" flex 2xl:text-3xl  lg:text-[2vw] font-medium tracking-widest mb-6 ">
                0000 0000 0000 0000
              </div>
              <div className="flex justify-between  text-[1vw] font-medium w-full">
                <div>
                  JANE APPLESEEED
                </div>
                <div >
                  00/00
                </div>
              </div>

            </div>
            <Image src={CardFront} alt="CardFront" className="absolute lg:w-full w-[21rem] " />
          </div>
          {/* CardBack */}
          <div className="flex relative items-center text-white right-[-5rem]">
            <div className="flex justify-end w-full z-10" >

              <div className=" flex text-sm font-medium tracking-wider mr-14 text-[1vw] ">
                000
              </div>
              

            </div>
            <Image src={Card} alt="CardFront" className="absolute" />
          </div>
         
         
        </div>
        <div className="flex-col justify-center  sm:w-96  space-y-5 mx-10" id="inputs">
          <div className="flex-col items-center">
            <label className="text-sm font-semibold text-darkviolet  tracking-wider ">
              CARDHOLDER NAME
            </label> <br />
            <input type="text" className="border-2 border-darkgray px-4 text-lg lg:h-11 h-14 rounded-lg  w-96 mt-1.5 " placeholder="e.g. Jane Appleseed" id="cardname" />
          </div>
          <div className="flex-col items-center">
            <label className="text-sm font-semibold text-darkviolet  tracking-wider">
              CARD NUMBER
            </label> <br />
            <input type="tel" pattern="[0-9\s]{13,19}" maxlength="19" className="border-2 border-darkgray px-4 text-lg rounded-lg  w-96 mt-1.5  lg:h-11 h-14 " placeholder="e.g. 1234 5678 9123 0000" id="cardnumber" />
          </div>
          <div className="flex items-center justify-between w-96 ">
            <div className="flex-col justify-start items-center lg:mb-5 mb-2">
              <label className="text-sm font-semibold text-darkviolet  tracking-wider">
                EXP. DATE (MM/YY)
              </label> <br />
              <input type="tel" maxlength="2" className="border-2 border-darkgray px-4 text-lg rounded-lg w-20  lg:h-11 h-14 mt-1.5 " placeholder="MM" id="mm" />
              <input type="tel" maxlength="2" className="border-2 border-darkgray px-4 text-lg rounded-lg w-20 ml-3 mt-1.5 lg:h-11 h-14 " placeholder="YY" id="yy" />
            </div>
            <div className="flex-col  items-center ml-5 ">
              <label className="text-sm font-semibold text-darkviolet  tracking-wider">
                CVV
              </label> <br />
              <input type="tel" maxlength="3" className="border-2 border-darkgray px-4 text-lg rounded-lg w-[12rem] lg:mb-5 mt-1.5  lg:h-11 h-14 mb-2 " placeholder="e.g. 123" id="cvv" />
            </div>


          </div>
          
          <button className="bg-darkviolet text-white flex justify-center text-lg items-center lg:h-11 h-14 rounded-lg w-96 "  >
            Confirm
          </button>
        </div>
      </div>


    </main>
  );
}
