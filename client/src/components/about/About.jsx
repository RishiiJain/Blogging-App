import { Box, styled, Typography, Link } from "@mui/material";
import { GitHub, Instagram, Email } from "@mui/icons-material";

const Banner = styled(Box)`
  background-image: url(https://www.wallpapertip.com/wmimgs/23-236943_us-wallpaper-for-website.jpg);
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

const About = () => {
    return (
      <Box>
        <Banner />
        <Wrapper>
          <Typography variant="h3">About This Project</Typography>
          <Text variant="h5">
            Hi, We are final-year Computer Science students currently working on
            this website as my final year project. The website is built using the
            MERN stack (MongoDB, Express.js, React.js, and Node.js).
            <br />
            This project is focused on creating a functional blogging platform
            where users can share their thoughts, write articles, and connect
            with others.
          </Text>
          <Text variant="h5">
            If you'd like to check out the code for this project, visit my GitHub
            repository:
            <Box component="span" style={{ marginLeft: 5 }}>
              <CustomLink
                href="https://github.com/RishiiJain"
                target="_blank"
              >
                <GitHub />
              </CustomLink>
            </Box>
          </Text>
          <Text variant="h5">
            For any questions or collaboration opportunities, feel free to
            connect with me on:
            <Box component="span" style={{ marginLeft: 5 }}>
              <CustomLink
                href="https://www.instagram.com"
                target="_blank"
              >
                <Instagram />
              </CustomLink>
            </Box>{" "}
            or send me an email:{" "}
            <CustomLink
              href="mailto:b210759@skit.ac.in?Subject=Final Year Project Inquiry"
              target="_blank"
            >
              <Email />
            </CustomLink>
          </Text>
        </Wrapper>
      </Box>
    );
  };
  
  export default About;