function makeOrgsArray(){
	return [
		{
			org_name:'Waterside Apartments',
			org_phone:'9185997180',
			org_st_addr:'1703 S Jackson Ave West',
			org_city:'tulsa',
			org_state:'OK',
			org_zipcode:'74107',
			pos_endorsements:'15',
			neg_endorsements:'2',
			org_type:'housing'
		},
		{
			org_name:'The Giani Building', 
			org_phone:'5045990987', 
			org_st_addr:'600 Canal St', 
			org_city:'New Orleans', 
			org_state:'LA', 
			org_zipcode:'70130', 
			pos_endorsements:'3', 
			neg_endorsements:'13', 
			org_type:'housing'
		},
		{
			org_name:'Broadleaf Apartments', 
			org_phone:'9163915100', 
			org_st_addr:'40 Park City Ct', 
			org_city:'Sacramento', 
			org_state:'CA', 
			org_zipcode:'95831', 
			pos_endorsements:'14', 
			neg_endorsements:'56', 
			org_type:'housing'
		},
		{
			org_name:'Gateway West Loop', 
			org_phone:'3129670513', 
			org_st_addr:'11 S Green St', 
			org_city:'Chicago', 
			org_state:'IL', 
			org_zipcode:'60607', 
			pos_endorsements:'0', 
			neg_endorsements:'69', 
			org_type:'housing'
		},
		{
			org_name:'Brownstone Realty LTD', 
			org_phone:'3038328155', 
			org_st_addr:'789 Sherman St', 
			org_city:'Denver', 
			org_state:'CO', 
			org_zipcode:'80203', 
			pos_endorsements:'1', 
			neg_endorsements:'113', 
			org_type:'housing'
		}
	];
}

function makeMaliciousOrg(){
	const maliciousOrg={
		org_name:'Naughty naughty very naughty <script>alert("xss");</script>',
		org_phone:'9185997180',
		org_st_addr:`Bad image <img src="https://url.to.file.which/does-not.exist" onerror="alert(document.cookie);">. But not <strong>all</strong> bad.`,
		org_city:'tulsa',
		org_state:'OK',
		org_zipcode:'74107',
		pos_endorsements:15,
		pos_endorsements:2,
		org_type:'housing'	  
	}
	const expectedOrg={
	  ...maliciousOrg,
	  org_name:'Naughty naughty very naughty &lt;script&gt;alert(\"xss\");&lt;/script&gt;',
	  org_st_addr:`Bad image <img src="https://url.to.file.which/does-not.exist">. But not <strong>all</strong> bad.`
	}
	return {
	  maliciousOrg,
	  expectedOrg,
	}
}

function makeUsersArray(){
	return [
		{
			id:1,
			username:'user1', 
			f_name:'jake', 
			l_name:'todd', 
			password:'somePass1', 
			email:'jake.todd@email.com', 
			city:'Tulsa', 
			user_state:'OK', 
			zipcode:'74008',
			date_registered:'2020-08-07 15:21:25'
		},
	  	{	
			id:2,
			username:'user2',
			f_name:'sarah',
			l_name:'shelly',
			password:'somePass2',
			email:'sarah.shelly@email.com',
			city:'New Orleans',
			user_state:'LA',
			zipcode:'70032',
			date_registered:'2020-08-07 15:21:25'
		},
	  	{	
			id:3,
			username:'user3',
			f_name:'tim',
			l_name:'tebow',
			password:'somePass3',
			email:'ttebow@email.com',
			city:'Sacramento',
			user_state:'CA',
			zipcode:'94203',
			date_registered:'2020-08-07 15:21:25'
		},
	  	{	
			id:4,
			username:'user4',
			f_name:'crystal',
			l_name:'ball',
			password:'somePass4',
			email:'crystalsball@email.com',
			city:'Chicago',
			user_state:'IL',
			zipcode:'60290',
			date_registered:'2020-08-07 15:21:25'
		},
	  	{
			id:5,
			username:'user5',
			f_name:'jimmy',
			l_name:'schmidts',
			password:'somePass5',
			email:'takinaschmidts@email.com',
			city:'Denver',
			user_state:'CO',
			zipcode:'80203',
			date_registered:'2020-08-07 15:21:25'
		}
	];
}

function makeCommentsArray(){
	return [
		{
			id:1,
			title:'Total waste of time!',
			user_id:'1',
			org_id:'1',
			content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
			date_published:'2020-08-10 16:21:06'
		},
  		{
			id:2,
			title:'Great Place',
			user_id:'2',
			org_id:'2',
			content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
			date_published:'2020-08-10 16:21:06'
		},
  		{
			id:3,
			title:'Terrible!',
			user_id:'3',
			org_id:'3',
			content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
			date_published:'2020-08-10 16:21:06'
		},
  		{
			id:4,
			title:'Unbelievable!',
			user_id:'4',
			org_id:'4',
			content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
			date_published:'2020-08-10 16:21:06'
		},
  		{
			id:5,
			title:'Highly recommend',
			user_id:'5',
			org_id:'5',
			content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
			date_published:'2020-08-10 16:21:06'
		}
	];
}

function makeMaliciousComment(){
	const maliciousComment={
	  	id:911,
	  	title:'Naughty naughty very naughty <script>alert("xss");</script>',
		user_id:'1',
		org_id:'1',
		content:`Bad image <img src="https://url.to.file.which/does-not.exist" onerror="alert(document.cookie);">. But not <strong>all</strong> bad.`,
		date_published:new Date().toISOString()
	}
	const expectedComment={
	  ...maliciousComment,
	  title:'Naughty naughty very naughty &lt;script&gt;alert(\"xss\");&lt;/script&gt;',
	  content: `Bad image <img src="https://url.to.file.which/does-not.exist">. But not <strong>all</strong> bad.`
	}
	return {
	  maliciousComment,
	  expectedComment,
	}
}

function makeEndorsementsArray(){
	return [
		{
			id:1,
			user_id:'1',
			org_id:'1',
			endorsement:'0',
			date_published:'2020-08-09 17:15:05'
		},
		{
			id:2,
			user_id:'2',
			org_id:'2',
			endorsement:'1',
			date_published:'2020-08-09 17:15:05'
		},
		{
			id:3,
			user_id:'3',
			org_id:'3',
			endorsement:'0',
			date_published:'2020-08-09 17:15:05'
		},
		{
			id:4,
			user_id:'4',
			org_id:'4',
			endorsement:'0',
			date_published:'2020-08-09 17:15:05'
		},
		{
			id:5,
			user_id:'5',
			org_id:'5',
			endorsement:'1',
			date_published:'2020-08-09 17:15:05'
		}
	];
}

function cleanTables(db){
    return db.transaction(trx=>
    	trx.raw(
        	`TRUNCATE
         	organizations`
      	)
      	.then(()=>
        	Promise.all([
        		trx.raw(`ALTER SEQUENCE organizations_id_seq minvalue 0 START WITH 1`),
        		trx.raw(`SELECT setval('organizations_id_seq', 0)`),
        	])
      	)
    )
}

module.exports={
	makeOrgsArray,
	makeMaliciousOrg,
	makeUsersArray,
	makeCommentsArray,
	makeMaliciousComment,
	makeEndorsementsArray,
	cleanTables
}