# SportSee | OpenClassroom Projet 12

Analytics dashboard developped with React & Recharts

## Prerequisites

- Node.js
- React v17.0.2
- Recharts v2.1.8
- Prop-types v15.8.1
- VSCode

## Running the backend API
1. Go to https://github.com/OpenClassrooms-Student-Center/P9-front-end-dashboard 
3. Clone the repository on your computer
4. Run the API with `yarn start`
The API should run on port 3000 by default

The backend API has two possible users you can check in your browser :
- localhost:3000/user/12
- localhost:3000/user/18

## Lauching the project
1. Clone this repository on your computer
2. Run the project with `npm start` in a terminal while running the backend API
3. Open the project on a port other than 3000

## Using the API or mocked data
By default, user 18 is fetched. You can switch between each URL by clicking on "Changer d'utilisateur" on the interface, while the app is running.

\To use mocked data, disable each fetchUser function from line 56 to 66 in *src/components/Dashboard/index.jsx*, and enable the mocked data code blocks (lines 46 to 51) and its import (line 8) in the same file.  