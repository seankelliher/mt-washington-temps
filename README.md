[![MIT License on GitHub](https://img.shields.io/github/license/seankelliher/mt-washington-temperature?style=flat-square)](/LICENSE.md)
## Mt. Washington Temperature

Chart that displays average monthly temperatures at the Mt. Washington Observatory, located on the summit of Mt. Washington, 2005 - 2022. Built with Vue.js and Chart.js.

## Project Status

UNDER RENOVATION

## Project Screen Shots

Screen shots to come.

## Installation and Setup Instructions

Clone down this repository. You will need `node` and `npm` installed globally on your machine.

Installation:

`npm install`  

To Run Vue:

`npm run dev`    

To Visit App:

Visit the localhost port displayed in the terminal after running `npm run dev`.

## Reflection

For geography, Mt. Washington is the highest peak in the Northeastern United States. It is 6,288 ft (1916.6 m) above sea level and has an active weather station, the Mt. Washington Observatory, at the summit.

I wanted to build a component that takes available temperature data from the Observatory, and compiles it into bar charts that display average temperatures by year and seasons (Winter, Spring, Summer, Fall) across a 18-year period (2005 - 2022).

The Observatory does not have an API to draw data from. Instead, I downloaded the available data in a spreadsheet and build objects to store it. I then wrote "Vanilla JavaScript" that draws data from the objects, calculates the average temperatures, and forms the bars of the charts from it.

One of the challenges, was building bar charts that maintained a consistent scale, but still remained readable. Temperatures atop Mt. Washington vary wildly throughout the year. I needed to calculate available screen space and temperature difference, and determine how much width to assign to each degree so Winter bars were not unreadable stubs and Summer bars did not go off the page.

## Acknowledgments

* Temperature data from the [Mt. Washington Observatory](https://www.mountwashington.org/experience-the-weather/mount-washington-weather-archives/monthly-f6.aspx).
* Readme guidance from [Brenna Martenson](https://gist.github.com/martensonbj/6bf2ec2ed55f5be723415ea73c4557c4).
* Linting guidance from [ESLint](https://eslint.org) and [Stylelint](https://stylelint.io).
* Design guidance from Google's [Material Design](https://material.io/design).
* Shields from [Shields](https://shields.io).