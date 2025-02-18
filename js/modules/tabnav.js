// Navegação por tabs
export default  function initTabNav(){
  const tabMenu = document.querySelectorAll('[data-tab="menu"] li');
  const tabContent = document.querySelectorAll('[data-tab="content"] section');
  
  if(tabMenu.length && tabContent.length) {
    tabContent[0].classList.add('ativo');
    //Inserir e remover ativo as sections
    function activeTab(index){
      tabContent.forEach((section) => {
        section.classList.remove('ativo');
      });
      const direcao = tabContent[index].dataset.anime;
      tabContent[index].classList.add('ativo', direcao);
    }
    //Inserir e remover ativo às sections selecionadas de acordo com a imagem clicada
    tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener('click', () => {
        activeTab(index);
      });
    });
  }
}
