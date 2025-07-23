const GOOGLE_API_KEY = "AIzaSyClZJo9f29L7v7rTXpvYV4f0fkTAPqcd_Y";

export const YOUTUBE_VIDEOS_API = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key="+
GOOGLE_API_KEY;

export const YOUTUBE_SEARCH_API = "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export const YOUTUBE_COMMENTS_API = "https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet&videoId=";

export const LIVE_CHAT_COUNT = 25;