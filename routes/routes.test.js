const supertest = require('supertest')
const router = require('./index')
const should = require('chai').should() 

describe('GET /', function() {
    it('should be return home page', function(done) {

        supertest(router)
            .get('/')
            .expect('Content-type', /html/)
            .expect(200 || 304, done)
            .end(function(err, res) {
            // HTTP status should be 200
                res.status.should.equal(200)
            // Error key should be false.
                res.body.error.should.equal(false)
                done()
            })
    })
})

describe('True', function() {
    it('should be true', function() {
        'true'.should.equal('true')
    })
})

describe('GET /latest/imagesearch/ ', function() {
    it('should return latest searches')
})
