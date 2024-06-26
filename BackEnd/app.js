const express = require('express');
const path = require('path');
const pug = require('pug');
const mysql = require('mysql');
const { error } = require('console');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors');

const { get } = require('http');

// src = "https://cdn.rawgit.com/davidshimjs/qrcodejs/gh-pages/qrcode.min.js";

// new Date object
let b_date = new Date();


const app = express();

app.use(cors());
app.use('/public', express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, '/views'));
app.use(express.urlencoded({ extended: true }));

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "mini_project"

});
db.connect((err) => {
    if (err) throw err;

    console.log('database connected');

});


app.get('/', (req, res) => {

    res.render('index');
});

app.get('/UserSignup', (req, res) => {
    res.render('UserSignup');
  });

app.get('/verifyOTP', (req, res) => {

    res.render('verifyOTP');
});

app.get('/UserLogin', (req, res) => {

    res.render('UserLogin');
});

app.get('/PhysicalAppointments', (req, res) => {

    res.render('PhysicalAppointments');
});

app.get('/OnlineAppointments', (req, res) => {

    res.render('OnlineAppointments');
});

app.get('/Appointments', (req, res) => {

    res.render('Appointments');
});


app.get('/DoctorLogin', (req, res) => {

    res.render('DoctorLogin');
});

app.get('/SelectDate', (req, res) => {

    res.render('SelectDate');
});

app.get('/UserProfile', (req, res) => {

    res.render('UserProfile');
});

app.get('/StudentRecords', (req, res) => {

    res.render('StudentRecords');
});

app.get('/About', (req, res) => {

    res.render('About');
});

app.get('/Service', (req, res) => {

    res.render('Service');
});

app.get('/OurStaff', (req, res) => {

    res.render('OurStaff');
});

app.get('/Emergency', (req, res) => {

    res.render('Emergency');
});



app.get('/StudentDetails', (req, res) => {
    // Query to fetch student data from the database
    const sqlQuery = `SELECT * FROM student_profile`;

    // Execute the query
    db.query(sqlQuery, (error, results) => {
        if (error) {
            console.error('Error querying database:', error);
            // Render an error page or handle the error appropriately
            res.status(500).send('Internal Server Error');
            return;
        }

        if (results.length === 0) {
            // If no student data found, render a page indicating that
            res.render('NoStudentDataFound');
            return;
        }

        // Extract the first student's data (assuming you only expect one student's data)
        const student = results[0];

        // Render the StudentDetails view and pass the student object to it
        res.render('StudentDetails', { student });
    });
});



const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'hvdisurikadhananji@gmail.com',
      pass: 'izwl tcze klll eyjq'
    }
  });


  app.use(bodyParser.urlencoded({ extended: true }));

  

  app.get('/getAppointments', (req, res) => {
    var doctor = req.query.doctor;
    var date = req.query.date;
    var time = req.query.time;

    var sql_get_appointments = `SELECT * FROM appointments WHERE doctor = '${doctor}' AND date = '${date}' AND time = '${time}'`;

    db.query(sql_get_appointments, function(error, appointments) {
        if (error) {
            console.error('Error fetching appointments: ' + (error.stack || error.message));
            throw error;
        }
        res.render('getAppointments', { doctor, date, time, appointments });
    });
});



  
  
  app.post('/UserSignup', (req, res) => {
    console.log(req)
    const { userType,email,username,password } = req.body;
  
    const tableName = userType === 'student' ? 'student_login' : 'doctor_login';
 
    db.query(`SELECT * FROM ${tableName} WHERE email = ?`, [email], (err, results) => {
        if (err) throw err;
  
      if (results.length > 0) {
        res.send('Email already exists');
      } else {
        // Insert new student
        const otp = Math.floor(100000 + Math.random() * 900000);
        // const student_login = { userType, email, username, password, verificationCode };
        // db.query('INSERT INTO student_login SET ?', student_login, (err, results) => {
        //   if (err) throw err;
          const newUser = { userType, email, username, password, otp };
      db.query(`INSERT INTO ${tableName} SET ?`, newUser, (err, results) => {
        if (err) throw err;
  
          // Send verification email
          const mailOptions = {
            //from: 'devinimadumali@gmail.com',
            from: 'hvdisurikadhananji@gmail.com',
            to: email,
            subject: 'Email Verification',
            text: `Your otp code is: ${otp}`
          };
  
          transporter.sendMail(mailOptions, (err, info) => {
            if (err) {
              console.log(err);
              res.send('Error sending email');
            } else {
              console.log('Email sent: ' + info.response);
              res.send('Verification email sent');
            }

});
});
    
}});
});


