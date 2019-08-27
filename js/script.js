// Our Services
const $OurS = $(".article-block>div");
for (let i = 1; i < $OurS.length; ++i) {
    $OurS[i].hidden = true
}
let marker = 0;

$(".cervices-bar").on('click', 'li', function() {
    $(".cervices-bar>li").removeClass("delta");
    $(this).addClass("delta");
    $OurS[marker].hidden = true;
    marker = $(this).index();
    $OurS[marker].hidden = false;
});
//
