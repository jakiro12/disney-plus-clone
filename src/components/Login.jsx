import styled from "styled-components";
import { singInWithGoogle } from "../firebase";
import { useNavigate } from "react-router-dom";

export default function Login() {
    const navigate=useNavigate()
    const initDisney=()=>{
       if(singInWithGoogle() !== ''){
        navigate('/home')
       }else{
        navigate('/login')
       }
        
    }
        return(
        <Container>
            <Catalogue>
                <CatLogo src="/images/cta-logo-one.svg"/>
                <SingUp onClick={()=>initDisney()}>GET YOUR SUPCRIPTION HERE</SingUp>
                <Description>
                Enjoy it on your favorite screen, be it your TV, tablet, computer, phone and others. Live a unique experience with a wide selection of titles in 4K. In addition, you can see on four screens simultaneously so that no one is left out.
                </Description>
                <CatLogoBottom src="/images/cta-logo-two.png"/>
            </Catalogue>
        </Container>
    )
}

const Container=styled.div`
    min-height: 100vh;   
    position: relative;   
    &::before{
        background-position: top;
        background-size: cover;
        position: absolute;
        background-repeat: no-repeat;
        top: 0;
        bottom: 0;
        content: '';
        left: 0;
        right: 0;
        background-image: url('/images/login-background.jpg');
        z-index: -1;
    }
`
const Catalogue=styled.div`
    max-width: 600px;
    padding: 90px 48px;
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    text-align: center;
    
`
const CatLogo=styled.img`
    margin-bottom:25px;
`
const SingUp=styled.button`
    cursor: pointer;
    border: none;
    background-color:#0063e5 ;
    padding: 15px 90px;
    border-radius: 5px;
    font-size: 18px;
    transition: all 300ms;
    letter-spacing: 1.5px;
    &:hover{
        background: #0483ee;
    }
    
`
const Description=styled.p`
    margin-top: 25px;
    text-align: center;
    line-height: 1.2;
`
const CatLogoBottom=styled.img`
    width: 500px;
    margin-top: 15px;
`