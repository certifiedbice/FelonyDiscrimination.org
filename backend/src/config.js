const { getMaxListeners } = require("./app");

module.exports={
    PORT:process.env.PORT||8000,
    NODE_ENV:process.env.NODE_ENV||'development',
    DATABASE_URL: process.env.DATABASE_URL||'postgresql://fd_admin:Cg97qJ7no4M35@localhost/fd-db',
    TEST_DATABASE_URL: process.env.TEST_DATABASE_URL||'postgresql://fd_admin:Cg97qJ7no4M35@localhost/fd-db-test',
	JWT_SECRET:process.env.JWT_SECRET||'apples-vs-tomatos',
    EMAIL_USER:'contact@felonydiscrimination.org',
    EMAIL_PASS:'ToMB.Rfr7Ijr',
	JWT_EXPIRY:process.env.JWT_EXPIRY||'3h'
}