import Authority from "../componnet/Authority";
import Footer from "../componnet/Footer";
import Header from "../componnet/Header";
import Swiperr from "../componnet/Swiper";

export default function Home(){
    return(
        <div className="Home">
              <Header/>
                    <Swiperr/>
                    <Authority/>
                    <Footer/>
        </div>
    );
}