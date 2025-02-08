function playVideoWithLocalTime(videoElement, utcStartTime) {
  // Get local timezone offset in minutes
  const timezoneOffsetMinutes = new Date().getTimezoneOffset();

  // Calculate local start time
  const localStartTime = utcStartTime + timezoneOffsetMinutes * 60 * 1000;

  // Set the start time of the video
  videoElement.currentTime = (localStartTime - utcStartTime) / 1000;

  // Play the video
  videoElement.play();
}
