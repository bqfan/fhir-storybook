module.exports = (api) => {
  api.cache(true);

  return {
    presets: [["babel-preset-expo", {
      jsxImportSource: "nativewind"
    }], "nativewind/babel"],
    plugins: [
      ["babel-plugin-react-docgen-typescript", { exclude: "node_modules" }],
      ["module-resolver", {
        root: ["./"],

        alias: {
          "@": "./",
          "tailwind.config": "./tailwind.config.js"
        }
      }]
    ],
  };
};
