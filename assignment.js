function feetToMile(feet){
    if(feet>=1){
        var mile = feet/5280;
    }
    else{
        return "wrong input..!";
    }
    return mile;
}

function woodCalculator(chair, table, bed){
    var chairCount = chair;
    var tableCount = table * 3;
    var bedCount = bed * 5;
    var totalWoodCount = chairCount+ tableCount+ bedCount;
    return totalWoodCount;
}

function brickCalculator(floor){
    if(floor>=1 && floor<=10){
        var totalHeight = floor*15;
    }
    else if(floor>=11 && floor<=20){
        var heightCount1 = 10*15;
        var heightCount2 = (floor-10)*12;
        totalHeight = heightCount1+heightCount2;
    }
    else if(floor>=21){
        heightCount1 = 10*15;
        heightCount2 = 10*12;
        var heightCount3 = (floor-20)*10;
        totalHeight = heightCount1+heightCount2+heightCount3;
    }
    else{
        return "wrong input..!";
    }
    var totalBrick = totalHeight*1000;
    return totalBrick;
}

function tinyFriend(name) {
    var smallest = name[0];
    for (var i = 0; i < name.length; i++) {
        var tempName = name[i];
        if (tempName.length < smallest.length) {
            smallest = tempName;
        }
    }
    return smallest;

}