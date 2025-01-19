// pages/index.js
import { Box, Typography } from '@mui/material';
import MaximizeIcon from '@mui/icons-material/Maximize';



export default function Aims() {
    return (
        <Box container spacing={2} sx={{ padding: 2, marginLeft: 6 }}>
            < MaximizeIcon sx={{ color: "#f59e0b" }} />

            <Typography variant="h4" gutterBottom sx={{ font: "bold", fontSize: "40px", color: "#757575" }}>
                Aims & Objectives of the School
            </Typography>
            <Typography variant='h6' sx={{ border: "23px solid #121858", width: "90%" }}>

                <ul>
                    <li>To prepare the students for their future with simple discipline.</li><br />
                    <li>To inculcate in every student a spirit of excellence in academics as well as in co-curriculum activities.</li><br />
                    <li>To inculcate in every student a high level of morality and integrity to lead a virtuous life.</li><br />
                    <li>To instill in every student the sense of nationalism and brotherhood as well as respect for 'Unity in Diversity'.</li><br />
                    <li>To create a congenial environment for the development of physical, mental, social and spiritual aspects of human existence in every student.

                        1
                    </li><br />
                    <li>To instill confidence and positivity in students for their growth and to serve the nation in the best possible way.</li><br />
                    <li>To create an environment where students can explore their inherent qualities and boost them for their bright future.</li>

                </ul>
            </Typography>
        </Box>
    );
}
