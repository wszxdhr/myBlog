import moment from 'moment'
import Vue from 'vue'

export default function () {
  moment.locale('zh-cn')
  Vue.prototype.$moment = moment
}
