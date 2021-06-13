let sidebarButton = document.querySelector('.sidebar__button');
let body = document.querySelector('.body');
let satusSelect = document.querySelectorAll('.main__tabs__select');
let main = document.querySelector('.main');

let darkThemsCheck = document.querySelector('#dark__theme');

darkThemsCheck.addEventListener('change', function () {
  if (darkThemsCheck.checked) {
    localStorage.setItem('dark__theme', true);
    console.log(localStorage);
    body.classList.add('dark');
  } else {
    body.classList.remove('dark');
    localStorage.setItem('dark__theme', false);
  }
});

if (localStorage.dark__theme == 'true') {
  darkThemsCheck.checked = true;
  if (!body.classList.contains('dark')) {
    body.classList.add('dark');
  }
} else {
  if (body.classList.contains('dark')) {
    body.classList.remove('dark');
  }
}

function sidebarStatusCheck() {
  if (localStorage.sidebarStatus == 'open') body.classList.add('open');
}

function sidebarShow() {
  if (localStorage.sidebarStatus == 'open') {
    localStorage.sidebarStatus = null;
    if (body.classList.contains('open')) {
      body.classList.remove('open');
    } else {
      body.classList.add('open');
    }
  } else {
    localStorage.sidebarStatus = 'open';
    if (body.classList.contains('open')) {
      body.classList.remove('open');
    } else {
      body.classList.add('open');
    }
  }
}

sidebarButton.addEventListener('click', function () {
  sidebarShow();
});

function sidebarHeight() {
  if (document.documentElement.clientWidth > 720) {
    let screenHeight = Math.max(body.scrollHeight);
    screenHeight -= 120;
    let sidebar = document.querySelector('.sidebar');
    sidebar.style.height = screenHeight + 'px';
  }
}

function infoShow(b) {
  document.querySelector('.p-select').style.display = b;
  document.querySelector('.main__user-panel__edit-status').style.display = b;
}

function selectItem() {
  let listDebtorsItem = document.querySelectorAll('.item-debtor');
  let checkboxAll = document.querySelector('.main__tabs__checkbox-all');
  let selectedArr = 0;
  let mSelect = document.querySelector('.m-select');
  let bSelect = document.querySelector('.b-select');
  bSelect.innerHTML = listDebtorsItem.length;

  checkboxAll.onchange = function () {
    if (checkboxAll.checked) {
      for (let i = 0; i < listDebtorsItem.length; i++) {
        listDebtorsItem[i].classList.add('selected');
        listDebtorsItem[i].querySelector(
          '.main__tabs__checkbox'
        ).checked = true;
        selectedArr = i + 1;
        mSelect.innerHTML = selectedArr;
        infoShow('block');
      }

      let sel = document.querySelectorAll('.selected');

      for (let x = 0; x < sel.length; x++) {
        if (sel[x].classList.contains('first'))
          sel[x].classList.remove('first');
        if (sel[x].classList.contains('last')) sel[x].classList.remove('last');
      }

      sel[0].classList.add('first');
      sel[sel.length - 1].classList.add('last');
    } else {
      for (let i = 0; i < listDebtorsItem.length; i++) {
        listDebtorsItem[i].classList.remove('selected', 'last', 'first');
        listDebtorsItem[i].querySelector(
          '.main__tabs__checkbox'
        ).checked = false;
        selectedArr = 0;
        mSelect.innerHTML = selectedArr;
        infoShow('none');
      }
    }
  };

  for (let i = 0; i < listDebtorsItem.length; i++) {
    let itemCheckbox = listDebtorsItem[i].querySelector(
      '.main__tabs__checkbox'
    );

    itemCheckbox.onchange = function () {
      if (itemCheckbox.checked) {
        listDebtorsItem[i].classList.add('selected');
        selectedArr += 1;
        mSelect.innerHTML = selectedArr;

        let sel = document.querySelectorAll('.selected');
        for (let x = 0; x < sel.length; x++) {
          lastFirst(sel[x]);
        }
      } else {
        listDebtorsItem[i].classList.remove('selected');

        if (listDebtorsItem[i].classList.contains('last'))
          listDebtorsItem[i].classList.remove('last');

        let sel = document.querySelectorAll('.selected');
        for (let x = 0; x < sel.length; x++) {
          lastFirst(sel[x]);
        }

        selectedArr -= 1;
        mSelect.innerHTML = selectedArr;
      }
      if (selectedArr > 0) {
        infoShow('block');
      } else {
        infoShow('none');
      }
    };
  }
}

