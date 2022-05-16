var nodemailer = require("nodemailer");

var transporter = nodemailer.createTransport({
    host: 'smtp-mail.outlook.com',
    port: 587,
    secure: false,
    auth: {
        user: 'alguel1998@hotmail.com',
        pass: '***********'
    }
});

var mailOptions = {
  from: 'kaan.eray@mni.thm.de',
  to:'ufuk.gueler@mni.thm.de',
  subject: 'Chronische Dummheit',
    text: 'Glückwunsch sie wurden zum Idioten Nummer 1, Bundesweit, gewählt!'
};

transporter.sendMail(mailOptions,function(error,info){
    if (error) {
        console.log(error);
    } else {
        console.log('Email sent: ' + info.response)
    }

});

