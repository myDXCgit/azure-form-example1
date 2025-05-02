module.exports = async function (context, req) {
    const { name, email, message } = req.body;

    context.log("Form submission received:", name, email, message);

    context.res = {
        status: 200,
        body: `Thanks, ${name}! Your message has been received.`
    };
};
