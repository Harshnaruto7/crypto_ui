
import Style from "../components/Main.module.css"
import Navbar from "../components/Navbar";
import Card from "../components/card"
import Footer from "../components/footer";

import { FaEthereum } from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";



export default function Monitor() {


    return (
        <div>
            <div className=" flex">
                <section className={`${Style.section} flex-1 h-777  bg-[#3D3B40] `}>
                    <div>
                        <Navbar></Navbar>
                        <div>
                            <div>
                                <div className="max-w-auto h-[25vh] rounded-lg overflow-hidden shadow-lg bg-white p-[10px]">
                                    <h1 className=" font-bold text-lg">$72.10<span className=" font-light">/week</span><span className="ml-[494px]">10.200%</span></h1>
                                    <hr className="border-t-4 border-gray-300 my-4 "></hr>
                                    <div className="ml-[3px] mt-[-10px]"><FaEthereum className="h-8 w-8"> </FaEthereum>
                                        <h1 className="ml-[31px] mt-[-27px]">10.2410245836 ETH<span>= $10 070 </span></h1>
                                        <p className="ml-[32px] mt-[-6px]">Ethereum</p>
                                        <BsThreeDotsVertical className="ml-[624px] mt-[-26px]"></BsThreeDotsVertical>

                                    </div>



                                </div>
                            </div>



























                        </div>







                        <div className="mt-[-35px]">
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


































