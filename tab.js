
// for (let i = 0; i < $('.tab-button').length; i++) {
//     $('.tab-button').eq(i).click(function () {
//         tapOpen(i)
//     });
// }

$('.list').click(function (e) {
    tapOpen(e.target.dataset.id);
})


function tapOpen(i) {
    $('.tab-button').removeClass('active');
    $('.tab-content').removeClass('show');
    $('.tab-button').eq(i).addClass('active');
    $('.tab-content').eq(i).addClass('show');
}