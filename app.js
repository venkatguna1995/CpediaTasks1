// console.log("Hello I am extranl js file")

// for(let i=1;i<=5;i++){
//     console.log("this is for loop")
// }

// for(let i=1;i<=10;i++){
//     console.log(i)
// }


// let i=1
// do{
// console.log("this is do- while loop")
// i++
// }while(i<=10)

// while(i<=10){
//     console.log("this is while loop")
//     i++
// }

// let array = ["Apple","Orange","Banana"]

// array.push("mango")
// array.pop()

// console.log(array)

// let array1 = ["Apple","Orange","Banana"]

// array1.unshift("mango")
// array1.shift()

// console.log(array1)

// let fruits = ["Apple","Orange","Banana",1,true,"mango"]

// for(i=0;i<fruits.length;i++){
// console.log(i)
// }

// for(let item of fruits){
//     console.log(item)
// }

// Swaping two variable values with out using third variable
//  method1
// let value1 = ["apple"];
// let value2 = ["orange"];
// [value1,value2] = [value2,value1]

// console.log("value1",value1,"value2",value2)

// method2
// let a = ["apple"]
// let b = ["orange"]
// let c = []
// c = a
// a = b
// b = c

// console.log(a,b)




//write a function for length of string

// let a = "mango"
// let length = 0;
// for(i=0;i<a.length;i++){
//     // console.log(a[i])
//     // length.push(a[i])
//     length += 1
// }
// console.log(length)


// const isTraingle =  (b,h) => {
//     let value = 1/2 * b * h
//     return value
// }

// let result = isTraingle(22,5)
// console.log(result)

// const isArea = (r) => {
//     let Area = 22/7  *  r * r
//     return Area
// }

// let result2 = isArea(5)
// console.log(result2)




// const profitFunction = (totalSales,sellinPrice,profit) => {
//     let onepeiceValue = totalSales/sellinPrice
//     profitValue = onepeiceValue - profit
//     return profitValue
// }

// let finalValue = profitFunction(8925,85,15)
// console.log(finalValue)

// let calculateShres = (shareProfits) => {
//    let aInvestment = shareProfits * 12/((1*12 + 2*6 + 3*4)) 
//    let aShare = aInvestment*1
//    return aShare
// }

// let result = calculateShres(9000)
// console.log(result)

/* By selling an artical at rs 800, a shopkeeper  a profit of 25%. at what price
should he sell  the artical so as make a loss of 25% */

// const sellingArtical = (articalPrice, profit,loss) => {
//     let value = (articalPrice / 100) * profit
//     let articalActualPrice = articalPrice - value
//     let percentageOfActualPrice = (articalActualPrice / 100) * 25
//     let lossarticalPrice = articalActualPrice - percentageOfActualPrice
//     return lossarticalPrice
// }
// let lossAmout = sellingArtical(800, 25, 25)
// console.log(lossAmout)

/* Bhajan singh purchesed 120 reams of papers  at rs80 per ream. he  spent rs 280 on transportation .
paid octrol at the rate of 40 paisa per ream and paid rs 72 to the coolie. if he wants to have a gain of 8%.
what must be the selling price per ream */

// const reamSellingPrice = (rCount, rValue, tranport, coolie, persentage, octrol) => {
//     let octrolValue = (rCount * octrol / 100)
//     console.log(octrolValue)
//     let totalReamsValue = ((rCount * rValue) + tranport + coolie + octrolValue)
//     console.log(totalReamsValue)
//     let sellingvalueEachReam = (totalReamsValue / 100) * persentage
//     sellingvalueEachReam = (sellingvalueEachReam + totalReamsValue) / rCount
//     return sellingvalueEachReam
// }

// let reamPrice = reamSellingPrice(120, 80, 280, 72, 8, 40)
// console.log(reamPrice)

/* A batsman scored 110 runs which included 3 boundries and 8 sixs.
what percent of his total score he did make by running between the wickets */

// const percentageOfRuns = (fours,sixes,totalRuns) => {
//     let fourseSocre = fours * 4
//     let sixesScore = sixes * 6
//     let percentge = ((totalRuns - (fourseSocre+sixesScore)) / totalRuns) * 100
//     return percentge.toFixed(2)
// }
// const valuess = percentageOfRuns(3,8,110)
// console.log(valuess)


/* lula spend his monthly salary in 20% of house rent, 20% food, 5% transport, 10% education,
20% house holding expenses and she saving 5000 of total salary then find the monthly salary */

// const getLulaaSalary = (houseRent,food,tranport,eduction,houseExpenses,savings) => {
//     let totalSpending = (houseRent + food + tranport + eduction + houseExpenses)
//     let savingPercentage = 100 - totalSpending
//     let monthlySalary = savings /  savingPercentage *100
//     return monthlySalary
// }

// let salary = getLulaaSalary(20,20,5,10,20,5000)
// console.log(salary)

/* A man covers the first half of the journey 40kmph and remaing of the journey  speed 60 kmph . 
find the  avarage speed */

// const findAvrageOfSpeed = (speed1,speed2,distance) => {
//     let time1 = distance/speed1
//     let time2 = distance/speed2
//     let speed = (distance+distance) /(time1+time2)
//     return speed
// }

// let results = findAvrageOfSpeed(40,60,1)
// console.log(results)


/* if a man covers 12m in a second how many kilometers  can he cover 2h 45min */

//  1000m = 1km

let km = (a,b,c) => {
let min1 = 12 * 60
let coversDistance = min1 * 165
let kilometers = coversDistance/1000
console.log(kilometers)
}
km()










 


