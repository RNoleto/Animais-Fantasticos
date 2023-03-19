// Navegação por tabs
function initTabNav(){
  const tabMenu = document.querySelectorAll('.js-tabmenu li');
  const tabContent = document.querySelectorAll('.js-tabcontent section');
  
  if(tabMenu.length && tabContent.length) {
    tabContent[0].classList.add('ativo');
    //Inserir e remover ativo as sections
    function activeTab(index){
      tabContent.forEach((section) => {
        section.classList.remove('ativo');
      });
      tabContent[index].classList.add('ativo');
    }
    //Inserir e remover ativo às sections selecionadas de acordo com a imagem clicada
    tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener('click', () => {
        activeTab(index);
      });
    });
  }
}
initTabNav();
// Navegação Accordion List na Section FAQ
function initAccordion(){
  const accordionList = document.querySelectorAll('.js-accordion dt');
  const activeClass = 'ativo';
  if(accordionList.length){
    accordionList[0].classList.add(activeClass);
    accordionList[0].nextElementSibling.classList.add(activeClass);
    
    
    function activeAccordion(){
      this.classList.toggle('activeClass');
      this.nextElementSibling.classList.toggle(activeClass);
    }
    
    accordionList.forEach((item) => {
      item.addEventListener('click', activeAccordion);
    })
  }
}
initAccordion();
function initScrollSuave(){
  //Scroll Suave Link Interno
  const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]'); // Pegar os links internos da página a[href^="#"]
  
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
initScrollSuave();

// animação ao scroll
function initAnimacaoScroll(){
  const sections = document.querySelectorAll('.js-scroll');
  
  if(sections.length){
  
    const windowMetade = window.innerHeight * 0.6;
    function animaScroll() {
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const isSectionVisible = (sectionTop - windowMetade) < 0;
        if(isSectionVisible) {
          section.classList.add('ativo');
        }
      })
    }
  }
  
  animaScroll();
  
  window.addEventListener('scroll', animaScroll);
}
initAnimacaoScroll();