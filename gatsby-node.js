exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === "build-html") {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /web-audio-beat-detector/,
            use: loaders.null(),
          }
        ]
      }
    })
  }
}