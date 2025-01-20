"use client"

import React from 'react'
import { Box, Typography } from '@mui/material'
import Image from 'next/image'
import image from '../Other images/ad.webp'
import Link from 'next/link'

function Admission() {
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
                <Link href="/about">  |  Academics</Link>
                <Typography align="left"
                    sx={{
                        textShadow: "2px 2px 4px rgba(0,0,0,0.7)",
                        font: "bold",
                        fontSize: { xs: '24px', sm: '30px', md: '35px' },
                        color: "black"
                    }}>
                    Admission
                </Typography>
            </Box>
            <Image src={image} alt="sample" style={{ width: "100%", height: "30%", objectFit: "cover", }} />


        </Box>
    )
}

export default Admission