app.post('/verifyOTP', (req, res) => {
    const { userType, otp } = req.body;
    let tableName = '';

    if (userType == 'student') {
        tableName = 'student_login';
    } else if (userType == 'doctor') {
        tableName = 'doctor_login';
    } else {
        res.status(((400))).json((({ message: 'Invalid user type' })));
        return;
    }
    

    // Check if the OTP exists in the database for the selected user type
    db.query(`SELECT * FROM ${tableName} WHERE otp = ?`, [otp], (err, results) => {
        if (err) {
            console.error('Error verifying OTP:', err);
            res.status(500).json({ message: 'Internal server error' });
            return;
        }

        if (results.length > 0) {
            // OTP is valid, update the database to mark OTP verification as successful
            const email = results[0].email; // Assuming email is the identifier for the user
            db.query(`UPDATE ${tableName} SET isVerified = 1 WHERE email = ?`, [email], (updateErr, updateResults) => {
                if (updateErr) {
                    console.error('Error updating database after OTP verification:', updateErr);
                    res.status(500).json({ message: 'Internal server error' });
                    return;
                }

                // Return success message
                res.json({ message: `OTP verified successfully and database updated for ${userType}` });
            });
        } else {
            // OTP is invalid
            res.status(400).json({ message: `Invalid OTP for ${userType}. Please try again.` });
        }
    });
});


