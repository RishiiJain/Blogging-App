
import { Button, Table, TableHead, TableRow, TableCell, TableBody, styled } from '@mui/material';
import { Link, useSearchParams } from 'react-router-dom';

import { categories } from '../../constants/data';

const StyledTable = styled(Table)`
    border: 1px solid rgba(224, 224, 224, 1); 
    border-radius: 8px; 
    overflow: hidden; 
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1); 
`;

const StyledButton = styled(Button)`
    margin: 20px;
    width: 85%;
    background: #FB641B; 
    color: #fff;
    font-weight: bold;
    text-decoration: none;
    border-radius: 8px; 
    padding: 10px 20px;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2); 
    transition: background 0.3s ease, transform 0.2s ease; 
    &:hover {
        background: #fff; 
        color: #FB641B;
        transform: scale(1.05); 
    }
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    color: inherit;
    font-weight: bold;
    &:hover {
        color: #FB641B; 
        text-decoration: underline; 
    }
`;


const Categories = () => {
    const [searchParams] = useSearchParams();
    const category = searchParams.get('category');
    
    return (
        <>
            <Link to={`/create?category=${category || ''}`} style={{ textDecoration: 'none' }}>
                <StyledButton variant="contained">Create Blog</StyledButton>
            </Link>
            
            <StyledTable>
                <TableHead>
                    <TableRow>
                        <TableCell>
                            <StyledLink to={"/"}>
                                All Categories
                            </StyledLink>
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        categories.map(category => (
                            <TableRow key={category.id}>
                                <TableCell>
                                    <StyledLink to={`/?category=${category.type}`}>
                                        {category.type}
                                    </StyledLink>
                                </TableCell>
                            </TableRow>
                        ))
                    }
                </TableBody>
            </StyledTable>
        </>
    )
}

export default Categories;