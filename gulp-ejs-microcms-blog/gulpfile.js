const gulp = require("gulp");
const ejs = require("gulp-ejs");
const sass = require("gulp-sass");
const rename = require("gulp-rename");
const request = require("request-promise");
const browser = require("browser-sync");

// サーバー起動
gulp.task("server", () => {
  return browser({
    server: { baseDir: "dist" },
    port: 5000
  });
});

// SCSSコンパイル
gulp.task("style", () => {
  console.log("style");
  return gulp
    .src("src/styles/**/*.scss")
    .pipe(sass())
    .pipe(gulp.dest("dist/styles"))
    .pipe(browser.stream());
});

// EJSコンパイル
gulp.task("ejs", () => {
  console.log("ejs");
  return request({
    url: "https://example.microcms.io/api/v1/gulp-blog",
    method: "GET",
    headers: {
      "X-API-KEY": "dc59f358-4622-471f-8d1e-6c7a6f969558"
    }
  }).then(res => {
    const data = JSON.parse(res);

    // 記事ページ
    for (const item of data.contents) {
      gulp
        .src(["src/ejs/**/__*.ejs"])
        .pipe(ejs(item))
        .pipe(rename({ basename: `${item.id}/index`, extname: ".html" }))
        .pipe(gulp.dest("dist"));
    }

    // その他ページ
    gulp
      .src(["src/ejs/**/*.ejs", "!src/ejs/**/_*.ejs"])
      .pipe(ejs(data))
      .pipe(rename({ extname: ".html" }))
      .pipe(gulp.dest("dist"));

    browser.reload();
  });
});

// リロード
gulp.task("reload", done => {
  browser.reload();
});

gulp.task("watch", () => {
  gulp.watch("src/styles/**/*.scss", gulp.task("style"));
  gulp.watch("src/ejs/**/*.ejs", gulp.task("ejs"));
});
gulp.task("default", gulp.parallel("server", "watch"));
gulp.task("build", gulp.parallel("style", "ejs"));
