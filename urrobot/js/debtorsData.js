export let debsotrsData = () => {
    $('.sub_tabs__content__main__item__info').click(function () {
        $('.debstor').removeClass('active')
        $(this).parent().children('.debstor').addClass('active')
        $('.background').addClass('active')
    })
    $('.debstor__tabs__link').click(function (e) {
        e.preventDefault();

        $('.debstor__tabs__link').removeClass('active')
        $('.debstor__tabs__content__item').removeClass('active')

        $(this).addClass('active')
        $($(this).attr("href")).addClass('active')
    })

    $('.debstor__subtabs__link').click(function (e) {
        e.preventDefault();
        let tabContent = $(this).parent().parent().children('.debstor__subtabs__content').children('.debstor__subtabs__content__item')

        $(this).nextAll().removeClass('active')
        $(this).prevAll().removeClass('active')
        tabContent.removeClass('active')

        $(this).addClass('active')
        $($(this).attr("href")).addClass('active')
    })
}