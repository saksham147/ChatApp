const router = require('express').Router();
let Request = require('../model/request.model');



router.route('/add').post((req, res) => {
	// const username = req.body.username;
	// const description = req.body.description;
	// const duration = Number(req.body.duration);
	// const date = Date.parse(req.body.date);

	// const newExercise = new Exercise({
	// 	username,
	// 	description,
	// 	duration,
	// 	date
	// });

	// newExercise.save()
	// 	.then(() => res.json('Exercise added!'))
	// 	.catch(err => res.status(400).json('Error: ' + err));
	res.send('helo');
});

module.exports = router;