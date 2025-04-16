const { config } = require('../config');

const correct = {
    host: 'localhost',
    port: 5432,
    user: 'postgres',
    password: 'postgres',
    database: 'postgres',
    connection_limit: 100
}
// This test fails because 1 !== 2
it('Testing to see if Jest works', () => {
    expect(config).toEqual(correct)
})

