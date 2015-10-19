/*
	Prologue 1.1 by HTML5 UP
	html5up.net | @n33co
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

/*********************************************************************************/
/* Settings                                                                      */
/*********************************************************************************/

	var prologue_settings = {

		// skelJS (probably don't need to change anything here unless you know what you're doing)
			skelJS: {
				prefix: '/css/style',
				resetCSS: true,
				boxModel: 'border',
				useOrientation: true,
				breakpoints: {
					'widest':	{ range: '1881-', containers: 1400, grid: { gutters: 70 } },
					'wide':	{ range: '961-1880', containers: '920', grid: { gutters: 30 } },
					'narrow':	{ range: '961-1320', containers: 'fluid', grid: { gutters: 30 } },
//					'narrower':	{ range: '-960', containers: 'fluid', grid: { gutters: 30 } },
					'mobile':	{ range: '-960', containers: 'fluid', lockViewport: true, grid: { gutters: 30, collapse: true } }
				}
			},

		// skelJS Plugins (ditto; don't change unless you know what you're doing)
			skelJSPlugins: {
				panels: {
					panels: {
						sidePanel: {
							breakpoints: 'mobile',
							position: 'right',
							size: 240,
							html: '<div data-action="moveElement" data-args="header"></div></div>'
						}
					},
					overlays: {
						sidePanelToggle: {
							breakpoints: 'mobile',
							position: 'top-right',
							width: '3.5em',
							height: '2.25em',
							html: '<div data-action="togglePanel" data-args="sidePanel" class="toggle"></div>'
						}
					}
				}
			}

	};

/*********************************************************************************/
/* Don't modify beyond this point unless you know what you're doing!             */
/*********************************************************************************/

// Initialize skelJS
	skel.init(prologue_settings.skelJS, prologue_settings.skelJSPlugins);

