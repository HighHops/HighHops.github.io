import {mainTabs, subTabs} from './tabs.js';
import {status} from './status.js';
import {modals} from './modals.js';

$(document).ready( function () {
    mainTabs();
    subTabs();
    status();
    modals(); 

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
  
  
})