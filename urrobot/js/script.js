import {mainTabs, subTabs} from './tabs.js';
import {status} from './status.js';
import {modals} from './modals.js';
import {debsotrsData} from './debtorsData.js';

$(document).ready( function () {
    mainTabs();
    subTabs();
    status();
    modals(); 
    debsotrsData();

    // hints 
    $( ".settings__item" ).hover(
        function() {
          $( this ).addClass( "hints" );
        }, function() {
          $( this ).removeClass( "hints" );
        }
      );
      $( ".sub_tabs__content__main__item__info__ls__item" ).hover(
        function() {
          $( this ).children('.hints__item').addClass( "active" );
        }, function() {
          $( this ).children('.hints__item').removeClass( "active" );
        }
      );
   

      $( ".hint" ).hover(
        function() {
          $( this ).addClass( "hints" );
        }, function() {
          $( this ).removeClass( "hints" );
        }
      );
        
    $('.settings__item__notification').click(function () {
        $('.settings__item__notification').toggleClass('active')
    })
  
})