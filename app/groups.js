//Invoke constructor functions in temps.js.
//Store results in five larger "group" objects:
//years, winter, spring, summer, fall.

import {
    temps2005,
    temps2006,
    temps2007,
    temps2008,
    temps2009,
    temps2010,
    temps2011,
    temps2012,
    temps2013,
    temps2014,
    temps2015,
    temps2016,
    temps2017,
    temps2018,
    temps2019,
    temps2020
} from "./temps.js";

const years = {
    y2005: temps2005.getYearAvg(),
    y2006: temps2006.getYearAvg(),
    y2007: temps2007.getYearAvg(),
    y2008: temps2008.getYearAvg(),
    y2009: temps2009.getYearAvg(),
    y2010: temps2010.getYearAvg(),
    y2011: temps2011.getYearAvg(),
    y2012: temps2012.getYearAvg(),
    y2013: temps2013.getYearAvg(),
    y2014: temps2014.getYearAvg(),
    y2015: temps2015.getYearAvg(),
    y2016: temps2016.getYearAvg(),
    y2017: temps2017.getYearAvg(),
    y2018: temps2018.getYearAvg(),
    y2019: temps2019.getYearAvg(),
    y2020: temps2020.getYearAvg()
};

const winters = {
    y2005: temps2005.getWinterAvg(),
    y2006: temps2006.getWinterAvg(),
    y2007: temps2007.getWinterAvg(),
    y2008: temps2008.getWinterAvg(),
    y2009: temps2009.getWinterAvg(),
    y2010: temps2010.getWinterAvg(),
    y2011: temps2011.getWinterAvg(),
    y2012: temps2012.getWinterAvg(),
    y2013: temps2013.getWinterAvg(),
    y2014: temps2014.getWinterAvg(),
    y2015: temps2015.getWinterAvg(),
    y2016: temps2016.getWinterAvg(),
    y2017: temps2017.getWinterAvg(),
    y2018: temps2018.getWinterAvg(),
    y2019: temps2019.getWinterAvg(),
    y2020: temps2020.getWinterAvg()
};

const springs = {
    y2005: temps2005.getSpringAvg(),
    y2006: temps2006.getSpringAvg(),
    y2007: temps2007.getSpringAvg(),
    y2008: temps2008.getSpringAvg(),
    y2009: temps2009.getSpringAvg(),
    y2010: temps2010.getSpringAvg(),
    y2011: temps2011.getSpringAvg(),
    y2012: temps2012.getSpringAvg(),
    y2013: temps2013.getSpringAvg(),
    y2014: temps2014.getSpringAvg(),
    y2015: temps2015.getSpringAvg(),
    y2016: temps2016.getSpringAvg(),
    y2017: temps2017.getSpringAvg(),
    y2018: temps2018.getSpringAvg(),
    y2019: temps2019.getSpringAvg(),
    y2020: temps2020.getSpringAvg()
};

const summers = {
    y2005: temps2005.getSummerAvg(),
    y2006: temps2006.getSummerAvg(),
    y2007: temps2007.getSummerAvg(),
    y2008: temps2008.getSummerAvg(),
    y2009: temps2009.getSummerAvg(),
    y2010: temps2010.getSummerAvg(),
    y2011: temps2011.getSummerAvg(),
    y2012: temps2012.getSummerAvg(),
    y2013: temps2013.getSummerAvg(),
    y2014: temps2014.getSummerAvg(),
    y2015: temps2015.getSummerAvg(),
    y2016: temps2016.getSummerAvg(),
    y2017: temps2017.getSummerAvg(),
    y2018: temps2018.getSummerAvg(),
    y2019: temps2019.getSummerAvg(),
    y2020: temps2020.getSummerAvg()
};

const falls = {
    y2005: temps2005.getFallAvg(),
    y2006: temps2006.getFallAvg(),
    y2007: temps2007.getFallAvg(),
    y2008: temps2008.getFallAvg(),
    y2009: temps2009.getFallAvg(),
    y2010: temps2010.getFallAvg(),
    y2011: temps2011.getFallAvg(),
    y2012: temps2012.getFallAvg(),
    y2013: temps2013.getFallAvg(),
    y2014: temps2014.getFallAvg(),
    y2015: temps2015.getFallAvg(),
    y2016: temps2016.getFallAvg(),
    y2017: temps2017.getFallAvg(),
    y2018: temps2018.getFallAvg(),
    y2019: temps2019.getFallAvg(),
    y2020: temps2020.getFallAvg()
};

export {years, winters, springs, summers, falls};