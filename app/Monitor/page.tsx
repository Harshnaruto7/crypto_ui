
import Style from "../components/Main.module.css"
import Navbar from "../components/Navbar";
import Card from "../components/card"
import Footer from "../components/footer";

import { FaCoins } from "react-icons/fa6";
import { FaWallet } from "react-icons/fa6";



export default function Monitor() {


    return (
        <div>
            <div className=" flex">
                <section className={`${Style.section} flex-1 h-777  bg-[#3D3B40] `}>
                    <div>
                        <Navbar></Navbar>
                        <div>
                            <div className=" flex  justify-center w-[579px] ml-[26px]">
                                <div className="max-w-auto h-[25vh] rounded-lg overflow-hidden shadow-lg bg-white p-[10px]">
                                    <FaCoins></FaCoins> <h1 className=" font-bold text-lg">$72.10<span className=" font-light">/week</span></h1>
                                    <hr className="border-t-4 border-gray-300 my-4 "></hr>
                                    <div className="ml-[3px] mt-[-10px]">
                                        <h1 className="ml-[-2px] mt-[10px]">Day :<span>22.10</span></h1>
                                        <h1 className="ml-[104px] mt-[-24px]">Month: <span>$560.2</span></h1>
                                        <h1 className="ml-[260px] mt-[-24px]">Year: <span>$7640.2</span></h1>

                                    </div>

                                </div>
                            </div>

                            <div className="my-[10px]">
                                <div className=" flex  justify-center w-[579px] ml-[26px]">
                                    <div className="max-w-auto h-[25vh] rounded-lg overflow-hidden shadow-lg bg-white p-[10px] w-[387px]">
                                        <FaWallet></FaWallet> <h1 className=" font-bold text-lg">$72.10<span className=" font-light mx-2">wallets</span></h1>
                                        <hr className="border-t-4 border-gray-300 my-4 "></hr>
                                        <div className="ml-[3px] mt-[-10px]">
                                            <h1 className="ml-[-2px] mt-[10px]">ETH:<span>35%</span></h1>
                                            <h1 className="ml-[104px] mt-[-24px]">XMR: <span>11%</span></h1>
                                            <h1 className="ml-[260px] mt-[-24px]">ETC: <span>56%</span></h1>

                                        </div>

                                    </div>
                                </div>
                            </div>


                        </div>
                        <div>
                            <h1 className=" font-bold mt-[20px] ml-[27px]">00:00:00</h1>
                            <p className=" font-light mt-[-8px] ml-[29px]">uptime</p>

                            <h1 className=" font-bold mt-[-47px] ml-[427px]">0 Mh/s</h1>
                            <p className=" font-light mt-[0px] ml-[427px]">Hashrate</p>

                            <div className="ml-[427px] mt-[0px]">
                                <p>22:19:06 0Xcc27d9700c</p>
                                <p>22:20:06 0Xcc26d9700c</p>
                                <p>22:21:06 0Xcc25d9700c</p>
                                <p>22:23:06 0Xcc28d9700c</p>
                            </div>


                            <div className="ml-[28px] mt-[-22px]">
                                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                    Click me
                                </button>
                            </div>









                        </div>







                        <div className="mt-[-530px]">
                            <span>  <Footer></Footer></span>
                        </div>

                    </div>
                </section>
                <section className=" bg-[#1F2544] flex-1 h-777">
                    <div>
                        <Card></Card>
                    </div>
                </section>



            </div>


        </div>

    );



}


































