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
let amount = 12;
let $category = $gallery;

$("#amazingBar").on('click', 'li', function () {
    console.log($(this).attr('name'));
    $("#amazingBar>li").removeClass("tabs-tabs-title-active");
    $(this).addClass("tabs-tabs-title-active");
    const i = $(this).attr('name');
    if(i === "all-Gallery"){
    $category = $gallery;
    }
    else {
        $category = $("#picsBlock>img[class='" + i + "']");
    }
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
//What People Say About theHam

// $(".portrait-mini-box").on('click', 'img', function () {
//     console.log($(this).attr('src'));
//     let dd = $(this).attr('src');
//     $(".portrait").attr('src', dd);
//     $(".portrait-mini").removeClass("portrait-mini-active");
//     $(this).addClass("portrait-mini-active");
// });

let picNumber = 1;
let dd = 'img/portrait1.png';

$(".scrolling-box").on('click', 'div', function () {
               picNumber = $(this).index();
    console.log($(this).index());
    console.log($(".scrolling-box>div>img").eq(picNumber-1).attr('src'));
    $(".portrait-mini").removeClass("portrait-mini-active");
    $(".scrolling-box>div>img").eq(picNumber-1).addClass("portrait-mini-active");
    dd = $(".scrolling-box>div>img").eq(picNumber-1).attr('src');
    $(".portrait").attr('src', dd);
});
