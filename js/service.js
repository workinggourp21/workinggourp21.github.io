/*global $, jQuery, console, alert, prompt, let */
$(document).ready(function () {
    "use strict";
    // All Variable ====================================================================================
    var x, bodyHeight, d,
        footer = $('.footer'),
        activeClick = $('[data-active]'),
        heightEqualWidth = $('.meet .meet-content figure div, .some .da-thumbs > div'),
        heightFromWidth = $('.stories .stories-content figure div'),
        mapClick = $('.map .map-content, .filter .tile'),
        mapClickChild = $('.map .map-content .overlay-map'),
        footerLi = $('footer .footer-three ul li'),
        
        slidertext = $('.slidertext-parent'), // Slider Text
        slidertextUl = slidertext.find('.slidertext-ul'),
        slidertextUlLi = slidertextUl.find('.slidertext-ul-li'),
        slidertextFaLeft = slidertext.find('> .fa:first-of-type'),
        slidertextFaRight = slidertext.find('> .fa:last-of-type'),
        slidertextTime = 1000,
        slidertextSet,
        
        slideroneimg = $('.slideroneimg-parent'), // Slider One Image
        slideroneimgUl = slideroneimg.find('.slideroneimg-ul'),
        slideroneimgUlLi = slideroneimgUl.find('.slideroneimg-ul-li'),
        slideroneimgFaLeft = slideroneimg.find('> .fa:first-of-type'),
        slideroneimgFaRight = slideroneimg.find('> .fa:last-of-type'),
        slideroneimgTime = 1000,
        slideroneimgSet;
    
    // Slider Text ====================================================================================
    slidertextFaLeft.fadeOut();
    function slidertextRun() { // Run Slider
        if (slidertextUlLi.hasClass('slidertext-active')) {
            slidertextUl.animate({
                left: -slidertext.width() * $('.slidertext-active').data('slidertext')
            }, slidertextTime);
            if (slidertextUlLi.first().hasClass('slidertext-active')) { slidertextFaLeft.fadeOut(); } else { slidertextFaLeft.fadeIn(); }
            if (slidertextUlLi.last().prev().hasClass('slidertext-active')) { slidertextFaRight.fadeOut(); } else { slidertextFaRight.fadeIn(); }
        }
    }
    function slidertextAuto() { // Auto Slider
        if ($('.slidertext-active').next().is(':last-of-type')) {
            slidertextUl.animate({
                left: -slidertext.width() * ($('.slidertext-active').data('slidertext') + 1)
            }, slidertextTime, function () {
                slidertextUl.css('left', '0');
                slidertextUlLi.first().addClass('slidertext-active').siblings().removeClass('slidertext-active');
                slidertextRun();
            });
        } else {
            $('.slidertext-active').next().addClass('slidertext-active').siblings().removeClass('slidertext-active');
            slidertextRun();
        }
    }
    slidertext.each(function () { // Work Slider
        slidertextSet = setInterval(slidertextAuto, slidertextTime * 3);
        $(this).find('> .fa').hover(function () {
            clearInterval(slidertextSet); // Pause
        }, function () {
            slidertextSet = setInterval(slidertextAuto, slidertextTime * 3); // Resume
        });
        $(this).find('> .fa').click(function () {
            if ($(this).is(':first-of-type')) {
                $('.slidertext-active').prev().addClass('slidertext-active').siblings().removeClass('slidertext-active');
                slidertextRun();
            }
            if ($(this).is(':last-of-type')) {
                $('.slidertext-active').next().addClass('slidertext-active').siblings().removeClass('slidertext-active');
                slidertextRun();
            }
        });
    });
    // Slider One Image ====================================================================================
    slideroneimgFaLeft.fadeOut();
    function slideroneimgRun() { // Run Slider
        if (slideroneimgUlLi.hasClass('slideroneimg-active')) {
            slideroneimgUl.animate({
                left: -slideroneimg.width() * $('.slideroneimg-active').data('slideroneimg')
            }, slideroneimgTime);
            if (slideroneimgUlLi.first().hasClass('slideroneimg-active')) { slideroneimgFaLeft.fadeOut(); } else { slideroneimgFaLeft.fadeIn(); }
            if (slideroneimgUlLi.last().prev().hasClass('slideroneimg-active')) { slideroneimgFaRight.fadeOut(); } else { slideroneimgFaRight.fadeIn(); }
        }
    }
    function slideroneimgAuto() { // Auto Slider
        if ($('.slideroneimg-active').next().is(':last-of-type')) {
            slideroneimgUl.animate({
                left: -slideroneimg.width() * ($('.slideroneimg-active').data('slideroneimg') + 1)
            }, slideroneimgTime, function () {
                slideroneimgUl.css('left', '0');
                slideroneimgUlLi.first().addClass('slideroneimg-active').siblings().removeClass('slideroneimg-active');
                slideroneimgRun();
            });
        } else {
            $('.slideroneimg-active').next().addClass('slideroneimg-active').siblings().removeClass('slideroneimg-active');
            slideroneimgRun();
        }
    }
    slideroneimg.each(function () { // Work Slider
        slideroneimgSet = setInterval(slideroneimgAuto, slideroneimgTime * 3);
        $(this).find('> .fa').hover(function () {
            clearInterval(slideroneimgSet); // Pause
        }, function () {
            slideroneimgSet = setInterval(slideroneimgAuto, slideroneimgTime * 3); // Resume
        });
        $(this).find('> .fa').click(function () {
            if ($(this).is(':first-of-type')) {
                $('.slideroneimg-active').prev().addClass('slideroneimg-active').siblings().removeClass('slideroneimg-active');
                slideroneimgRun();
            }
            if ($(this).is(':last-of-type')) {
                $('.slideroneimg-active').next().addClass('slideroneimg-active').siblings().removeClass('slideroneimg-active');
                slideroneimgRun();
            }
        });
    });
    // Dimaintion ======================================================================================
    function resetDimaintion() {
//        bodyHeight = document.body.scrollHeight; // Footer Bottom 0
//        footer.css('position', 'absolute');
//        footer.css('top', bodyHeight);
        
        slidertext.width(slidertext.parent().width()).height(slidertextUl.height()); // Slider Text
        slidertextUl.width(slidertext.width() * slidertextUlLi.length).height(slidertextUl.height());
        slidertextUlLi.width(slidertext.width()).height(slidertextUl.height());
        slidertext.css('max-height', slidertextUlLi.height());
        
        slideroneimg.width(slideroneimg.parent().width()).height(slideroneimgUl.height()); // Slider One Image
        slideroneimgUl.width(slideroneimg.width() * slideroneimgUlLi.length).height(slideroneimgUl.height());
        slideroneimgUlLi.width(slideroneimg.width()).height(slideroneimgUl.height());
        slideroneimg.css('max-height', slideroneimgUlLi.height());
        
        heightEqualWidth.height(heightEqualWidth.width()); // Height % Width
        footerLi.height(footerLi.width()); // Height % Width
        heightFromWidth.height(heightFromWidth.width() * 0.65);
    }
    // Active ==========================================================================================
    activeClick.children().on('click', function () {
        x = $(this).parent().data('active');
        $(this).addClass(x).siblings().removeClass(x);
    });
    // Send Google Search ==============================================================================
    function send() {
        document.form.submit();
    }
    // Fontawsome Search ===============================================================================
    $('html').click(function () {
        if ($('.form-search').is(":visible")) {
            $('.form-search').slideUp();
        }
    });
    $('.fa-search').click(function (event) {
        $('.form-search').slideToggle();
    });
    $('.form-search, .fa-search').click(function (event) {
        event.stopPropagation();
    });
    // Progress Number =============================================================================
    function progressFunc() {
        $('.progress-number').each(function () {
            $(this).animate({
                left: $(this).data('percentage')
            }, {
                duration: 3000,
                step: function (nowoooo) {
                    var data = Math.round(nowoooo),
                        zero = (data < 10) ? "0" : "";
                    $(this).html(zero + data + '%');
                }
            });
        });
    }
    $(window).scroll(function () {
        if ($(this).scrollTop() >= $('.progress-pure').offset().top / 2) {
            progressFunc();
        }
    });
    // Accordion ====================================================================================
    $('dd').filter(':nth-child(n+4)').addClass('accordion-hide');
    $('dt').filter(':nth-child(1)').find('span').html("<i class='fa fa-angle-down'></i>");
    $('dt').filter(':nth-child(n+2)').find('span').html("<i class='fa fa-angle-up'></i>");

	$('dl').on('click', 'dt', function () {
		$(this).addClass("add").find("span").html("<i class='fa fa-angle-down'></i>").end().siblings().find("span").html("<i class='fa fa-angle-up'></i>").end().removeClass("add").end().next().slideDown(200).siblings('dd').slideUp(200);
	});
    // Map & Title ========================================================================================
    mapClick.click(function () {
        $(this).children('.map .map-content .overlay-map, .filter .tile .tile-fixed').fadeToggle();
    });
    // Publicholder ====================================================================================
    $('[placeholder]').focus(function () { // Placeholder
		$(this).attr('data-place', $(this).attr('placeholder'));
		$(this).attr('placeholder', '');
	}).blur(function () {
		$(this).attr('placeholder', $(this).attr('data-place'));
	});
    // Public ====================================================================================
    resetDimaintion(); // Function Reset Dimaintion
    d = new Date(); // Append Date To Footer
    footer.text(footer.text() + d.getFullYear());
    // When Resize ===============================================================================
    $(window).resize(function () {
        resetDimaintion();
        setTimeout(function () {location.reload(); }, 2000);
    });
});

    // Some ====================================================================================
    $(function () {
        $('.da-thumbs > div').hoverdir();
    });
    (function (factory) {
        if (typeof define === 'function' && define.amd) {
            define(['jquery'], factory);
        } else if (typeof exports !== 'undefined') {
            module.exports = factory(require('jquery'));
        } else {
            factory(jQuery);
        }
    })(function ($) {
        function Hoverdir(element, options) {
            this.$el = $(element);
            this.options = $.extend(true, {}, this.defaults, options);
            this.isVisible = false;
            this.$hoverElem = this.$el.find(this.options.hoverElem);
            this.transitionProp = 'all ' + this.options.speed + 'ms ' + this.options.easing;
            this.support = this._supportsTransitions();
            this._loadEvents();
        }
        Hoverdir.prototype = {
            defaults: {
                speed: 300,
                easing: 'ease',
                hoverDelay: 0,
                inverse: false,
                hoverElem: 'div'
            },
            constructor: Hoverdir,
            _supportsTransitions: function() {
                if (typeof Modernizr !== 'undefined') {
                    return Modernizr.csstransitions;
                } else {
                    var b = document.body || document.documentElement,
                        s = b.style,
                        p = 'transition';

                    if (typeof s[p] === 'string') {
                        return true;
                    }
                    var v = ['Moz', 'webkit', 'Webkit', 'Khtml', 'O', 'ms'];
                    p = p.charAt(0).toUpperCase() + p.substr(1);

                    for ( var i = 0; i < v.length; i++) {
                        if (typeof s[v[i] + p] === 'string') {
                            return true;
                        }
                    }

                    return false;
                }
            },
            _loadEvents: function() {
                this.$el.on('mouseenter.hoverdir mouseleave.hoverdir', $.proxy(function(event) {
                    this.direction = this._getDir({
                        x: event.pageX,
                        y: event.pageY
                    });

                    if (event.type === 'mouseenter') {
                        this._showHover();
                    } else {
                        this._hideHover();
                    }
                }, this));
            },
            _showHover: function() {
                var styleCSS = this._getStyle(this.direction);
                if (this.support) {
                    this.$hoverElem.css('transition', '');
                }

                this.$hoverElem.hide().css(styleCSS.from);
                clearTimeout(this.tmhover);

                this.tmhover = setTimeout($.proxy(function() {
                    this.$hoverElem.show(0, $.proxy(function() {
                        if (this.support) {
                            this.$hoverElem.css('transition', this.transitionProp);
                        }
                        this._applyAnimation(styleCSS.to);

                    }, this));
                }, this), this.options.hoverDelay);

                this.isVisible = true;
            },
            _hideHover: function() {
                var styleCSS = this._getStyle(this.direction);
                if (this.support) {
                    this.$hoverElem.css('transition', this.transitionProp);
                }
                clearTimeout(this.tmhover);
                this._applyAnimation(styleCSS.from);
                this.isVisible = false;
            },
            _getDir: function(coordinates) {
                var w = this.$el.width(),
                    h = this.$el.height(),
                    x = (coordinates.x - this.$el.offset().left - (w / 2)) * (w > h ? (h / w) : 1),
                    y = (coordinates.y - this.$el.offset().top - (h / 2)) * (h > w ? (w / h) : 1),
                    direction = Math.round((((Math.atan2(y, x) * (180 / Math.PI)) + 180) / 90) + 3) % 4;
                return direction;
            },
            _getStyle: function(direction) {
                var fromStyle, toStyle,
                    slideFromTop = {
                        'left': '0',
                        'top': '-100%'
                    },
                    slideFromBottom = {
                        'left': '0',
                        'top': '100%'
                    },
                    slideFromLeft = {
                        'left': '-100%',
                        'top': '0'
                    },
                    slideFromRight = {
                        'left': '100%',
                        'top': '0'
                    },
                    slideTop = {
                        'top': '0'
                    },
                    slideLeft = {
                        'left': '0'
                    };

                switch (direction) {
                    case 0:
                    case 'top':
                        // from top
                        fromStyle = !this.options.inverse ? slideFromTop : slideFromBottom;
                        toStyle = slideTop;
                        break;
                    case 1:
                    case 'right':
                        // from right
                        fromStyle = !this.options.inverse ? slideFromRight : slideFromLeft;
                        toStyle = slideLeft;
                        break;
                    case 2:
                    case 'bottom':
                        // from bottom
                        fromStyle = !this.options.inverse ? slideFromBottom : slideFromTop;
                        toStyle = slideTop;
                        break;
                    case 3:
                    case 'left':
                        // from left
                        fromStyle = !this.options.inverse ? slideFromLeft : slideFromRight;
                        toStyle = slideLeft;
                        break;
                }
                return {
                    from: fromStyle,
                    to: toStyle
                };
            },
            _applyAnimation: function(styleCSS) {
                $.fn.applyStyle = this.support ? $.fn.css : $.fn.animate;
                this.$hoverElem.stop().applyStyle(styleCSS, $.extend(true, [], {
                    duration: this.options.speed
                }));
            },
            show: function(direction) {
                this.$el.off('mouseenter.hoverdir mouseleave.hoverdir');
                if (!this.isVisible) {
                    this.direction = direction || 'top';
                    this._showHover();
                }
            },
            hide: function(direction) {
                this.rebuild();
                if (this.isVisible) {
                    this.direction = direction || 'bottom';
                    this._hideHover();
                }
            },
            setOptions: function(options) {
                this.options = $.extend(true, {}, this.defaults, this.options, options);
            },
            destroy: function() {
                this.$el.off('mouseenter.hoverdir mouseleave.hoverdir');
                this.$el.data('hoverdir', null);
            },
            rebuild: function(options) {
                if (typeof options === 'object') {
                    this.setOptions(options);
                }
                this._loadEvents();
            }
        };

        $.fn.hoverdir = function(option, parameter) {
            return this.each(function() {
                var data = $(this).data('hoverdir');
                var options = typeof option === 'object' && option;
                if (!data) {
                    data = new Hoverdir(this, options);
                    $(this).data('hoverdir', data);
                }
                if (typeof option === 'string') {
                    data[option](parameter);
                    if (option === 'destroy') {
                        $(this).data('hoverdir', false);
                    }
                }
            });
        };
        $.fn.hoverdir.Constructor = Hoverdir;
    });

// Em An
// 26-12-2016