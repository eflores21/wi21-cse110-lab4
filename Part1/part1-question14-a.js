let statistics = {
    redCars: 21,
    blueCars: 45,
    greenCars: 12,
    raceCars: 5,
    blackCars: 40,
    rareCars: 2,
}

for(var i = 0; i < statistics.length; i++)
{
    if(statistics[i][0] == 'r' || statistics[i] % 2 == 1)
    {
        console.log(statistics[i]);
    }
}