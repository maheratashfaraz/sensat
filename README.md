## Intro
Sensat frontend 

## Getting started

1. Use the version of Node that is specified in the `.nvmrc` file at the root of this project.
2. Make sure you have [yarn v1.x](https://classic.yarnpkg.com) installed for dependency management.
3. Run `yarn` in the project root to install all dependencies.
4. Run `yarn start`.
5. The client application should load in your browser automatically, but if not then check your terminal for the URL and load it manually.


## Project specification

### Libraries 
- Material UI: Well deocumented and robust tool that helps to speed up the development phase.
- Redux: State mamagement tool that helps accesing specific state of a component in different part of the app. In this project I needed to know the state of the active page as well as the state of dropdowns I used like SortBy, SensorName and SensorType Dropdown. Also list of sensors.
- React-leaflet: to visulise the map and data on the map.

### Improvement
- Styling could be refactored to be more cleaner.
- Using two dropdowns for filtering items on the map is redundant as both of them do the same job and user needs to select the relavant item on both dropdowns in order to see the data on the map. 
- The logic for the state of active page (current page) could be improved.  
- The project could have been dockerised in order to make it easier to run. 
- I did not get a chance to write any tests.
- Currently pages are not that resposive on a smaller devices. 