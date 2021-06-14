'use strict'; //vh

var vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', ''.concat(vh, 'px'));
window.addEventListener('resize', function () {
  var vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', ''.concat(vh, 'px'));
}); //theme

var root = $('html');
var themeChanger = $('#theme-changer');
var theme = localStorage.getItem('theme');

if (theme) {
  root.attr('data-theme', theme);

  if (theme === 'light') {
    themeChanger.prop('checked', false);
  }

  if (theme === 'dark') {
    themeChanger.prop('checked', true);
  }
} else {
  root.attr('data-theme', 'light');
}

themeChanger.change(function () {
  if ($(this).prop('checked')) {
    root.attr('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
  } else {
    root.attr('data-theme', 'light');
    localStorage.setItem('theme', 'light');
  }
});
var toggleDataNavbar = $('[data-toggle="navbar"]');
var dropToggle = $('[data-toggle="dropdown"]');
var navCloser = $('.navbar-closer');
var page = $('.page');
var dataAsideToggle = $('[data-toggle="aside-nav"]');
var dataType = $('.data-type__block ');
var mobileDrop = $('.mobile-drop-select');
var downloadToggle = $('[data-toggle="download"]');
var toggleApi = $('[data-toggle="api-nav"]');
var toggleUploadType = $('[data-toggle="upload-type"]');
var toggleIntegration = $('[data-toggle="integration-nav"]'); // var dropDownItem = $('.dropdown-item');

$(document).ready(function () {
  //toggleDataNavbar
  toggleDataNavbar.click(function (e) {
    e.preventDefault();
    toggleDataNavbar.removeClass('active');
    $(this).addClass('active');
    var target = $(this).attr('data-target');
    $('.data__item').addClass('hide');
    $('[id="' + target + '"]').removeClass('hide');
  }); //show hide passs

  $('.toggle-password').click(function () {
    var inputPassword = $(this).closest('.form-group').find('.input-password');

    if (inputPassword.attr('type') === 'password') {
      inputPassword.attr('type', 'text');
      $(this).addClass('active');
    } else {
      $(this).removeClass('active');
      inputPassword.attr('type', 'password');
    }
  });
  dropToggle.click(function (e) {
    if ($(this).hasClass('drop-select')) {
      var selected = $(this).find('.drop-selected');
      var selectItem = $(this).parent().find('.dropdown-item');
      selectItem.click(function () {
        selected.text($(this).text());
        dropToggle.not(this).removeClass('active');
        dropToggle.not(this).closest('.dropdown').removeClass('active');

        if ($(this).attr('data-type-img')) {
          var thisTarget = $(this).attr('data-type-img');
          var uploadContent = $('.upload__content');
          uploadContent.removeClass('active');
          $('[data-upload="' + thisTarget + '"]').addClass('active'); // uploadContent.attr('data-upload', thisTarget).addClass('s');
        }
      });
    }

    e.preventDefault();
    dropToggle.not(this).removeClass('active');
    dropToggle.not(this).closest('.dropdown').removeClass('active');
    $(this).toggleClass('active');
    $(this).closest('.dropdown').toggleClass('active');
  });
  $(document).mouseup(function (e) {
    if (!dropToggle.is(e.target) && dropToggle.has(e.target).length === 0 && !$('.dropdown').is(e.target) && $('.dropdown').has(e.target).length === 0) {
      dropToggle.removeClass('active');
      $('.dropdown').removeClass('active');
    }
  }); //nav close

  navCloser.click(function () {
    $(this).toggleClass('open');
    page.toggleClass('navbar-open');
    $('.navbar').toggleClass('open');
  }); //mobileDrop

  dataAsideToggle.click(function (e) {
    e.preventDefault();
    var dataList = $(this).closest('.data__aside-list');
    var dataItem = dataList.closest('.data__item');
    var dataListLink = dataList.find(dataAsideToggle);
    var dataItemContent = dataItem.find($('.data__content'));
    dataListLink.removeClass('active'); //dataAsideToggle.removeClass('active');

    $(this).addClass('active');
    var target = $(this).attr('data-target');
    var dataAsideId = $('[id="' + target + '"]'); //$('.data__content').addClass('hide');

    dataItemContent.addClass('hide');
    dataAsideId.removeClass('hide');
  });
  mobileDrop.click(function () {
    var thisMobileDrop = $(this);
    thisMobileDrop.toggleClass('active');
    var target = thisMobileDrop.attr('data-target');
    var dropList = $('[data-drop="' + target + '"]');
    dropList.toggleClass('show-drop');
    dropList.find('.mobile-drop-item').click(function (e) {
      e.preventDefault();
      thisMobileDrop.find('.mobile-drop-text').text($(this).text());
      thisMobileDrop.removeClass('active');
      dropList.removeClass('show-drop');
    });
  }); //alert closer

  $('.alert-close').click(function () {
    $('.alert').remove();
  });
  setTimeout(function () {
    $('.alert').remove();
  }, 5000); //progress show all

  $('.progress__show-all').click(function () {
    $('.progress').toggleClass('show-all');
  }); //progress

  var procentSecond = 80;
  setInterval(function () {
    if (procentSecond !== 101) {
      $('.progress__line--2').css('width', procentSecond + '%');
      $('[data-procent="progress-2"]').text("".concat(procentSecond++, "%"));
    } else {
      clearInterval();
      $('.progress').addClass('ready-2');
      $('.data__header-items').addClass('ready-2');
    }
  }, 1000);
  var procent = 75;
  setInterval(function () {
    if (procent !== 101) {
      $('.progress__line--1').css('width', procent + '%');
      $('[data-procent="progress-1"]').text("".concat(procent++, "%"));
    } else {
      clearInterval();
      $('.progress').addClass('ready-1');
      $('.data__header-items').addClass('ready-1');
    }
  }, 1500);
  setInterval(function () {
    $('.progress.ready-1.ready-2').remove();
  }, 3000); //dataType

  dataType.click(function () {
    var dataTypeParent = $(this).closest('.data-type');
    var children = dataTypeParent.children();
    children.removeClass('active');
    $(this).addClass('active');
  }); //downloadToggle

  downloadToggle.click(function () {
    downloadToggle.removeClass('active');
    $(this).addClass('active');
    $('.download__content-inner').toggleClass('hide');
    $('.download__api').toggleClass('hide');
    $('.download__info').toggleClass('hide');
    $('.download__year ').addClass('hide');
    $('.download__nav').addClass('download__nav--full');
    $('.download__content').toggleClass('download__content--full');
    var target = $(this).attr('data-target');

    if (target !== 'download-api') {
      if (!$('.download__type-linear').hasClass('active')) {
        if ($('[data-by="download-by-month"]').is(':checked')) {
          $('.download__year ').removeClass('hide');
          $('.download__nav').removeClass('download__nav--full');
        }
      }
    }
  }); //linear table

  $('.download__type-btn').click(function () {
    $('.download__type-btn').removeClass('active');
    $(this).addClass('active');
    $('.download__nav').addClass('download__nav--full');

    if ($(this).hasClass('download__type-linear')) {
      $('.download__by').addClass('hide');
      $('.download__by-month').addClass('hide');
      $('.download__by-all').addClass('hide');
      $('.download__year').addClass('hide');
      $('.download__linear').removeClass('hide');
    } else {
      $('.download__by').removeClass('hide');
      $('.download__linear').addClass('hide');

      if ($('[data-by="download-by-month"]').is(':checked')) {
        $('.download__year').removeClass('hide');
        $('.download__by-month').removeClass('hide');
        $('.download__nav').removeClass('download__nav--full');
        $('.download__by-all').addClass('hide');
      } else {
        $('.download__year').addClass('hide');
        $('.download__by-month').addClass('hide');
        $('.download__nav').addClass('download__nav--full');
        $('.download__by-all').removeClass('hide');
      }
    }
  }); //download by month

  $('[data-by="download-by-month"]').change(function () {
    if ($(this).prop('checked', true)) {
      $('.download__by-month').removeClass('hide');
      $('.download__by-all').addClass('hide');
      $('.download__year').removeClass('hide');
      $('.download__nav').removeClass('download__nav--full');
    }
  });
  $('[data-by="download-all"]').change(function () {
    if ($(this).prop('checked', true)) {
      $('.download__by-month').addClass('hide');
      $('.download__by-all').removeClass('hide');
      $('.download__year').addClass('hide');
      $('.download__nav').addClass('download__nav--full');
    }
  });
  $('.download__just').click(function () {
    $(this).addClass('hide');
  }); //download api

  toggleApi.click(function (e) {
    e.preventDefault();
    toggleApi.removeClass('active');
    $(this).addClass('active');
    var target = $(this).attr('data-target');
    $('.download__api-content').addClass('hide');
    $('[id="' + target + '"]').removeClass('hide');
  }); //integration modal

  $('.integration-card').click(function () {
    $('.modal').addClass('active');
  }); //integration api

  toggleIntegration.click(function (e) {
    e.preventDefault();
    toggleIntegration.removeClass('active');
    $(this).addClass('active');
    var target = $(this).attr('data-target');
    $('.integration__items').addClass('hide');
    $('[id="' + target + '"]').removeClass('hide');
  }); //modal

  $(document).mouseup(function (e) {
    if (!$('.modal__content').is(e.target) && $('.modal__content').has(e.target).length === 0) {
      $('.modal').removeClass('active');
    }
  });
  $('.close-modal').click(function () {
    $('.modal').removeClass('active');
  });
  $('.close-process').click(function () {
    $('.modal__process').removeClass('active');
  });
  $('.next-process').click(function (e) {
    e.preventDefault(); // $('.modal__body').addClass('hide');

    $('.modal__process').addClass('active');
    var connectionProgress = 95;
    setInterval(function () {
      if (connectionProgress !== 100) {
        connectionProgress++;
        $('.modal__line').css('width', connectionProgress + '%');
      } else {
        clearInterval(); // $('.modal__body').addClass('connection-ready');

        $('.modal__body').addClass('connection-error');
      }
    }, 1000);
  });
  $('.modal__process-again').click(function () {
    $('[data-step="1"]').addClass('hide');
    $('[data-step="2"]').removeClass('hide');
    $('.modal__step').removeClass('active');
    $('.modal__step').eq(1).addClass('active');
  });
  $('.modal-ready').click(function () {
    $('[data-step="1"]').removeClass('hide');
    $('[data-step="2"]').addClass('hide');
    $('.modal__step').removeClass('active');
    $('.modal__step').eq(0).addClass('active');
    $('.modal').removeClass('active');
    $('.modal__process').removeClass('active');
  }); //toggleUploadType

  toggleUploadType.click(function () {
    var target = $(this).attr('data-target');
    $('.upload__content').addClass('hide');
    $('[id="' + target + '"]').removeClass('hide');
  }); //remove delete

  $('.remove-all').click(function () {
    var downloaded = $(this).closest('.download__files').find('.downloaded');
    downloaded.css('background-image', 'none');
    downloaded.removeClass('downloaded');
  });
  $('.file-delete').click(function () {
    var downloaded = $(this).closest('.downloaded');
    downloaded.css('background-image', 'none');
    downloaded.removeClass('downloaded');
  });
});
var datepickerFirst = new Datepicker('#datepickerone');
var datepickerSecond = new Datepicker('#datepickertwo'); // var datepicker = new Datepicker('#datepickerone', {
// 	inline: true
//   });