app.post('/UserProfile', (req, res) => {
    var fullName = req.body.fullName;
    var reg_number = req.body.reg_number;
    var dateOfBirth = req.body.dateOfBirth;
    var weight = req.body.weight;
    var height = req.body.height;
    var tonguea = req.body.tonguea;
    var hearta = req.body.hearta;
    var heartb = req.body.heartb;
    var heartc = req.body.heartc;
    var heartd = req.body.heartd;
    var hearte = req.body.hearte;
    var heartf = req.body.heartf;
    var lungsa = req.body.lungsa;
    var lungsb = req.body.lungsb;
    var abondomena = req.body.abondomena;
    var abondomenb = req.body.abondomenb;
    var abondomenc = req.body.abondomenc;
    var abondomend = req.body.abondomend;
    var nervousa = req.body.nervousa;
    var nervousb = req.body.nervousb;
    var nervousc = req.body.nervousc;
    var nervousd = req.body.nervousd;
    var nervouse = req.body.nervouse;
    var nervousf = req.body.nervousf;
    var nervousg = req.body.nervousg;
    var operationa = req.body.operationa;
    var operationb = req.body.operationb;
    var operationc = req.body.operationc;
    var operationd = req.body.operationd;
    var x_ray = req.body.x_ray;
    var physicalDefect = req.body.physicalDefect;

    // Insert the form data into the database
    var sql_create_table = `CREATE TABLE IF NOT EXISTS student_profile (
                            id INT AUTO_INCREMENT,
                            fullName VARCHAR(255),    
                            reg_number VARCHAR(15),   
                            dateOfBirth DATE,
                            weight DECIMAL(10,2), 
                            height DECIMAL(10,2),
                            tonguea VARCHAR(255),
                            hearta VARCHAR(255),
                            heartb VARCHAR(255),
                            heartc VARCHAR(255),
                            heartd VARCHAR(255),
                            hearte VARCHAR(255),
                            heartf VARCHAR(255),
                            lungsa VARCHAR(255),
                            lungsb VARCHAR(255),
                            abondomena VARCHAR(255),
                            abondomenb VARCHAR(255),
                            abondomenc VARCHAR(255),
                            abondomend VARCHAR(255),
                            nervousa VARCHAR(255),
                            nervousb VARCHAR(255),
                            nervousc VARCHAR(255),
                            nervousd VARCHAR(255),
                            nervouse VARCHAR(255),
                            nervousf VARCHAR(255),
                            nervousg VARCHAR(255),
                            operationa VARCHAR(255),
                            operationb VARCHAR(255),
                            operationc VARCHAR(255),
                            operationd VARCHAR(255),
                            physicalDefect VARCHAR(255),
                            PRIMARY KEY (id)
                            ) ENGINE=InnoDB DEFAULT CHARSET=latin1;`;
    var sql_insert = `INSERT INTO student_profile (fullName, reg_number, dateOfBirth,weight, height, tonguea, hearta,heartb,heartc,heartd,hearte, heartf,lungsa,lungsb, abondomena,abondomenb,abondomenc,abondomend, nervousa, nervousb,nervousc,nervousd,nervouse,nervousf,nervousg,operationa,operationb,operationc,operationd,physicalDefect) 
    VALUES 
    ('${fullName}', '${reg_number}', '${dateOfBirth}','${weight}', '${height}', '${tonguea}', '${hearta}','${heartb}','${heartc}','${heartd}','${hearte}','${heartf}','${lungsa}','${lungsb}', '${abondomena}','${abondomenb}','${abondomenc}','${abondomend}', '${nervousa}', '${nervousb}','${nervousc}','${nervousd}','${nervouse}','${nervousf}','${nervousg}','${operationa}','${operationb}','${operationc}','${operationd}','${physicalDefect}')`;

    // Execute the query
    db.query(sql_create_table, function(error, result) {
        if (error) {
            console.error('Error creating table: ' + error.stack);
            throw error;
        }
        console.log('Table created successfully');

        // Insert data into the table
        db.query(sql_insert, function(error, result) {
            if (error) {
                console.error('Error inserting data: ' + error.stack);
                throw error;
            }
            console.log('Data inserted successfully');
            
            // Redirect after successful insertion
            res.redirect("/StudentRecords");
        });
    });
});

app.post('/UserLogin', (req, res) => {


    const db = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database: "mini_project"

    })

    db.connect((err) => {

        // if(err) throw err;
        console.log("connected");

    })

    var userType = req.body.userType;
    var usernamelogin = req.body.usernamelogin;
    var passwordlogin = req.body.passwordlogin;

    // res.send(`${email1} ${password1}`);




    var sql3 = `SELECT password FROM student_login WHERE username = '${usernamelogin}'`


    db.query(sql3, (err, rows, result) => {
        if (err) {
            throw err;
        }
        else if (rows.length != 0) {

            // res.send(rows[0].password)

            if (rows[0].password == passwordlogin) {

                res.render('UserProfile');

            }
            else {

                res.render('UserLogin', { fail_message: "Wrong Password" });

            }

        }
        else {
            res.render('UserLogin', { fail_message: "Wrong Email" });
        }


    });
});


// app.post('/UserLogin', (req, res) => {
//     const { userType, email, password } = req.body;
//     let tableName = '';

//     if (userType === 'student') {
//         tableName = 'student_login';
//     } else if (userType === 'doctor') {
//         tableName = 'doctor_login';
//     } else {
//         res.status(400).json({ message: 'Invalid user type' });
//         return;
//     }

//     // Query the database to retrieve the password and isVerified status associated with the provided email
//     const sql = `SELECT password, isVerified FROM ${tableName} WHERE email = ?`;
//     db.query(sql, [email], (err, rows) => {
//         if (err) {
//             console.error('Database query error:', err);
//             res.status(500).json({ message: 'Internal server error' });
//             return;
//         }

//         if (rows.length === 0) {
//             res.status(401).json({ message: 'User not found' });
//             return;
//         }