// jQuery functions

	// formerize
		jQuery.fn.n33_formerize=function(){var _fakes=new Array(),_form = jQuery(this);_form.find('input[type=text],textarea').each(function() { var e = jQuery(this); if (e.val() == '' || e.val() == e.attr('placeholder')) { e.addClass('formerize-placeholder'); e.val(e.attr('placeholder')); } }).blur(function() { var e = jQuery(this); if (e.attr('name').match(/_fakeformerizefield$/)) return; if (e.val() == '') { e.addClass('formerize-placeholder'); e.val(e.attr('placeholder')); } }).focus(function() { var e = jQuery(this); if (e.attr('name').match(/_fakeformerizefield$/)) return; if (e.val() == e.attr('placeholder')) { e.removeClass('formerize-placeholder'); e.val(''); } }); _form.find('input[type=password]').each(function() { var e = jQuery(this); var x = jQuery(jQuery('<div>').append(e.clone()).remove().html().replace(/type="password"/i, 'type="text"').replace(/type=password/i, 'type=text')); if (e.attr('id') != '') x.attr('id', e.attr('id') + '_fakeformerizefield'); if (e.attr('name') != '') x.attr('name', e.attr('name') + '_fakeformerizefield'); x.addClass('formerize-placeholder').val(x.attr('placeholder')).insertAfter(e); if (e.val() == '') e.hide(); else x.hide(); e.blur(function(event) { event.preventDefault(); var e = jQuery(this); var x = e.parent().find('input[name=' + e.attr('name') + '_fakeformerizefield]'); if (e.val() == '') { e.hide(); x.show(); } }); x.focus(function(event) { event.preventDefault(); var x = jQuery(this); var e = x.parent().find('input[name=' + x.attr('name').replace('_fakeformerizefield', '') + ']'); x.hide(); e.show().focus(); }); x.keypress(function(event) { event.preventDefault(); x.val(''); }); });  _form.submit(function() { jQuery(this).find('input[type=text],input[type=password],textarea').each(function(event) { var e = jQuery(this); if (e.attr('name').match(/_fakeformerizefield$/)) e.attr('name', ''); if (e.val() == e.attr('placeholder')) { e.removeClass('formerize-placeholder'); e.val(''); } }); }).bind("reset", function(event) { event.preventDefault(); jQuery(this).find('select').val(jQuery('option:first').val()); jQuery(this).find('input,textarea').each(function() { var e = jQuery(this); var x; e.removeClass('formerize-placeholder'); switch (this.type) { case 'submit': case 'reset': break; case 'password': e.val(e.attr('defaultValue')); x = e.parent().find('input[name=' + e.attr('name') + '_fakeformerizefield]'); if (e.val() == '') { e.hide(); x.show(); } else { e.show(); x.hide(); } break; case 'checkbox': case 'radio': e.attr('checked', e.attr('defaultValue')); break; case 'text': case 'textarea': e.val(e.attr('defaultValue')); if (e.val() == '') { e.addClass('formerize-placeholder'); e.val(e.attr('placeholder')); } break; default: e.val(e.attr('defaultValue')); break; } }); window.setTimeout(function() { for (x in _fakes) _fakes[x].trigger('formerize_sync'); }, 10); }); return _form; };
	
	// scrolly
		jQuery.fn.n33_scrolly = function() {			
			var bh = jQuery('body,html'), t = jQuery(this);

			t.click(function(e) {
				var h = jQuery(this).attr('href'), target;

				if (h.charAt(0) == '#' && h.length > 1 && (target = jQuery(h)).length > 0)
				{
					var pos = Math.max(target.offset().top, 0);
					e.preventDefault();
					bh
						.stop(true, true)
						.animate({ scrollTop: pos }, 'slow', 'swing');
				}
			});
			
			return t;
		};

	// scrollzer
		jQuery.n33_scrollzer = function(ids, userSettings) {

			var top = jQuery(window), doc = jQuery(document);
			
			top.load(function() {

				// Settings
					var settings = jQuery.extend({
						activeClassName:	'active',
						suffix:				'-link',
						pad:				50,
						firstHack:			false,
						lastHack:			false
					}, userSettings);

				// Variables
					var k, x, o, l, pos;
					var lastId, elements = [], links = jQuery();

				// Build elements array
					for (k in ids)
					{
						o = jQuery('#' + ids[k]);
						l = jQuery('#' + ids[k] + settings.suffix);
					
						if (o.length < 1
						||	l.length < 1)
							continue;
						
						x = {};
						x.link = l;
						x.object = o;
						elements[ids[k]] = x;
						links = links.add(l);
					}

				// Resize event (calculates start/end values for each element)
					var resizeTimerId, resizeFunc = function() {
						var x;
						
						for (k in elements)
						{
							x = elements[k];
							x.start = Math.ceil(x.object.offset().top) - settings.pad;
							x.end = x.start + Math.ceil(x.object.innerHeight());
						}
						
						top.trigger('scroll');
					};
					
					top.resize(function() {
						window.clearTimeout(resizeTimerId);
						resizeTimerId = window.setTimeout(resizeFunc, 250);
					});

				// Scroll event (checks to see which element is on the screen and activates its link element)
					var scrollTimerId, scrollFunc = function() {
						links.removeClass('scrollzer-locked');
					};
				
					top.scroll(function(e) {
						var i = 0, h, found = false;
						pos = top.scrollTop();

						window.clearTimeout(scrollTimerId);
						scrollTimerId = window.setTimeout(scrollFunc, 250);
						
						// Step through elements
							for (k in elements)
							{
								if (k != lastId
								&&	pos >= elements[k].start
								&&	pos <= elements[k].end)
								{
									lastId = k;
									found = true;
								}
								
								i++;
							}
							
						// If we're using lastHack ...
							if (settings.lastHack
							&&	pos + top.height() >= doc.height())
							{
								lastId = k;
								found = true;
							}
							
						// If we found one ...
							if (found
							&&	!links.hasClass('scrollzer-locked'))
							{
								links.removeClass(settings.activeClassName);
								elements[lastId].link.addClass(settings.activeClassName);
							}
					});
					
				// Initial trigger
					top.trigger('resize');

			});

		};
		
	// Flickr
	jQuery.fn.flickrThumbs = function () {
    var flickrfeed = "http://api.flickr.com/services/feeds/photos_public.gne?id=63781227@N00&lang=en-us&format=json&size=s&display=latest&jsoncallback=?";
    var $container = $(this);
    $.getJSON(flickrfeed, function(data){
	    var $imgchunk = $("<div class='row'>");
	    //3 small thumbs
      for (i=0;i<3;i++) {
        $("<img />")
          .attr("src", data.items[i].media.m)
          .attr("title", data.items[i].title)
          .appendTo($imgchunk)
          .wrap("<div class='image 4u' id='flickr_badge_image"+(i+1)+"'></div>")
          .wrap("<a href='" + data.items[i].link + "'></a>");
      }      
      $imgchunk.appendTo($container);
    });
	};
	
