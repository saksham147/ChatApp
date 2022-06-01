const router = require('express').Router();
const emailvalidator = require("email-validator");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs')


const express = require('express');
const session = require('express-session');
const app = express();
require('dotenv').config();
const crypto = require("crypto");




let User = require('../model/user.model');


const algorithm = "aes-256-cbc";
// generate 16 bytes of random data
const initVector = crypto.randomBytes(16);
// secret key generate 32 bytes of random data
const Securitykey = crypto.randomBytes(32);

function encrypt(encryptData) {

	const cipher = crypto.createCipheriv(algorithm, Securitykey, initVector);
	let encryptedData = cipher.update(encryptData, "utf-8", "hex");
	encryptedData += cipher.final("hex");
	return encryptedData;

	// console.log("Encrypted message: " + encryptedData);
}

function decrypt(decryptData) {
	const decipher = crypto.createDecipheriv(algorithm, Securitykey, initVector);

	let decryptedData = decipher.update(decryptData, "hex", "utf-8");

	decryptedData += decipher.final("utf8");
	return decryptedData;
	// console.log("Decrypted message: " + decryptedData);
}




router.route('/').get(async(req, res) => {
	const users = await User.find();

	if (users) {
		res.json(
			users
		);
	} else {
		res.json({
			status: 'Error',
			user: false
		});
	}
});

router.route('/add').post(async(req, res) => {

	const username = req.body.username;
	const email = req.body.email;
	const contact_number = req.body.contact_number;
	const name = req.body.name;
	const password = req.body.password;
	const conf_password = req.body.conf_password;


	if (emailvalidator.validate(email)) {
		if (password === conf_password) {
			const newUser = new User({
				username,
				email,
				contact_number,
				name,
				password
			});

			const a = await newUser.save();
			if (a) {
				res.status(200).json({status:'Okay'});
			} else {
				res.status(400).json('Error: ');
			}
		} else {
			res.status(400).json('Password Doesnot match');
		}
	} else {
		res.status(400).json('Invalid Email');
	}
});

router.route('/login').post(async(req, res, next) => {

	const username = req.body.username;
	const password = req.body.password;

	// console.log(encrypt(username));
	// console.log(decrypt(encrypt(username)));
	// const a = '628285ef0a60d323f207a10b';
	// res.json({en:encrypt(a),dn:decrypt(encrypt(a))});

	const users = await User.findOne({
		username: username
	});



	if (users) {
		
		if (users.password == password) {
			const token = jwt.sign({
				username: users.username,
				email: users.email
			}, process.env.TOKEN_SECRET);
			res.json({
				status: 'okay',
				user: token
			});
		}else{
			res.json({
				status: 'Wrong Password',
				user: false
			});
		}
		
	} else {
		res.json({
			status: 'Error',
			user: false
		});
	}
});


module.exports = router;