//FAQ
document.addEventListener("DOMContentLoaded", function(){
	const contents = document.querySelectorAll(".faq-content");

	contents.forEach(content => {
		const questions = content.querySelector(".question");
		questions.addEventListener("click", () =>{
			const answers = content.querySelector(".answer");
			const toggle = content.querySelector("i");

			if(answers.style.display === "none"){
				answers.style.display = "block";
				toggle.classList.remove("fa-plus");
				toggle.classList.add("fa-minus");
				
			} else{
				answers.style.display = "none";
				toggle.classList.remove("fa-minus");
				toggle.classList.add("fa-plus");
				
			}
		});

	});
});

//Toggler
document.addEventListener("DOMContentLoaded", () =>{
	const toggler = document.querySelector(".toggler-btn");
	const hiddenMenu  = document.querySelector(".menu-hidden");

	toggler.addEventListener('click', () =>{
		hiddenMenu.style.display = "block";
		toggler.style.display = "none";
	});
	}
	);

//navbar-active status
const links = document.querySelectorAll('.nav-links');
    
if (links.length) {
  links.forEach((link) => {
    link.addEventListener('click', (e) => {
      links.forEach((link) => {
          link.classList.remove('active');
      });
      link.classList.add('active');
    });
  });
}


