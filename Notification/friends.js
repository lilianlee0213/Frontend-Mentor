import { friendsData } from './data.js';

function Friends(data) {
	Object.assign(this, data);
	this.getNotificationListHtml = function () {
		const { username, avatar, description, myPost, myGroup, myPicture, updatedTime } = this;

		return `
     <a href="" class="avatar-wrapper">
      <img class="avatar" src="${avatar}" alt="user's profile picture">
    </a>
    <div class="content-wrapper">
      <p class="content-desc">
        <span class="username">${username}</span>
        <span class="description">${description}</span>
        <span class="my-post">${myPost}</span>
        <span class="my-group">${myGroup}</span>
        <span class="dots"></span>
      </p>
      <span class="update-time">${updatedTime} ago</span>
    </div>
    <span class="my-image">${myPicture}</span>`;
	};
}

export { Friends };
