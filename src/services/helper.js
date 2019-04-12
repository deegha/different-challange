
import moment from 'moment'

const frequencyInDays = {
  weekly: 7,
  fortnightly: 14,
  monthly: 28
}

const week = {
  sunday: 1,
  monday: 2,
  tuesday: 3,
  wednesday: 4,
  thursday: 5,
  friday: 6,
  saturday: 7
}

export const formatLease = (data) => {
  const frequency = frequencyInDays[data.frequency]
  const startingDayOfweek = parseInt(moment(data.start_date).format('E'))
  const daysfirstPayment = numberOfDaysForFirstPayment(startingDayOfweek, week[data.payment_day])
  const newStartingData = moment(data.start_date, "YYYY-MM-DD").add(daysfirstPayment, 'days')

  let date = newStartingData.format('YYYY-MM-DD')
  let days = daysfirstPayment
  let to = moment(date, "YYYY-MM-DD").add(parseInt(days), 'days').format('YYYY-MM-DD')
  let payments = []

  while(to < data.end_date) {
    
    date =   moment(date, "YYYY-MM-DD").add(parseInt(frequency), 'days').format('YYYY-MM-DD')
    to = moment(date, "YYYY-MM-DD").add(parseInt(days), 'days').format('YYYY-MM-DD')
  
    if(to < data.end_date) {
      payments = [...payments, {
        from: date,
        to:to ,
        days: days,
        amount: days*data.rent/7
      }]
    }else {
      const  diff = moment(to).diff( moment(data.end_date), 'days')
      payments = [...payments, {
        from: date,
        to: moment(to, "YYYY-MM-DD").subtract(parseInt(diff), 'days').format('YYYY-MM-DD'),
        days: diff,
        amount: diff*data.rent/7
      }]
    } 
    
    days = frequency
  }

  return payments
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
