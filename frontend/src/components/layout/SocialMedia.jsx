import { Box, IconButton } from "@mui/material";
import { Facebook, Instagram, LinkedIn } from '@mui/icons-material';

const SocialMedia = () => {
    return(
        <Box display={'flex'} gap={1}>
            <IconButton sx={{color: '#fff'}}><Facebook /></IconButton>
            <IconButton sx={{color: '#fff'}}><LinkedIn /></IconButton>
            <IconButton sx={{color: '#fff'}}><Instagram /></IconButton>
        </Box>
    )
}

export default SocialMedia;