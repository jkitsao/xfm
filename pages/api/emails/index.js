var postmark = require("postmark");

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      // Initialize the Postmark client
      const client = new postmark.ServerClient(
        "a2f2a7e4-7034-487e-bad3-f325f6bd4a5c"
      );

      // Send an email using a template
      await client.sendEmailWithTemplate({
        From: "kitsao@stream.ke",
        To: req.body.recepient,
        TemplateAlias: "playlist-notification",
        TemplateModel: {
          product_url: "https://www.xfm.co.ke",
          product_name: "XFM Online",
          company_name: "stream.ke",
          company_address: "Nairobi",
          //   username: req.body.username,
          //   name: req.body.name,
          //   amount: req.body.amount,
          //   title: req.body.title,
          playlist_url: req.body.url,
        },
      });

      // Send a success response
      res.status(200).json({ message: "Email sent successfully" });
    } catch (error) {
      // If sending email fails, send an error response
      console.error("Error sending email:", error);
      res.status(500).json({ error: "Failed to send email" });
    }
  } else {
    // If request method is not POST, send an error response
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
