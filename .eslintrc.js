module.exports = {
  extends: ["plugin:astro/recommended", "prettier"],
  overrides: [
    {
      files: ["*.astro"],
      parserOptions: {
        extraFileExtensions: [".astro"],
      },
      rules: {
        "no-undef": "error",
      },
    },
    // ...
  ],
};
