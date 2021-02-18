BEGIN;

TRUNCATE
	users,
	organizations,
  	comments,
	endorsements
RESTART IDENTITY CASCADE;

INSERT INTO users (username, f_name, l_name, password, email, city, user_state, zipcode)
VALUES
	('user1', 'jake', 'todd', '$2a$12$H0xi.P6RqnjBKUafIwtkU.f2HGveLRVIeYEFCQyUzogczTZc45xR2', 'jake.todd@email.com', 'Tulsa', 'OK', '74008'),
	('user2', 'sarah', 'shelly', '$2a$12$auzTYZdw7lymV8Uj1BnNTOTHQI.7ljkDFKyZ5ELhWCwzU5Fxmdv.e', 'sarah.shelly@email.com', 'New Orleans', 'LA', '70032'),
	('user3', 'tim', 'tebow', '$2a$12$ctXwnO2DAmwYExLJf8xiaeWz/sNN094vQiD8U25QxkNLQ6cio0rHu', 'ttebow@email.com', 'Sacramento', 'CA', '94203'),
	('user4', 'crystal', 'ball', '$2a$12$y0DYFcGkfqLT8F8Z3zl/8eZ1x6P6Pa9wSW.VQtucVTOEfHLw7UX/q', 'crystalsball@email.com', 'Chicago', 'IL', '60290'),
	('user5', 'jimmy', 'schmidts', '$2a$12$06Gtx4qlEGrFzxBX56fJq.1zmpYi0uj8EJxgawItRaSWG0GYI2AR.', 'takinaschmidts@email.com', 'Denver', 'CO', '80203');

INSERT INTO organizations 
	(
		org_name,
		org_phone,
		org_st_addr,
		org_city,
		org_state,
		org_zipcode,
		pos_endorsements,
		neg_endorsements,
		org_type
	)
VALUES
	('Waterside Apartments', '9185997180', '1703 S Jackson Ave West', 'tulsa', 'OK', '74107', 15, 2, 'housing'),
	('The Giani Building', '5045990987', '600 Canal St', 'New Orleans', 'LA', '70130', 3, 13, 'housing'),
	('Broadleaf Apartments', '9163915100', '40 Park City Ct', 'Sacramento', 'CA', '95831', 14, 56, 'housing'),
	('Gateway West Loop', '3129670513', '11 S Green St', 'Chicago', 'IL', '60607', 0, 69, 'housing'),
	('Brownstone Realty LTD', '3038328155', '789 Sherman St', 'Denver', 'CO', '80203', 1, 113, 'housing');

INSERT INTO comments (title, user_id, org_id, comment)
VALUES
	('Total waste of time!', '1', '1', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'),
	('Great Place', '2', '2', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'),
	('Terrible!', '3', '3', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'),
	('Unbelievable!', '4', '4', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'),
	('Highly recommend', '5', '5', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.');

INSERT INTO endorsements (user_id, org_id, endorsement)
VALUES
	('1', '1', '0'),
	('2', '2', '1'),
	('3', '3', '0'),
	('4', '4', '0'),
	('5', '5', '1');

COMMIT;