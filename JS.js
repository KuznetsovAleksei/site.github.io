document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.menu__item3');
    const contents = document.querySelectorAll('.tab-content');
  
    tabs.forEach((tab, index) => {
      tab.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('active'));
        contents.forEach(c => c.style.display = 'none');
  
        tabs[index].classList.add('active');
        contents[index].style.display = 'block';
      });
    });
  });
  const links = document.querySelectorAll('.menu__link');
  let lastClickedLink = null;

  links.forEach(link => {
      link.addEventListener('click', function(event) {
          event.preventDefault();

          if (lastClickedLink && lastClickedLink !== this) {
              lastClickedLink.classList.remove('clicked');
          }
          this.classList.toggle('clicked');
          lastClickedLink = this.classList.contains('clicked') ? this : null;
      });
  });
  const links1 = document.querySelectorAll('.but1');
  links1.forEach(link => {
      link.addEventListener('click', function(event) {
          event.preventDefault();
          this.classList.toggle('clicked1');
      });
  });