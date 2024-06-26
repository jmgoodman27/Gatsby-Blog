module.exports = () => ({
    plugins: [
      require('postcss-import')({
        plugins: [
            require('stylelint')
        ]
    }),
      require("tailwindcss"),
      require('autoprefixer'),
      require('postcss-preset-env')({
        autoprefixer: { grid: true },
        features: {
            'nesting-rules': true
        },
        browsers: [
            '> 1%',
            'last 2 versions',
            'Firefox ESR',
        ]
    })
    ]
  })