//         const storedPassword = rows[0].password;
//         const isVerified = rows[0].isVerified;

//         // Compare the stored password with the provided password
//         if (password === storedPassword && isVerified === 1) {
//             // Login successful
//             res.status(200).json({ message: 'Login successful', userType });
//         } else if (isVerified !== 1) {
//             // User is not verified
//             res.status(401).json({ message: 'Email not verified. Please verify your email before logging in.' });
//         } else {
//             // Invalid email or password
//             res.status(401).json({ message: 'Invalid email or password' });
//         }
//     });
// });

app.post('/UserLogin', (req, res) => {
    const { email, password, userType } = req.body;

    // Check if userType is "student"
    if (userType === 'Student') {
        // Query the database to retrieve the password associated with the provided email for students
        const sql = 'SELECT password FROM student_login WHERE email = ?';

        db.query(sql, [email], (err, rows) => {
            if (err) {
                console.error('Database query error:', err);
                res.status(500).json({ message: 'Internal server error' });
                return;
            }

            if (rows.length === 0) {
                // User not found
                res.status(401).json({ message: 'User not found' });
                return;
            }

            const storedPassword = rows[0].password;

            // Compare the stored password with the provided password
            if (password === storedPassword) {
                // Login successful for student
                res.status(200).json({ message: 'Login successful for student' });
            } else {
                // Invalid email or password for student
                res.status(401).json({ message: 'Invalid email or password for student' });
            }
        });
    } else if (userType === 'Doctor') {
        // Query the database to retrieve the password associated with the provided email for doctors
        const sql = 'SELECT password FROM student_login WHERE userType = ? AND email = ?';

        db.query(sql, [userType, email], (err, rows) => {
            if (err) {
                console.error('Database query error:', err);
                res.status(500).json({ message: 'Internal server error' });
                return;
            }


            if (rows.length === 0) {
                // User not found or not a doctor
                res.status(401).json({ message: 'User not found or not a doctor' });
                return;
            }

            const storedPassword = rows[0].password;

            // Compare the stored password with the provided password
            if (password === storedPassword) {
                // Login successful for doctor
                res.status(200).json({ message: 'Login successful for doctor' });
            } else {
                // Invalid email or password for doctor
                res.status(401).json({ message: 'Invalid email or password for doctor' });
            }
        });
    } else {
        // Invalid userType
        res.status(400).json({ message: 'Invalid userType' });
    }
});

app.post('/StudentRecords', (req, res) => {
    const reg_number = req.body.regnumber; // Use correct field name from the frontend

    // Query the database to fetch the student's details based on the registration number
    const sql_query = `SELECT * FROM student_profile WHERE reg_number = ?`;
    db.query(sql_query, [reg_number], (error, results) => {
        if (error) {
            console.error('Error querying database:', error);
            // Send detailed error response
            return res.status(500).json({ error: 'Internal Server Error' });
        }

        if (results.length === 0) {
            // If no matching student found, send appropriate response
            return res.status(404).json({ error: 'No student found with the provided registration number' });
        }

        // Send the student's details in the response
        res.status(200).json(results[0]);
    });
});



