//模拟数据
const express = require('express')
const app = express()
//推荐数据
var recommendList = require('./src/data/recommend.json')
//关注数据
var followList = require('./src/data/follow.json')
//各类热榜数据
var totalList = require('./src/data/total.json')
var digitalList = require('./src/data/digital.json')
var filmList = require('./src/data/film.json')
var scienceList = require('./src/data/science.json')
var sportList = require('./src/data/sport.json')
var fashionList = require('./src/data/fashion.json')
//等你来答数据
var hotList = require('./src/data/waiting_hot.json')
var potentialList = require('./src/data/waiting_potential.json')
var newList = require('./src/data/waiting_new.json')
var everyoneList = require('./src/data/waiting_everyone.json')
//API路径
var apiRoutes = express.Router()
app.use('/api', apiRoutes)

module.exports = {
	devServer: {
		host: "localhost",
		port: 9090,
		https: false,
		open: true,
		hotOnly: true,
		before(app) {
			app.get('/api/recommend', (req, res) => {
				res.json({
					code: 1,
					msg: '成功',
					data: recommendList
				})
			})
			app.get('/api/follow', (req, res) => {
				res.json({
					code: 1,
					msg: '成功',
					data: followList
				})
			})
			app.get('/api/hot-lists/total', (req, res) => {
				res.json({
					code: 1,
					msg: '成功',
					data: totalList
				})
			})
			app.get('/api/hot-lists/digital', (req, res) => {
				res.json({
					code: 1,
					msg: '成功',
					data: digitalList
				})
			})
			app.get('/api/hot-lists/film', (req, res) => {
				res.json({
					code: 1,
					msg: '成功',
					data: filmList
				})
			})
			app.get('/api/hot-lists/science', (req, res) => {
				res.json({
					code: 1,
					msg: '成功',
					data: scienceList
				})
			})
			app.get('/api/hot-lists/sport', (req, res) => {
				res.json({
					code: 1,
					msg: '成功',
					data: sportList
				})
			})
			app.get('/api/hot-lists/fashion', (req, res) => {
				res.json({
					code: 1,
					msg: '成功',
					data: fashionList
				})
			})
			app.get('/api/waiting-lists/hot', (req, res) => {
				res.json({
					code: 1,
					msg: '成功',
					data: hotList
				})
			})
			app.get('/api/waiting-lists/potential', (req, res) => {
				res.json({
					code: 1,
					msg: '成功',
					data: potentialList
				})
			})
			app.get('/api/waiting-lists/new', (req, res) => {
				res.json({
					code: 1,
					msg: '成功',
					data: newList
				})
			})
			app.get('/api/waiting-lists/everyone', (req, res) => {
				res.json({
					code: 1,
					msg: '成功',
					data: everyoneList
				})
			})
		}
	}
};