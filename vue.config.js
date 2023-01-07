module.exports = {
  css: {
    loaderOptions: {
      scss: {
        additionalData: `
        @import "@/assets/scss";`,
      },
    },
  },
  configureWebpack: {
    plugins: [
      require("unplugin-vue-components/webpack")({
        dirs: [
          "src/components/atoms",
          "src/components/bosons",
          "src/components/molecules",
          "src/components/organisms",
        ],
      }),
    ],
    module: {
      rules: [
        {
          test: /\.mjs$/,
          include: /node_modules/,
          type: "javascript/auto",
        },
      ],
    },
  },
};
