Run `gulp`, it should return 1 error. When you update `gulp-stylelint` to v4.0.0 it returns 2 errors although `vendor` folder should be ignored.

Compare with `stylelint "styles/**/*" --config .stylelintrc.yml`
