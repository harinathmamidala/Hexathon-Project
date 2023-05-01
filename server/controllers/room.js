const Day = require('../models/day')
const Month= require('../models/month')
const Year = require('../models/year')
const asyncWrapper = require('../middleware/async')
const { createCustomError } = require('../errors/custom-error')
const {db}=require('../FirebaseOperations/Firebase')
const ref = db.ref('room');

const getRoomProperties =asyncWrapper(async(req,res)=>{
  ref.child('properties').once('value', (snapshot) => {
    res.json(snapshot.val());
  }); 
})

const getAllDevices=asyncWrapper(async(req,res)=>{
  ref.child('devices').once('value', (snapshot) => {
    res.json(snapshot.val());
  }); 
})


const updateDevice=asyncWrapper(async(req,res)=>{
  ref.child('devices').child(req.params).update(req.body); 
  res.json(req.body)
})



const getAllDays = asyncWrapper(async (req, res) => {
  const days = await Day.find({})
  res.status(200).json({ days })
})

const getAllMonths =asyncWrapper(async (req,res) =>{
  const months = await Month.find({})
  res.status(200).json({ months })
})

const getAllYears = asyncWrapper(async (req,res) => {
  const years = await Year.find({})
  res.status(200).json({ years })
}) 

const createDay = asyncWrapper(async (req,res) =>{
  const day = await Day.create(req.body)
  console.log(req.body)
  res.status(201).json({ day })
})

const createMonth = asyncWrapper(async (req,res) =>{
  const month = await Month.create(req.body)
  console.log(req.body)
  res.status(201).json({ month })
})

const createYear = asyncWrapper(async (req,res) =>{
  const year = await Year.create(req.body)
  console.log(req.body)
  res.status(201).json({ year })
})



module.exports = {
  getRoomProperties,
  updateDevice,
  getAllDevices,
  getAllDays,
  getAllMonths,
  getAllYears,
  createDay,
  createMonth,
  createYear,
  
}
