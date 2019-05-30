# Project 2 Overview

## Project Schedule


|  Day | Deliverable | Status
|---|---| ---|
|Day 1| Project Description | Complete
|Day 2| Wireframes / Priority Matrix / Functional Components | Complete
|Day 3| Core Application Structure (HTML, CSS, etc.) | Incomplete
|Day 4| Pseudocode / actual code | Complete
|Day 5| Initial Clickable Model  | Complete
|Day 6| MVP | Complete
|Day 7| Present | Incomplete

## Project Description

I will create a React app that allows users to search for a song or artist and have either the song or the artists' songs render (by getting the data from the API). Then they should be able to click on an icon that will play a preview of the song.

I originally wanted to use SoundCloud's API but they aren't allowing any more "apps to be registered" so I will use last.fm's API : 
https://www.last.fm/api 

Screenshot from API data sample: 
https://res.cloudinary.com/dfzjh0dui/image/upload/v1558702846/Screen_Shot_2019-05-23_at_9.34.47_PM.png 
## Priority Matrix

https://res.cloudinary.com/dfzjh0dui/image/upload/v1558662781/IMG_3602.jpg 

### MVP/PostMVP - 5min

#### MVP 

- Find and use external api 
- Render artist's top songs, or actual song searched based on user input
- Click event on artist name that shows artist bio summary

#### PostMVP 

- Ability to play preview of song chosen by clicking on a "play" icon
- Add songs/artists to favorites section

## React Architectural Design

https://res.cloudinary.com/dfzjh0dui/image/upload/v1558662919/IMG_3603.jpg 

## Functional Components

| Component | Description | 
| --- | :---: |  
| Landing Page | This will render the "landing page" with a button to enter| 
| Input | Input form and default top tracks, mapping over api results and storing in Search Results component| 
| Search Results | 30 results from user's search | 
| One Result | Summary of artist bio |
| Itunes | Media player |


| Component | Priority | Estimated Time | Actual Time |
| --- | :---: |  :---: | :---: |
| Adding Form | H | 3hrs| 2hrs |
| Working with API | H | 3.5hrs| 3.5hrs |
| Rendering API on App | H | 3hrs | 3hrs |
| Differentiating between song and artist search | H | 2hrs | 2.5hrs |
| Click event that will preview song in media player | M | 3.5 hrs | 4hrs | 
| CSS Styling | M | 4hrs | 5hrs |
| Total | H | 19hrs| 20hrs | 

## Additional Libraries
 Materialize.js for icons
 iTunes API for player
