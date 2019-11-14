const request = require('supertest')

const server = require('./server.js')

//jest needs to know if code is async, make sure to use return
describe('server', function() {
    test('should return 200', function(){
    //run server
    // make get request
    return request(server)
        .get("/")
        .then(res => {
            //jest matcher
        expect(res.status).toBe(200)
        })
    })


    test('should return JSON formatted response', function(){
        //run server
        // make get request
        return request(server)
            .get("/")
            .then(res => {
            expect(res.type).toMatch(/json/i)
            })
        })
    
        test('should return api:up', function(){
            //run server
            // make get request
            return request(server)
                .get("/")
                .then(res => {
                    //toEqual checkes all data values inside object
                expect(res.body).toEqual({api:"up"})
                //or could check just one value
                expect(res.body.api).toBe("up")
                })
            })
})

//test 3 things for each endpoint
//endpoint return correct http status code
//endpont returns correct data format; json
//endpoint returns correct data in body