import { NavLink } from "react-router-dom"
import styled from "styled-components"

export default function Movies(){
    return(
        <MovieContainer>
            <h4>Recomended for you</h4>
            <Content>
                <ListMovies>
                    <NavLink to='/details'>
                    <img src="/images/red-movie-card.jpg" />
                    </NavLink>
                </ListMovies>
                <ListMovies>
                    <NavLink to='/details'>
                    <img src="/images/red-movie-card.jpg" />
                    </NavLink>
                </ListMovies>
                <ListMovies>
                    <NavLink to='/details'>
                    <img src="/images/red-movie-card.jpg" />
                    </NavLink>
                </ListMovies>
                <ListMovies>
                    <NavLink to='/details'>
                    <img src="/images/red-movie-card.jpg" />
                    </NavLink>
                </ListMovies>
            </Content>
        </MovieContainer>
    )
}

const MovieContainer=styled.div`
    margin-top: 50px;
`
const Content=styled.div`
    display: grid;
    grid-gap: 25px;
    grid-template-columns: repeat(4, minmax(0, 1fr));
`
const ListMovies=styled.div`
    margin-top:10px ;
    border-radius: 34px;
    cursor: pointer;
    width: 250px;
    height: 150px;
    overflow: hidden;
    border: 3px solid rgba(249,249,249,0.1);
    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    &:hover{
        transform: scale(1.05);
        border-color: rgba(249,249,249,0.8);
    }
`