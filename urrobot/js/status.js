export let status = () => {
    let statusItem = $('.status__menu__item')
    statusItem.click(function (e) {
        statusItem.addClass('active')
    })
}