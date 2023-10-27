const apiURL = 'https://omniwallet.tngbl.xyz/forgot-password';
const axios  =  require('axios')
let cred = {};

describe ("Forgot API Test Cases", () => {


    it("For valid username", async() => {
          cred = {
                   username : "kavitadhami"
                 }

                      const response = await axios.post(apiURL, cred);
                      console.log(response.data);
                      console.log(response.data.status);
                      console.log(response.data.message);
                      console.log(response.data.data.message);
                      console.log(response.data.data.link);
                      expect(response.status).toBe(200);
                                        }
      )


    it("For invalid username", async() => {
          cred = {
                   username : "hello"
                 }

                      const response = await axios.post(apiURL, cred);
                      console.log(response.data);
                      console.log(response.data.status);
                      console.log(response.data.message);
                      expect(response.status).toBe(401);
                                           }
      )


    it("For blank username", async() => {
          cred = {
                    username : " "
                 }

                const response = await axios.post(apiURL, cred);
                console.log(response.data);
                console.log(response.data.status);
                console.log(response.data.message);
                console.log(response.data.error);
                expect(response.status).toBe(400);
                              }
      )


}
)