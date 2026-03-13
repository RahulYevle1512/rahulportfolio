'use strict';

// Example AWS Lambda handler for a contact form.
// This file is NOT used by GitHub Pages directly, but you can
// deploy it as a Lambda function behind API Gateway.

exports.handler = async (event) => {
  let body;

  try {
    body = event.body ? JSON.parse(event.body) : {};
  } catch {
    return {
      statusCode: 400,
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({ message: 'Invalid JSON body' }),
    };
  }

  const { name, email, message } = body;

  if (!name || !email || !message) {
    return {
      statusCode: 400,
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({ message: 'Missing required fields' }),
    };
  }

  // In a real function, you could:
  // - Store the message in DynamoDB
  // - Send an email via SES
  // - Create a support ticket, etc.

  console.log('New contact message', { name, email, message });

  return {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    body: JSON.stringify({ message: 'Message received successfully' }),
  };
};

