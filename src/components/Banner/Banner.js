import React from 'react'
import { Carousel } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Banner = () => {
    const bannerData = [
        {
            id: 1,
            image: "https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?cs=srgb&dl=pexels-juan-mendez-1536619.jpg&fm=jpg",
            alt: 'First Slide',
            link: '/men'
        },
        {
            id: 2,
            image: "https://images.pexels.com/photos/974911/pexels-photo-974911.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            alt: 'Second Slide',
            link: '/women'
        },
        {
            id: 3,
            image: "https://images.pexels.com/photos/845434/pexels-photo-845434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            alt: 'Third Slide',
            link: '/kids'
        },
    ]
    return (
        <Carousel data-bs-theme="dark">
            {bannerData.map((slide) => (

                <Carousel.Item>
                    <Link to={slide.link}>
                        <img
                            className="d-block w-100"
                            src={slide.image}
                            alt={slide.alt}
                        />
                    </Link>
                </Carousel.Item>
            ))
            }
        </Carousel >
    )
}

export default Banner