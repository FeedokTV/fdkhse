var isRendererEnable = true
var currentMenuPoint = '#main-render'

// Initializing

options = {
  "animate": true,
  "patternWidth": 100,
  "patternHeight": 100,
  "grainOpacity": 0.03,
  "grainDensity": 1,
  "grainWidth": 1,
  "grainHeight": 1
}

//grained('#main',options)

_fadeIn('.nav-name',1000)
_fadeIn('.nav-elem.home',1100)
_fadeIn('.nav-elem.projects',1200)
_fadeIn('.nav-elem.games',1300)
_fadeIn('.nav-elem.about',1500)
_fadeIn('#main-render',1000)


// Navigation Bar functions

document.addEventListener("click", function(event) {
    rendererObject = document.getElementById('main-render');
    target = '.' + event.target.className
    if (event.target.className=="nav-elem home") {
            changeContent(currentMenuPoint, target)
            currentMenuPoint = '#main-render'
        }
    

    if (event.target.className=="nav-elem projects") {
        changeContent(currentMenuPoint, target)
        currentMenuPoint = '.content-projects'
    }

    if (event.target.className=="nav-elem about") {
        changeContent(currentMenuPoint, target)
        currentMenuPoint = '.content-about'
    }
  });


// Retarded animation funcs 
// I know that there fadeOut/fadeIn func in jquerry tho

function _fadeIn (selector,time) {
    $(selector).animate({
        'opacity': 1,
    },time)
 }

function _fadeOut (selector,time) { 
    $(selector).animate({
        'opacity': 0,
    },time)
 }


function initializeProjects() {
    

}

// Content Functions

var showText = function (target, message, index, interval) {   
    if (index < message.length) {
        alert(target.text);
      $(target).append(message[index++]);
      $(target).animate({
        opacity : 1
        },interval*message.length)
      setTimeout(function () { showText(target, message, index, interval); }, interval);
    }
  }

function changeContent(current, target) {
    
    if(target == '.nav-elem home' && current != '#main-render') {

        $(current).animate({
            'opacity': 0,
        },1000, function() {
            _fadeOut('.main_content',1000)
            $('.main-content').css('display','none')
            $(current).css('display','none')
            $('#main-render').css('display','block')
            _fadeIn('#main-render',1000)
        })
    }
    
    else if(target == '.nav-elem projects' && current != '.content-projects') {
        $(current).animate({
            'opacity': 0,
        },1000, function() {
            $('.main-content').css('display','block')
            $(current).css('display','none')
            $('.content-projects').css('display','grid')
            _fadeIn('.content-projects',1000)
            $(function () {
                showText("p", "", 0, 500);   
              });
        })
    }
    else if(target == '.nav-elem about' && current != '.content-about') {
        $(current).animate({
            'opacity': 0,
        },1000, function() {
            $('.main-content').css('display','block')
            $(current).css('display','none')
            $('.content-about').css('display','block')
            _fadeIn('.content-about',1000)
            $(function () {
                showText("p", "", 0, 500);   
              });
        })

    }


}