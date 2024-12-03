
import { styled, Box, Typography } from '@mui/material';

const Image = styled(Box)`
    width: 100%;
    background: url(https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg) center/55% repeat-x #000;
    height: 50vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const HeadingImage = styled('img')`
    width: auto; 
    height: 120px;
    object-fit: contain;
    background: rgba(255, 255, 255, 0.8); 
    display: inline-block;
    padding: 8px; 
    border-radius: 8px; 
`;

const SubHeading = styled(Typography)`
    font-size: 20px;
    font-family: 'Rubik', sans-serif;
    color: #FB641B;
    background: rgba(0, 0, 0, 0.6); 
    padding: 8px 16px;
    border-radius: 8px; 
    display: inline-block; 
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.3); 
    margin-top: 16px; 
`;



const Banner = () => {
    
    return (
        <Image>
            <HeadingImage src="https://www.sesta.it/wp-content/uploads/2021/03/logo-blog-sesta-trasparente.png" alt="Blog Logo" />
            <SubHeading>Express. Inspire. Connect.</SubHeading>
        </Image>
    )
}

export default Banner;