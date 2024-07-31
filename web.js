function opentab(event, tabname){
  var tablinks = document.getElementsByClassName("tab-links");
  var tabcontent = document.getElementById("tab-content");
  
  for(var i = 0; i < tablinks.length; i++){
    tablinks[i].classList.remove("active-link");
    tablinks[i].style.cursor = "pointer";
  }
  event.currentTarget.classList.add("active-link"); 
  
  if(tabname == "skills"){
    tabcontent.innerHTML = `
      <ul id="skills-list">
        <li><span>UI/UX</span><br>Designing Web/App interfaces</li>
        <li><span>Web Development</span><br>Web App Development</li>
        <li><span>App Development</span><br>Designing Web/App interfaces</li>
      </ul>
    `;
  } else if(tabname == "experience"){
    tabcontent.innerHTML = `
      <ul id="experience-list">
        <li><span>2023</span><br>Web Development</li>
        <li><span>2022</span><br>miramar international Limited</li>
      </ul>
    `;
  } else if(tabname == "education"){
    tabcontent.innerHTML = `
      <ul id="education-list">
        <li><span>2024</span><br>Institute of Software Development</li>
        <li><span>2018-2023</span><br>Kca University</li>
        <li><span>2014-2017</span><br>Moi High Mbiruri</li>
      </ul>
    `;
  }
}
// var tablinks = document.getElementsByClassName("tab-links");
// var tabcontents = document.getElementsByClassName("tab-contents");

// function opentab(tabname){
//     for(tablink of tablinks){
//         tablink.classList.remove("active-link");
//     }
//     for(tabcontent of tabcontents){
//         tabcontent.classList.remove("active-tab");
//     }
//     event.currentTarget.classList.add("active-link"); 
//     document.getElementById(tabname).classList.add("active-tab");
// }


//  ----------This is vs for simulating a click on the botton -------
function downloadCV() {
  const link = document.createElement('a');
  link.href = '/images/alex-one.jpg';
  link.download = 'alex-one.jpg';
  link.click();
}

// ---------------------- onclick for phone menu -----------------------------
// var sidemeu = document.getElementById("sidemenu");

//    function openmenu () {
//      sidemeu.style.right= "0"
//    }
//    function closemenu () {
//      sidemeu.style.right = "-200"
//    }
var sidemeu = document.getElementById("sidemenu");

function openmenu() {
  sidemeu.style.right = "0";
  document.getElementById("close-icon").style.display = "block";
}

function closemenu() {
  sidemeu.style.right = "-200px";
  document.getElementById("close-icon").style.display = "none";
}

// ------------------------------------ link to google sheets ----------------------

const scriptURL = 'https://script.google.com/macros/s/AKfycbwncaoK1iAhif3DK2lvw8htBbXPdKaulJ9Fi6I45peQJTy8kovyhAQmNjkFmijKE6s/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg = document.getElementById ("msg") 

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML = "Message sent successfully"
        setTimeout(function(){
          msg.innerHTML = ""
        },4000)
        form.reset()
        })
      
      .catch(error => console.error('Error!', error.message))
  })
   