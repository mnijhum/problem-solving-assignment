//Problem 1
function feetToMile(feetLength)
{
    const mileValue=0.000189394; // 1 feet = 0.000189394 miles
    if(feetLength<0)
    {
        return "Length can not be negative. Wrong input. Please give a positive value";
    }
    else
    {
        var mile = mileValue*feetLength;
        return mile;
    }

}
console.log(feetToMile(1000));

//problem 2
function woodCalculator(chair,table,bed)
{
    if(chair<0 || table <0 || bed<0)
    {
        return "Items can not be negative. Enter all positive value";
    }
    else
    {
        var totalForChair = chair*1; //1 cubic feet wood needed for 1 chair
        var totalForTable = table*3; //3 cubic feet wood needed for 1 table
        var totalForBed = bed*5; //5 cubic feet wood needed for 1 bed

        var totalWoodNeed = totalForChair + totalForTable + totalForBed;
        return totalWoodNeed;
    }
}

console.log(woodCalculator(5,10,20));

//problem 3
function brickCalculator(buildingHeight)
{
    let totalBricks=0;
    const firstTen= 10*15; // first 10 floor, per floor 15 feet
    const secondTen = 10*12; // after first 10 floor, till 20 floor, per floor 12 feet

    if(buildingHeight<0) 
    {
        return "Height can not be negative. Enter positive value";
    }
    else
    {

        if(buildingHeight >= 0 && buildingHeight <= 10)
        {
            var heightInFeet = buildingHeight*15; // first 10 floor, per floor 15 feet
            totalBricks= heightInFeet*1000; // 1 feet = 1000 bricks
        }

        else if(buildingHeight >10 && buildingHeight <=20)
        {
            let remainingFloor = buildingHeight-10;
            floorInFeet = remainingFloor*12; // after first 10 floor, till 20 floor, per floor 12 feet
            totalBricks= (firstTen + floorInFeet)*1000; 

        }
            //if input is greater than 20
        else 
        {
            let remainingFloor = buildingHeight-20;
            floorInFeet = remainingFloor*10; // after 20 floor, per floor 10 feet
            totalBricks = (firstTen + secondTen + floorInFeet) * 1000;
        }
    }
    return totalBricks;
}

console.log(brickCalculator(15));

//problem 4

function tinyFriends(friends)
{
    if(friends.length==0)
    {
        return "Array is empty."; //returns if array is empty
    }
    else
    {
        let tiny ="";
        let size = 100000; //setting a temporary max value just to compare
        for (var i=0; i < friends.length; i++)
        {
            nameSize = friends[i].length; //getting the size of each element
            if(nameSize<=size)
            {
                tiny=friends[i]; //storing the lowest size in tiny
                size=nameSize; //updating the lowest size
            }
        }
        return tiny;
    }
}

friendList = []; 
console.log(tinyFriends(friendList));