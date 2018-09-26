//Init
const github = new Github();
const ui = new UI();

// search input

const searchUser = document.getElementById("searchUser");

//Search input event listener
searchUser.addEventListener('keyup', (e) => {
//Get input text
    const userText = e.target.value;

    if (userText !== '') {
//make hhtp call
        github.getUser(userText)
            .then(data => {
              if(data.profile.message === 'Not found'){
                  //show alert

              }  else {
                  //show profile
                  ui.showProfile(data.profile);
              }
            })
    } else{
        //clear profile
    }

});