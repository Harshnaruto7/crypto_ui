
import Style from "../components/Main.module.css"
import Navbar from "../components/Navbar";
import Card from "../components/card"
import Footer from "../components/footer";

import { GiComputerFan } from "react-icons/gi";
import { GrFanOption } from "react-icons/gr";




export default function Hardware() {


    return (
        <div>
            <div className=" flex">
                <section className={`${Style.section} flex-1 h-777  bg-[#3D3B40] `}>
                    <div>
                        <Navbar></Navbar>
                        <div>
                            <div>
                                <div className=" flex  justify-center w-[579px] ml-[26px]">
                                    <div className="max-w-auto h-[25vh] rounded-lg overflow-hidden shadow-lg bg-white p-[10px]">
                                        <GiComputerFan></GiComputerFan> <h1 className=" font-bold text-lg">Radon Vega VII</h1>
                                        <div className="ml-[258px] mt-[-29px]">
                                                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                                    Click me
                                                </button>
                                            </div>
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
                                            <GrFanOption></GrFanOption> <h1 className=" font-bold text-lg">GTX 2080 Ti</h1>
                                            <div className="ml-[258px] mt-[-29px]">
                                                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                                    Click me
                                                </button>
                                            </div>
                                            <hr className="border-t-4 border-gray-300 my-4 "></hr>
                                            <div className="ml-[3px] mt-[-10px]">
                                                <h1 className="ml-[-2px] mt-[10px]">ETH:<span>35%</span></h1>
                                                <h1 className="ml-[104px] mt-[-24px]">XMR: <span>11%</span></h1>
                                                <h1 className="ml-[260px] mt-[-24px]">ETC: <span>56%</span></h1>

                                            </div>

                                        </div>
                                    </div>
                                </div>

                                <div className="my-[10px]">
                                    <div className=" flex  justify-center w-[579px] ml-[26px]">
                                        <div className="max-w-auto h-[25vh] rounded-lg overflow-hidden shadow-lg bg-white p-[10px] w-[387px]">
                                            <GrFanOption></GrFanOption> <h1 className=" font-bold text-lg">i9-9900k</h1>
                                            <div className="ml-[258px] mt-[-29px]">
                                                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                                    Click me
                                                </button>
                                            </div>
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
































































