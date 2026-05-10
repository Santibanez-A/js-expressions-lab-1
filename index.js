const day1TempF = 32
const day2TempC = 25
const day3TempF = 70
const day4TempC = 18
const day5TempF = 80
const day6TempC = 15
const day7TempF = 72
const day8TempC = 28
const day9TempF = 68
const day10TempC = 20
const day11TempF = 75
const day12TempC = 23
const day13TempF = 82
const day14TempC = 30
const day15TempF = 65
const day16TempC = 22
const day17TempF = 77
const day18TempC = 26
const day19TempF = 78
const day20TempC = 24
const day21TempF = 73
const day22TempC = 21
const day23TempF = 79
const day24TempC = 27
const day25TempF = 71
const day26TempC = 19
const day27TempF = 74
const day28TempC = 17
const day29TempF = 76
const day30TempC = 29

const day2ConvertedF = (day2TempC * 9 / 5) + 32
const day4ConvertedF = (day4TempC * 9 / 5) + 32
const day6ConvertedF = (day6TempC * 9 / 5) + 32
const day8ConvertedF = (day8TempC * 9 / 5) + 32
const day10ConvertedF = (day10TempC * 9 / 5) + 32
const day12ConvertedF = (day12TempC * 9 / 5) + 32
const day14ConvertedF = (day14TempC * 9 / 5) + 32
const day16ConvertedF = (day16TempC * 9 / 5) + 32
const day18ConvertedF = (day18TempC * 9 / 5) + 32
const day20ConvertedF = (day20TempC * 9 / 5) + 32
const day22ConvertedF = (day22TempC * 9 / 5) + 32
const day24ConvertedF = (day24TempC * 9 / 5) + 32
const day26ConvertedF = (day26TempC * 9 / 5) + 32
const day28ConvertedF = (day28TempC * 9 / 5) + 32
const day30ConvertedF = (day30TempC * 9 / 5) + 32

var tot_temperature_in_fahrenheit =
day1TempF + day2ConvertedF + day3TempF + day4ConvertedF +
day5TempF + day6ConvertedF + day7TempF + day8ConvertedF +
day9TempF + day10ConvertedF + day11TempF + day12ConvertedF +
day13TempF + day14ConvertedF + day15TempF + day16ConvertedF +
day17TempF + day18ConvertedF + day19TempF + day20ConvertedF +
day21TempF + day22ConvertedF + day23TempF + day24ConvertedF +
day25TempF + day26ConvertedF + day27TempF + day28ConvertedF +
day29TempF + day30ConvertedF

var tot_temperature_in_celsius =
(tot_temperature_in_fahrenheit - (32 * 30)) * 5 / 9

var avg_temperature_in_fahrenheit =
tot_temperature_in_fahrenheit / 30

var avg_temperature_in_celsius =
tot_temperature_in_celsius / 30
module.exports = {
    tot_temperature_in_fahrenheit,
    tot_temperature_in_celsius,
    avg_temperature_in_fahrenheit,
    avg_temperature_in_celsius
};