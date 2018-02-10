document.addEventListener('DOMContentLoaded', () => {
  const bar = document.querySelector('.fa');
  const navig = document.querySelector('.navigation');
  const navigUl = document.querySelector('.navigation > ul');
  const navigUlLi = navigUl.querySelectorAll('li');
  const navigUlA = navigUl.querySelectorAll('a');
  bar.addEventListener('click', () => {
    if (navig.className === 'col-8 navigation') {
      navig.className = 'visible';
      navigUl.style.flexDirection = 'column';
      navigUl.style.listStyle = 'none';
      navigUl.style.textTransform = 'uppercase';

      for (let i = 0; i < navigUlLi.length; i++) {
        navigUlLi[i].style.padding = '10px 20px';
        navigUlA[i].style.color = '#000';
        navigUlA[i].style.textDecoration = 'none';
      }
    } else {
      navig.className = 'col-8 navigation';
      navigUl.style.flexDirection = 'row';
    }
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 640) {
      navig.className = 'col-8 navigation';
      navigUl.style.flexDirection = 'row';
      for (let i = 0; i < navigUlLi.length; i++) {
        navigUlLi[i].style.padding = '0 20px 0 0';
      }
    }
  });
});
