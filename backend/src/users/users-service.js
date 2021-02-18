const xss=require('xss');
const bcrypt=require('bcryptjs');
const REGEX_UPPER_LOWER_NUMBER_SPECIAL=/(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&])[\S]+/;
const AuthService=require('../auth/auth-service');
const UsersService={
	hasUserWithEmail(db,email){
		return db('users')
		.where({email})
		.first()
		.then(user=>!!user);
	},
	hasUserWithUserName(db,username){
		return db('users')
		.where({username})
		.first()
		.then(user=>!!user);
	},
	insertUser(db,newUser){
		return db
		.insert(newUser)
		.into('users')
		.returning('*')
		.then(([user])=>user);
	},
	validatePassword(password){
		if(password.length<8){
			return 'Password must be longer than 8 characters';
		}
		if(password.length>72){
			return 'Password must be less than 72 characters';
		}
		if(password.startsWith(' ')||password.endsWith(' ')){
	    	return 'Password must not start or end with empty spaces';
    	}
		if(!REGEX_UPPER_LOWER_NUMBER_SPECIAL.test(password)){
			return 'Password must contain 1 upper case, lower case, number and special character';
		}
		return null;
	},
	hashPassword(password){return bcrypt.hash(password,12);},
	serializeUser(user){
		return{
		  id:user.id,
		  username:xss(user.username),
		  f_name:xss(user.f_name),
		  l_name:xss(user.l_name),
		  password:{authToken:AuthService.createJwt(user.email,{user_id:user.id})},
		  email:xss(user.email),
		  city:xss(user.city),
		  user_state:xss(user.user_state),
		  zipcode:xss(user.zipcode),
		  date_registered:new Date(user.date_registered)
		}
	},
}

module.exports=UsersService;