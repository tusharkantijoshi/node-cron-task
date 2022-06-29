# Tasks

1. Setup node.js process that runs in the background (can be done using pm2)
2. Node scheduler with a given cron expression Scheduler job
3. connect to FTP and download new files and delete them in the remote server
4. Load and parse the Excel file
5. Parse through each row in the file and create OData JSON request
6. Make REST call and get the response
7. Optional: Email the response to a configured email address (need SMTP to send out)

# Tasks Breakdown

1. Setup node server using pm2 that runs in the background
2. Create a cron job that runs after specific interval
3. Connect to FTP Server Create and configure an FTP Server somewhere that returns an excel file with some data
4. Download the excel file
5. Read the excel file and parse it
6. With the parsed data, prepare a request
7. Make a rest call and get the response
8. Setup SMTP
9. Add email service to email the response using SMTP

# Date

06/29/2022:

1. Create and configure an FTP Server somewhere that returns an excel file with some data.
2. Setup node server using pm2 that runs in the background

06/30/2022:

1. Connect, download, parse and read the excel file
2. Create a cron job that runs after specific interval

07/01/2022:

1. With the excel data, prepare a request and make a request to server to get the response
2. Create a cron job that runs after specific interval

07/04/2022:

1. Configure SMTP to send mails
2. Delete the file on the remote server

07/05/2022:

1. Inject the SMTP in the API response to send mails for the data received
2. Update the server structure with the best practices
