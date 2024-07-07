// Code your solution in this file!

const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

function returnFirstTwoDrivers(drivers) {
    return drivers.slice(0, 2);
}

function returnLastTwoDrivers(drivers) {
    return drivers.slice(-2);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function selectingDrivers(drivers) {
    return [returnFirstTwoDrivers, returnLastTwoDrivers];
}

function createFareMultiplier(multiplier) {
    return function (fare) {
        return fare * multiplier;
    }
}

const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);
const fareHaverser = createFareMultiplier(0.5);
const fareQuintupler = createFareMultiplier(5);

function fareDoubler(fare) {
    return fare * 2;
}
const fareTripler = createFareMultiplier(3);

function fareTripler(fare) {
    return fare * 3;
}

function fareHaverser(fare) {
    return fare * 0.5;
}

function fareQuintupler(fare) {
    return fare * 5;
}
