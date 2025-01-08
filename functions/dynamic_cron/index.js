'use strict';


const catalyst = require('zcatalyst-sdk-node');

module.exports = async (jobRequest, context) => {
    const catalystApp = catalyst.initialize(context);
    try {
        console.log("Jobs", jobRequest.getAllJobParams());
        const { id, name, email, message, birthday } = jobRequest.getAllJobParams();

        await catalystApp.email().sendMail({
            from_email: 'sakthivel.b@zohocorp.com', 
            to_email: [email],
            html_mode: true,
            subject: `Birthday Wishes for ${name}`,
            content: `Hello ${name},<br><br>${message}`,
        });

        console.log(`Email sent successfully to ${email}`);
        context.closeWithSuccess('Email sent successfully.');
    } catch (error) {
        console.error('Error:', error);
        context.closeWithFailure('Failed to send email.');
    }
};
