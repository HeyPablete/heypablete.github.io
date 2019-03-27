
document.addEventListener('DOMContentLoaded', () => {

  /* at-day and at-night class */
  // Getting data info from the browser
  const date = new Date();
  date.month = date.getMonth();
  date.year = date.getFullYear();
  date.hour = date.getHours();

  // Setting the general styles, at-dat, at-night or terminal class 
  const body = document.getElementsByTagName('body')[0];

  // Add at-day or at-night class depending on the current hour
  date.hour >= 8 && date.hour < 21 ? body.classList.add('at-day') : body.classList.add('at-night');


  /* Current time */
  // Mounts set
  const month = ['January', 'February', 'March', 'April', 'March', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  // Format the string for display the mount on time HTML tag
  let space = '';
  date.month < 10 ? space = '-0' : space = '-';
  const currentDate = `${month[date.month]} ${date.year}`;
  const attDate = `${date.year}${space}${date.month+1}`;

  // Adding the attribute and the text on <time> element
  const time = document.getElementsByTagName('time')[0];
  time.setAttribute('datatime', attDate);
  time.textContent = currentDate;


  /* Show and hide the pop up div */
  // Get the pop up div
  const popUpElement = document.getElementById('pop-up');

  const showPopUp = (eventTarget) => {
    const popUpText = document.createTextNode(eventTarget.title);
    popUpElement.appendChild(popUpText);
    popUpElement.setAttribute('class', 'pop-up pop-up-active');
  };

  const hidePopUp = () => {
    popUpElement.setAttribute('class', 'pop-up pop-up-disabled');
    popUpElement.textContent = '';
  };

  // Listen to title attribute clicks
  document.addEventListener('click', (event) => {
    if (!event.target.hasAttribute('title')) {
      hidePopUp();
    } else {
      if (popUpElement.textContent != '') {
        hidePopUp();
      } else {
        showPopUp(event.target);
      }
    }

  }, false);

});

console.log("👋 HELLO PARTNET. Feel free to fork it on https://github.com/pablorgarcia/pablorgarcia.github.io :)");
