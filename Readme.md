[![MIT License on GitHub](https://img.shields.io/github/license/seankelliher/mt-washington-temperature?style=flat-square)](/LICENSE.txt)
## Mt. Washington Temperature

Annual and seasonal temperatures atop Mt. Washington, 2005 - 2019.

## Project Screen Shot(s)

![screen shot of project](/screenshots/mt-washington-temperature-screenshot1.jpg)

![screen shot of project](/screenshots/mt-washington-temperature-screenshot2.jpg)

![screen shot of project](/screenshots/mt-washington-temperature-screenshot3.jpg)

## Installation and Setup Instructions

This is a static component. All you need is a web browser. However, component uses ES6 modules. Developing locally may require disabling your browser's local file restrictions.

## Reflection

For geography, Mt. Washington is the highest peak in the Northeastern United States. It is 6,288 ft (1916.6 m) above sea level and has an active weather station, the Mt. Washington Observatory, at the summit.

I wanted to build a component that takes available temperature data from the Observatory, and compiles it into bar charts that display average temperatures by year and seasons (Winter, Spring, Summer, Fall) across a 15-year period (2005 - 2019).

The Observatory does not have an API to draw data from. Instead, I downloaded the available data in a spreadsheet and build objects to store it. I then wrote "Vanilla JavaScript" that draws data from the objects, calculates the average temperatures, and forms the bars of the charts from it.

One of the challenges, was building bar charts that maintained a consistent scale, but still remained readable. Temperatures atop Mt. Washington vary wildly throughout the year. I needed to calculate available screen space and temperature difference, and determine how much width to assign to each degree so Winter bars were not unreadable stubs and Summer bars did not go off the page.

## Acknowledgments

* Temperature data from the [Mt. Washington Observatory](https://www.mountwashington.org).
* Readme guidance from [Brenna Martenson](https://gist.github.com/martensonbj/6bf2ec2ed55f5be723415ea73c4557c4).
* Design guidance from Google's [Material Design](https://material.io/design) and [Adobe Color](https://color.adobe.com/trends).
* Fonts from [Google Fonts](https://fonts.google.com).
* Shields from [Shields](https://shields.io).