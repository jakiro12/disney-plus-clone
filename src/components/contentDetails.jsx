import styled from "styled-components"

export default function ContentDetails(){
    return(
        <Container>
          <Background>
            <img  src="\images\red-movie.jpg"/>          
          </Background>
          <ImageTittle>
                <img src="\images\red-movie-name.svg" />
            </ImageTittle>
            <Controlllers>
                <PlayButton>
                    <img src="/images/play-icon-black.png"/>
                    <span>PLAY</span>
                </PlayButton>
                <TrailerButton>
                <img src="/images/play-icon-white.png"/>
                    <span>TRAILER</span>
                </TrailerButton>
                <AddButton>
                        <span>+</span>
                </AddButton>
                <GroupButton>
                        <img src='/images/group-icon.png' />
                </GroupButton>
            </Controlllers>
            <SubInfo>7+ CC 2022 1 h 40 min</SubInfo>
            <Description><div>A 13-year-old girl undergoes a sudden physical transformation and darts into the nearest bathroom, burning with shame. “Go away! I’m a monster!” she sobs when her mother knocks at the door asking what’s wrong. Nervously, unsure if she’s intruding on her daughter’s privacy, the mom asks “Has … has the red peony blossomed?”
            </div>
            </Description>
        </Container>
    )
}

const Container=styled.div`
    min-height: calc(100vh - 70px);
    padding: 0 calc(3.5vw - 5px);
    position: relative;
`
const Background=styled.div`
    position: fixed;
    top:0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
    opacity: 0.9;
    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`
const ImageTittle=styled.div`
    height:25vh ;
    width: 25vw;
    margin-top: 25px;
    img{
        width: 100%;
        height: 100%;
        object-fit: contain;
    }   
`
const Controlllers=styled.div`
    margin-top: 20px;
    display: flex;
    align-items: center;
`
const PlayButton=styled.button`
    border-radius:5px ;
    margin-right: 20px;
    align-items: center;
    display: flex;
    padding:0 24px;
    font-size: 15px;
    border: none;
    letter-spacing: 1.5px;
    background: rgb(249,249,249);
    cursor: pointer;
    span{
        color: black;
        
    }
    &:hover{
        background: rgb(194,194,194);
    }
`
const TrailerButton=styled(PlayButton)`
    background: rgba(0,0,0,0.2);
    border:1px solid rgb(249,249,249);
`
const AddButton=styled.button`
    width: 44px;
    height: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background-color:rgba(0,0,0,0.6);
    border:2px solid white;
    cursor: pointer;
    margin-right: 15px;
    span{
        color:white;
        font-size: 30px;
    }
`
const GroupButton=styled(AddButton)`
    background: rgb(0,0,0);
`
const SubInfo=styled.div`
    margin-top: 15px;
    font-size: 15px;
`
const Description=styled.div`
    margin-top:14px;
    font-size: 15px;
    div{
        width: 600px;
    }
`