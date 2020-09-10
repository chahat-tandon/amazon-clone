import React from 'react'
import './Home.css'
import Product from './Product'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel'
const Home = () => {
    return (
        <div className="home">
            <div className="home_container">
                <Carousel autoPlay className="home_image"  showThumbs={false}>
                    <div>

                    <img alt="home"  src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"></img>
                    </div>
                    <div>

                    <img alt="home"  src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_45M_v2_1x._CB432458380_.jpg"></img>
                    </div>
                </Carousel>
                <div className="home_row">
                    <Product 
                    id={1} 
                    rating={4} 
                    title={"Warner's Women's Easy Does It No Bulge Wire-Free Bra"} 
                    price={26.60} 
                    image={"https://m.media-amazon.com/images/I/71M+3F3wAGL._AC_UY218_.jpg"}></Product>
                    <Product 
                    id={2} 
                    rating={3} 
                    title={"Hanes Women's X-Temp V-Neck Tee and Tech V-Neck Twist Short Sleeve T-Shirt"} 
                    
                    price={7.00} 
                    image={"https://m.media-amazon.com/images/I/81OZmgzN9RL._AC_UY218_.jpg"}></Product>
                </div>
                <div className="home_row">
                <Product 
                    id={3} 
                    rating={4} 
                    title={"Women's UPF50+ Long Sleeve UV Sun Protection Shirts Quick Dry Rash Guard Swim Outdoor T-Shirt for Fishing Running Workout"} 
                    price={11.90} 
                    image={"https://m.media-amazon.com/images/I/71xanbzTm9L._AC_UY218_.jpg"}></Product>
                    <Product 
                    id={4} 
                    rating={2} 
                    title={"Neleus Men's 3 Pack Dry Fit Y-Back Muscle Tank Top"} 
                    price={23.20} 
                    image={"https://m.media-amazon.com/images/I/81ZgoVyYyOL._AC_UY218_.jpg"}></Product>
                    <Product 
                    id={5} 
                    rating={6} 
                    title={"COOFANDY Men's Muscle T-Shirt Pleated Raglan Sleeve Bodybuilding Gym Tee Short Sleeve Fashion Workout Shirts "} 
                    price={25.62} 
                    image={"https://m.media-amazon.com/images/I/71sKPBlN7FL._AC_UY218_.jpg"}></Product>

                </div>
            </div >
            
        </div>
    )
}

export default Home
