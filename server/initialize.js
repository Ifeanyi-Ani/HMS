// initialize.js

const readline = require('readline');
const mongoose = require('mongoose');
const User = require('./models/users/User'); // Import your User model
const bcrypt = require('bcrypt');
const dotenv = require('dotenv');

dotenv.config();

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

async function initializeSystem() {
  try {
    // Connect to the database
    await mongoose.connect(process.env.CON_STR, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    // Prompt the administrator for superadmin details
    rl.question('Enter superadmin firstname: ', firstname => {
      rl.question('Enter superadmin lastname: ', lastname => {
        rl.question('Enter superadmin email: ', email => {
          rl.question('Enter superadmin gender (male/female): ', gender => {
            rl.question(
              'Enter superadmin date of birth (YYYY-MM-DD): ',
              dob => {
                rl.question('Enter superadmin address: ', address => {
                  rl.question('Enter superadmin password: ', async password => {
                    rl.question(
                      'Confirm superadmin password: ',
                      async confirmPassword => {
                        // Check if passwords match
                        if (password !== confirmPassword) {
                          console.error(
                            'Passwords do not match. Initialization failed.'
                          );
                          rl.close();
                          process.exit(1);
                        }

                        // Hash the password before storing it
                        const hashedPassword = await bcrypt.hash(password, 12);

                        // Create the superadmin user
                        const superadmin = new User({
                          firstname,
                          lastname,
                          email,
                          gender,
                          dob,
                          address,
                          password: hashedPassword,
                          role: 'superadmin',
                        });

                        // Save the superadmin user to the database
                        await superadmin.save();

                        console.log('Superadmin account created successfully.');
                        rl.close();
                        process.exit(0); // Exit the initialization script
                      }
                    );
                  });
                });
              }
            );
          });
        });
      });
    });
  } catch (error) {
    console.error('Initialization error:', error);
    process.exit(1); // Exit with an error code
  }
}

initializeSystem();
