// const { insert } = require('./hobbitsModel')

// //not a unit test
// //will be slower cause of side effects
// describe('hobbits model', function(){
//     describe('insert()', function(){
//         it('should insert a hobbit', function(){
//             //add a hobbit
//             //check if it was inserted into db
//         })
//     })
// })

describe('hobbits model', () => {
    it('should set testing env', () => {
        expect(process.env.DB_ENV).toBe('testing')
    })
})