function lastFirst(y) {
  if (y.classList.contains('last')) y.classList.remove('last');
  if (y.classList.contains('first')) y.classList.remove('first');
  if (y.nextElementSibling) {
    if (!y.nextElementSibling.classList.contains('selected'))
      y.classList.add('last');
  } else {
    y.classList.add('last');
  }
  if (y.previousElementSibling) {
    if (!y.previousElementSibling.classList.contains('selected'))
      y.classList.add('first');
  } else {
    y.classList.add('first');
  }
}

let linkModal = document.querySelectorAll('.link-modal');

for (let i = 0; i < linkModal.length; i++) {
  let modal = linkModal[i].getAttribute('data-modal');
  let link = linkModal[i];

  modal = `.${modal}`;
  linkModal[i].addEventListener('click', function () {
    modalPopup(modal, link);

    this.classList.toggle('active');
  });
}

function modalPopup(x, y) {
  x = document.querySelector(x);

  x.querySelector('.modal__close').addEventListener('click', function () {
    x.classList.remove('active');
    y.classList.remove('active');
    body.classList.remove('hidden');
  });

  x.addEventListener('click', function (event) {
    if (event.target == this) {
      this.classList.remove('active');
      y.classList.remove('active');
      body.classList.remove('hidden');
    }
  });

  document.addEventListener('keydown', function (event) {
    if (event.code == 'Escape') {
      x.classList.remove('active');
      y.classList.remove('active');
      body.classList.remove('hidden');
    }
  });

  x.classList.add('active');
  body.classList.add('hidden');
}

function statusButton() {
  if (main.clientWidth < 1000) {
    let clone = document
      .querySelector('.main__user-panel__edit-status')
      .cloneNode(true);
    document.querySelector('.main__user-panel__edit-status').remove();
    document.querySelector('.main__user-panel__fx').append(clone);
  }
}

function logoSrc() {
  let logo = document.querySelector('.header__logo > img');
  if (window.innerWidth < 720) {
    logo.src = 'img/logo-mob.svg';
  }
}

let tabDott = document.querySelectorAll('.main__tabs-dott > li');
let windowsHeight = document.body.clientHeight;
let windowsWidth = document.body.clientWidth;
let tabsWrap = document.querySelectorAll('.main__wrapper');

if (windowsWidth > 720) {
  tabsWrap[1].style.height = windowsHeight - 405 + 'px';
} else {
  tabsWrap[1].style.height = 320 + 'px';
}

let col = document.querySelectorAll('.col');

tabDott.forEach(function (item, i) {
  const colLeft = col[i].getBoundingClientRect().left;

  item.addEventListener('click', function () {
    tabsWrap[i].scrollLeft = colLeft;

    tabDott.forEach(function (el, y) {
      el.classList.remove('active');
      tabsWrap[y].scrollLeft = colLeft;
    });

    this.classList.add('active');
  });
});

tabsWrap[1].addEventListener('scroll', function (enet) {
  tabsWrap[0].scrollLeft = enet.target.scrollLeft;
  tabsWrap[2].scrollLeft = enet.target.scrollLeft;
});

let message = document.querySelector('.main__message');

// setTimeout(function () {
//   message.classList.add('hidden');
// }, 3000);

let searchButton = document.querySelectorAll('.link-popup');

for (let i = 0; i < searchButton.length; i++) {
  searchButton[i].addEventListener('click', function () {
    if (!this.classList.contains('active')) {
      for (let x = 0; x < searchButton.length; x++) {
        if (searchButton[x].classList.contains('active')) {
          searchButton[x].classList.remove('active');
          searchButton[x].parentNode
            .querySelector('.modal-popup')
            .classList.remove('active');
        }
      }
      let modalOverlay = document.createElement('span');
      modalOverlay.classList.add('modalOverlay');
      this.parentNode.appendChild(modalOverlay);

      modalOverlay.onclick = function (e) {
        if (e.target == this) {
          if (searchButton[i].classList.contains('active')) {
            searchButton[i].classList.remove('active');
            searchButton[i].parentNode
              .querySelector('.modal-popup')
              .classList.remove('active');
          }
          this.remove();
        }
      };
    } else {
      searchButton[i].parentNode.querySelector('.modalOverlay').remove();
    }

    this.classList.toggle('active');
    this.parentNode.querySelector('.modal-popup').classList.toggle('active');
  });
}

const selectSingle = document.querySelectorAll('.__select');

