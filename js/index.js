!function(n){var e=n.document,t=e.documentElement,i=750,d=i/100,o="orientationchange"in n?"orientationchange":"resize",a=function(){var n=t.clientWidth||320;n>750&&(n=750);t.style.fontSize=n/d+"px"};e.addEventListener&&(n.addEventListener(o,a,!1),e.addEventListener("DOMContentLoaded",a,!1))}(window);$(function(){$('.toggle_11qu9').click(function(){if($(this).hasClass('toggle_active_3QJbo')){$(this).removeClass('toggle_active_3QJbo');$('.list_3ubWD').hide()}else{$(this).addClass('toggle_active_3QJbo');$('.list_3ubWD').show()}});$('.news_dynamic_ul li').click(function(){$(this).addClass('active').siblings().removeClass('active');let index=$(this).index();$(this).parent().siblings().children().eq(index).addClass("active").siblings().removeClass("active")});$(window).scroll(function(event){var winPos=$(window).scrollTop();if(winPos>240){$('.nav_2oERi').slideUp()}else{$('.nav_2oERi').slideDown()}})})