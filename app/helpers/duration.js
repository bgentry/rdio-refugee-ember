import Ember from 'ember';

function formatDuration(duration) {
  const minutes = Math.floor(duration / 60);
  const seconds = duration % 60;
  const formattedSeconds = (seconds < 10) ? `0${seconds}` : seconds;

  return `${minutes}:${formattedSeconds}`;
}

export default Ember.Helper.helper(formatDuration);
