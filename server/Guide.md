## API

#### /patients (auth required)

- `GET` : get all patients
- `POST` : create patients (receptionists only)

#### /patients/:id (auth required)

- `GET` : get patient
- `PATCH` : edit patient
- `DELETE` : delete patient

#### /receptionists (auth required)

- `GET` : get all receptionists
- `POST` : create receptionists

#### /receptionists/:id (auth required)

- `GET` : get receptionist
- `PATCH` : edit receptionist
- `DELETE` : delete receptionist

#### /nurses (auth required)

- `GET` : get all nurses
- `POST` : create nurses

#### /nurses/:id (auth required)

- `GET` : get nurse
- `PATCH` : edit nurse
- `DELETE` : delete nurse

#### /doctors (auth required)

- `GET` : get all doctors
- `POST` : create doctors

#### /doctors/:id (auth required)

- `GET` : get doctor
- `PATCH` : edit doctor
- `DELETE` : delete doctor

#### /admins (auth required)

- `GET` : get all admins
- `POST` : create admins

#### /admins/:id (auth required)

- `GET` : get admin
- `PATCH` : edit admin
- `DELETE` : delete admin

#### /users (auth required) (admin only)

- `GET` : get all users
- `POST` : create users

#### /users/:id (auth required) (admin only)

- `GET` : get user
- `PATCH` : edit user
- `DELETE` : delete user

#### /login

- `POST` : login with email and password

## Todo

- [x] Support basic REST APIs.
- [x] Support Authentication and Authorization
- [ ] Manage information of new and existing patience
- [ ] View historical health illness and diagnostics of patient
- [ ] Pharmaceutical billing and laboratory features.
- [x] Various level staff creation: doctor, nurses, cashiers
- [ ] Ward management
- [ ] Instant Patient Reporting after consultation
- [ ] Import / upload information of existing hospital record on its platform.
- [x] Recover the username / password using forgot password strategy
- [ ] Write the tests for all APIs.
- [ ] Make docs with swaggerjs
