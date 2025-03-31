# Digital Asset Management (DAM) System Frontend Interface

## Overview

This repo contains a frontend interface for a DAM system. This interface enables internal teams to efficiently search, filter, bookmark and preview digital content.

## Installation & Setup

```
git clone <repository-url>
cd <project-folder>
npm install
npm start
```

This will start the application in development mode. Open `http://localhost:3000` in your bowser to view it.

## Running the tests

```
npm test
```

Run this command in the root folder to see the tests run.

## Features

1. Asset Browsing

- A card based layout was used to display the assets so that user could efficiently scan though the available items.
- The cards display uncropped previews of the asset as well as their related metadata.

2. Searching & Filtering & Sorting

- A search bar is located in the header of the page for easy location.
- The sidebar contains a filter for filtering by file type
- The sidebar also contains sorting options for sorting by file size, created date, and modified date

3. Favoriting

- Allows users to save assets for later reference by clicking on the heart icon on each image.
- A toggle on the sidebar allows users to filter for only favorited items.

4. Download Modal

- Allows users to view assets in isolation allong with their metadata.

## Technical Stack

- React & Create React App - used to generate a react project with included build setup
- Typescript - for typesaftey and maintainabiliy
- React Query - used to mock the API request and provide pagination
- MUI - provided UI components for fast prototyping
- DOMPurity - Added for input sanitization
- Jest - Unit testing

## Folder/Component Structure

- A feature based folder structure was used, balancing maintainability with easy of use.
- Stateful parent components were used to compose smaller, reusable UI components, for scalability and maintainability.

## State Management

- React Context was used for internal state, this avoids prop-drilling and improves maintainability
- React Query was used for API state management which also enables caching, pagination and dedupping.

## Performance Optimization

- Paginated API response allows for performant page loading.
- Prefetching before the next page loads provides seamless loading.
- Memoized calculations of applied filters and sorting as well as data formatting, to prevent unneeded rerenders.

## Secure Coding Practises

- User input in the search field was sanitised before use in the application.

## Testing

- Jest unit tests were added for the `useFilteredData` hook.
- Unfortunately only minimal testing was included due to time contraints.

## Folders & Files of Note
- `src/pages/App.tsx` - The main parent for my application, where the API data is fetched, filtered and passed down. 
- `dam/src/features/_common/ui/DropDown.tsx` - Reusable with generic types. Able to accept my specific `FileType` and `SortOption` types. 
- `src/features/filtering` - folder where my filtering context, hooks, types and tests are organised. 
- `src/features/hooks` - folder where my React Query code is organised

## Challenges

1. Balancing speed against code polish. It is hard to determine what is or is not over engineering when you are used to working on enterprise code. I tried to provide a reasonable amount polish while also completing the features I wanted to see. In the end perhaps I could have made it less feature rich to shave off some time. Favoriting and the download modal were not needed, although they did not take very much time as they reused logic already created. I could have spent less time on styling the components, however by force of habit I styled them as I went. If I was to do this project a second time, I would have focused less on styling. To be fully transparent, I did go over time by about a couple of hours. I really enjoy building UI and this was my first take home assigment, I might have been too enthusiastic about completing it.  

2. I lost way too much time to choosing a file structure. Ultimately I went with a structure I am familiar with rather than overthink where I could make changes to suit a smaller project of this size.

3. It was very strange to be writing filtering and searching on the frontend. I am use to writing filters on the backend to be used through API interaction. They are all bunched up in one hook for now, which is not ideal. I believe that in a real application they would not be written on the frontend so I decided to not over engineer this part and leave it as it is. This also caused an unforeseen problem when I added in pagination, the pagination causes the filtering and sorting to only apply to the currently loaded items.

## Improvements I would make next

- Moving filtering searching and sorting to the backend. For performance, and to work better with pagination/infinite scrolling.
- Add infinite scrolling to the gallery page loading. This would be very simple to do if I had time, we need an observer to tell the page when to autoload the next set of data.
- Testing. I only added testing for the `useFilteredData` hook. I chose that hook as it had the most complex calculations to make. More component and hook unit tests are needed, as well as in a perfect world there would be E2E tests.
- It would be great to have skeleton components populate the page when the cards are loading.
