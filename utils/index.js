import moment from 'moment'

export const getAbsoluteTime = (time) => {
  return moment(time).fromNow()
} 
