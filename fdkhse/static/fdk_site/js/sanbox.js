var isRendererEnable = true
var prevMenuPoint = 0   
var currentMenuPoint = 0

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

document.addEventListener("click", function(e) {
    rendererObject = document.getElementById('main-render');
    if (e.target.className=="nav-elem home") {  
        fadeOutCurrentMenuPoint(currentMenuPoint,e)

        currentMenuPoint = 'content-home'
    }

    if (e.target.className=="nav-elem projects") {
        if (isRendererEnable == true) {
            $('#main-render').animate({
                 'opacity': 0,
            },1000,function() { 
            $('#main-render').css('display','none')
            $('.main-content').css('display','block')
            $('.content-projects').css('display','block')
            _fadeIn('main_content',1000) })
            isRendererEnable = false

            fadeOutCurrentMenuPoint(currentMenuPoint, e)
            currentMenuPoint = 'content-projects'
        }
    }

    if (e.target.className=="nav-elem about") {
        if (isRendererEnable == true) {


            fadeOutCurrentMenuPoint(currentMenuPoint, e)
            currentMenuPoint = 'content-about'

            
        }
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

function fadeOutCurrentMenuPoint(point, current) {

    if (!e.target.className=="nav-elem home" && point == 0) {
        _fadeOut('.content-projects',1000)
    }
    else if (!e.target.className=="nav-elem projects" && point == 1) {
        _fadeOut('.content-projects',1000)
    }
    else if (!e.target.className=="nav-elem about" && point == 3) {
        $(point).animate({
            'opacity': 0,
        },1000,function() {
            $('.content-about').css('display','block') })
    }
}