/*
* EASYFADER - An Ultralight Fading Slideshow For Responsive Layouts
* Version: 1.0
* Author: Patrick Kunka
* Copyright 2012-2013 Patrick Kunka
*/

(function($){
  function prefix(el){
	  var prefixes = ["Webkit", "Moz", "O", "ms"];
	  for (var i = 0; i < prefixes.length; i++){
		  if (prefixes[i] + "Transition" in el.style){
			  return '-'+prefixes[i].toLowerCase()+'-'; 
		  };
	  }; 
	  return "transition" in el.style ? "" : false;
  };
  var methods = {
	  init: function(settings){
		  return this.each(function(){
			  var config = {
				  slideDur: 7000,
				  fadeDur: 800
			  };
			  if(settings){
				  $.extend(config, settings);
			  };
			  this.config = config;
			  var $container = $(this),
				  slideSelector = '.slide',
				  fading = false,
				  slideTimer,
				  activeSlide,
				  newSlide,
				  $slides = $container.find(slideSelector),
				  totalSlides = $slides.length,
				  $pagerList = $container.find('.pager_list');
				  prefix = prefix($container[0]);
			  function animateSlides(activeNdx, newNdx){
				  function cleanUp(){
					  $slides.eq(activeNdx).removeAttr('style');
					  activeSlide = newNdx;
					  fading = false;
					  waitForNext();
				  };
				  if(fading || activeNdx == newNdx){
					  return false;
				  };
				  fading = true;
				  $pagers.removeClass('active').eq(newSlide).addClass('active');
				  $slides.eq(activeNdx).css('z-index', 3);
				  $slides.eq(newNdx).css({
					  'z-index': 2,
					  'opacity': 1
				  });
				  if(!prefix){
					  $slides.eq(activeNdx).animate({'opacity': 0}, config.fadeDur,
					  function(){
						  cleanUp();
					  });
				  } else {
					  var styles = {};
					  styles[prefix+'transition'] = 'opacity '+config.fadeDur+'ms';
					  styles['opacity'] = 0;
					  $slides.eq(activeNdx).css(styles);
					  var fadeTimer = setTimeout(function(){
						  cleanUp();
					  },config.fadeDur);
				  };
			  };
			  function changeSlides(target){
				  if(target == 'next'){
					  newSlide = activeSlide + 1;
					  if(newSlide > totalSlides - 1){
						  newSlide = 0;
					  }
				  } else if(target == 'prev'){
					  newSlide = activeSlide - 1;
					  if(newSlide < 0){
						  newSlide = totalSlides - 1;
					  };
				  } else {
					  newSlide = target;
				  };
				  animateSlides(activeSlide, newSlide);
			  };
			  function waitForNext(){
				  slideTimer = setTimeout(function(){
					  changeSlides('next');
				  },config.slideDur);
			  };
			  for(var i = 0; i < totalSlides; i++){
				  $pagerList
					  .append('<li class="page" data-target="'+i+'"></li>');
			  };
			  $container.find('.page').bind('click',function(){
				  var target = $(this).attr('data-target');
				  clearTimeout(slideTimer);
				  changeSlides(target);
			  });
			  var $pagers = $pagerList.find('.page');
			  $slides.eq(0).css('opacity', 1);
			  $pagers.eq(0).addClass('active');
			  activeSlide = 0;
			  waitForNext();
		  });
	  }
  };
  $.fn.easyFader = function(settings){
	    return methods.init.apply(this, arguments);
  };
})(jQuery);
