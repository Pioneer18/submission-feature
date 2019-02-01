//import the sub-interfaces (should be doing lazy loading ideally)
const auth = require('./auth');
const automation_calc = require('./automation-calc');
const common = require('./common');
const logs_notifications = require('./logs-notifications');
const mapper = require('./mapper');
const mongo = require('./mongoDB');

//this module is to act as an interface (for all modules ideally) for the Submission component (module/feature)
//the 'module pattern' utilized relies on self-contained objects
//this allows more complex code to remain under the hood and only expose easily understood interfaces to the developer

