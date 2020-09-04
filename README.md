# Webpack Config & Testing

## References:

Colt Steele React course at end webpack videos Udemy

Web article:
https://dev.to/pixelgoo/how-to-configure-webpack-from-scratch-for-a-basic-website-46a5

Using multiple html files Academind video:
https://www.youtube.com/watch?v=y_RFOaSDL8I

## Notes

- when webpack-dev-server is running, no dist files are created.
- was getting EPERM can't remove error when trying to delete old build files with clean-webpack plugin. Ran npm clean cache --force to fix.
- add multiple html files import them to entry point index.js. Stlil have to manually refresh other pages besides main template.html.
