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