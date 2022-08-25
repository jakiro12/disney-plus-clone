import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export default function Header(){

    return(
        <NavConatiner>
            <ProfileLogo src='/images/logo.svg'/>
            <NavMenu>
                <a href='http://localhost:3000/home'>
                    <img src='/images/home-icon.svg' alt='image-logo'/>
                    <span>Home</span>
                </a> 
                <a>
                    <img src='/images/search-icon.svg' alt='search-logo'/>
                    <span>Search</span>
                </a> 
                <a>
                    <img src='/images/watchlist-icon.svg' alt='search-logo'/>
                    <span>Watchlist</span>
                </a> 
                <a>
                    <img src='/images/original-icon.svg' alt='search-logo'/>
                    <span>Original</span>
                </a> 
                <a>
                    <img src='/images/movie-icon.svg' alt='search-logo'/>
                    <span>Movies</span>
                </a> 
                <a>
                    <img src='/images/series-icon.svg' alt='search-logo'/>
                    <span>Series</span>
                </a> 
              
            </NavMenu>
            <NavLink to='/login'>
            <UserImg  src='/images/profile-d+.jpg' accept='image/*'/>
            </NavLink>
        </NavConatiner>
    )
}

const NavConatiner=styled.div`
    overflow-x: hidden;
    height: 70px;
   
    background: #090b13;    
    display: flex;
    align-items: center;
    padding: 0 36px;
`
const NavMenu=styled.div`
    display: flex;
    flex: 1;
    margin-left: 25px;
    align-items: center;
    a{
        display: flex;
        align-items: center;
        padding: 0 12px;
        cursor: pointer;
        text-decoration: none;
        img{
            height: 20px;
        }
        span{
            font-size: 14px;
            letter-spacing: 1.2px;
            text-indent:3px;
            position: relative;
            &::after{
                content: '';
                position: absolute;
                bottom: -6px;
                background: white;
                height: 2px;
                left: 0;
                right: 0;
                opacity: 0;
                transform: scaleX(0);
                transform-origin: left center;
            }
        }
        &:hover{
            span::after{
                transform: scaleX(1);
                opacity: 1;
                transition: 0.8s ease;
            }
        }
    }
    
`
const ProfileLogo=styled.img`
    width: 80px;
`
const UserImg=styled.img`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    cursor: pointer;
    object-fit: cover;
`