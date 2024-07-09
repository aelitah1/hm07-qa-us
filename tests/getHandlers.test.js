// eslint-disable-next-line no-undef
const config = require('../config');

test('Status should be 200....', async () => {
	let actualStatusCode;
	try {
		const response = await fetch(`${config.API_URL}/api/v1/warehouses`);
		actualStatusCode = response.status;
	} catch (error) {
		console.error(error);
	} 
	expect(actualStatusCode).toBe(200);
});

// eslint-disable-next-line no-undef
test('Status should be 200....', async () => {
	let actualResponse;
	try {
		const response = await fetch(`${config.API_URL}/api/v1/warehouses`);
		actualResponse = await response.json();
	} catch (error) {
		console.error(error);
	} 
	console.log(actualResponse); 
	expect(actualResponse[0]["name"]).toBe("Everything You Need")
}); 