app.post('/PhysicalAppointments', (req, res) => {    
    
    var appointment_type = req.body.appointment_type;
    var doctor = req.body.doctor;
    var reg_number = req.body.reg_number;
    var phone_number = req.body.phone_number;
    var email = req.body.email;
    var date = req.body.date;
    var time = req.body.time;
    var message = req.body.message;
    
    // Define year, month, and day
    var currentDate = new Date();
    var year = currentDate.getFullYear();
    var month = currentDate.getMonth() + 1; // Months are zero-based (0 for January)
    var day = currentDate.getDate();
    
    var sql_create_table = `CREATE TABLE IF NOT EXISTS appointments  (
        id INT AUTO_INCREMENT,
        doctor VARCHAR(35),
        reg_number VARCHAR(255),
        phone_number INT(10),
        email VARCHAR(255),
        date INT(10),
        month INT(5),
        year INT(5),
        time TIME,
        appointment_type VARCHAR(100),
        message VARCHAR(255),
        PRIMARY KEY (id)
    ) ENGINE=InnoDB DEFAULT CHARSET=latin1`;

    var sql_insert = `INSERT INTO appointments  
                        (appointment_type, doctor, reg_number, phone_number, email, date, month, year, time, message) 
                      VALUES 
                        ('${appointment_type}', '${doctor}', '${reg_number}', '${phone_number}', '${email}', '${date}', '${month}', '${year}', '${time}', '${message}')`;

    // Query to count the number of appointments for the selected time slot
    var sql_count_appointments = `SELECT COUNT(*) AS count FROM appointments WHERE date = '${date}' AND time = '${time}'`;

    db.query(sql_create_table, function(error, result) {
        if (error) {
            console.error('Error creating table: ' + error.stack);
            throw error;
        }
        console.log('Table created successfully');

        // Check if the selected time slot is full
        db.query(sql_count_appointments, function(error, result) {
            if (error) {
                console.error('Error counting appointments: ' + (error.stack || error.message));
                throw error;
            }
            var count = result[0].count;
            if (count >= 5) {
                // Time slot is full, display message to choose another time slot
                res.send("The time slot is full. Please choose another time slot.");
            } else {
                // Insert data into the table
                db.query(sql_insert, function(error, result) {
                    if (error) {
                        console.error('Error inserting data: ' + (error.stack || error.message));
                        throw error;
                    }
                    console.log('Data inserted successfully');
                    // Redirect after successful insertion
                    res.send("Data inserted successfully. Your appointment is booked.");
                });
            }
        });
    });
});


app.post('/OnlineAppointments', (req, res) => {      

    var appointment_type = req.body.appointment_type;
    var doctor = req.body.doctor;
    var reg_number = req.body.reg_number;
    var phone_number = req.body.phone_number;
    var email = req.body.email;
    var date = req.body.date;
    var time = req.body.time;
    var message = req.body.message;
    
    var currentDate = new Date();
    var year = currentDate.getFullYear();
    var month = currentDate.getMonth() + 1; // Months are zero-based (0 for January)
    var day = currentDate.getDate();
    
    var sql_insert = `INSERT INTO appointments  
                        (appointment_type, doctor, reg_number, phone_number, email, date, month, year, time, message) 
                      VALUES 
                        ('${appointment_type}', '${doctor}', '${reg_number}', '${phone_number}', '${email}', '${date}', '${month}', '${year}', '${time}', '${message}')`;

    // SQL query to count the number of appointments for the selected time slot
    var sql_count_appointments = `SELECT COUNT(*) AS count FROM appointments WHERE date = '${date}' AND time = '${time}'`;


    db.query(sql_insert, function(error, result) {
        if (error) {
            console.error('Error inserting data: ' + (error.stack || error.message));
            throw error;
        }
        console.log('Data inserted successfully');

        // Check if the selected time slot is full
        db.query(sql_count_appointments, function(error, result) {
            if (error) {
                console.error('Error counting appointments: ' + (error.stack || error.message));
                throw error;
            }
            var count = result[0].count;
            if (count >= 5) {
                // Time slot is full, send message to choose another time slot
                res.send("The time slot is full. Please choose another time slot.");
            } else {
                // Appointment is booked, send email confirmation
                sendEmailConfirmation(appointment_type, email, doctor, date, time, res);
            }
        });
    });
});



