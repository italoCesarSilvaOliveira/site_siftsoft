// Função para adicionar a classe 'active' ao link clicado
const links = document.querySelectorAll('.link_menu');

// Ao clicar em um link, a classe 'active' será adicionada
links.forEach(link => {
  link.addEventListener('click', (event) => {
    // Remove a classe 'active' de todos os links
    links.forEach(link => link.classList.remove('active'));
    
    // Adiciona a classe 'active' ao link clicado
    event.target.classList.add('active');
  });
});

// Função para adicionar a classe 'active' ao link quando a seção for visível na tela
const sections = document.querySelectorAll('section');
const menuItems = document.querySelectorAll('.link_menu');

window.addEventListener('scroll', () => {
  sections.forEach((section, index) => {
    const rect = section.getBoundingClientRect();
    const menuItem = menuItems[index];

    // Verifica se a seção está visível
    if (rect.top <= 0 && rect.bottom >= 0) {
      menuItem.classList.add('active');
    } else {
      menuItem.classList.remove('active');
    }
  });
});
