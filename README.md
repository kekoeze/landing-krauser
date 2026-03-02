webpage-krauser-2

## Email Configuration

This project includes a contact form that sends emails using nodemailer. To configure it:

1. Create a `.env.local` file in the root directory
2. Add your email credentials:

```env
# For Gmail (recommended):
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-gmail-app-password

# For other providers:
# EMAIL_HOST=smtp.your-provider.com
# EMAIL_PORT=587
```

### Gmail Setup:
1. Enable 2-factor authentication on your Gmail account
2. Generate an "App Password" in your Google Account settings
3. Use your Gmail address as EMAIL_USER
4. Use the generated app password as EMAIL_PASS

### Other Email Providers:
You can modify the transporter configuration in `app/api/contact/route.ts` to use other email providers like Outlook, Yahoo, or custom SMTP servers.

The contact form will send emails to: `contacto@krauser.com.ar`