// Function to send email confirmation
function sendEmailConfirmation(appointment_type, email, doctor, date, time, res) {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            // user: 'devinimadumali@gmail.com', 
            // pass: 'dev@1118' 
            user:  'hvdisurikadhananji@gmail.com',
            pass:   'izwl tcze klll eyjq'
        }
    });

    const joinOnlineLink = 'https://us05web.zoom.us/j/81337908562?pwd=K3Y1N3NMcVdnNEE0Y01Fb2dvK0VlZz09';

    // Define email content
    const mailOptions = {
        from: 'hvdisurikadhananji@gmail.com', 
        to: email, 
        subject: 'Online Appointment Confirmation', 
        html: `
            <p>Dear Student,</p>
            <p>Your online appointment with ${doctor} on ${date} at ${time} has been successfully booked.</p>
            <p>Click <a href="${joinOnlineLink}">here</a> to join the doctor online at the scheduled time.</p>
            <p>Appointment Details:</p>
            <ul>
                <li><strong>Appointment Type:</strong> ${appointment_type}</li>
                <li><strong>Doctor:</strong> ${doctor}</li>
                <li><strong>Date:</strong> ${date}</li>
                <li><strong>Time:</strong> ${time}</li>
            </ul>
            <p>Thank you for choosing our service.</p>
            <p>Best regards,<br>Your Healthcare Team</p>
        `
    };

    // Send email
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error sending email:', error);
            // Handle error appropriately, e.g., display error message to the user
            res.send('Failed to send confirmation email');
        } else {
            console.log('Email sent:', info.response);
            // Handle success appropriately, e.g., redirect user to a confirmation page
            res.send("Data inserted successfully. Your appointment is booked. Confirmation email sent.");
        }
    });
}

app.post('/DoctorLogin', (req, res) => {


    const db = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database: "mini_project"

    })

    db.connect((err) => {

        // if(err) throw err;
        console.log("connected");

    })


    var emaillogin = req.body.emaillogin;
    var passwordlogin = req.body.passwordlogin;

    




    var sql3 = `SELECT password FROM user WHERE email = '${emaillogin}'`


    db.query(sql3, (err, rows, result) => {
        if (err) {
            throw err;
        }
        else if (rows.length != 0) {

            // res.send(rows[0].password)

            if (rows[0].password == passwordlogin) {

                res.render('SelectDate');

            }
            else {

                res.render('DoctorLogin', { fail_message: "Wrong Password" });

            }

        }
        else {
            res.render('DoctorLogin', { fail_message: "Wrong Email" });
        }


    });




});


// app.post('/DoctorLogin', (req, res) => {


//     const db = mysql.createConnection({
//         host: "localhost",
//         user: "root",
//         password: "",
//         database: "mini_project"

//     })

//     db.connect((err) => {

//         // if(err) throw err;
//         console.log("connected");

//     })


//     var emaillogin = req.body.emaillogin;
//     var passwordlogin = req.body.passwordlogin;

    




//     var sql3 = `SELECT password FROM user WHERE email = '${emaillogin}'`


//     db.query(sql3, (err, rows, result) => {
//         if (err) {
//             throw err;
//         }
//         else if (rows.length != 0) {

//             // res.send(rows[0].password)

//             if (rows[0].password == passwordlogin) {

//                 res.render('SelectDate');

//             }
//             else {

//                 res.render('DoctorLogin', { fail_message: "Wrong Password" });

//             }

//         }
//         else {
//             res.render('DoctorLogin', { fail_message: "Wrong Email" });
//         }


//     });




// });






// app.post('/selectDate', (req, res) => {
//     var doctor = req.body.doctor;
//     var date = req.body.date;
    
//     // Redirect to the getAppointments page with the doctor, date, and time parameters
//     res.redirect(`/getAppointments`);
// });


app.post('/selectDate', async (req, res) => {
    var doctor = req.body.doctor;
    var date = req.body.date;
    
    try {
        // Query the database to check if appointments exist for the selected doctor and date
        const appointments = await db.query('SELECT * FROM appointments WHERE doctor = ? AND date = ?', [doctor, date]);

        if (appointments.length > 0) {
            // Appointments found, handle them accordingly (e.g., display them)
            res.render('appointments', { appointments: appointments });
        } else {
            // No appointments found for the selected criteria, send a message back to the client
            res.status(200).send("No appointments found for the selected criteria.");
        }
    } catch (error) {
        // Error handling if database query fails
        console.error("Error fetching appointments:", error);
        res.status(500).send("Internal server error");
    }
});


app.listen(5001, () => {
    console.log(`listening on port 5001`);

});



