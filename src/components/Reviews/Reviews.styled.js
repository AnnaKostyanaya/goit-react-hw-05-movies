import styled from "styled-components";

export const Photo = styled.img`
margin-top: 20px;
margin-right: 5px;
width: 50px;
height: 50px;
border-radius: 50%;
`
export const Name = styled.p`
display: block;
width: 150px;
margin-right: 5px;
text-align: center;
overflow: auto;
`
export const Text = styled.p`
display: block;
margin-right: 5px;
max-width: 800px;
`

export const Item = styled.li`
display: flex;
align-items: flex-start;
margin: 10px;
padding: 0;
list-style: none;
`

export const User = styled.div`
display: flex;
flex-wrap: wrap;
align-items: flex-start;
justify-content: center;
width: 150px;
`