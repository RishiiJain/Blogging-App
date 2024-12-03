import { Box, styled, Typography, Link } from "@mui/material";
import { Instagram, Email } from "@mui/icons-material";

const Banner = styled(Box)`
  background-image: url(http://mrtaba.ir/image/bg2.jpg);
  width: 100%;
  height: 50vh;
  background-position: center;
  background-size: cover;
`;

const Wrapper = styled(Box)`
  padding: 20px;
  & > h3,
  & > h5 {
    margin-top: 50px;
    color: #000; 
    font-weight: bold;
  }
`;

const Text = styled(Typography)`
  color: #878787;
  line-height: 1.6;
  font-size: 18px;
`;

const CustomLink = styled(Link)`
  color: #fb641b; 
  text-decoration: none;
  font-weight: bold;
  transition: color 0.3s ease, transform 0.2s ease;
  &:hover {
    color: #ffab76; 
    transform: scale(1.05); 
  }
`;

const Contact = () => {
  return (
    <Box>
      <Banner />
      <Wrapper>
        <Typography variant="h3">Getting in touch is easy!</Typography>
        <Text variant="h5">
          Reach out to me on
          <Box component="span" style={{ marginLeft: 5 }}>
            <CustomLink
              href="https://www.instagram.com/"
              target="_blank"
            >
              <Instagram />
            </CustomLink>
          </Box>
          or send me an Email
          <CustomLink
            href="mailto:b210759@skit.ac.in?Subject=This is a subject"
            target="_blank"
          >
            <Email />
          </CustomLink>
          .
        </Text>
      </Wrapper>
    </Box>
  );
};

export default Contact;
