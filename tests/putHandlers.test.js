// eslint-disable-next-line no-undef
const config = require('../config');

let requestBody = {
    "productsList": [
        {
            "id": 1,
            "quantity": 4
        }
        
    ]
}

test('should return 200...', async () => {
    let actualstatus;
    try {
		const response = await fetch(`${config.API_URL}/api/v1/kits/6`, {
			method: 'PUT',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)
		});
        actualStatus = await response.status;
       
        expect(response.status).toBe(200);

    } catch (error) {
        console.error(error);
    }
    expect(actualStatus).toBe(200)
   });



test('should return ok true...', async () => {
    let actualResponse;
    try {
		const response = await fetch(`${config.API_URL}/api/v1/kits/6`, {
			method: 'PUT',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)
		});
        actualResponse = await response.json();
        
    } catch (error) {
        console.error(error);
    }
    expect(actualResponse).toEqual("ok: true");
});
