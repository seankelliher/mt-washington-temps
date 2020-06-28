function Temps(jan, feb, mar, apr, may, jun, jul, aug, sep, oct, nov, dec) {
    this.jan = jan;
    this.feb = feb;
    this.mar = mar;
    this.apr = apr;
    this.may = may;
    this.jun = jun;
    this.jul = jul;
    this.aug = aug;
    this.sep = sep;
    this.oct = oct;
    this.nov = nov;
    this.dec = dec;
}

Temps.prototype.getYearAvg = function () {
    const year = [
        this.dec,
        this.jan,
        this.feb,
        this.mar,
        this.apr,
        this.may,
        this.jun,
        this.jul,
        this.aug,
        this.sep,
        this.oct,
        this.nov
    ];

    const sum = year.reduce((total, cv) => total + cv, 0);
    const sumDiv = sum / 12;
    return sumDiv.toFixed(1);
};

Temps.prototype.getWinterAvg = function () {
    const winter = [this.dec, this.jan, this.feb];
    const sum = winter.reduce((total, cv) => total + cv, 0);
    const sumDiv = sum / 3;
    return sumDiv.toFixed(1);
};

Temps.prototype.getSpringAvg = function () {
    const spring = [this.mar, this.apr, this.may];
    const sum = spring.reduce((total, cv) => total + cv, 0);
    const sumDiv = sum / 3;
    return sumDiv.toFixed(1);
};

Temps.prototype.getSummerAvg = function () {
    const summer = [this.jun, this.jul, this.aug];
    const sum = summer.reduce((total, cv) => total + cv, 0);
    const sumDiv = sum / 3;
    return sumDiv.toFixed(1);
};

Temps.prototype.getFallAvg = function () {
    const fall = [this.sep, this.oct, this.nov];
    const sum = fall.reduce((total, cv) => total + cv, 0);
    const sumDiv = sum / 3;
    return sumDiv.toFixed(1);
};

const temps2005 = new Groupings(
    4.5,
    10.7,
    9.1,
    25.2,
    31.4,
    51.5,
    52.2,
    50.6,
    45.4,
    35.3,
    21.6,
    10.0
);

const temps2006 = new Groupings(
    16.0,
    2.1,
    11.4,
    24.7,
    36.8,
    46.8,
    52.9,
    45.8,
    40.3,
    29.3,
    29.8,
    15.0
);

const temps2007 = new Groupings(
    6.7,
    -3.1,
    12.9,
    22.5,
    36.1,
    45.3,
    48.2,
    48.8,
    44.5,
    36.9,
    17.1,
    8.7
);

const temps2008 = new Groupings(
    9.2,
    7.2,
    10.7,
    29.3,
    32.4,
    47.6,
    51.0,
    47.1,
    44.0,
    29.8,
    18.8,
    10.0
);

const temps2009 = new Groupings(
    0.0,
    8.2,
    15.3,
    25.3,
    35.6,
    43.5,
    46.1,
    49.3,
    41.9,
    27.5,
    27.7,
    9.4
);

const temps2010 = new Groupings(
    8.6,
    8.2,
    20.4,
    28.3,
    38.0,
    44.5,
    51.7,
    48.4,
    42.6,
    27.7,
    22.5,
    10.0
);

const temps2011 = new Groupings(
    3.5,
    5.2,
    11.0,
    24.0,
    40.6,
    44.9,
    50.9,
    48.8,
    45.5,
    31.9,
    27.1,
    16.3
);

const temps2012 = new Groupings(
    8.6,
    8.1,
    22.9,
    23.5,
    41.5,
    45.3,
    50.4,
    51.3,
    41.9,
    34.6,
    20.9,
    15.6
);

const temps2013 = new Groupings(
    6.4,
    5.8,
    12.5,
    23.3,
    38.3,
    44.7,
    53.1,
    46.7,
    41.5,
    33.1,
    16.3,
    8.8
);

const temps2014 = new Groupings(
    2.5,
    2.8,
    6.3,
    23.9,
    36.0,
    46.3,
    49.2,
    47.1,
    42.5,
    34.0,
    16.3,
    16.7
);

const temps2015 = new Groupings(
    1.2,
    -5.1,
    6.1,
    22.2,
    40.7,
    43.7,
    49.2,
    49.7,
    49.3,
    28.7,
    24.6,
    24.4
);

const temps2016 = new Groupings(
    7.9,
    8.6,
    17.5,
    19.4,
    37.6,
    44.4,
    50.4,
    51.0,
    44.7,
    34.3,
    25.2,
    8.4
);

const temps2017 = new Groupings(
    10.3,
    10.7,
    8.0,
    29.1,
    34.8,
    44.0,
    49.2,
    46.0,
    46.9,
    39.5,
    19.7,
    4.4
);

const temps2018 = new Groupings(
    7.4,
    12.9,
    11.8,
    19.0,
    40.5,
    44.6,
    53.1,
    52.0,
    45.8,
    29.5,
    15.5,
    11.3
);

const temps2019 = new Groupings(
    3.4,
    4.9,
    9.6,
    24.2,
    33.1,
    43.7,
    52.4,
    47.8,
    41.6,
    34.9,
    16.2,
    12.6
);

export {
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
    temps2019
};