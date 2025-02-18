export default function initScrollSuave(){
    //Scroll Suave Link Interno
    const linksInternos = document.querySelectorAll('[data-menu="suave"] a[href^="#"]'); // Pegar os links internos da página a[href^="#"]
    
    function scrollToSection(event){
      event.preventDefault();
      const href = event.currentTarget.getAttribute('href');
      const section = document.querySelector(href);
      // forma mais simples de scroll suave interno
      section.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    
     //forma alternativa de scroll suave interno
      // const topo = section.offsetTop;
      // window.scroll({
      //   top: topo,
      //   behavior: 'smooth',
      // });
    }
    
    linksInternos.forEach((link) => {
      link.addEventListener('click', scrollToSection)
    })
  }