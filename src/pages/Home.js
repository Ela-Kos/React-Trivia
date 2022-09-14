import React from "react";
import Header from "../components/Header";
import PlayBtn from '../components/PlayBtn';
import Footer from "../components/Footer";
import Modal from "../components/Modal";


function Home(){
    return(
       <div>
        <Header />
        <Modal />
        <PlayBtn />
        <Footer />
       </div>
    )
}

export default Home;