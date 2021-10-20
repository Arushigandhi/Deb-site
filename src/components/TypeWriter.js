import React from 'react';
import styled from 'styled-components';

const TypeStyles = styled.div`
padding: 80px;
body{
  padding: 40px;
  background-color: #121212;  
}

p {
  border-right: solid 3px black;
  white-space: nowrap;
  overflow: hidden;    
  font-family: 'Montserrat';  
  font-size: 28px;
  color: black;
  margin: 0 auto;
}

p {
  animation: animated-text 4s steps(29,end) 1s 1 normal both,
             animated-cursor 600ms steps(29,end) infinite;
}

@keyframes animated-text{
  from{width: 0;}
  to{width: 300px;}
}

@keyframes animated-cursor{
  from{border-right-color: black;}
  to{border-right-color: transparent;}
}

`;

export default function TypeWriter() {
    return (
        <TypeStyles>
            <p>Welcome to Deb-Site.</p>
        </TypeStyles>
    )
}