# Fitlit

Project Manager: Nik Seif

## Table of Contents
  - [Abstract](#abstract)
  - [Install + Setup Instructions](#install)
  - [Technologies](#technologies)
  - [Illustrations](#illustrations)
  - [Contributors](#contributors)
  - [Wins](#wins)
  - [Challenges](#challenges)
  - [Project Specs](#project-specs)

## Abstract
This was a group project to build an activity tracker. Our goal was to present a useful dashboard for a user to view and see their latest activity data, goals, and milestones as well as add new data to each category.

## Install
  1. clone down the repository
  2. ```cd``` into the repository
  3. from the command line:
  ```bash
    npm install
    npm install -g sass
    npm install sass-loader sass webpack --save-dev
    npm install chart.js
    npm start
  ```
  4. clone this [local server](https://github.com/turingschool-examples/fitlit-api)
  5. ```cd``` into the API repository
  6. from the command line:
  ```bash
    npm install
    npm start
  ```

## Technologies
  - Javascript
  - eslint
  - html
  - css
  - sass
  - node
  - Atom
  - WebPack
  - API
  - Chart.js
  - Figma
  - Lighthouse

## Illustrations

  On page load a random user's information will be displayed on the dashboard. Each color block contains a different category for specific set of tracked data. In the top right corner of the dashboard, the date for the latest user data is displayed.

  <img width="1435" alt="new_dashboard_c_week_view" src="https://user-images.githubusercontent.com/83175748/140831188-c1e65493-d252-445d-9153-5dcf13204d0d.png">

  <img width="1142" alt="navbar_info_date" src="https://user-images.githubusercontent.com/83175748/140830839-0895ed95-973f-4eab-bea6-17d26b4905d3.png">

  The left-hand sidebar contains more detailed information about the current user on display. There is space above the user's information for a profile picture to be added.

  <img width="292" alt="new_sidebar_profile" src="https://user-images.githubusercontent.com/83175748/140831109-c0620726-606a-4b3b-949b-fceab808d725.png">

  When you click the button labeled `Today` a drop down menu will appear, allowing you to choose different date ranges to view a user's data for `Today`, `This Week` or for `All-Time`.

  <img width="591" alt="hydration_sleep_today_charts" src="https://user-images.githubusercontent.com/83175748/140830969-cb75b770-e300-4608-9880-33c2f2f17c7b.png">

  <img width="591" alt="hydration_sleep_this_week_charts" src="https://user-images.githubusercontent.com/83175748/140830903-a58b9f7e-b23c-4562-ae3c-bc904934a6bb.png">

  <img width="547" alt="activity_today_stats" src="https://user-images.githubusercontent.com/83175748/140831055-d6603a82-1f7d-4f43-851c-9b04492d780e.png">

  <img width="546" alt="activity_this_week_charts" src="https://user-images.githubusercontent.com/83175748/140830774-71b1802b-2f0a-455d-8dbe-ece9c4dec73a.png">

  In addition to being able to see existing data for the three separate activities, sleep, hydration, and activity, users can now add new data for each category. By selecting the `Add Data` button a user can fill out the form and hit the `submit` button to add new information to a chosen category.

  A user will not be able to submit a form that is not completed. The `submit` button will remained grayed out until each field within the form has been filled out. Invalid characters cannot be added to any fields so only valid data is added to the user's saved data.

  <img width="250" alt="filled_out_form" src="https://user-images.githubusercontent.com/83175748/140832039-b77e977e-3636-4ca0-9d58-6145a33cdbe9.png">

## Contributors
  - [August Reid](https://github.com/augustreid)
  - [Eric Wang](https://github.com/ewang0)
  - [Ivonne Hernandez](https://github.com/ivonne-hernandez)
  - [Jessica Organ](https://github.com/Jorgan612)

## Wins
  - Successfully add new data to the activity data sets using POST requests.
  - Continued to maintained consistency with workflow, pull requests, and communication throughout the project.
  - Refactored project files to organize scripts and DOM updates into separate files.
  - Successfully refactored the project's css file to utilize SASS.
  - Learned new techniques such as utilizing POST requests, additional input field types, SASS.
  - Ensured the project exceeded accessibility standards by utilizing Aria to maintain a Lighthouse audit above 90%.

## Challenges
  - Increased complexity over all throughout project spec.
  - Delegation of work division between multiple team members.
  - Technical challenges with POST requests.
  - Challenges with posting correct date format when adding new data to the existing dataset.
  - Challenges refactoring project to organize code in scripts.js for DOM functionality and domUpdates.js for DOM manipulation.  

## Project Specs
  - [Part One!](https://frontend.turing.edu/projects/Fitlit-part-one.html)
  - [Part Two!](https://frontend.turing.edu/projects/Fitlit-part-two.html)
