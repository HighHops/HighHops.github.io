export let modals = () => {
    let notification = $('.settings__item__notification');
    let search = $('.settings__search svg');
    let settings = $('.settings__modal')

    $(document).click(function (e) {
        var container = $(".setting");
        if (container.has(e.target).length === 0){
            $('.settings__modal').removeClass('active')
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
    })
 

}