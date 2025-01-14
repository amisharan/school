import React from 'react'
import { Box, Typography, } from "@mui/material"
import Image from 'next/image'
import Image1 from "../Other images/School logo.jpg"

export default function Logo() {
    return (
        <Box sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
        }}>

            <Image src={Image1}
                alt="School Logo"
                width={70}
                height={70}
                layout="intrinsic"
            />

            <Typography
                sx={{
                    fontWeight: 'bold',
                    fontSize: '38px',
                    lineHeight: '2',
                }}
            >
                BS MEMORIAL HIGH SCHOOL
            </Typography>

        </Box>
    )
}



