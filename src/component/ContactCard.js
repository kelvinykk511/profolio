import {Card, Grid} from "@mui/material";
import ImageBox from "./ImageBox";

const ContactCard = ({url, altText, src, title}) => {
    return (
        <Grid item paddingTop={5} paddingX={5} xs={12} sm={6} md={4} lg={3}
              display="flex" justifyContent="center" alignItems="center">
            <a href={url} target={"_blank"}>
                <Card variant="outlined" sx={{
                    padding: 5,
                    height: 200,
                    width: 250,
                }}>
                    <Grid item display="flex" justifyContent="center" alignItems="center"
                          alignSelf={"center"}>
                        <ImageBox
                            height={70}
                            altText={altText}
                            src={src}
                        />
                    </Grid>
                    <Grid>
                        <h1 align={"center"}>{title}</h1>
                    </Grid>
                </Card>
            </a>
        </Grid>
    )
}

export default ContactCard;