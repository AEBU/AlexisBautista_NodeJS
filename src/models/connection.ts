import { Sequelize } from 'sequelize';

// Must be changed
const username = process.env.CRDB_USERNAME  || 'test_user' // database username
const password = process.env.CRDB_PASSWORD  || '0dQhHcTFo1Nd7OMJeTq2Dg' // database password

// Might need to be changed
const database = process.env.CRDB_DATABASE  || 'defaultdb' // database
const host     = process.env.CRDB_HOST      || 'free-tier14.aws-us-east-1.cockroachlabs.cloud' // cluster host
const port     = process.env.PORT      || '26257' // port 
const cluster  = process.env.CRDB_CLUSTER   || 'apex-chamois-4118' // cluster name with the number identifier

//
// BUILD CONNECTION STRING AND CONNECT
//
const connectionString = 'postgresql://' + // use the postgresql wire protocol
    username +                       // username
    ':' +                            // separator between username and password
    password +                       // password
    '@' +                            // separator between username/password and port
    host +                           // host
    ':' +                            // separator between host and port
    port +                        // port, CockroachDB Serverless always uses 26257
    '/' +                            // separator between port and database
    database +                       // database
    '?' +                            // separator for url parameters
    'sslmode=verify-full' +          // always use verify-full for CockroachDB Serverless
    '&' +                            // url parameter separator
    'options=--cluster%3D' + cluster // cluster name is passed via the options url parameter


const sequelize = new Sequelize(connectionString);
export default sequelize;