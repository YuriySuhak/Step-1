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
let $gallery = $("#picsBlock>img");
// const $galleryGraphic = $("#picsBlock>.gallery-Graphic");
// const $galleryLanding = $("#picsBlock>.gallery-Landing");
// const $galleryWeb = $("#picsBlock>.gallery-Web");
// const $galleryWordpress = $("#picsBlock>.gallery-Wordpress");

let amount = 12;
let $category = $gallery;

$("#amazingBar").on('click', 'li', function () {
    console.log($(this).attr('name'));
    const i = $(this).attr('name');
    if(i === "all-Gallery"){
        $category = $gallery;
    }
    else {$category = $("#picsBlock>img[class='" + i + "']");}
    console.log($category);
    removePics($gallery);
    addPics($category, amount);
    });

$("#morePics").on('click', function () {
    amount += 12;
    $(this).addClass("hidden");
    console.log(amount);
    addPics($category, amount);
} );

function addPics(arr, amount) {
    for (let i = 0; i < amount &&  i < arr.length; ++i) {
        arr[i].hidden = false
    }
}

function removePics(arr) {
    for (let i = 0; i < arr.length; ++i) {
        arr[i].hidden = true
    }
}
removePics($gallery);
addPics($category, amount);