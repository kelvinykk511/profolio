import {Card, Grid} from "@mui/material";

const SkillsCard = ({title, skills})=>{
    return (
        <Grid item padding={5} xs={12} md={4} lg={3}>
            <Card variant="outlined" sx={{padding: 5, height: 400}}>
                <h2>{title}:</h2>
                {skills.map((skill, index) => (<h5 key={skill}>{skill}</h5>))}
            </Card>
        </Grid>
    )
}

export default SkillsCard;