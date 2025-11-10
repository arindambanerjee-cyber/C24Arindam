# Call Audit Backend API

## Setup

1. Install Node.js (version 14 or above recommended).
2. Navigate to this folder in terminal/command prompt.
3. Run `npm install` to install dependencies.

## Running Locally

- Run `npm start`.
- Backend API will start on port 4000 by default.
- Endpoint is: http://localhost:4000/api/audit

## Deployment

This backend can be deployed on platforms supporting Node.js such as:

- Render.com
- Heroku
- Railway.app
- DigitalOcean App Platform

### Example Render.com deployment

1. Push this code to a GitHub repository.
2. Create a new Web Service on Render.com linking the repo.
3. Set start command as `npm start`.
4. Deploy and note your public URL.
5. Your API endpoint will be `https://your-deploy-url/api/audit`.

## API Usage

- Accepts POST requests with multipart/form-data.
- Required fields:
  - `appId` (string)
  - `prompt` (string)
  - Up to 5 files named `file0` to `file4`.
  
Returns JSON with a mock audit report.

Replace mock logic with real AI integrations as needed.
