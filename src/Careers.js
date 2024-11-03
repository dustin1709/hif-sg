import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Listings from "./components/Listings";

function Careers() {
    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 1000,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 2
                }
              },
              {
                breakpoint: 930,
                settings: {
                  slidesToShow: 1
                }
              }
        ]
    };
    return (
        <div id="real-estate" className="pt-5 pb-8">
            <div className="p-8">
                <h1 className="text-4xl md:w-[350px] w-[215px] pb-3" style={{borderBottom: '5px solid #021d68'}}>Golden Visa Investment Consulting</h1>
                <p className="pt-3 pb-5">
                    <ul>
                        <li>As a real estate developer, HIF develops real estate cash projects like student residence in Athens, Greece, to cater to investors participating in the Greek Golden Visa program.</li>
                        <li>Selecting prime project locations with easy access to business and academic hubs to deliver strong and sustainable ROI as well as maximize financial benefits for investors over the long haul.</li>
                        <li>Developing value projects such as luxury family apartments, serviced apartments and hotels, providing an exceptional living experience for our partners and investors.</li>
                        <li>As a consulting firm, HIF Consulting Singapore Pte Ltd, helps HIF clients navigate the best property for Golden Visa investment for their families.</li>
                    </ul>
                </p>
                <h2 className="pt-5 text-xl pb-2 md:w-[250px] w-[205px]" style={{borderBottom: '5px solid #021d68'}}>Some of Our Real Estate Projects</h2>
                <p className="pt-3 pb-5">
                    HIF premium real estate projects, handpicked for their unbeatable locations and designed with renters in mind. Whether you're looking for easy access to public transportation, vibrant local communities, or proximity to key amenities, our properties offer unparalleled convenience. Each project is thoughtfully developed to provide an effortless rental experience, ensuring tenants enjoy both comfort and accessibility. Invest in a space where location meets lifestyle, making renting simpler, faster, and more enjoyable. Secure your future today with HIF—your gateway to prime living.
                </p>
                <Slider {...settings}>
                {
                    Listings.map((property) => {return (
                        <div key={property.id} className='pr-3 pt-2 flex items-center justify-center'>
                            <div className='flex justify-center rounded-t-xl pt-5' style={{backgroundColor: '#FFFF'}}>
                                <img src={property.image} className="h-[370px]" style={{borderRadius: '0%'}} />
                            </div>
                            <div className="p-2 text-center" style={{backgroundColor: '#FFFF'}}>
                                <h2 className="text-3xl">{property.name}</h2>
                            </div>
                            <div style={{backgroundColor: '#FFFF'}} className="rounded-b-xl">
                                <h2 className="pl-5 text-2xl pb-5 text-center">{property.location}</h2>
                            </div>
                        </div>
                    )})
                }
                </Slider>
            </div>
        </div>
    )
}

export default Careers