for (let i = 0; i < selectSingle.length; i++) {
  const selectSingle_title = selectSingle[i].querySelector('.__select__title');
  const selectSingle_labels =
    selectSingle[i].querySelectorAll('.__select__label');

  selectSingle_title.addEventListener('click', (e) => {
    for (let x = 0; x < selectSingle.length; x++) {
      selectSingle[x].setAttribute('data-state', '');
    }

    if ('active' === selectSingle[i].getAttribute('data-state')) {
      selectSingle[i].setAttribute('data-state', '');
    } else {
      selectSingle[i].setAttribute('data-state', 'active');
    }
  });

  // Close when click to option
  for (let x = 0; x < selectSingle_labels.length; x++) {
    selectSingle_labels[x].addEventListener('click', (evt) => {
      selectSingle_title.textContent = evt.target.textContent;
      selectSingle[i].setAttribute('data-state', '');
    });
  }
}

window.addEventListener('click', (e) => {
  const target = e.target;
  const targetEl = target.closest('.__select');
  if (!targetEl) {
    for (let i = 0; i < selectSingle.length; i++) {
      if ('active' === selectSingle[i].getAttribute('data-state')) {
        selectSingle[i].setAttribute('data-state', '');
      }
    }
  }
});

let printeformCheckbox = document.querySelector('.for-entire-period');

printeformCheckbox.addEventListener('change', function () {
  if (printeformCheckbox.checked) {
    document
      .querySelector('.modal__printeform__period')
      .classList.add('enabled');
  } else {
    document
      .querySelector('.modal__printeform__period')
      .classList.remove('enabled');
  }
});

let selservisTitle = document.querySelector(
  '.modal__printeform__selservis-title'
);
let checkSer = document.querySelectorAll('.check-ser');

// selservisTitle.addEventListener('click', function () {
//   this.classList.toggle('active');
//   if (this.classList.contains('active')) {
//     for (let i = 0; i < checkSer.length; i++) {
//       checkSer[i].checked = true;
//     }
//   } else {
//     for (let i = 0; i < checkSer.length; i++) {
//       checkSer[i].checked = false;
//     }
//   }
// });

let printSett = document.querySelectorAll(
  'ul.modal__printeform__printsett > li > span'
);

let toggle = document.querySelectorAll('.toggle');

printSett[1].addEventListener('click', function () {
  for (let x = 0; x < toggle.length; x++) {
    toggle[x].checked = true;
  }
});

printSett[0].addEventListener('click', function () {
  for (let x = 0; x < toggle.length; x++) {
    toggle[x].checked = false;
  }
});

let debtorTabs = document.querySelectorAll('.debtor-tabs-list > li');
let debtorEl = document.querySelectorAll('.debtor-tabs-el');

for (let i = 0; i < debtorEl.length; i++) {
  let modalInfoList = debtorEl[i].querySelectorAll(
    '.modal-deb__info-list > li'
  );
  let modalInfoBox = debtorEl[i].querySelectorAll('.modal-deb__info-box');

  for (let x = 0; x < modalInfoList.length; x++) {
    if (x == 0) {
      modalInfoList[x].click();
    }

    modalInfoList[x].addEventListener('click', function () {
      for (let y = 0; y < modalInfoBox.length; y++) {
        if (modalInfoBox[y].classList.contains('active'))
          modalInfoBox[y].classList.remove('active');
        if (modalInfoList[y].classList.contains('active'))
          modalInfoList[y].classList.remove('active');
      }

      modalInfoBox[x].classList.add('active');
      this.classList.add('active');
    });
  }
}

for (let i = 0; i < debtorTabs.length; i++) {
  debtorTabs[i].addEventListener('click', function () {
    for (let c = 0; c < debtorTabs.length; c++) {
      if (debtorTabs[c].classList.contains('active')) {
        debtorTabs[c].classList.remove('active');
      }
    }

    for (let x = 0; x < debtorEl.length; x++) {
      debtorEl[x].style.display = 'none';
    }

    debtorEl[i].style.display = 'block';
    this.classList.toggle('active');
  });
}

debtorTabs[0].click();

let modalMainlist = document.querySelectorAll('.modal-deb__mainlist > li');
let modalMenuWrapper = document.querySelector('.modal-deb__wrapper');
let modalForm = document.querySelector('.modal-deb > .modal__form');

modalForm.style.minHeight = window.innerHeight - 40 + 'px';

// modalMenuWrapper.addEventListener("scroll", function(e) {
//   console.log(e.target.scrollLeft);
// })

for (let i = 0; i < modalMainlist.length; i++) {
  modalMainlist[i].addEventListener('click', function (e) {
    let firstOffsetLeft = modalMainlist[0].offsetLeft;
    let targetOffsetLeft = e.target.offsetLeft - firstOffsetLeft;

    modalMenuWrapper.scrollLeft = targetOffsetLeft;
  });
}

