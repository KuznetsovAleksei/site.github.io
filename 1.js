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
  document.addEventListener('DOMContentLoaded', () => {
    const tabs1 = document.querySelectorAll('.menu__item4');
    const contents1 = document.querySelectorAll('.tab-content1');
  
    tabs1.forEach((tab, index) => {
      tab.addEventListener('click', () => {
        tabs1.forEach(t => t.classList.remove('active'));
        contents1.forEach(c => c.style.display = 'none');
  
        tabs1[index].classList.add('active');
        contents1[index].style.display = 'block';
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
  const links2 = document.querySelectorAll('.menu__link1');
  let lastClickedLink1 = null;

  links2.forEach(link => {
      link.addEventListener('click', function(event) {
          event.preventDefault();

          if (lastClickedLink1 && lastClickedLink1 !== this) {
              lastClickedLink1.classList.remove('clicked');
          }
          this.classList.toggle('clicked');
          lastClickedLink1 = this.classList.contains('clicked') ? this : null;
      });
  });
  const links0 = document.querySelectorAll('.but2');
  links0.forEach(link => {
      link.addEventListener('click', function(event) {
          event.preventDefault();
          this.classList.toggle('clicked2');
      });
  });
  const links1 = document.querySelectorAll('.but1');
  links1.forEach(link => {
      link.addEventListener('click', function(event) {
          event.preventDefault();
          this.classList.toggle('clicked1');
      });
  });
  document.getElementById('per').onclick = function () {
    window.location.href = 'https://t.me/Fuckinpowerfull';
};
document.getElementById('per1').onclick = function () {
    window.location.href = 'https://t.me/Fuckinpowerfull';
};
