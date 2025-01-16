import { Grid, Button, Typography } from "@mui/material";
import Image from "next/image";
import image1 from "../Other images/Maths Lab..jpg"
import MaximizeIcon from '@mui/icons-material/Maximize';

export default function About() {
    return (
        <Grid container spacing={2}>
            <Grid item xs={12} md={6} sx={{ padding: 6 }}>
                <Typography> < MaximizeIcon sx={{ color: "#f59e0b" }} /></Typography>
                <Typography sx={{ padding: "6px 14px", color: "#757575" }}> ABOUTN US</Typography>
                <Typography variant="h3" sx={{ padding: "10px 14px" }}>Knowledge Ennobles Character Endures</Typography>
                <Typography sx={{ padding: "10px 14px", color: "#757575" }}>
                    My school has a large library with a wide selection of books on many subjects.
                    Twice a week, A school library is a place where students, teachers,
                    and staff can access a variety of resources to learn, study,
                    and develop their skills. It can be a physical space or a virtual space.
                </Typography>
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
                    Know More
                </Button>

            </Grid>

            <Grid item xs={12} md={6}>
                <Image
                    src={image1}
                    alt="Library Image"
                    style={{
                        width: '100%',
                        height: 'auto',
                        borderRadius: '8px',
                        objectFit: 'cover',
                    }}
                />

            </Grid>
        </Grid>
    )
}