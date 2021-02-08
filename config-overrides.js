// Initial article to fix the paths on import:
//   https://medium.com/@leonardobrunolima/react-tips-working-with-relative-path-using-create-react-app-fe55c5f97a21
// Update CRA 2.0: (injectBabelPlugin has been deprecated)
//   https://github.com/entwicklerstube/babel-plugin-root-import/issues/69
const { override, addBabelPlugin } = require('customize-cra');

module.exports = override(
  addBabelPlugin(
    ["babel-plugin-root-import",{
      "rootPathSuffix": "src",
      "rootPathPrefix": "~",
    }]
  )
);