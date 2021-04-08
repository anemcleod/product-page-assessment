# Vaimo Front-end Assessment

## Getting Started

- clone repository
- install dependencies (npm install)
- run in dev mode on localhost:3000 (npm run start)

## Overview of architecture 

This project was built using React, which allowed the project to be broken up into smaller reausable components. I find the readibility of react components one of the biggest draws.

I made use of React context to create a global cart state, that allowed me to reduce the overhead of passing data throughthe entire hierarchy to reach lowest level components.

## Reflection

If I did this again, I would consider regrouping some of the smaller components into larger ones. I would also review some om my data-handeling functions and refactor them to try and find a more elegant solution. As far as styling I would convert the png icons into an icon font to allow me to transform sizes and colors more easily (example the grey minus and orange plus of qty rocker)