import React from "react";
import {
    Card,
    CardContent,
    CardMedia,
    Typography,
    Button,
    Box,
} from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';
import { FormatUnderlined } from "@mui/icons-material";
import MaximizeIcon from '@mui/icons-material/Maximize';


const CardData = [
    {
        id: 1,
        title: "Computer Lab",
        detail: " My school has a large library with a wide selection of books on many subjects My school has a large library with a wide selection of books on many subjects My school has a large library with a wide selection of books on many subjects"
        ,
    },
    {
        id: 2,
        title: "Chemistry Lab",
        detail: "My school has a large library with a wide selection of books on many subjects My school has a large library with a wide selection of books on many subjects My school has a large library with a wide selection of books on many subjects"
        ,

    },
    {
        id: 3,
        title: "Bio Lab",
        detail: "My school has a large library with a wide selection of books on many subjects My school has a large library with a wide selection of books on many subjects My school has a large library with a wide selection of books on many subjects"
        ,

    },

]

function Facilities() {
    return (
        <Box container spacing={2} sx={{ padding: 2, marginLeft: 6 }}>
            < MaximizeIcon sx={{ color: "#f59e0b" }} />
            <Typography sx={{ color: "#757575" }}>OUR FACILITIES</Typography>
            <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                flexWrap="wrap"
                gap={6}
                p={2}


            >

                {CardData.map((card) => (
                    <Card sx={{
                        width: 400, height: 370, backgroundColor: '#121858', color: "white", display: "flex", justifyContent: "space-between",

                    }} key={card.id}>
                        <CardMedia
                            alt={card.title}
                            height="200"
                            title={card.title}


                        />
                        <CardContent sx={{ textAlign: "center" }}>
                            <HomeIcon sx={{ color: "#121858", borderRadius: "60%", border: "4px solid", backgroundColor: "white", width: 50, height: 50, }} />
                            <Typography gutterBottom variant="h5" component="div">
                                {card.title}
                            </Typography>
                            <Typography variant="body2" sx={{ color: "white" }}>
                                {card.detail}
                            </Typography>
                            <Button

                                sx={{
                                    marginTop: 2,
                                    backgroundColor: '#f59e0b',
                                    color: 'black',
                                    '&:hover': {
                                        backgroundColor: '#d97706',
                                    },
                                }}
                            >
                                Know More
                            </Button>
                        </CardContent>
                    </Card>
                ))}
            </Box>
        </Box >
    );
}

export default Facilities;
