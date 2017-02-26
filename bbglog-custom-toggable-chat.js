/*
    @name Toggleable Chat for BBLog Theme 2.0
    @author ColdIce
    @version 1.1
    @release_date 20.05.2015

    The MIT License (MIT)

	Copyright (c) 2015 ColdIce

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.
*/
BBLog.handle("add.plugin", {
    id : "custom-toggable-chat-plugin",
    name : "Toggleable Chat for BBLog Theme 2.0",
    version : '1.0',
    build : '20150520',

    init : function (instance) {
		$(document).ready(function () {
			var $comcenter = $("#comcenter-friends");
			$("#comcenter-settings").css({"padding:":"3px 8px"});
			$("#friendlist-header").click(function(e){
				if (!$(this).attr('data-toggled') || $(this).attr('data-toggled') == 'off'){
					if(e.target == this){
						$(this).attr('data-toggled','on');
						$comcenter.animate({height:80},200);
					}
				} else if ($(this).attr('data-toggled') == 'on'){
					if(e.target == this){
						$(this).attr('data-toggled','off');
						$comcenter.animate({height:700},200);
					}
				}
			});
			$(".icon-search[data-bind-toggle=comcenter-search]").click(function(e){
				e.preventDefault();
				toggleComcenterSearch();
				return false;
			});
		})	
    },
	toggleComcenterSearch : function () {
		var $comcenter = $("#comcenter-friends"),
		$searchForm = $comcenter.find("#comcenter-search"),
		$searchResults = $comcenter.find("#comcenter-search-results");

		var $input = $searchForm.find("input");
		$input.val("");
		if ($comcentercontainer.hasClass("show-search")) {
			$comcentercontainer.removeClass("show-search");
			$searchResults.empty().hide().siblings().show();
			$facebookFriendfinderCta.show();
		} else {
			$comcentercontainer.addClass("show-search");
			$searchResults.show().siblings().hide();
			$input.trigger("focus");
		}
		comcenter.scrollableReinitialise();
	}
});
