var tablinks = document.getElemenyByClassName("tab-links");
      var tabcontents = document.getElemenyByClassName("tab-contents");

      function opentab(tabname){
        for(tablink of tablinks){
            tablink.classList.remove("active-link");
        }
        for(tabcontent of tabcontents){
            tabcontent.classList.remove("active-tab");
        }
        event.currentTarget.classList.add("active-link"); 
        document.getElementById(tabname).classList.add("active-tab");
      }


//  ----------This is vs for simulating a click on the botton -------
function downloadCV() {
  const link = document.createElement('a');
  link.href = '/images/alex-one.jpg';
  link.download = 'alex-one.jpg';
  link.click();
}