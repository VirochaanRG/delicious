import {useEffect, useState} from "react";
import styled from "styled-components";
import {Splide, SplideSlide} from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";

function Popular() {
    const [popular, setPopular] = useState([]);


    useEffect(() => {
        getPopular();
    }, []);
    
    const getPopular = async() => {
      const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`);
      const data = await api.json();
      console.log(data);
      setPopular(data.recipes)
      console.log(data.recipes)
      
    }

    return (
      <div>
        <Wrapper>
          <h3>Popular Picks</h3>
          <Splide options = {{
            perPage:4,
            arrows: false,
            pagination: false,
            drag: 'free',
            gap: "4rem",
          }}>
            {popular.map((recipe) =>{
              return (
                <SplideSlide>
                  <Card>
                    <p>{recipe.title}</p>
                    <img src={recipe.image} alt={recipe.title}/>
                    <Gradient/>
                  </Card>
                </SplideSlide> 
              );
            })}
          </Splide>
        </Wrapper>  
      </div>
    )
}

const Wrapper = styled.div`
  margin: 4rem 0rem;
`;

const Card = styled.div`
  min-height: 25rem;
  border-radius: 2rem;
  overflow: hidden;
  postion: relative;
  img {
    border-radius: 2rem;
    postion: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  p {
    postion: absolute;
    z-index: 10;
    left: 50%;
    bottom: 0%;
    font-weight: 600;
    font-size: 1rem;
    color: black;
    display: flex; 
    justify-content: center;
    align-items: center;
    width: 100%;
    text-align: center;
    height: 40%;
  }
`;

const Gradient = styled.div`
  z-index: 3;
  postion: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradienr(rgba(0,0,0,0), rgba(0,0,0,0.5))
`;
export default Popular