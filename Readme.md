# Minimal React App Boilerplate

## Features
- jsx support
- webpack dev server
- hotloading
- routing with react router
- babel support
- prop type checking
- eslint (using airbnb's config)
- Easy to use scripts for production builds

## Using the boilerplate
1. Clone the repo
2. Run `npm install` to install all the dependencies you need
3. From the root, run `npm start`. This runs the dev server


## Commands
- `npm start`: starts the dev server
- `npm run lintproject`: lints the entire repo
- `npm run lint -- ${filepath}`: lints the file you specify (npm run lint is basically a macro for eslint so you can pass in whatever args you want)
- `npm run build`: creates a production build of your web app. All files needed for deployment are in the dist folder


## This repo is an amalgamation of a few super useful articles:
- [React Router](https://medium.com/@pshrmn/a-simple-react-router-v4-tutorial-7f23ff27adf)
  - [Single Page Sites With React Router](https://www.kirupa.com/react/creating_single_page_app_react_using_react_router.htm)
- [Webpack and babel](https://www.robinwieruch.de/minimal-react-webpack-babel-setup/)

## Common Errors
I noticed a few errors that I got when running the project on some computers. Here is how I fixed them:

```
No matching version found for babylon@7.0.0-beta.0-ranges

// This is an issue caused by outdated versions of npm. To fix it, run `npm install -g npm`
```
