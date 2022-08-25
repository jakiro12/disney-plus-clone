import styled from "styled-components";


export default function ContentCategory(){ 
    return(
        <ContainerViews>
            <ViewFrame>
                <img src="/images/viewers-disney.png"/>
            </ViewFrame>
            <ViewFrame>
                <img src="/images/viewers-marvel.png"/>
            </ViewFrame>
            <ViewFrame>
                <img src="/images/viewers-national.png"/>
            </ViewFrame>
            <ViewFrame>
                <img src="/images/viewers-pixar.png"/>
            </ViewFrame>
            <ViewFrame>
                <img src="/images/viewers-starwars.png"/>
            </ViewFrame>
            
        </ContainerViews>
    )
}

const ContainerViews=styled.div`
    margin-top: 36px;
    display: grid;
    grid-gap: 15px;
    grid-template-columns: repeat(5, minmax(0 , 1fr)) ;
    padding:20px 0 36px ;
`
const ViewFrame=styled.div`
    border: 3px solid rgba(249,249,249,0.1);
    border-radius: 10px;    
    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    &:hover{
        transform: scale(1.05);
        border-color:rgba(249,249,249,0.8) ;
        contain: none;
    }
`