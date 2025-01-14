import React from "react";
import { Box, Button, Typography } from "@mui/material";
import Link from "next/link";

export default function Navbar() {
    return (
        <Box
            sx={{
                display: 'flex',
                backgroundColor: '#121858',
                color: 'white',
                padding: '8px 22px',
                justifyContent: 'space-between',
                alignItems: 'center',
                height: 'auto',
                flexWrap: 'wrap',

            }}
        >


            <Box sx={{
                display: "flex",
                alignItems: "center",
                flexWrap: "wrap",
                gap: 12,
                fontSize: '16px'

            }}>
                <Link href="/" >
                    <Button sx={{ color: 'white', textTransform: 'none', fontSize: '16px' }}>
                        Home
                    </Button>
                </Link>

                <Link href="/about" passHref>
                    <Button sx={{ color: 'white', textTransform: 'none', fontSize: '16px' }}>
                        About Us


                    </Button>
                </Link>

                <Link href="/facilities" passHref>
                    <Button sx={{ color: 'white', textTransform: 'none', fontSize: '16px' }}>
                        Facilities
                    </Button>
                </Link>

                <Link href="/rules" passHref>
                    <Button sx={{ color: 'white', textTransform: 'none', fontSize: '16px' }}>
                        Rules & Regulations
                    </Button>
                </Link>

                <Link href="/academics" passHref>
                    <Button sx={{ color: 'white', textTransform: 'none', fontSize: '16px' }}>
                        Academics
                    </Button>
                </Link>

                <Link href="/career" passHref>
                    <Button sx={{ color: 'white', textTransform: 'none', fontSize: '16px' }}>
                        Career
                    </Button>
                </Link>

                <Link href="/notices" passHref>
                    <Button sx={{ color: 'white', textTransform: 'none', fontSize: '16px' }}>
                        Notices
                    </Button>
                </Link>

                <Link href="/gallery" passHref>
                    <Button sx={{ color: 'white', textTransform: 'none', fontSize: '16px' }}>
                        Gallery
                    </Button>
                </Link>
            </Box>



        </Box>
    );
}
