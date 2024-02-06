
import { FaEthereum } from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";
import { SiMonero } from "react-icons/si";
import { FaBitcoin } from "react-icons/fa";


export default function Card(){
  

    return (

       <div className=" flex flex-col gap-4  m-[20px] my-16">
        <div className="max-w-auto h-[25vh] rounded-lg overflow-hidden shadow-lg bg-white p-[10px]">
            <h1 className=" font-bold text-lg">$72.10<span className=" font-light">/week</span><span className="ml-[494px]">10.200%</span></h1>
            <div className="h-2 bg-yellow-500 w-[100px] rounded-md my-2"></div>
            <div><h1>Mining:0xafoe502... <span className="ml-[340px]">Minimum payout:$82.27</span></h1></div>
            <hr className="border-t-4 border-gray-300 my-4 "></hr>
            <div className="ml-[3px] mt-[-10px]"><FaEthereum className="h-8 w-8"> </FaEthereum> 
            <h1 className="ml-[31px] mt-[-27px]">10.2410245836 ETH<span>= $10 070 </span></h1>
            <p className="ml-[32px] mt-[-6px]">Ethereum</p>
            <BsThreeDotsVertical className="ml-[624px] mt-[-26px]"></BsThreeDotsVertical>

            </div>



        </div>


        <div className="max-w-auto h-[25vh] rounded-lg overflow-hidden shadow-lg bg-white p-[10px]">
        <h1 className=" font-bold text-lg">$30.10<span className=" font-light">/week</span><span className="ml-[494px]">50.200%</span></h1>
        <div className="h-2 bg-yellow-500 w-[50px] rounded-md my-2 "></div>
        <div><h1>Mining:0xafoe502... <span className="ml-[340px]">Minimum payout:$82.27</span></h1></div>
            <hr className="border-t-4 border-gray-300 my-4 "></hr>
            <div className="ml-[6px] mt-[-8px]"><SiMonero className="h-8 w-8"> </SiMonero> 
            <h1 className="ml-[33px] mt-[-27px]">10.2410245836 ETH<span>= $10 070 </span></h1>
            <p className="ml-[35px] mt-[-6px]">Monero</p>
            <BsThreeDotsVertical className="ml-[624px] mt-[-26px]"></BsThreeDotsVertical>

            </div>
        </div>
        <div className="max-w-auto h-[25vh] rounded-lg overflow-hidden shadow-lg bg-white p-[10px]">
        <h1 className=" font-bold text-lg">$10.10<span className=" font-light">/week</span><span className="ml-[494px]">70.200%</span></h1>
        <div className="h-2 bg-yellow-500 w-[200px] rounded-md my-2"></div>
        <div><h1>Mining:0xafoe502... <span className="ml-[340px]">Minimum payout:$82.27</span></h1></div>
            <hr className="border-t-4 border-gray-300 my-4 "></hr>
            <div className="ml-[10px] mt-[-8px]"><FaBitcoin className="h-8 w-8"> </FaBitcoin> 
            <h1 className="ml-[33px] mt-[-27px]">10.2410245836 ETH<span>= $10 070 </span></h1>
            <p className="ml-[32px] mt-[0px]">Bitcoin</p>
            <BsThreeDotsVertical className="ml-[624px] mt-[-26px]"></BsThreeDotsVertical>

            </div>
        </div>



       </div>










    );







}