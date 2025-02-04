[![MIT License on GitHub](https://img.shields.io/github/license/seankelliher/mt-washington-temps?style=flat-square)](/LICENSE.md)
## Mt. Washington Temperatures

Chart of average monthly temperatures at the Mt. Washington Observatory. Built with Vue.js and Chart.js. [View working component](https://sean-kelliher-mt-washington-temps.netlify.app).

## Project Status

Project meets general accessibility (WACG) and cross-browser requirements. More testing with a dedicated services (e.g., Sauce Labs) would be helpful if deploying to production.

## Project Screen Shot

* Intro image.
![screen shot of project](/screenshots/mt-washington-temps-screenshot1.png?s=600)

* Callouts and chart.
![screen shot of project](/screenshots/mt-washington-temps-screenshot2.png?s=600)

* On smaller screens, the chart becomes unreadable and is replaced by a table.
![screen shot of project](/screenshots/mt-washington-temps-screenshot3.png?s=600)

## Installation and Setup Instructions

Clone down this repository. You will need `node` and `npm` installed globally on your machine.

Installation:

`npm install`  

To Run Vue:

`npm run dev`    

To Visit App:

Visit the localhost port displayed in the terminal after running `npm run dev`.

## Reflection

The Mt. Washington Observatory does not have an API to draw data from. Instead, I downloaded the available data and stored it locally. I "centralized" most functionality in a "store" file. This keeps the logic more organized and easier to understand and modify. It also makes it easier to share data among components.

## Acknowledgments

* Temperature data from the [Mt. Washington Observatory](https://mountwashington.org/weather/mount-washington-weather-archives/monthly-f6/).
* Photo of summit [Department of Defense](https://commons.wikimedia.org/wiki/File:USMC-080103-M-0000M-01.jpg).
* Chart built with [Chart.js](https://www.chartjs.org/docs/latest/).
* Readme guidance from [Brenna Martenson](https://gist.github.com/martensonbj/6bf2ec2ed55f5be723415ea73c4557c4).
* Linting guidance from [ESLint](https://eslint.org) and [Stylelint](https://stylelint.io).
* Design guidance from [ColorBrewer](https://colorbrewer2.org/#type=sequential&scheme=BuGn&n=3).
* Design guidance from Google's [Material Design](https://material.io/design).
* Fonts from [Google Fonts](https://fonts.google.com).
* Fluid typography guidance from [Utopia](https://utopia.fyi).
* Shields from [Shields](https://shields.io).