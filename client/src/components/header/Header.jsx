import { AppBar, Toolbar, styled } from "@mui/material"
import { Link } from "react-router-dom"

const Component = styled(AppBar)`
    background: #FB641B;
    color: #FFFFFF;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2); 
`;

const Container = styled(Toolbar)`
    justify-content: space-around; 
    & > a {
        padding: 10px 20px; 
        color: #FFFFFF;
        text-decoration: none;
        font-size: 18px; 
        font-weight: bold;
        border-radius: 4px; 
        transition: background 0.3s ease, color 0.3s ease;
        &:hover {
            background: #FFFFFF; 
            color: #FB641B; 
        }
    }
`;

const Header = () => {
  return (
    <Component>
      <Container>
        <Link to ='/'>HOME</Link>
        <Link to = '/about'>ABOUT</Link>
        <Link to = '/contact'>CONTACT</Link>
        <Link to = '/login'>LOGOUT</Link>
      </Container>
    </Component>
  )
}

export default Header
