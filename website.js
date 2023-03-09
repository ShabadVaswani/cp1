var test = document.getElementById("locatenext");
var showall = document.getElementById("showall");
var test1 = document.getElementById("locateup");
var cl = document.getElementById("locatedown");

var nav = document.getElementById("nav");
function isIn(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}
// function isInViewport(element) {
//     const rect = element.getBoundingClientRect();
//     return (
//         rect.top >= 0 &&
//         rect.left >= 0 &&
//         rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
//         rect.right <= (window.innerWidth || document.documentElement.clientWidth)
//     );
// }


setInterval(function() {
    if (isIn(test)||isIn(showall)||isIn(cl)) {
        
        nav.classList.add("nav2");
    }
    else if(isIn(test1)) {
        nav.classList.remove("nav2");
    }
}, 1000);


var m1 = 0, m2 = 0, m3 = 0;
$('.m1').click(function() {console.log('kkkkkk')
    m1=!m1
    if(m1==1)$('.m1').addClass('foo');
    else $('.m1').removeClass('foo');
  });


$('.m2').click(function() {console.log('kkkkkk')
    m2=!m2
    if(m2==1)$('.m2').addClass('foo');
    else $('.m2').removeClass('foo');
});

$('.m3').click(function() {console.log('kkkkkk')
    m3=!m3
    if(m3==1)$('.m3').addClass('foo');
    else $('.m3').removeClass('foo');
  });
  

//   $('.project').click(function() {console.log('kkkkkk')
//   if ($('.project').classList.has('foo')) {
//       $('.project').classList.remove("foo");
//   }
//   else{
//       $('.project').classList.add("foo");
//   }
// });