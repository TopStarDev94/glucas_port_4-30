const sections = document.querySelectorAll('.section');
 const sectBtns = document.querySelectorAll('.controls');
 const sectBtn = document.querySelectorAll('.control');
 const allSections = document.querySelectorAll('.main-content');
 

function PageTransitions (){
    // Button click active class
    for(let i = 0; i < sectBtn.length; i++){
        sectBtn[i].addEventListener('click', function(){
            let currentBtn = document.querySelectorAll('.active-btn');
            let changed_className = currentBtn[0].className.replace("active-btn", " ");

            currentBtn[0].className = changed_className;

            this.className += ' active-btn'
        })
    }

    // Assuming allSections is a NodeList or an array of DOM elements
allSections.forEach(function(section) {
    section.addEventListener('click', function(e) {
        const id = e.target.dataset.id;
        if(id){
            // Remove selected from the other button
            sectBtns.forEach((btn) => {
                btn.classList.remove('active')
            })
            e.target.classList.add('active')

            // Hide other sections
            sections.forEach((sec) => {
                sec.classList.remove('active')
            })

            const element = document.getElementById(id);
            element.classList.add('active')
        }
    });
});

// Toggle theme
const themeBtn = document.querySelector('.theme-btn');
themeBtn.addEventListener('click', () => {
    let element = document.body;
    element.classList.toggle('light-mode');
})
}

PageTransitions();