import ghPages from 'gulp-gh-pages';

export const deployGitPages = () => {
  return app.gulp.src('./dist/**/*').pipe(ghPages());
};
