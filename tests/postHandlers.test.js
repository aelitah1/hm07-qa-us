// eslint-disable-next-line no-undef
const config = require('../config');

let requestBody = 
    {
    "products": [
        {
            "id": 5,
            "quantity": 1
        },
        {
            "id": 4,
            "quantity": 5
        }
    ]
}
test('should return 200...', async () => {
    try {
		const response = await fetch(`${config.API_URL}/api/v1/warehouses/check`, {
			method: 'POST',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)
		});
		let responseBody;
		responseBody = await response.json();
		expect(responseBody).toEqual(expect.objectContaining({  "Big World": expect.any(Object),
			"Everything You Need": expect.any(Object),
			"Food City": expect.any(Object),
			"Fresh Food": expect.any(Object),
			availability: true, // or false, depending on the expected result
			message: 'Item is available' // or a similar message
		  }));
	} catch (error) {

	}
});


     requestBody = 
	 {
		"ids": [
			1,
			4,
			44
		]
	}

test('should return 200...', async () => {
    try {
		const response = await fetch(`${config.API_URL}/api/v1/warehouses/amount`, {
			method: 'POST',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)
		});
		let responseBody;
		responseBody = await response.json();
		expect(responseBody).toEqual(expect.products({  "Big World": expect.any(Object),
			"Everything You Need": expect.any(Object),
			"Food City": expect.any(Object),
			"Fresh Food": expect.any(Object),
			availability: true, // or false, depending on the expected result
			message: 'Item is available' // or a similar message
		  }));
	} catch (error) {

	}
});
