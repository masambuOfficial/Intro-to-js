const faker = require('faker');
const nodemailer = require('nodemailer');


//Random generated data to be sent to the emails. 
const randomName = faker.name.findName();
const randomEmail = faker.internet.email();
const randomEmployer = faker.company.companyName();
const randomAddress = faker.address.streetAddress();
const randomCountry = faker.address.country();


const data =
    randomName +
    randomEmail +
    randomEmployer +
    randomAddress +
    randomCountry;

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'masambue11@gmail.com',
        pass: 'Eastlink2017',
    },
});

const mailOptions = {
    from: 'jemasambu@gmail.com',
    to: 'e.masambu@student.ciu.ac.ug',
    cc: 'masambue11@gmail.com',
    subject: 'Please utilize this Radom Data I am sending you, Thank you ',
    text: `${data}`,
};
transporter.sendMail(mailOptions, (err, data) => {
    if (err) {
        console.log(err);
        console.log('Could not send email because of error');
    } else {
        console.log(data);
        console.log('Email was sent successfully');
    }
});