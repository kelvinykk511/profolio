import {Box} from "@mui/material";

const ImageBox = ({height, borderRadius, altText, src}) => {
    return (
        <Box
            component="img"
            sx={{height: height, borderRadius: borderRadius ? borderRadius : 0}}
            alt={altText}
            src={src}
        />
    )
}

export default ImageBox;