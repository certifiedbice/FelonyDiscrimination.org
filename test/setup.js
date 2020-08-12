process.env.TZ='UCT';
process.env.NODE_ENV='test';
require('dotenv').config();
process.env.TEST_DB_URL=process.env.TEST_DB_URL||"postgresql://fd_admin:Cg97qJ7no4M35@localhost/fd-db-test";
const {expect}=require('chai');
const supertest=require('supertest');
global.expect=expect;
global.supertest=supertest;
