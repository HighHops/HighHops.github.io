export let mainTabs = () => {
    let tabsLink= $('.tabs__item')
    let tabsContent = $('.tabs__block')

    tabsLink.click(function (e) {
        e.preventDefault();

        tabsLink.removeClass('active');
        tabsContent.removeClass('active');

        $(this).addClass('active');
        $($(this).attr('href')).addClass('active');

    })
}

export let subTabs = () => {
    let tabsLink= $('.sub__tabs__item')
    let tabsContent = $('.sub__tabs__block')

    tabsLink.click(function (e) {
        e.preventDefault();

        tabsLink.removeClass('active');
        tabsContent.removeClass('active');

        $(this).addClass('active');
        $($(this).attr('href')).addClass('active');

    })
}