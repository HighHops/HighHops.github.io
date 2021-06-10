export let modals = () => {
    let search = $('.settings__search svg');
    let settings = $('.setting')
    let print = $('.print')
    let house = $('.house')
    let panel = $('.panel')
    let display = $('.setting__display')
    let sms = $('.sms')
    let voice = $('.voice')

    $(document).click(function (e) {
        let thisElem = e.target;
        if(thisElem.classList.contains('active')) {                        
            $('.settings__modal').removeClass('active')
            $('.print__modal').removeClass('active')
            $('.print').removeClass('active')
            $('.house__modal').removeClass('active')
            $('.house').removeClass('active')
            $('.btns__modal').removeClass('active')
            $('.panel').removeClass('active')
            $('.display__modal').removeClass('active')
            $('.setting__display').removeClass('active')
            if (!thisElem.classList.contains('debstor') 
            &&  !thisElem.classList.contains('debstor__subtabs__link')  
            &&  !thisElem.classList.contains('debstor__tabs__content__item') 
            &&  !thisElem.classList.contains('debstor__subtabs__content__item') 
            &&  !thisElem.classList.contains('notif__voice__modal') 
            &&  !thisElem.classList.contains('background2')) {
                $('.debstor').removeClass('active')
                $('.background').removeClass('active')

        
               
            }
           
        }
    
    })
    search.click(function (e) {
        e.preventDefault()
        if ($(this).parent().hasClass('active')) {
            $(this).parent().removeClass('active');
            $('.settings__search__modal').removeClass('active')
        } else {
            $(this).parent().addClass('active');
            $('.settings__search__modal').addClass('active')
        }
        
    })
    settings.click(function (e) {
        $('.settings__modal').addClass('active')
        $('.background').addClass('active')
    })

    print.click(function (e) {
        $('.print').addClass('active')
        $('.print__modal').addClass('active')
        $('.background').addClass('active')
    })
    house.click(function () {
        $('.house').addClass('active')
        $('.house__modal').addClass('active')
        $('.background').addClass('active')
    })
    panel.click(function () {
        $('.background').addClass('active')
        $('.btns__modal').addClass('active')
        $('.panel').addClass('active')
    })
    display.click(function () {
        $('.background').addClass('active')
        $('.display__modal').addClass('active')
        $('.setting__display').addClass('active')
    })
    sms.click(function () {
        sms.toggleClass('active')
        $('.sms__start').toggleClass('active')
    })
    voice.click(function () {
        voice.toggleClass('active')
        $('.voice__start').toggleClass('active')
    })
    $('.cancel').click(function () {
        $('.print__modal').removeClass('active')
        $('.print').removeClass('active')
        $('.house__modal').removeClass('active')
        $('.house').removeClass('active')
        $('.btns__modal').removeClass('active')
        $('.panel').removeClass('active')
        $('.display__modal').removeClass('active')
        $('.setting__display').removeClass('active')
        if (!$(this).parent().parent().hasClass('notif__voice__content__items') 
            && !$(this).parent().hasClass('notif__voice__modal')) {
            $('.debstor').removeClass('active')
            $('.background').removeClass('active')

        }
        if ($(this).parent().hasClass('notif__voice__modal')) {
            $('.notif__voice__modal').removeClass('active')
            $('.background2').removeClass('active')
        }

    })
    $('.house__modal__btns .btn__drop').click(function (e) {
        e.preventDefault();
        $('.background').removeClass('active')
        $('.house__modal').removeClass('active')
        $('.house').removeClass('active')
    })
    
    $('.notif__voice__content__items').click(function () {
        $(this).prev('.notif__voice__modal').addClass('active');
        $(this).prevAll('.background2').addClass('active');
    })



}