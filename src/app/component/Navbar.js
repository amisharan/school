import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import MailIcon from '@mui/icons-material/Mail';


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


            }}
        >

            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <PhoneIcon sx={{ marginRight: 1, fontSize: 20, color: '#f9a825' }} />
                <Typography >
                    +91 932324234432  |
                </Typography>


                <MailIcon sx={{ marginLeft: 3, marginRight: 1, fontSize: 20, color: '#f9a825' }} />
                <Typography >
                    abc@gmail.com
                </Typography>
            </Box>


            <Button
                variant="contained"
                sx={{
                    backgroundColor: '#f59e0b',
                    color: 'black',
                    '&:hover': {
                        backgroundColor: '#d97706',
                    },
                }}
            >
                Contact Us
            </Button>

        </Box>
    );
}


