eslint-disable-next-line no-undef
const config = require('../config');


it('should be deleted...', async () => {
    // eslint-disable-next-line no-undef
    const config = require('../config');
    let actualDeleteStatus;
    let orderId;
    let requestBody = {
            "productsList": [
                {
                    "id": 1,
                    "quantity": 2
                },
                {
                    "id": 5,
                    "quantity": 2
                },
                {
                    "id": 3,
                    "quantity": 1
                }
            ]
        };
try {
    const postResponse = await fetch(`${config.API_URL}/api/v1/orders`, {
    method: 'POST',
    headers: {
    'Content-Type': 'application/json'
    },
    body: JSON.stringify(requestBody)
    });

    const postResponseJson = await postResponse.json();
    orderId = postResponseJson["id"];

    // Deleting the new order
    const deleteResponse = await fetch(`${config.API_URL}/api/v1/orders/${orderId}`, {
      method: 'DELETE'
    });
actualDeleteStatus = deleteResponse.status;

    } catch (error) {
    console.error(error);
    }
    expect(actualDeleteStatus).toBe(200);
    });
	

test('should be deleted2...', async () => {
    // eslint-disable-next-line no-undef
   let postResponseJson;
    let actualDelete;
    let orderId;
    let requestBody = {
            "productsList": [
                {
                    "id": 1,
                    "quantity": 2
                },
                {
                    "id": 5,
                    "quantity": 2
                },
                {
                    "id": 3,
                    "quantity": 1
                }
            ]
        };
try {
    const postResponse = await fetch(`${config.API_URL}/api/v1/orders`, {
    method: 'POST',
    headers: {
    'Content-Type': 'application/json'
    },
    body: JSON.stringify(requestBody)
    });

     postResponseJson = await postResponse.json();
    orderId = postResponseJson["id"];

    // Deleting the new order
     const deleteResponse = await fetch(`${config.API_URL}/api/v1/orders/${orderId}`, {
      method: 'DELETE'
    });
    actualDelete = await deleteResponse.json();

    } catch (error) {
    console.error(error);
    }
    
    expect(actualDelete).toEqual("ok: true");
    });
