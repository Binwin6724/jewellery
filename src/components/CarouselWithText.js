import React from 'react'
import { Carousel } from "react-bootstrap";
import "../css/CarouselWithText.css"


function CarouselWithText() {
    const carouselItems = [
        {
            image: "https://www.josalukkasmedia.com/Media/CMS/jos-alukkas-gift-08-20240907174848892155.webp",
            title: "A Special Gift For You",
            description: "We live every second of our day. Why not make every moment special?",
            buttonText: "Shop Now",
        },
        {
            image: "https://www.josalukkasmedia.com/Media/CMS/jos-alukkas-gift-for-wife-20231208144941130004.webp",
            title: "Exclusive Jewelry Collection",
            description: "Make your style statement with our unique designs.",
            buttonText: "Explore Now",
        },
        {
            image: "https://www.josalukkasmedia.com/Media/CMS/jos-alukkas-gift-new-03-20240801162520405772.webp",
            title: "Celebrate Every Occasion",
            description: "Beautiful gifts to make your loved ones smile.",
            buttonText: "View Collection",
        },
    ];
    return (
        <div className="container-carousel p-5">
            <Carousel>
                {carouselItems.map((item, index) => (
                    <Carousel.Item key={index}>
                        <div
                            style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                flexDirection: "row",
                                height: "500px",
                            }}
                        >
                            {/* Left Image Section */}
                            <div className='imageDiv' style={{ flex: 1 }}>
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    style={{
                                        width: "100%",
                                        height: "100%",
                                        objectFit: "cover",
                                    }}
                                />
                            </div>

                            {/* Right Text Section */}
                            <div style={{ flex: 1, padding: "20px" }}>
                                <h1 style={{ fontSize: "2.5rem" }}>{item.title}</h1>
                                <p style={{ fontSize: "1.2rem", margin: "10px 0" }}>{item.description}</p>
                                <button
                                    style={{
                                        backgroundColor: "#f0c14b",
                                        border: "none",
                                        padding: "10px 20px",
                                        cursor: "pointer",
                                    }}
                                >
                                    {item.buttonText}
                                </button>
                            </div>
                        </div>
                    </Carousel.Item>
                ))}
            </Carousel>
        </div>
    )
}

export default CarouselWithText