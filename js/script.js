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
//+hover

$("#picsBlock>img").hover(function () {
    // console.log($(this));
    // $(this).slideToggle();
    const coord = $(this).offset();
    $(this).animate({ opacity: 0 }, 0);
        console.log($(this).position());
        console.log(coord);
        $("#hover").offset({ top: coord.top, left: coord.left});
        // $("#hover").animate({ opacity: 1 }, 0);
    },
function () {
    // console.log($(this));
    // $(this).slideToggle();
    $(this).animate({ opacity: 1 }, 0);
    $("#hover").offset({ top: '-300', left: '-300'});
    // $("#hover").animate({ opacity: 0 }, 0);
}
);

//What People Say About theHam

let picNumber = 1;

$(".scrolling-box").on('click', 'div', function () {
    hideCurrent();
    picNumber = $(this).index();
    let $picWay = $(".scrolling-box>div>img").eq(picNumber-1).attr('src');
    console.log($picWay);
    switchComment($picWay);
});

$("#nextArrow").on('click',  function () {
    hideCurrent();
if(picNumber < 4) {
    picNumber += 1;
}
else {
    picNumber = 1;
}
    let $picWay = $(".scrolling-box>div>img").eq(picNumber-1).attr('src');
    console.log($picWay);
    switchComment($picWay);
});

$("#prevArrow").on('click',  function () {
    hideCurrent();
if(picNumber > 1 ) {
    picNumber -= 1;
}
else {
    picNumber = 4;
}
    let $picWay = $(".scrolling-box>div>img").eq(picNumber-1).attr('src');
    console.log($picWay);
    switchComment($picWay);
});

function hideCurrent() {
    $(".comment-box>div").eq(picNumber-1).slideToggle(700);
}

function switchComment(picWay) {
    console.log(picNumber);
    $(".portrait-mini").removeClass("portrait-mini-active");
    $(".scrolling-box>div>img").eq(picNumber-1).addClass("portrait-mini-active");
    $(".portrait").attr('src', picWay);
    // $(".comment-box>div").addClass('comment-hidden');
    // $(".comment-box>div").slideToggle(700);
    // $(".comment-box>div").eq(picNumber-1).removeClass('comment-hidden');
    $(".comment-box>div").eq(picNumber-1).slideToggle(700);
}

