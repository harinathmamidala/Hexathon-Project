const express = require('express')
const router = express.Router()

const {
  getAllYears,
  getRoomProperties,
  getAllDevices,
  getAllDays,
  getAllMonths,
  createDay,
  createMonth,
  createYear
} = require('../controllers/room')


router.route('/').post(createTask)

router.route('/alldays').get(getAllDays).post(createDay)
router.route('/allmonths').get(getAllMonths).post(createMonth)
router.route('/allyears').get(getAllYears).post(createYear)

router.route('/properties').get(getRoomProperties)
router.route('/devices').get(getAllDevices)

module.exports = router
