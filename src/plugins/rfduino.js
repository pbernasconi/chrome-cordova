/****************************************************************
 * rfduino
 */

var rfduino = {};

rfduino.discover = function (seconds, successCallback, failureCallback) {

	var devices = [{name:"simblee", uuid:"BD922605-1B07-4D55-8D09-B66653E51BBA"}, {name:"TV", uuid:"BD922605-1B07-4D55-8P09-B66653E51BBA"}];
	return devices;
};



window.rfduino = rfduino;
