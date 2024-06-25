import type { NextApiResponse } from "next";
import { NextResponse } from "next/server";

/**
 * Handles the POST request to subscribe a user to the newsletter.
 *
 * @param {Request} req - The request object containing the user's email.
 * @param {NextApiResponse} res - The response object to send the result.
 * @return {Promise<NextResponse>} A promise that resolves to the response object with the result of the subscription.
 */
export async function POST(req: Request, res: NextApiResponse) {
  // Extract the email from the request body
  const { email } = await req.json();

  // If no email is provided, return a 400 status code with an error message
  if (!email) {
    return res.status(400).json({ error: "Email is required" });
  }

  // Retrieve Mailchimp API credentials and audience ID from environment variables
  const MailchimpKey = process.env.MAILCHIMP_API_KEY;
  const MailchimpServer = process.env.MAILCHIMP_API_SERVER;
  const MailchimpAudience = process.env.MAILCHIMP_AUDIENCE_ID;

  // Construct the Mailchimp API URL for adding a new member to the specified audience
  const customUrl = `https://${MailchimpServer}.api.mailchimp.com/3.0/lists/${MailchimpAudience}/members`;

  // Make a POST request to the Mailchimp API to subscribe the user
  const response = await fetch(customUrl, {
    method: "POST",
    headers: {
      Authorization: `apikey ${MailchimpKey}`, // Include the API key in the request headers
      "Content-Type": "application/json", // Set the content type to JSON
    },
    body: JSON.stringify({
      email_address: email, // Set the email address in the request body
      status: "subscribed", // Set the subscription status to "subscribed"
    }),
  });

  // Parse the response from the Mailchimp API
  const received = await response.json();

  // Return the parsed response as a JSON response
  return NextResponse.json(received);
}
