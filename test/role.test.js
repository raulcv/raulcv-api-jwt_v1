/* eslint handle-callback-err: "off"*/
require('dotenv-safe').config()

process.env.NODE_ENV = 'test'

const Role = require('../src/models/role')
const { faker } = require('@faker-js/faker');
const chai = require('chai')
const chaiHttp = require('chai-http')
const server = require('../src/server')
// eslint-disable-next-line no-unused-vars
const should = chai.should()
const loginDetails = {
    email: 'admin@admin.com',
    password: 'Admin 2022'
}
let token = ''
const createdID = []
const name = faker.name.jobArea();
const newName = faker.name.jobArea();
const repeatedName = faker.random.word()
const state = 'I'
chai.use(chaiHttp)

describe('*********** Roles ***********', () => {
    describe('/POST login', () => {
        it('it should GET token', (done) => {
            chai
                .request(server)
                .post('/login')
                .send(loginDetails)
                .end((err, res) => {
                    res.should.have.status(200)
                    res.body.should.be.an('object')
                    res.body.should.have.property('token')
                    token = res.body.token
                    done()
                })
        })
    })

    describe('/GET Roles', () => {
        it('it should NOT be able to consume the route since no token was sent', (done) => {
            chai
                .request(server)
                .get('/api/role')
                .end((err, res) => {
                    res.should.have.status(401)
                    done()
                })
        })
        it('it should GET all Roles', (done) => {
            chai
                .request(server)
                .get('/api/role')
                .set('Authorization', `Bearer ${token}`)
                .end((err, res) => {
                    res.should.have.status(200)
                    res.body.should.be.an('object')
                    res.body.docs.should.be.a('array')
                    done()
                })
        })
        // it('it should GET the Roles with filters', (done) => {
        //   chai
        //     .request(server)
        //     .get('/api/role?filter=admin&fields=name')
        //     .set('Authorization', `Bearer ${token}`)
        //     .end((err, res) => {
        //       res.should.have.status(200)
        //       res.body.should.be.an('object')
        //       res.body.docs.should.be.a('array')
        //       res.body.docs.should.have.lengthOf(1)
        //       res.body.docs[0].should.have.property('name').eql('Bucaramanga')
        //       done()
        //     })
        // })
    })

    describe('/POST Role', () => {
        it('it should NOT POST a role without name', (done) => {
            const role = {
                description: 'Testing user role'
            }
            chai
                .request(server)
                .post('/api/role')
                .set('Authorization', `Bearer ${token}`)
                .send(role)
                .end((err, res) => {
                    res.should.have.status(422)
                    res.body.should.be.a('object')
                    res.body.should.have.property('errors')
                    done()
                })
        })
        it('it should POST a Role ', (done) => {
            const role = { name }
            chai
                .request(server)
                .post('/api/role')
                .set('Authorization', `Bearer ${token}`)
                .send(role)
                .end((err, res) => {
                    res.should.have.status(201)
                    res.body.should.be.a('object')
                    res.body.should.include.keys('_id', 'name')
                    createdID.push(res.body._id)
                    done()
                })
        })
        it('it should NOT POST a role that already exists', (done) => {
            const role = {
                name
            }
            chai
                .request(server)
                .post('/api/role')
                .set('Authorization', `Bearer ${token}`)
                .send(role)
                .end((err, res) => {
                    res.should.have.status(422)
                    res.body.should.be.a('object')
                    res.body.should.have.property('errors')
                    done()
                })
        })
    })

    describe('/GET/:id role', () => {
        it('it should GET a role by the given id', (done) => {
            const id = createdID.slice(-1).pop()
            chai
                .request(server)
                .get(`/api/role/${id}`)
                .set('Authorization', `Bearer ${token}`)
                .end((error, res) => {
                    res.should.have.status(200)
                    res.body.should.be.a('object')
                    res.body.should.have.property('name')
                    res.body.should.have.property('_id').eql(id)
                    done()
                })
        })
    })

    describe('/PUT/:id roles', () => {
        it('it should UPDATE a role given the id', (done) => {
            const id = createdID.slice(-1).pop()
            const role = { name: newName, description: "New Role", state: 'I' }
            chai
                .request(server)
                .put(`/api/role/${id}`)
                .set('Authorization', `Bearer ${token}`)
                .send(role)
                .end((error, res) => {
                    res.should.have.status(200)
                    res.body.should.be.a('object')
                    res.body.should.have.property('_id').eql(id)
                    res.body.should.have.property('name').not.eql(newName)
                    done()
                })
        })
        it('it should NOT UPDATE a role that already exists', (done) => {
            const role = { name: repeatedName }
            // console.log(role)
            chai
                .request(server)
                .post('/api/role')
                .set('Authorization', `Bearer ${token}`)
                .send(role)
                .end((err, res) => {
                    // console.log(res.body)
                    res.should.have.status(201)
                    res.body.should.be.a('object')
                    res.body.should.include.keys('_id', 'name',)
                    //   res.body.should.have.property('name').eql(repeatedName)
                    createdID.push(res.body._id)
                    const anotherRole = {
                        name: newName
                    }
                    // console.log(anotherRole)
                    chai
                        .request(server)
                        .put(`/api/role/${createdID.slice(-1).pop()}`)
                        .set('Authorization', `Bearer ${token}`)
                        .send(anotherRole)
                        .end((error, result) => {
                            // console.log(result.body)
                            result.should.have.status(422)
                            result.body.should.be.a('object')
                            result.body.should.have.property('errors')
                            done()
                        })
                })
        })
    })


    describe('/PATCH/:id roles', () => {
        it('it should UPDATE a state of role given the id', (done) => {
            const id = createdID.slice(-1).pop()
            chai
                .request(server)
                .patch(`/api/role/${id}`)
                .set('Authorization', `Bearer ${token}`)
                .send({ state: state })
                .end((error, res) => {
                    res.should.have.status(200)
                    res.body.should.be.a('object')
                    res.body.should.have.property('_id').eql(id)
                    res.body.should.have.property('state').eql(state)
                    done()
                })
        })
        it('it should NOT UPDATE a state of role without state field', (done) => {
            const id = createdID.slice(-1).pop()
            const role = {}
            chai
                .request(server)
                .patch(`/api/role/${id}`)
                .set('Authorization', `Bearer ${token}`)
                .send(role)
                .end((err, res) => {
                    // console.log(res.body.errors.msg)
                    res.should.have.status(422)
                    res.body.should.be.a('object')
                    res.body.should.have.property('errors')
                    // res.body.should.include.keys('_id')
                    // res.body.should.have.property('name').eql(repeatedName)
                    createdID.push(res.body._id)
                    done()
                })
        })
    })

    describe('/DELETE/:id role', () => {
        it('it should DELETE a role given the id', (done) => {
            const role = { name }
            chai
                .request(server)
                .post('/api/role')
                .set('Authorization', `Bearer ${token}`)
                .send(role)
                .end((err, res) => {
                    // console.log(res.body)
                    res.should.have.status(201)
                    res.body.should.be.a('object')
                    res.body.should.include.keys('_id', 'name', 'description', 'state')
                    res.body.should.have.property('name').eql(name.toLowerCase())
                    res.body.should.have.property('description').eql(name)
                    res.body.should.have.property('state').eql('A')
                    chai
                        .request(server)
                        .delete(`/api/role/${res.body._id}`)
                        .set('Authorization', `Bearer ${token}`)
                        .end((error, result) => {
                            result.should.have.status(200)
                            result.body.should.be.a('object')
                            result.body.should.have.property('msg').eql('It was deleted')
                            done()
                        })
                })
        })
    })

    after(() => {
        createdID.forEach((id) => {
            Role.findByIdAndRemove(id, (err) => {
                if (err) {
                    console.log(err)
                }
            })
        })
    })

})