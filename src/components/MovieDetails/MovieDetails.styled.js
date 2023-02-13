import styled from "styled-components";
import { Link } from "react-router-dom";

export const Poster = styled.img`
width: 50%;
`
export const Text = styled.span`
font-weight: 700;
`
export const Backward = styled(Link)`
padding: 16px 0px;
border-radius: 4px;
text-decoration: none;
font-weight: 500;
color: blue; 
`
export const Container = styled.div`
max-width: 960px;
margin: 0 auto;
padding: 0 16px;
`
export const List = styled.ul`
list-style: none;
padding: 16px 0px;
`
export const Item = styled.li`
text-decoration: none;
color: blue;
`