# YouTube API Viewer

A simple React application that fetches and displays a YouTube video using the YouTube API. Users can update the video title and add/delete comments.

## Features
- Fetch and display a YouTube video
- Update video title (**Currently not working due to some Google Console API error**)
- Add comments
- Delete comments

## Technologies Used
- React
- Axios
- Express (Backend API)
- MongoDB (For storing comments and logs)
- YouTube Data API v3

## Installation

1. Install dependencies:
   ```sh
   npm install
   ```

2. Start the frontend:
   ```sh
   npm start
   ```

## Configuration

Create a `.env` file in the backend with the following:

```sh
YOUTUBE_API_KEY=your_api_key_here
YOUTUBE_VIDEO_ID=your_video_id_here
MONGO_URI=your_mongodb_uri_here
```

## API Endpoints

### Backend Routes

- `GET /video` - Fetches the YouTube video details
- `PUT /video/title` - Updates the video title (**Currently not working due to some Google Console API error**)
- `POST /comment` - Adds a new comment
- `DELETE /comment/:id` - Deletes a comment

## Usage
1. Enter a new title and click "Update Title" (Currently not working)
2. Add a comment and click "Add Comment"
3. Delete a comment by clicking the "Delete" button next to it

## Issues
- **Title updating is not working due to some Google Console API error**

## License
This project is licensed under the MIT License.

