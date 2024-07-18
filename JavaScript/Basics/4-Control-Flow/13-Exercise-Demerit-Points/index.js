//Exercise - Demerit Points

// Speed Limit = 70
// 5km after 70 -> 1 points
// Math.floor()
// 12 points -> suspended

checkSpeed(130);

function checkSpeed(speed) {
    const speedLimit = 70;
    const kmPerPoint = 5;

    if (speed < speedLimit + kmPerPoint)
        console.log('Ok');
    else {
        const points = Math.floor((speed - speedLimit) / kmPerPoint);
        if (points >= 12)
            console.log('License suspended');
        else
            console.log(points +' points');
    }
}
