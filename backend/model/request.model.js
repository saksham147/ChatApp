const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const requestSchema = new Schema({
	from_id: { type: String, required: true },
	to_id: { type: String, required: true },
	request_type: { type: String, required: true },
	status: { type: Number, required: true },
	date: { type: Date, required: true }
},{
	timestamps: true,
});

const Request = mongoose.model('Request', requestSchema);

module.exports = Request;