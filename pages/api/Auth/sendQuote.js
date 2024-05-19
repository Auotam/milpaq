import nodemailer from 'nodemailer';


export default async function handler(req, res) {
  

  if (req.method === 'POST') {
    const { userEmail, adminEmail, selectedData } = req.body;

    // Configure your Nodemailer transport
    const transporter = nodemailer.createTransport({
      service: 'Gmail', // or any other email service
      auth: {
        user: process.env.EMAIL_USER, // your email address
        pass: process.env.EMAIL_PASS, // your email password
      },
    });

    // Format the quote details as an HTML table
    const formatQuoteDetails = (data) => {
      return `
        <table>
          <thead>
            <tr>
              <th>Package Name</th>
              <th>Code</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            ${data.map(item => `
              <tr>
                <td>${item.component}</td>
                <td>${item.code}</td>
                <td>${item.description}</td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      `;
    };

    const quoteDetailsHtml = formatQuoteDetails(selectedData);

    try {
      // Send email to admin
      await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: adminEmail,
        subject: 'New Quote Request',
        html: `
          <p>A new quote request has been submitted by ${userEmail}:</p>
          ${quoteDetailsHtml}
        `,
      });

      // Send thank-you email to user
      await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: userEmail,
        subject: 'Thank You for Your Quote Request',
        html: `
          <p>A new quote request has been submitted successfully:</p>
          ${quoteDetailsHtml}
          <p>Thank you for requesting a quote. We will get back to you shortly.</p>
        `,
      });

      // Show success toast message
      

      // Return success response
      res.status(200).json({ message: 'Emails sent successfully' });
    } catch (error) {
      console.error('Email sending error:', error);

      // Show error toast message
      

      res.status(500).json({ message: 'Failed to send emails' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
