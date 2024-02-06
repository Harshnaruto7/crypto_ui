
import Style from "../components/Main.module.css"
import Navbar from "../components/Navbar";
import Card from "../components/card"
import Footer from "../components/footer";




export default function Hardware(){


    return(
        <div>
           <div className=" flex">
                <section className={`${Style.section} flex-1 h-777  bg-[#3D3B40] `}>
                    <div>
                        <Navbar></Navbar>
                        <p>Hardware</p>
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
































































