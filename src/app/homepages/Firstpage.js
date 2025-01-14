"use client"
import React, { useState, useEffect } from "react";
import { CircularProgress, Box } from "@mui/material";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import image1 from "../Other images/Digital classroom.jpg";
import image2 from "../Other images/GeotaggedSchoolPic.jpg";
import image3 from "../Other images/Managers photo.jpg"

import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

const Firstpage = () => {
    // Use static images located in the /public/images folder
    const staticImage = [
        image1, image2, image3
    ];


    const [loading, setLoading] = useState(false);
    const theme = useTheme();
    const isMobileView = useMediaQuery(theme.breakpoints.down("md"));

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1,
            slidesToSlide: 1,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1,
            slidesToSlide: 1,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1,
        },
    };

    const carouselSettings = {
        autoPlay: true,
        autoPlaySpeed: 2000,
        infinite: true,
        transitionDuration: 500,
        removeArrowOnDeviceType: ["tablet", "mobile"],
    };

    return (
        <Box sx={{ height: isMobileView ? 500 : 700 }}>
            {loading ? (
                <CircularProgress />
            ) : (
                <Box sx={{ marginTop: isMobileView ? 5 : 8 }}>
                    <Carousel
                        {...carouselSettings}
                        animation="slide"
                        indicators={false}
                        responsive={responsive}
                    >
                        {staticImage.map((imageUrl, index) => (

                            <Box
                                key={index}
                                sx={{
                                    height: isMobileView ? 500 : 700,
                                    display: "flex",
                                    justifyContent: "center",
                                }}
                            >
                                <img
                                    src={imageUrl}
                                    alt={`Slide ${index}`}
                                    loading="lazy"
                                    style={{
                                        maxWidth: "100%",
                                        maxHeight: "100%",
                                        width: "100%",
                                        height: "auto",
                                    }}
                                />
                                {console.log("This is images", imageUrl)}
                            </Box>

                        ))}
                    </Carousel>
                    <Box
                        sx={{
                            position: "absolute",
                            top: "65%",
                            left: 18,
                            transform: "translateY(-50%)",
                            textAlign: "left",
                            color: "black",
                            fontSize: isMobileView ? "16px" : "24px",

                            padding: "10px",
                            width: isMobileView ? "90%" : "50%",
                        }}
                    >

                        <h1 > "Learning is A treasure</h1>
                        <h1 > That Will Follow Its Owner Everywhere . "</h1>

                    </Box>

                </Box>
            )}
        </Box>
    );
};

export default Firstpage;