// let toddlerLine = document.querySelector('.toddler__line');

// noUiSlider.create(toddlerLine, {
//   start: [0, 5000],
//   connect: true,
//   range: {
//     min: 0,
//     max: 5000,
//   },
// });

// let noUiTouchArea = document.querySelectorAll('.noUi-touch-area');

// toddlerLine.noUiSlider.on('update', function (values, handle) {
//   noUiTouchArea[handle].innerHTML = Math.round(values[handle]);
// });

sidebarHeight();
sidebarStatusCheck();
selectItem();
logoSrc();
statusButton();

// ! Dropdown header
function dropdownUser() {
  document.getElementById('dropdown-user').classList.toggle('show');

}

window.onclick = function (event) {
  if (!event.target.matches('.header__user-arrow')) {
    let dropdowns = document.getElementsByClassName('dropdown__user-content');

    for (let i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
        openDropdown.style.display = 'none';
      }
    }
  }
};

// "use strict"

//#region // ! Раскрытие popup
function renderPopup(id) {
  return (location.href = id);
}
//#endregion

//#region // ! Выделение строки в popup
const items = document.getElementsByClassName('item');
for (let item of items) {
  item.addEventListener('click', () => {
    item.classList.toggle('selected');
  });
}
//#endregion

//#region //! Обработка селекта
const dropdownBtns = document.getElementsByClassName('dropdown__button');
// TODO Клик по кнопке, Открытие\Закрытие select
for (let btn of dropdownBtns) {
  const ddList = inList(btn);
  btn.addEventListener('click', () => {
    ddList.classList.toggle('dropdown__list--visible');
    btn.classList.toggle('dropdown__button--active');
  });
  document.addEventListener('click', (e) => {
    if (e.target !== btn) {
      btn.classList.remove('dropdown__button--active');
      ddList.classList.remove('dropdown__list--visible');
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Tab' || e.key === 'Escape') {
      btn.classList.remove('dropdown__button--active');
      ddList.classList.remove('dropdown__list--visible');
    }
  });
}


let messages = document.querySelector('.messages')
let message__modal = document.querySelector('.sms__error ')

let voice = document.querySelector('.voice_messages')
let voice__modal = document.querySelector('.voice__error ')

messages.addEventListener('click', (e) => {
  message__modal.classList.toggle('active')
  messages.classList.toggle('active')
});

voice.addEventListener('click', (e) => {
  voice__modal.classList.toggle('active')
  voice.classList.toggle('active')
});

document.querySelector('.window__sms_error__title').addEventListener('click', function () {
  document.querySelector('.window__sms_error__list').classList.toggle('active')
  document.querySelector('.window__start__box__btn').classList.toggle('active')

})
document.querySelector('.window__voice_error__title').addEventListener('click', function () {
  document.querySelector('.window__voice_error__list').classList.toggle('active')
  document.querySelector('.window__voice_error__title').classList.toggle('active')

})
// sound wave modal

let dropBtn = document.querySelector('.house__modal__btns >.btn__drop');
dropBtn.addEventListener('click', (e) => {
  document.querySelector('.house__modal').classList.remove('active')
  document.querySelector('.court ').classList.remove('active')
});
let voice__item = document.querySelectorAll('.voice-stat__item')

voice__item.forEach(item => {
  item.addEventListener('click', (e) => {
    document.querySelector('.notif__voice__modal').classList.add('active')
  })
})

document.querySelector('.notif__voice__modal > .modal__close').addEventListener('click', (e) => {
  document.querySelector('.notif__voice__modal').classList.remove('active')
});


let settingInputs = document.querySelectorAll('.settings__modal__item__range__input__notification');
let sumInputs = document.querySelectorAll('.settings__modal__item__range__input__sum')

settingInputs.forEach(item => {
  item.addEventListener('input', function () {
    let value = this.value
    let output = this.nextSibling.nextSibling
    output.innerHTML = value
  })
})

sumInputs.forEach(item => {
  item.addEventListener('input', function () {
    let value = this.value
    let output = this.parentNode.nextSibling.nextSibling
    output.innerHTML = value
  })
})


setInterval(function () {
  if (windowsWidth < 720) {
    if(document.querySelector('.sms__start').classList.contains('active') 
    ||  document.querySelector('.voice__start').classList.contains('active')) {
      document.querySelector('.main__download-tabs').style.marginTop = 110 + 'px'
    } else {
      document.querySelector('.main__download-tabs').style.marginTop = 10 + 'px'
    }
  }
 
}, 0)

