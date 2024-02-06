import Style from "./Main.module.css";
import Card from "./card";
import Navbar from "./Navbar";
import Footer from "./footer";


export default function Main(){

   return (
                   
    <div className=" flex">
       <section className={`${Style.section} lg:flex-1 h-777  bg-[#3D3B40]`}>
        <div>
          <Navbar></Navbar>
          <Footer></Footer>
        </div>
      </section>
      <section className=" bg-[#1F2544]  lg:flex-1 h-777">
        <div>
         <Card></Card>
        </div>
      </section>            
    </div>
     
     


  );

}







