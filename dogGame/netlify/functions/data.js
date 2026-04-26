exports.handler = async (event) => {
    const data = JSON.parse(event.body);

    const ip =
        event.headers["x-forwarded-for"] ||
        event.headers["client-ip"];

    console.log("IP:", ip);
    console.log("DATA CLIENT:", data);

    return {
        statusCode: 200,
        body: JSON.stringify({ ok: true })
    };
};