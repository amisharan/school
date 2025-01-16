import { Grid, Button, Typography } from "@mui/material";
import Image from "next/image";
import image1 from "../Other images/Managers photo.jpg"
import MaximizeIcon from '@mui/icons-material/Maximize';

export default function Message() {
    return (
        <Grid>
            <Typography> < MaximizeIcon sx={{ color: "#f59e0b" }} /></Typography>
            <Typography sx={{ padding: "6px 14px", color: "#757575" }}> Message</Typography>
            <Grid container spacing={2} sx={{ margin: 2, backgroundColor: "#121858", height: 370 }}>


                <Grid item xs={12} md={6}>
                    <img
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

                <Grid item xs={12} md={6} sx={{ padding: 6 }}>

                    <Typography variant="h5" sx={{ color: "white" }}> Lalu Yadav Ji</Typography>
                    <Typography variant="h6" sx={{ color: "white" }} >Chairman</Typography>
                    <Typography sx={{ color: "white" }}>
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
            </Grid>
        </Grid>
    )
}