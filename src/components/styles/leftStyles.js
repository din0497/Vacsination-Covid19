import React from 'react';
import styled from 'styled-components';

export const LeftContainer = styled.ul`
  border: 1px red solid;
  width: 250px;
  margin: 0;
  padding: 0 0 0 15px;
  overflow-y: auto;
  
  
`

export const CountryList = styled.li`
display: flex;
align-items: left;
flex-direction: column;
border-bottom: 1px solid gray;
list-style-type:none;
padding: 10px 0 10px 10px;

`

export const CountryTitle = styled.h5`
margin: 0;
`
export const Property = styled.p`
margin: 0;
font-size: 15px;
color: gray;
`