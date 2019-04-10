
import moment from 'moment'


const weekly = 7
const fortnightly = 14
const monthly = 28

const sunday = 1
const monday = 2
const tuesday = 3 
const wednesday = 4 
const thursday = 5
const friday = 6
const saturday = 7

export const formatLease = (data) => {
  // const rentPerOneDay = data.rent/7
  // const numberOfDays = dateDiffInDays(data.start_date, data.end_date)
  const frequency = getFreaqunecyInDays(data.frequency)


  const startingDayOfweek = parseInt(moment('2018/08/09').format('E'))
  const paymentDayOFweek  = parseInt(moment('2018/08/13').format('E'))

  const daysfirstPayment = numberOfDaysForFirstPayment(startingDayOfweek, paymentDayOFweek)

} 


const getFreaqunecyInDays = (frequency) => {
  switch(frequency){
    case 'weekly':
      return weekly
    case 'fortnightly':
      return fortnightly
    case 'monthly':
      return monthly
  }
}

const numberOfDaysForFirstPayment = (startingDay, paymentDay) => {
  var numDays = 0;
  var counter = startingDay

  while(counter !== paymentDay) {
    if(counter === 7) {
      counter = 0
    }
    counter++
    numDays++
  }
  return numDays+1
}
