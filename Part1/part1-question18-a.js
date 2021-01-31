let statistics = {
    redCars: 21,
    blueCars: 45,
    greenCars: 12,
    raceCars: 5,
    blackCars: 40,
    rareCars: 2,
}

for(const property in statistics)
{
    var start = String(property)[0];
    if((statistics[property] % 2) == 1 || start == 'r')
    {
        console.log(`${statistics[property]}`);
    }
}