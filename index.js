
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo']

const returnFirstTwoDrivers = function() {
    return drivers.slice(0, 2)    
}
//returnFirstTwoDrivers(['Antonia', 'Nuru', 'Amari', 'Mo']);
   
const returnLastTwoDrivers = function() {
    return drivers.slice(-2)
}
//returnLastTwoDrivers(['Antonia', 'Nuru', 'Amari', 'Mo']); 


const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers] 
   
//selectingDrivers[0]() 

const createFareMultiplier = function(x) {
    return function(y) {
      return x * y
   }    
}

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

// const selectDifferentDrivers = function(drivers, twoDrivers) {
//      if (returnFirstTwoDrivers === twoDrivers) {
//         return returnFirstTwoDrivers()
//      }
//      else if (returnLastTwoDrivers === twoDrivers) {
//         return returnLastTwoDrivers()
//      }
     
// }
     
//selectDifferentDrivers(drivers, returnFirstTwoDrivers)
//selectDifferentDrivers(drivers, returnLastTwoDrivers)        
       
const selectDifferentDrivers = function(drivers, twoDrivers) {
    return twoDrivers() 
}    

       


