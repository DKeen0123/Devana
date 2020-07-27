module.exports = {
  presets: ["next/babel"],
  plugins: [
    [
      "styled-components",
      {
        ssr: true,
        displayName: true
      }
    ],
    [
      "module-resolver",
      {
        root: ["./"],
        alias: {
          components: "./components",
          helpers: "./helpers",
          hooks: "./hooks",
          layouts: "./layouts",
        }
      }
    ]
  ]
};