
"use client"
import React from 'react'

import Image from 'next/image'
import image from "../Other images/mi.jpg"
import { Box, Grid, Typography } from '@mui/material'
import Link from 'next/link'

function Mission() {
    return (
        <Box
            style={{
                position: "relative",
                width: "100vw",
                height: "100vh",
                margin: 0,
                overflow: "hidden",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginTop: 10,

            }}
        >
            <Box sx={{
                position: "absolute",
                top: 0, left: 0,
                width: "100%",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: 'center',
                alignItems: 'flex-start',
                zIndex: 1,
                paddingLeft: "100px",

            }}>
                <Link href="/" sx={{ color: 'black', textDecoration: 'none' }} >Home</Link >
                <Link href="/about">  |  About</Link>
                <Typography align="left" color="black" sx={{ textShadow: "2px 2px 4px rgba(0,0,0,0.7)", font: "bold", fontSize: "30px" }}>
                    Mission Vision
                </Typography>
            </Box>
            <img scr={image} alt="sample" style={{ width: "100%", height: "70%", objectFit: "cover", display: "block" }} />



        </Box>
    )
}

export default Mission