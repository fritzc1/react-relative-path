# Customize Create React App with "absolute" pathname imports in 2021!

## Why did I make this repository?
I made this because other tutorials I found didn't quite work because of CRA changes, and some methods were deprecated. As of 4/2021 this method works.

Original React imports | Now you can do 
------|------
`import item from '../../Api2/Item';` | `import item from '~/Api2/Item';`  

1. npm i --also=dev react-app-rewired   (<- seems like u should use --also=dev instead of --dev)
1. npm i --also=dev babel-plugin-root-import
1. npm i --also=dev customize-cra       (<- this is not in all tutorials, but should be done!)
1. Create file **config-overrides.js:** in project root to add the babel customization:
    ```
    const { override, addBabelPlugin } = require('customize-cra');
    module.exports = override(
    addBabelPlugin(
        ["babel-plugin-root-import",{
            "rootPathSuffix": "src",
            "rootPathPrefix": "~",
        }]
    )
    );
    ```
1. edit package.json scripts. replace "react-scripts" with "react-app-rewired" as shown:
    ```
    "scripts": {
        "start": "react-app-rewired start",
        "build": "react-app-rewired build",
        "test": "react-app-rewired test",
        "eject": "react-scripts eject"
    },
    ```
1. Now change all your imports to use "~/" to start from the "src" folder, which is sort of the root of where you can import from.
1. Create file **jsconfig.json:** in project root to restore VSCode path suggestion/autocompletion:
    ```
    {
        "compilerOptions": {
            "target": "ES6",
            "module": "commonjs",
            "allowSyntheticDefaultImports": true,
            "baseUrl": "./",
            "paths": {
            "~/*": ["./src/*"]
            }
        }
    }
    ```

This is based off of this tutorial:  
https://medium.com/@leonardobrunolima/react-tips-working-with-relative-path-using-create-react-app-fe55c5f97a21  
And updates made due to deprecation of function:  
https://github.com/entwicklerstube/babel-plugin-root-import/issues/69  
  
  
#
<md-divider></md-divider>
#

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
