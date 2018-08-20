var xml = require('xml');

const accountSid = 'ACc6ddec5f7f0563e2a797d05edaf6299a';
const authToken = '3a16ee93c5c65c5168f4157631ee39ea';
const client = require('twilio')(accountSid, authToken);



var phoneNumbers = ["+918806387934", "+917798634707"];

module.exports = {
	broadcastMessage: broadcastMessage,
	noreplyMessage: noreplyMessage
}



function broadcastMessage(req, res) {
	for(var i = 0; i < phoneNumbers.length; i++) {
		var to = 'whatsapp:' + phoneNumbers[i];
		var body = '*' + req.body.message + '*'
		console.log(req.body)
		client.messages
	      .create({
	        body: body,
	        from: 'whatsapp:+14155238886',
	        to: to 
	      })
	      .then(message => console.log(message.sid))
	      .done();    	
	}
	return res.status(200).json("Message sent");
}

function noreplyMessage(req, res) {
	var xmlObject = {
		Response: [{
			Message:[{
				Body: "This is no-reply number. Contact Admin"
			}]
		}]
	}
	var xmlString = xml(xmlObject);
	res.set('Content-Type', 'text/xml');
	return res.send(xmlString)
}


