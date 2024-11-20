import React from 'react'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import '../css/ProductCategory.css'

function ProductCategory() {
    const productCategory = [
        {
            "image": "https://www.josalukkasmedia.com/Media/CMS/jos-alukkas-GOLD-EARRINGS-NEW-20241016150737124015.webp",
            "title": "Gold Earrings",
            "description": "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
        },
        {
            "image": "https://www.josalukkasmedia.com/Media/CMS/jos-alukkas-TRENDY-GOLD-RINGS-20241016150651436513.webp",
            "title": "Trendy Gold Rings",
            "description": "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
        },
        {
            "image": "https://www.josalukkasmedia.com/Media/CMS/jos-alukkas-GOLD-NECKLACE-20241016151516345484.webp",
            "title": "Gold Necklace",
            "description": "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
        },
        {
            "image": "https://www.josalukkasmedia.com/Media/CMS/jos-alukkas-GOLD-EARRINGS-02-20241016150707920973.webp",
            "title": "Gold Earrings",
            "description": "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
        },
        {
            "image": "https://www.josalukkasmedia.com/Media/CMS/jos-alukkas-DIAMOND-PENDANTS-20241016150729655286.webp",
            "title": "Diamond Pendant",
            "description": "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
        },
        {
            "image": "https://www.josalukkasmedia.com/Media/CMS/jos-alukkas-GOLD-BANGLES-20241016151506017346.webp",
            "title": "Gold Bangles",
            "description": "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
        },
        {
            "image": "https://www.josalukkasmedia.com/Media/CMS/jos-alukkas-WEDDING-NECKALCE-20241016150744686537.webp",
            "title": "Wedding Necklace",
            "description": "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
        },
        {
            "image": "https://www.josalukkasmedia.com/Media/CMS/jos-alukkas-DIAMOND-RINGS-20241016150752327490.webp",
            "title": "Diamond Rings",
            "description": "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
        },
    ]
    return (
        <Row xs={1} md={4} className="g-4 m-3">
            {productCategory.map((item, idx) => (
                <Col key={idx}>
                    <Card style={{ border: "none", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)" }}>
                        <div className="zoom-container">
                            <Card.Img
                                variant="top"
                                src={item.image}
                                alt="Example Image"
                                className="zoom-image"
                            />
                        </div>
                        <Card.Body style={{display:"flex",justifyContent:"center"}}>
                            <Card.Title className="underline-effect">{item.title}</Card.Title>
                            {/*                             <Card.Text>
                                {item.description}
                            </Card.Text> */}
                        </Card.Body>
                    </Card>
                </Col>
            ))}
        </Row>
    )
}

export default ProductCategory