document.addEventListener('DOMContentLoaded', () => {
  initMap = () => {
    const uluru = { lat: 50.067805, lng: 19.965802 };
    const map = new google.maps.Map(document.getElementById('map'), {
      zoom: 17,
      center: uluru
    });
    const marker = new google.maps.Marker({
      position: uluru,
      map: map
    });
  };

  initMap();

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

$(function() {
  const arrowDown = $('.fa-arrow-down');
  const descDet = $('.desc-det');
  const hiddenDesc = $('.desc-det').hide();
  arrowDown.on('click', function() {
    $(this)
      .prev()
      .slideToggle();
  });
});

$(function() {
  const poradyPrawne = $('.wynagrodzenie').find('div');
  const poradyPrawneDesc = $('.wynagrodzenie-descr').find('div');

  poradyPrawne.on('click', function() {
    $(poradyPrawneDesc).text($(event.target).text());
    poradyPrawneDesc.slideToggle();
    console.log('porady');
  });
});

$(function() {
  const offer = $('.offer').find('div');
  const offerDescr = $('.offer-descr');

  offer.on('click', function() {
    $(offerDescr).text($(event.target).text());
    offerDescr.slideToggle();
  });
});
