 const addHabitsBtn = document.getElementById("addHabitsBtn");
  const cardContainer = document.getElementById("cardContainer");
  const habbitList = document.getElementById("habbitList");

  addHabitsBtn.addEventListener("click", function () {
    cardContainer.style.display = "none";
    habbitList.style.display = "block";
  });
  //  slected list
  let selectedHabitList = null;
  var selectedHabits = [];

  function handleRadioClick(radioButton) {
    var selectedHabit = radioButton.closest(".habit-list");

    if (radioButton.checked) {
      selectedHabits.push(selectedHabit);

      console.log(selectedHabits);
    } else {
      var index = selectedHabits.indexOf(selectedHabit);
      if (index !== -1) {
        selectedHabits.splice(index, 1);
      }
    }
  }
  document.addEventListener("DOMContentLoaded", function () {
    var nextButton = document.getElementById("next-button");
    nextButton.addEventListener("click", handleNextButtonClick);
  });

  // add list
  function handleNextButtonClick() {
    var habitListContainer = document.getElementById("habit-list-container");
    // habitListContainer.innerHTML = "";
    var newHabitTitle = document.getElementById("new-habit-input").value;
    for (var i = 0; i < selectedHabits.length; i++) {
      document.getElementById("added-habits").innerText =
        "(" + selectedHabits.length + ")";
      var selectedHabit = selectedHabits.slice(-1).pop();
      var habitText = selectedHabit.querySelector("span").textContent;
      createHabitCard(habitText, newHabitTitle, habitListContainer);
      break;
    }
  }

  function createHabitCard(habitText, newHabitTitle, habitListContainer) {
    // Create a new habit card element
    var habitCard = document.createElement("div");
    habitCard.className =
      "habbit-card col-6 col-md-4 col-lg-2 col-xl-2 d-flex flex-column align-items-center justify-content-center";

    // Create the habit icon element
    var habitIcon = document.createElement("div");
    habitIcon.className = "habbit-icon";

    if (habitText === "Camera") {
      // Create the habit icon using the specified SVG code
      habitIcon.innerHTML = `
        <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14.0834 45.8333H35.9167C41.6667 45.8333 43.9584 42.3125 44.2292 38.0208L45.3125 20.8125C45.6042 16.3125 42.0209 12.5 37.5 12.5C36.2292 12.5 35.0625 11.7708 34.4792 10.6458L32.9792 7.62501C32.0209 5.72917 29.5209 4.16667 27.3959 4.16667H22.625C20.4792 4.16667 17.9792 5.72917 17.0209 7.62501L15.5209 10.6458C14.9375 11.7708 13.7709 12.5 12.5 12.5C7.97919 12.5 4.39586 16.3125 4.68752 20.8125L5.77086 38.0208C6.02086 42.3125 8.33336 45.8333 14.0834 45.8333Z" fill="white" />
          <path d="M28.125 18.2292H21.875C21.0208 18.2292 20.3125 17.5208 20.3125 16.6667C20.3125 15.8125 21.0208 15.1042 21.875 15.1042H28.125C28.9792 15.1042 29.6875 15.8125 29.6875 16.6667C29.6875 17.5208 28.9792 18.2292 28.125 18.2292Z" fill="#75A1E0" />
          <path d="M25 37.7708C28.889 37.7708 32.0417 34.6182 32.0417 30.7292C32.0417 26.8402 28.889 23.6875 25 23.6875C21.111 23.6875 17.9584 26.8402 17.9584 30.7292C17.9584 34.6182 21.111 37.7708 25 37.7708Z" fill="#75A1E0" />
        </svg>
      `;
    } else if (habitText === "Journal") {
      // Create the habit icon using the specified SVG code for "Journal"
      habitIcon.innerHTML = `
        <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M25 11.0417V44.4375C24.6458 44.4375 24.2708 44.375 23.9791 44.2083L23.8958 44.1667C19.8958 41.9792 12.9166 39.6875 8.39579 39.0833L7.79163 39C5.79163 38.75 4.16663 36.875 4.16663 34.875V9.70834C4.16663 7.22917 6.18746 5.35417 8.66663 5.56251C13.0416 5.91667 19.6666 8.12501 23.375 10.4375L23.8958 10.75C24.2083 10.9375 24.6041 11.0417 25 11.0417Z" fill="#75A1E0"/>
          <path d="M45.8333 9.72917V34.875C45.8333 36.875 44.2083 38.75 42.2083 39L41.5208 39.0833C36.9792 39.6875 29.9792 42 25.9792 44.2083C25.7083 44.375 25.375 44.4375 25 44.4375V11.0417C25.3958 11.0417 25.7917 10.9375 26.1042 10.75L26.4583 10.5208C30.1667 8.1875 36.8125 5.95834 41.1875 5.58334H41.3125C43.7917 5.375 45.8333 7.22917 45.8333 9.72917Z" fill="white"/>
          <path d="M16.1459 19.25H11.4584C10.6042 19.25 9.89587 18.5417 9.89587 17.6875C9.89587 16.8333 10.6042 16.125 11.4584 16.125H16.1459C17 16.125 17.7084 16.8333 17.7084 17.6875C17.7084 18.5417 17 19.25 16.1459 19.25Z" fill="white"/>
          <path d="M17.7084 25.5H11.4584C10.6042 25.5 9.89587 24.7917 9.89587 23.9375C9.89587 23.0833 10.6042 22.375 11.4584 22.375H17.7084C18.5625 22.375 19.2709 23.0833 19.2709 23.9375C19.2709 24.7917 18.5625 25.5 17.7084 25.5Z" fill="white"/>
        </svg>
      `;
    } else if (habitText === "Contact") {
      // Create the habit icon using the specified SVG code for "Journal"
      habitIcon.innerHTML = `
      <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M36.7083 22.3958C35.8125 22.3958 35.1041 21.6667 35.1041 20.7917C35.1041 20.0208 34.3333 18.4167 33.0416 17.0208C31.7708 15.6667 30.375 14.875 29.2083 14.875C28.3125 14.875 27.6041 14.1458 27.6041 13.2708C27.6041 12.3958 28.3333 11.6667 29.2083 11.6667C31.2916 11.6667 33.4791 12.7917 35.3958 14.8125C37.1875 16.7083 38.3333 19.0625 38.3333 20.7708C38.3333 21.6667 37.6041 22.3958 36.7083 22.3958Z" fill="#75A1E0"/>
  <path d="M44.2292 22.3958C43.3333 22.3958 42.625 21.6667 42.625 20.7917C42.625 13.3958 36.6042 7.39584 29.2292 7.39584C28.3333 7.39584 27.625 6.66667 27.625 5.79167C27.625 4.91667 28.3333 4.16667 29.2083 4.16667C38.375 4.16667 45.8333 11.625 45.8333 20.7917C45.8333 21.6667 45.1042 22.3958 44.2292 22.3958Z" fill="#75A1E0"/>
  <path d="M24.5625 29.6042L17.75 36.4167C17 35.75 16.2708 35.0625 15.5625 34.3542C13.4166 32.1875 11.4791 29.9167 9.74996 27.5417C8.04163 25.1667 6.66663 22.7917 5.66663 20.4375C4.66663 18.0625 4.16663 15.7917 4.16663 13.625C4.16663 12.2083 4.41663 10.8542 4.91663 9.60417C5.41663 8.33334 6.20829 7.16667 7.31246 6.12501C8.64579 4.81251 10.1041 4.16667 11.6458 4.16667C12.2291 4.16667 12.8125 4.29167 13.3333 4.54167C13.875 4.79167 14.3541 5.16667 14.7291 5.70834L19.5625 12.5208C19.9375 13.0417 20.2083 13.5208 20.3958 13.9792C20.5833 14.4167 20.6875 14.8542 20.6875 15.25C20.6875 15.75 20.5416 16.25 20.25 16.7292C19.9791 17.2083 19.5833 17.7083 19.0833 18.2083L17.5 19.8542C17.2708 20.0833 17.1666 20.3542 17.1666 20.6875C17.1666 20.8542 17.1875 21 17.2291 21.1667C17.2916 21.3333 17.3541 21.4583 17.3958 21.5833C17.7708 22.2708 18.4166 23.1667 19.3333 24.25C20.2708 25.3333 21.2708 26.4375 22.3541 27.5417C23.1041 28.2708 23.8333 28.9792 24.5625 29.6042Z" fill="white"/>
  <path d="M45.7708 38.1875C45.7708 38.7708 45.6667 39.375 45.4583 39.9583C45.3958 40.125 45.3333 40.2917 45.25 40.4583C44.8958 41.2083 44.4375 41.9167 43.8333 42.5833C42.8125 43.7083 41.6875 44.5208 40.4167 45.0417C40.3958 45.0417 40.375 45.0625 40.3542 45.0625C39.125 45.5625 37.7917 45.8333 36.3542 45.8333C34.2292 45.8333 31.9583 45.3333 29.5625 44.3125C27.1667 43.2917 24.7708 41.9167 22.3958 40.1875C21.5833 39.5833 20.7708 38.9792 20 38.3333L26.8125 31.5208C27.3958 31.9583 27.9167 32.2917 28.3542 32.5208C28.4583 32.5625 28.5833 32.625 28.7292 32.6875C28.8958 32.75 29.0625 32.7708 29.25 32.7708C29.6042 32.7708 29.875 32.6458 30.1042 32.4167L31.6875 30.8542C32.2083 30.3333 32.7083 29.9375 33.1875 29.6875C33.6667 29.3958 34.1458 29.25 34.6667 29.25C35.0625 29.25 35.4792 29.3333 35.9375 29.5208C36.3958 29.7083 36.875 29.9792 37.3958 30.3333L44.2917 35.2292C44.8333 35.6042 45.2083 36.0417 45.4375 36.5625C45.6458 37.0833 45.7708 37.6042 45.7708 38.1875Z" fill="#75A1E0"/>
</svg>
      `;
    } else if (habitText === "Message") {
      // Create the habit icon using the specified SVG code for "Journal"
      habitIcon.innerHTML = `
      <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M37.4584 22.4792V30.8125C37.4584 31.3542 37.4376 31.875 37.3751 32.375C36.8959 38 33.5834 40.7916 27.4793 40.7916H26.6459C26.1251 40.7916 25.6251 41.0417 25.3126 41.4583L22.8126 44.7917C21.7084 46.2708 19.9167 46.2708 18.8126 44.7917L16.3126 41.4583C16.0417 41.1042 15.4376 40.7916 14.9793 40.7916H14.1459C7.5001 40.7916 4.16675 39.1458 4.16675 30.8125V22.4792C4.16675 16.375 6.97927 13.0625 12.5834 12.5834C13.0834 12.5209 13.6043 12.5 14.1459 12.5H27.4793C34.1251 12.5 37.4584 15.8334 37.4584 22.4792Z" fill="#75A1E0"/>
  <path d="M20.8126 29.1667C19.6459 29.1667 18.7292 28.2292 18.7292 27.0833C18.7292 25.9375 19.6667 25 20.8126 25C21.9584 25 22.8959 25.9375 22.8959 27.0833C22.8959 28.2292 21.9792 29.1667 20.8126 29.1667Z" fill="white"/>
  <path d="M28.1041 29.1667C26.9374 29.1667 26.0208 28.2292 26.0208 27.0833C26.0208 25.9375 26.9583 25 28.1041 25C29.2499 25 30.1874 25.9375 30.1874 27.0833C30.1874 28.2292 29.2499 29.1667 28.1041 29.1667Z" fill="white"/>
  <path d="M13.5416 29.1667C12.3749 29.1667 11.4583 28.2292 11.4583 27.0833C11.4583 25.9375 12.3958 25 13.5416 25C14.6874 25 15.6249 25.9375 15.6249 27.0833C15.6249 28.2292 14.6874 29.1667 13.5416 29.1667Z" fill="white"/>
  <path d="M45.7916 14.1459V22.4792C45.7916 28.6042 42.9791 31.8959 37.3749 32.375C37.4374 31.875 37.4583 31.3542 37.4583 30.8125V22.4792C37.4583 15.8334 34.1249 12.5 27.4791 12.5H14.1458C13.6041 12.5 13.0833 12.5209 12.5833 12.5834C13.0624 6.97919 16.3749 4.16667 22.4791 4.16667H35.8124C42.4582 4.16667 45.7916 7.50002 45.7916 14.1459Z" fill="white"/>
</svg>
      `;
    } else if (habitText === "User") {
      // Create the habit icon using the specified SVG code for "Journal"
      habitIcon.innerHTML = `
      <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M18.7501 4.16667C13.2917 4.16667 8.85425 8.60417 8.85425 14.0625C8.85425 19.4167 13.0417 23.75 18.5001 23.9375C18.6667 23.9167 18.8334 23.9167 18.9584 23.9375C19.0001 23.9375 19.0209 23.9375 19.0626 23.9375C19.0834 23.9375 19.0834 23.9375 19.1042 23.9375C24.4376 23.75 28.6251 19.4167 28.6459 14.0625C28.6459 8.60417 24.2084 4.16667 18.7501 4.16667Z" fill="#75A1E0"/>
  <path d="M29.3333 29.4792C23.5208 25.6042 14.0416 25.6042 8.18742 29.4792C5.54159 31.25 4.08325 33.6458 4.08325 36.2083C4.08325 38.7708 5.54159 41.1458 8.16659 42.8958C11.0833 44.8542 14.9166 45.8333 18.7499 45.8333C22.5833 45.8333 26.4166 44.8542 29.3333 42.8958C31.9583 41.125 33.4166 38.75 33.4166 36.1667C33.3958 33.6042 31.9583 31.2292 29.3333 29.4792Z" fill="white"/>
  <path d="M41.6458 15.2917C41.9791 19.3333 39.1041 22.875 35.1249 23.3542C35.1041 23.3542 35.1041 23.3542 35.0833 23.3542H35.0208C34.8958 23.3542 34.7708 23.3542 34.6666 23.3958C32.6458 23.5 30.7916 22.8542 29.3958 21.6667C31.5416 19.75 32.7708 16.875 32.5208 13.75C32.3749 12.0625 31.7916 10.5208 30.9166 9.20833C31.7083 8.8125 32.6249 8.5625 33.5624 8.47917C37.6458 8.125 41.2916 11.1667 41.6458 15.2917Z" fill="#75A1E0"/>
  <path d="M45.8124 34.5625C45.6458 36.5833 44.3541 38.3333 42.1874 39.5208C40.1041 40.6667 37.4791 41.2083 34.8749 41.1458C36.3749 39.7917 37.2499 38.1042 37.4166 36.3125C37.6249 33.7292 36.3958 31.25 33.9374 29.2708C32.5416 28.1667 30.9166 27.2917 29.1458 26.6458C33.7499 25.3125 39.5416 26.2083 43.1041 29.0833C45.0208 30.625 45.9999 32.5625 45.8124 34.5625Z" fill="white"/>
</svg>
      `;
    } else if (habitText === "Writing") {
      // Create the habit icon using the specified SVG code for "Journal"
      habitIcon.innerHTML = `
      <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M15.3541 45.8333H34.6249C40.2291 45.8333 44.7707 41.2917 44.7707 35.6875V17.4375C44.7707 11.8333 40.2291 7.29167 34.6249 7.29167H15.3541C9.74992 7.29167 5.20825 11.8333 5.20825 17.4375V35.6667C5.20825 41.2917 9.74992 45.8333 15.3541 45.8333Z" fill="white"/>
  <path d="M17.2708 13.1042C16.3958 13.1042 15.7083 12.3958 15.7083 11.5417V5.72917C15.7083 4.87501 16.3958 4.16667 17.2708 4.16667C18.1458 4.16667 18.8333 4.87501 18.8333 5.72917V11.5208C18.8333 12.3958 18.1458 13.1042 17.2708 13.1042Z" fill="#75A1E0"/>
  <path d="M32.7292 13.1042C31.8542 13.1042 31.1667 12.3958 31.1667 11.5417V5.72917C31.1667 4.85417 31.8751 4.16667 32.7292 4.16667C33.6042 4.16667 34.2917 4.87501 34.2917 5.72917V11.5208C34.2917 12.3958 33.6042 13.1042 32.7292 13.1042Z" fill="#75A1E0"/>
  <path d="M30.7916 28.5625H15.3333C14.4583 28.5625 13.7708 27.8542 13.7708 27C13.7708 26.1458 14.4791 25.4375 15.3333 25.4375H30.7916C31.6666 25.4375 32.3541 26.1458 32.3541 27C32.3541 27.8542 31.6666 28.5625 30.7916 28.5625Z" fill="#75A1E0"/>
  <path d="M24.9999 36.2917H15.3333C14.4583 36.2917 13.7708 35.5833 13.7708 34.7292C13.7708 33.8542 14.4791 33.1667 15.3333 33.1667H24.9999C25.8749 33.1667 26.5624 33.875 26.5624 34.7292C26.5624 35.5833 25.8749 36.2917 24.9999 36.2917Z" fill="#75A1E0"/>
</svg>
      `;
    } else {
      habitIcon.innerHTML = '<i class="fa fa-icon-name"></i>';
    }

    habitCard.addEventListener("contextmenu", function (event) {
      event.preventDefault();

      // Toggle the display of the input value element
      if (habitCard.children[2].style.display === "none") {
        habitCard.children[2].style.display = "block";
      } else {
        habitCard.children[2].style.display = "none";
      }
    });

    // Create the habit text element
    var habitTextElement = document.createElement("div");
    habitTextElement.className = "habbit-text";
    habitTextElement.textContent = habitText;
    // Create the input field
    var inputValueElement = document.createElement("div");
    inputValueElement.className = "new-habit-input hidden";
    inputValueElement.textContent = newHabitTitle;

    habitCard.appendChild(habitIcon);
    habitCard.appendChild(habitTextElement);
    habitCard.appendChild(inputValueElement);

    habitListContainer.appendChild(habitCard);
  }

  // mode change

  var moon = document.getElementById("moon");
  var night = document.getElementById("night");
  var navbar = document.querySelector(".navbar");
  var heading = navbar.querySelector("h1");
  var heading3 = navbar.querySelector("h3");
  var title = document.querySelector(".card-body .card-title");
  var body = document.querySelector("body");
  var count = document.querySelector(".count");
  var countNo = document.querySelector(".count span");
  var hText = document.querySelector(".habbit-card ");

  moon.addEventListener("click", enableDarkMode);
  night.addEventListener("click", enableLightMode);

  // Function to enable dark mode
  function enableDarkMode() {
    moon.classList.add("dark-mode");

    night.classList.remove("light-mode");
    body.style.background = "linear-gradient(to right, #082f49, #4a044e)";
    navbar.style.backgroundColor = "#1f2129";
    heading.style.color = "white";
    heading3.style.color = "white";
    title.style.color = "white";
    count.style.color = "white";
    countNo.style.color = "white";
    body.style.color="white";
    hText.style.color = "white";
  }

  // Function to enable light mode
  function enableLightMode() {
    night.classList.add("light-mode");

    moon.classList.remove("dark-mode");
    body.style.background = "linear-gradient(to right, #bae6fd, #fce7f3)";
    navbar.style.backgroundColor = "white";
    heading.style.color = "black";
    heading3.style.color = "black";
    title.style.color = "black";
    count.style.color = "black";
    countNo.style.color = "black";
    hText.style.color = "black";
  }
