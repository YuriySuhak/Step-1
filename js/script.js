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
// Our Amazing Work
const $gallery = $("#picsBlock>img");

let amount = 12;

$("#morePics").on('click', function () {
    amount += 12;
    console.log(amount);
    debugger;
    addPics($gallery, amount);
} );

function addPics(arr, amount) {

    for (let i = 0; i < (amount || arr.length); ++i) {
        arr[i].hidden = false
    }
}

function removePics(arr) {
    for (let i = 0; i < arr.length; ++i) {
        arr[i].hidden = true
    }
}
removePics($gallery);
addPics($gallery, amount);