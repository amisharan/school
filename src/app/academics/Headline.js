
"use client"
import { Box, Typography } from '@mui/material';




export default function Headline() {
    return (
        <Box container spacing={2} sx={{ padding: 2, marginLeft: 6 }}>



            <Typography variant='h6' sx={{ border: "23px solid #121858", width: "90%" }}>
                <Typography variant="h4" gutterBottom sx={{ font: "bold", fontSize: "40px", color: "black", marginLeft: 3 }}>Admission</Typography>
                <ul >
                    <li>Parents have to submit the duly filled Admission Form along with the fees of the particular Class.</li>
                    <li>Once admission is taken, the fees paid shall not be refunded in any case.</li>
                    <li>Parents need to submit the following documents of their Child at the time of admission:-</li>
                    <li>2 Coloured-Passport-sized photographs</li>

                    <li>Progress Report of the Previous school
                    </li>

                    <li>Transfer Certificate</li>
                    <li>Birth Certificate</li>
                    <li>Aadhaar Card</li>
                </ul>
                <Box
                    sx={{
                        borderTop: '2px solid gray',
                        marginY: 2,
                        marginLeft: 4,
                        marginRight: 4
                    }}
                />

                <Typography variant="h6" gutterBottom sx={{ font: "bold", fontSize: "40px", color: "black", marginLeft: 3 }}>Withdrawal</Typography>
                <ul>
                    <li>Parents can give an application for withdrawal of their Child from the School.</li>
                    <li>Before this, they will have to pay all the dues to the School.</li>
                    <li>Then, they will be given the Transfer Certificate.</li>
                </ul>
            </Typography>
        </Box>
    );
}
