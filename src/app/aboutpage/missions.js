import React from 'react'
import { Grid, Typography, Card, CardMedia, CardContent } from "@mui/material"


function Missions() {
    return (
        <Grid container spacing={2} sx={{ padding: 6 }}>


            <Grid item xs={12} md={6} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Card sx={{ width: 400, height: 200, backgroundColor: "#2979ff", color: "white", justifyContent: "center", alignItems: "center" }} >
                    <CardMedia
                        component="card"
                        height="300"
                        width="200"
                        alt="card"
                    />
                    <CardContent>
                        <Typography variant="h5" component="div" sx={{ font: "bold", fontSize: "40px", justifyContent: "center", }}>
                            Our Vision and Mission
                        </Typography>

                    </CardContent>

                </Card>
            </Grid>


            <Grid item xs={12} md={6} sx={{ padding: 6 }}>
                <Typography variant='h5'>Vission and Mission</Typography>
                <Typography sx={{ color: "black" }}>
                    My school has a large library with a wide selection of books on many subjects.
                    Twice a week, A school library is a place where students, teachers,
                    and staff can access a variety of resources to learn, study,
                    and develop their skills. It can be a physical space or a virtual space.
                </Typography>

            </Grid>

        </Grid>
    );
}

export default Missions;
