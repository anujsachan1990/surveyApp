# Survey App


## Technology Stack
- React JS 
- Redux 
- Redux-Saga
- React Router
- Style Component (for Component Style Reusability)
- Axios with custom API Interceptor
- YARN / NPM for package Dependencies
- ES6 


## Setup

- git clone https://github.com/anujsachan1990/surveyApp.git
- cd surveyApp
- yarn install or npm install
- yarn run dev or npm run dev
- open url [http://localhost:8080/](http://localhost:8080/)

## Other Commands

- npm run build (for creating production build)
- npm run format (for indenting the whilecode base)
- npm run lint:css (run css linting)
 

## Features & other Highlights

- Atomatic Scalable Architecture
- Continuous Integration with Netlify 
- API Interceptor for API Calls
- Redux Saga for handling side effects
- Error Boundries for handling React errors
- React latest features: (Hooks, Memo )
- Localization 
- Eslint (Airbnb rules)


## Live Preview Available
[https://surveyapp.netlify.com/](https://surveyapp.netlify.com/)



## Scalable Frontend Architecture

This Architecture with the methodology Atomic Design using a few cool things, like Styled-compomemt,ES6 and ReactJS Techstack.

[**Read full article**](https://medium.com/@danilowoznica/atomic-design-with-react-e7aea8152957)
```
├── ASSIGNMENT.md
├── LICENSE
├── README.md
├── docs
│   └── DevelopmentTools.md
├── node_modules
├── package-lock.json
├── package.json
├── src
│   ├── app
│   │   ├── App.js
│   │   ├── ErrorBoundary.js
│   │   ├── components
│   │   │   ├── atoms
│   │   │   │   ├── Loader
│   │   │   │   │   ├── Loader.js
│   │   │   │   │   ├── Loader.style.js
│   │   │   │   │   └── index.js
│   │   │   │   ├── Progress
│   │   │   │   │   ├── Progress.js
│   │   │   │   │   ├── Progress.style.js
│   │   │   │   │   └── index.js
│   │   │   │   └── Rating
│   │   │   │       ├── Rating.js
│   │   │   │       ├── Rating.style.js
│   │   │   │       └── index.js
│   │   │   ├── molecules
│   │   │   │   └── Card
│   │   │   │       ├── Card.js
│   │   │   │       ├── Card.style.js
│   │   │   │       └── index.js
│   │   │   ├── organisms
│   │   │   │   └── SurveyDetails
│   │   │   │       ├── SurveyDetails.actions.js
│   │   │   │       ├── SurveyDetails.contant.js
│   │   │   │       ├── SurveyDetails.js
│   │   │   │       ├── SurveyDetails.reducer.js
│   │   │   │       ├── SurveyDetails.saga.js
│   │   │   │       ├── SurveyDetails.style.js
│   │   │   │       └── index.js
│   │   │   └── templates
│   │   │       └── SurveyLandingPage
│   │   │           ├── SurveryLanding.reducer.js
│   │   │           ├── SurveryLanding.saga.js
│   │   │           ├── SurveryLanding.style.js
│   │   │           ├── SurveyLanding.actions.js
│   │   │           ├── SurveyLanding.js
│   │   │           ├── SurvryLanding.constant.js
│   │   │           └── index.js
│   │   └── store.js
│   ├── assets
│   │   └── images
│   ├── global
│   │   ├── actions
│   │   │   └── index.js
│   │   ├── apiInterceptor.js
│   │   ├── constant
│   │   │   └── index.js
│   │   ├── reducers
│   │   │   └── rootReducer.js
│   │   ├── routes.js
│   │   ├── sagas
│   │   │   └── rootSaga.js
│   │   └── services.js
│   ├── images
│   │   └── index.js
│   ├── index.html
│   ├── index.js
│   ├── locale
│   │   └── index.js
│   ├── styles
│   │   ├── globalStyle.style.js
│   │   ├── index.js
│   │   └── styleConstants.js
│   └── utils
│       └── index.js
├── webpack
│   ├── paths.js
│   ├── webpack.common.js
│   ├── webpack.dev.js
│   └── webpack.prod.js
└── webpack.config.js
```


