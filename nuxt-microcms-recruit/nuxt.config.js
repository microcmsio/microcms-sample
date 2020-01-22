require("dotenv").config();
const { API_KEY } = process.env;
const axios = require("axios");

export default {
  mode: "universal",
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || "",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || ""
      }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#fff" },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [],
  /*
   ** Nuxt.js modules
   */
  modules: ["@nuxtjs/markdownit"],
  markdownit: {
    html: true,
    injected: true,
    preset: "default"
  },
  env: {
    API_KEY
  },
  generate: {
    routes() {
      const careers = axios
        .get("https://your.microcms.io/api/v1/careers", {
          headers: { "X-API-KEY": process.env.API_KEY }
        })
        .then(res => {
          return res.data.contents.map(career => {
            return "/careers/" + career.id;
          });
        });
      const posts = axios
        .get("https://your.microcms.io/api/v1/posts", {
          headers: { "X-API-KEY": process.env.API_KEY }
        })
        .then(res => {
          return res.data.contents.map(post => {
            return "/careers/posts/" + post.id;
          });
        });
      return Promise.all([careers, posts]).then(values => {
        return values.join().split(",");
      });
    }
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
};
