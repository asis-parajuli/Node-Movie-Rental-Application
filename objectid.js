// id have 24 characters
// 2 characters represents a byte

// 12 bytes
// 4 bytes: timestamp
// 3 bytes: machine identifier
// 2 bytes: process identifier
// 3 bytes: counter

// 1 byte = 8 bits
// every bit has either 0 or 1
// with 1 byte we can store 256 different numbers
// 3 bytes represents a counter and 3 bytes represents 3^(8*30) = 16 Million

// Mongodb driver creates this id
// The objectid is different but not 100% unique like in other relational database

// Mongoose is an abstraction over mongodb

const mongoose = require("mongoose");

const id = new mongoose.Types.ObjectId();
//console.log(id);

// here we know first 4 bytes indicates the timestamp in an object id
console.log(id.getTimestamp());

// we can validate object id as
const isValid = mongoose.Types.ObjectId.isValid("1234");
console.log(isValid);
