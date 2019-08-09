module.exports = {
  css: {
    loaderOptions: {
      sass: {
        data: `
          @import "@/scss/functions.scss";
          @import "@/scss/variables.scss";
          @import "@/scss/mixins.scss";
        `,
      },
    },
  },
};
