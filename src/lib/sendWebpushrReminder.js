import fetch from 'node-fetch';

export async function sendWebpushrNotification(title, message, url) {
  const API_KEY = process.env.WEBPUSHR_REST_API_KEY;
  const payload = {
    title,
    message,
    target_url: url,
  };

  const res = await fetch('https://api.webpushr.com/v1/notification/send/all', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'webpushrKey': API_KEY,
      'webpushrAuthToken': process.env.WEBPUSHR_AUTH_TOKEN,
    },
    body: JSON.stringify(payload),
  });
  console.log('Notification sent:', await res.text());
}