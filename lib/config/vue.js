
import Vue from 'vue'
import Router from 'vue-router'
import AsyncData from 'vue-async-data'

import config from '.'

import date from '../filters/date'
import markdown from '../filters/markdown'
import truncate from '../filters/truncate'

/**
 * Configure Vue plugins
 */
Vue.use(Router)
Vue.use(AsyncData)

/**
 * Configure Vue filters
 */
Vue.filter('date', date)
Vue.filter('markdown', markdown)
Vue.filter('truncate', truncate)

/**
 * Set development mode
 */
if (config.env === 'development') {
	Vue.config.debug = true
}

/**
 * Export `Vue`
 */
export default Vue