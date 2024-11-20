import React from 'react'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function TrendingOn() {
    const trendingOn = [
        {
            "image": "https://www.josalukkasmedia.com/Media/CMS/jos-alukkas-01-20240907172244251901.webp",
            "title": "Classy Necklace",
            "description": "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
        },
        {
            "image": "https://www.josalukkasmedia.com/Media/CMS/jos-alukkas-03-20240907172336908639.webp",
            "title": "Diamond Jewellery",
            "description": "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
        },
        {
            "image": "https://www.josalukkasmedia.com/Media/CMS/jos-alukkas-02-20240907172430142999.webp",
            "title": "Festive Collections",
            "description": "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
        },
        {
            "image": "https://www.josalukkasmedia.com/Media/CMS/jos-alukkas-shubha-mangalyam-necklace-20231208144140672031.webp",
            "title": "Traditional Necklace",
            "description": "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
        },
        {
            "image": "https://www.josalukkasmedia.com/Media/CMS/jos-alukkas-radiant-20241016180601505342.webp",
            "title": "Radiant Gold Rings",
            "description": "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
        },
        {
            "image": "https://www.josalukkasmedia.com/Media/CMS/jos-alukkas-trendy-20241016180607145932.webp",
            "title": "Trending Collections",
            "description": "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
        },
    ]
    return (
        <div className='trending-on' style={{ backgroundColor: "#FDF9F3", marginTop:"50px", marginBottom:"50px" }}>
            <div className="center-text">
                <p className="text-content">
                    Trending on <b>Jos Alukkas</b>
                    <span >
                        <img
                            src="https://www.josalukkasonline.com/assets/images/home/dotted-subhead.svg"
                            alt="rotate"
                        />
                    </span>
                </p>
            </div>
            <Row xs={1} md={3} className="g-4 m-3">
                {trendingOn.map((item, idx) => (
                    <Col key={idx}>
                        <Card style={{ border: "none", backgroundColor: "#FDF9F3" }}>
                            <div className="zoom-container">
                                <Card.Img
                                    variant="top"
                                    src={item.image}
                                    alt="Example Image"
                                    className="zoom-image"
                                />
                            </div>
                            <Card.Body style={{display:"flex",justifyContent:"center"}}>
                                <Card.Title>{item.title}</Card.Title>
                                {/*                             <Card.Text>
                        {item.description}
                    </Card.Text> */}
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>

        </div>
    )
}

export default TrendingOn