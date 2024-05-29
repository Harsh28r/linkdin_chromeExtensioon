// chrome.runtime.sendMessage({todo: "showPageAction"});
// chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){
//     if (request.todo == "changeColor"){
//         var addColor = '#' + request.clickedColor;               
//         $('.title').css('font-style','italic');
//          $('.title').css('color', addColor);
//     }
// });


// document.addEventListener('DOMContentLoaded', function() {
//     const newProfilePicURL = chrome.runtime.getURL('/image.jpeg');
  
//     function replaceProfilePictures() {
//       const profilePictures = document.querySelectorAll('img.feed-shared-actor__avatar-image, img.update-components-actor__avatar');
  
//       profilePictures.forEach(img => {
//         img.src = newProfilePicURL;
//         img.srcset = '';
//         img.classList.add('new-profile-pic');
//       });
//     }
  
//     replaceProfilePictures();
  
//     const observer = new MutationObserver(replaceProfilePictures);
//     observer.observe(document.body, { childList: true, subtree: true });
//   });
  
  

// URL of the new profile picture
const newProfilePic = chrome.runtime.getURL('/Chrome/image.jpeg');

// Selectors for profile images on LinkedIn feed
const profilePicSelectors = [
  'img.update-components-actor__avatar-image',
  'img.ivm-view-attr__img--centered'
];

// Function to change profile pictures
function changeProfilePictures() {
  profilePicSelectors.forEach(selector => {
    const profilePics = document.querySelectorAll(selector);
    profilePics.forEach(img => {
      img.src = newProfilePic;
      img.srcset = newProfilePic;
    });
  });
}

// Run the function to change profile pictures
changeProfilePictures();

// Reapply changes when new posts are loaded
const observer = new MutationObserver(changeProfilePictures);
observer.observe(document.body, { childList: true, subtree: true });
