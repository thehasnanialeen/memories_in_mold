import { useEffect, useState } from "react";
import Introduction from "../components/Introduction/introduction";
import About_Myself from "../components/About_Myself/about_myself";
import ContactMe from "../components/Contact_Me/contact_me";
import Products from '../components/Products/products';
import Navbar from '../components/Navbar/navbar';

const Home = () => {
    return (
        <div className="home">
            <Navbar></Navbar>
            <Introduction></Introduction>
            <About_Myself></About_Myself>
            <Products></Products>
            <ContactMe></ContactMe>
        </div>
    )
};

export default Home;