const apiURL = 'https://omniwallet.tngbl.xyz/authenticate';
const axios = require('axios');
let cred = {};

describe("Authentication API Test Cases kavita", () => {


    it("For valid username and password", async () => {

        const desiredObject = {
            status: 200,
            message: 'success',
            data: expect.objectContaining({
                Token: expect.any(String)
            })
        }

        cred = {
            username: "kavitadhami",
            password: "prakash@123"
        }

        const response = await axios.post(apiURL, cred);
        expect(response.data).toMatchObject(desiredObject);
    }
    )


    it("For valid username and invalid password", async () => {

        const desiredObject = {
            status: 401,
            message: 'Invalid Credentials'
        }

        cred = {
            username: "kavitadhami",
            password: "abc@123"
        }

        const response = await axios.post(apiURL, cred);
        expect(response.data).toMatchObject(desiredObject);
    }
    )

    it("For invalid username and valid password", async () => {

        const desiredObject = {
            status: 401,
            message: 'Invalid Credentials'
        }

        cred = {
            username: "kavita",
            password: "prakash@123"
        }

        const response = await axios.post(apiURL, cred);
        expect(response.data).toMatchObject(desiredObject);
    }
    )


    it("For null username and valid password", async () => {

        const desiredObject = {
            status: 401,
            message: 'Invalid Credentials'
        }

        cred = {
            username: " ",
            password: "prakash@123"
        }

        const response = await axios.post(apiURL, cred);
        expect(response.data).toMatchObject(desiredObject);
    }
    )


    it("For valid username and null password", async () => {

        const desiredObject = {
            status: 401,
            message: 'Invalid Credentials'
        }

        cred = {
            username: "kavitadhami",
            password: " "
        }

        const response = await axios.post(apiURL, cred);
        expect(response.data).toMatchObject(desiredObject);
    }
    )

})

