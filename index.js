// Code your solution in this file!
function distanceFromHqInBlocks(pickLocation) {
     if (pickLocation > 42) {
        return (pickLocation - 42)
    } else if (pickLocation < 42) {
        return (42 - pickLocation)
    } else (pickLocation === 42);{
        return (0) }
}

function distanceFromHqInFeet(pickLocation) {
    return distanceFromHqInBlocks(pickLocation) * 264
}

//Calculates the number of feet a passenger travels given a starting block 
//and an ending block — it only calculates distance uptown/downtown. 
//It uses the knowledge that a block is 264 feet long.

function distanceTravelledInFeet(start, destination) {
    if (start > destination) {
        return (start - destination) * 264
    } else if (start < destination) {
        return (destination - start) * 264
    }
}

//The first four hundred feet are free.
//For a distance between 400 and 2000 feet, 
//the price is 2 cents per foot (not including 400, which are free!)
//Scuber charges a flat fare of $25 for a distance over 2000 feet and under 2500 feet.
//Scuber does not allow any rides over 2500 feet — the function returns

function claculatesFarePrice(start, destination){
    if (distanceTravelledInFeet <= 400) {
        return 'gives customers a free sample'
    } else if (distanceTravelledInFeet === 400 && distanceTravelledInFeet <= 2000){
        return (distanceTravelledInFeet - 400) * .02
    } else (distanceTravelledInFeet > 2000 && distanceTravelledInFeet < 2500){
        return ('charges 25 dollars for a distance over 2000 feet')
    } else {return 'cannot travel that far' }

    } 

    If (enoughWorkDone === true && attendsEvent === 1pm); {
        return 'fun time and networking'
    }
