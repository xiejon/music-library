# Music Library

An app that allows users to enter and keep track of repertoire. Adapted from the traditional book library project as part of The Odin Project's Full-Stack Javascript course.

Viewable at https://xiejon.github.io/music-library/

## Updates on 6/10/2022
1. OOP
    - After learning about OOP and SOLID principles later on in the curriculum, I revisited this project and refactored my code using classes & factory functions. 
2. Local Storage
    - I used localStorage to retain entries after tab closures or page reloads, using JSON.stringify() and JSON.parse() to store and retrieve the library array.
3. Form Validation
    - I added JS form validation to require a title name using the Constraint Validation API. 

## Objectives 

1. Allow user to click button to add music repertoire. The user will then fill out a form with the title of the piece, composer, key, etc.
2. Display titles in cards on the page. 
3. Display whether title has been played or not. Allow user to click to change the played status. 

## Motivation

- I just learned about object constructors. Here, I experimented using an object constructor to turn user input into an object, before pushing it onto an array. 
- As an opera singer, I love the idea of a visual online library containing all of my music in an easy to read format. 

## Challenges 
1. User Experience
    - It was important to me that the app would be pleasant to use. Simple hover effects and a well-designed UI greatly improve the experience of using a website or app. There were some things I didn't immediately know how to implement, i.e. jumping placeholders in my form inputs. 

## Areas for Improvement 

- Option to search for repertoire by title or composer
- Function to sort library alphabetically 
