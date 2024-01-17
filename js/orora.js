$(function(){

//메뉴 슬라이딩 구현 영역.
$(".main > li , .sub_bg").hover(function(){
    $(".sub , .sub_bg").stop().slideDown();
}, function(){
    $(".sub , .sub_bg").stop().slideUp();
})

//이미지슬라이드 구현 영역.
var time = setInterval(left,3000)

// 함수만들기
function left(){
    $(".move").animate({"left":"-1920px"},500, function(){
        $(".move").css({left:"0"});
        $(".move").append( $(".move li").first() );
    })//
} /* left */

function right(){
    $(".move").css({left:"-1920px"})
    $(".move").prepend($(".move li").last() );
    $(".move").animate({left:"0"},500)
}//

$(".move, button").hover(function(){
    clearInterval(time);
}, function(){
    time = setInterval( left , 3000);

})//
//슬라이드이미지_버튼 영역
    $(".prev").click(function(){
        left();
    })

    $(".next").click(function(){
        right();
    })    


//best_list 영역
$(".best_list").slick({
    slidesToShow:5,
    autoplay:true,
    autoplaySpeed:2000,
    pauseOnHover:true,
    arrows:true, 
    dots:true,
    swipe:true,
    centerMode: true, //중앙에 슬라이드가 보여지는 모드 ▶기본값 false
    // centerPadding: '70px', //중앙에 슬라이드가 보여지는 모드에서 패딩 값
    centerPadding: '120px',
})//best_list

})//jquery