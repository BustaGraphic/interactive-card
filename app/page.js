
import Image from "next/image";
import Card from "../public/bg-card-back.png"
import CardFront from "../public/bg-card-front.png"
import PcBG from "../public/bg-main-desktop.png"

export default function Home() {

  return (
    <main >
      <Image src={PcBG} alt="BackgroundPC" className="absolute left-0 h-screen  -z-10" />
      <div className=" flex items-center justify-center h-screen space-x-40">
        <div className="flex-col ">
          <div className="flex justify-center items-center text-white">
            <div className="flex-col justify-start z-10" >

              <div className=" flex justify-start items-center  space-x-5 mb-16">
                <div className=" bg-white w-12 h-12 rounded-full " />
                <div className=" bg-transparent w-5 h-5 rounded-full border  border-white" />
              </div>
              <div className=" flex   text-3xl font-medium tracking-wider mb-6 ">
                0000 0000 0000 0000
              </div>
              <div className="flex justify-between font-medium">
                <div>
                  JANE APPLESEEED
                </div>
                <div >
                  00/00
                </div>
              </div>

            </div>
            <Image src={CardFront} alt="CardFront" className="absolute" />
          </div>
          <div className="flex justify-end items-center ">
            <div className=" font-medium text-3xl text-white z-20 mr-12">
              000
            </div>
            <Image src={Card} alt="CardBack" className="absolute" />
          </div>
        </div>
        <div className=" w-96 space-y-5" id="inputs">
          <div className="flex-col items-center">
            <label className="text-sm font-semibold text-darkviolet  tracking-wider ">
              CARDHOLDER NAME
            </label> <br />
            <input type="text" className="border-2 border-darkgray px-4 text-lg h-11 rounded-lg  w-96 mt-1.5 " placeholder="e.g. Jane Appleseed" id="cardname" />
          </div>
          <div className="flex-col items-center">
            <label className="text-sm font-semibold text-darkviolet  tracking-wider">
              CARD NUMBER
            </label> <br />
            <input type="tel" pattern="[0-9\s]{13,19}" maxlength="19" className="border-2 border-darkgray px-4 text-lg rounded-lg  w-96 mt-1.5  h-11 " placeholder="e.g. 1234 5678 9123 0000" id="cardnumber" />
          </div>
          <div className="flex items-center justify-between w-96 ">
            <div className="flex-col justify-start items-center mb-5">
              <label className="text-sm font-semibold text-darkviolet  tracking-wider">
                EXP. DATE (MM/YY)
              </label> <br />
              <input type="tel" maxlength="2" className="border-2 border-darkgray px-4 text-lg rounded-lg w-20  h-11 mt-1.5 " placeholder="MM" id="mm" />
              <input type="tel" maxlength="2" className="border-2 border-darkgray px-4 text-lg rounded-lg w-20 ml-3 mt-1.5 h-11 " placeholder="YY" id="yy" />
            </div>
            <div className="flex-col  items-center ml-5 ">
              <label className="text-sm font-semibold text-darkviolet  tracking-wider">
                CVV
              </label> <br />
              <input type="tel" maxlength="3" className="border-2 border-darkgray px-4 text-lg rounded-lg w-[12rem] mb-5 mt-1.5  h-11  " placeholder="e.g. 123" id="cvv" />
            </div>


          </div>
          <button className="bg-darkviolet text-white flex justify-center text-lg items-center py-3 rounded-lg w-96"  >
            Confirm
          </button>
        </div>
      </div>


    </main>
  );
}
