// module.exports = {
//   images: {
//     domains: ["localhost", "lh5.googleusercontent.com", "rankingmyjni.pl"],
//     deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
//   },
// };

const withTM = require("next-transpile-modules")([
  "react-leaflet",
  "@react-leaflet/core",
]);

module.exports = withTM({
  // future: {
  //   webpack5: true,
  // },
  images: {
    domains: ["localhost", "lh5.googleusercontent.com", "rankingmyjni.pl"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
  },
});
