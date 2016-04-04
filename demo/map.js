(function () {

	/**
	* Add event listener in DOMElement
	*
	* @param {HTMLElement} obj HTMLElement which should be listen
	* @param {String} type Type of the event to listen
	* @param {Function} fn Callback function
	*/
	function addEvent(obj, type, fn) {
        if (typeof obj.addEventListener === 'function') {
            obj.addEventListener(type, fn, false);
        } else if (obj.attachEvent) {
			obj['e' + type + fn] = fn;
			obj[type + fn] = function () {
				obj['e' + type + fn].call(obj, window.event);
			}
			obj.attachEvent('on' + type, obj[type + fn]);
		}
	}

	/**
	* Apply the hover styles to the path hovered
	*
	* @param {Object} obj Reference to the Raphael set object
	* @param {Object} opt Options which store the style to apply for the hovered path
	* @param {Object} optTxt Options which store the style to apply for the hovered text
	* @param {String} animPath Animate the path when hovered over
	*/
	function hoverIn(obj, opt, optTxt, animPath) {
		if (document.querySelector("." + this.data("name")).checked || this.data("strID") !== "area") return;
		obj.forEach(
			(function(currentName){
				return function(e) {
					if (currentName === e.data("name") && e.data("strID") === "path") {
						e.attr({
							fill: opt.fill,
							stroke: opt.stroke,
							'stroke-width': opt['stroke-width'],
							opacity: opt.opacity,
							cursor: 'pointer'
						});
						if (ie8 === false && animPath === "yes") {
							e.animate({'fill':opt.fill,'stroke': opt.stroke,'stroke-width': opt['stroke-width'],'opacity': opt.opacity, 'transform':'s1.03 1.03'}, 200);
						}
					} else if (currentName === e.data("name") && e.data("strID") === "txt") {
						e.attr({
							fill: optTxt.fill,
							stroke: optTxt.stroke,
							'stroke-width': optTxt['stroke-width'],
							opacity: optTxt.opacity,
							cursor: 'pointer'
						});
					}
				};
			})(this.data("name"))
		);
	}

	/**
	* Put back the original styles to the path hovered out
	* @param {Object} obj Reference to the Raphael set object
	* @param {Object} opt Options which store the style to apply for the path
	* @param {Object} optTxt Options which store the style to apply for the text
	* @param {String} animPath Animate the path
	*/
	function hoverOut(obj, opt, optTxt, animPath) {
		if (document.querySelector("." + this.data("name")).checked || this.data("strID") !== "area") return;
		obj.forEach(
			(function(currentName){
				return function(e) {
					if (currentName === e.data("name") && e.data("strID") === "path") {
						if (ie8 === false && animPath === "yes") {
							e.animate({'fill':opt.fill,'stroke': opt.stroke,'stroke-width': opt['stroke-width'],'opacity': opt.opacity, 'transform':"s1.0 1.0"}, 200);
						}
						e.attr({
							fill: opt.fill,
							stroke: opt.stroke,
							'stroke-width': opt['stroke-width'],
							opacity: opt.opacity,
							cursor: 'pointer'
						});
					} else if (currentName === e.data("name") && e.data("strID") === "txt") {
						e.attr({
							fill: optTxt.fill,
							stroke: optTxt.stroke,
							'stroke-width': optTxt['stroke-width'],
							opacity: optTxt.opacity,
							cursor: 'pointer'
						});
					}
				};
			})(this.data("name"))
		);
	}

	/**
	* Select the input when clicking on a path and apply the styles
	*
	* @param {Object} obj Reference to the Raphael set object
	* @param {Object} opt Options which store the style to apply for the selected path
	* @param {Object} optTxt Options which store the style to apply for the selected text
	* @param {Object} optOff Options which store the style to apply for the non selected path
	* @param {Object} optTxtOff Options which store the style to apply for the non selected text
	* @param {String} animPath Animate the path
	*/
	function clickZone(obj,opt, optTxt, optOff, optTxtOff, animPath) {
        if (this.data("strID") !== "area") return;
		document.querySelector("." + this.data("name")).checked = true;
		obj.forEach(
			(function(currentName){
				return function(e) {
					if (currentName !== e.data("name") && e.data("strID") === "path") {
						e.attr({
							fill: optOff.fill,
							stroke: optOff.stroke,
							'stroke-width': optOff['stroke-width'],
							opacity: optOff.opacity,
							cursor: 'pointer'
						});
					} else if (currentName !== e.data("name") && e.data("strID") === "txt") {
						e.attr({
							fill: optTxtOff.fill,
							stroke: optTxtOff.stroke,
							'stroke-width': optTxtOff['stroke-width'],
							opacity: optTxtOff.opacity,
							cursor: 'pointer'
						});
					} else if (currentName === e.data("name") && e.data("strID") === "path") {
						e.attr({
							fill: opt.fill,
							stroke: opt.stroke,
							'stroke-width': opt['stroke-width'],
							opacity: opt.opacity,
							cursor: 'pointer'
						});
						if (ie8 === false && animPath === "yes") {
							e.animate({'fill':opt.fill,'stroke': opt.stroke,'stroke-width': opt['stroke-width'],'opacity': opt.opacity, 'transform':"s1.0 1.0"}, 200);
						}
					} else if (currentName === e.data("name") && e.data("strID") === "txt") {
						e.attr({
							fill: optTxt.fill,
							stroke: optTxt.stroke,
							'stroke-width': optTxt['stroke-width'],
							opacity: optTxt.opacity,
							cursor: 'pointer'
						});
					}
				};
			})(this.data("name"))
		);
	}

	/**
	* Creates a new instance of the map
	*
	* @param {Object} options Options of the map
	* @param {String} options.instanceId=1 Id of the ADC instance
	* @param {Number} options.width=300 Width of the image/ViewBox
	* @param {Number} options.height=300 Height of the image/ViewBox
	* @param {Number} options.fontSize=16 Font size of the text
	* @param {String} options.animatePath="yes" Animate the path when hovered over
	* @param {String} options.fill="#F7F7F7" Background color of the path
	* @param {String} options.strokeColor="#A1A7AD" Border color of the path
	* @param {Number} options.strokeWidth=1 Border Thickness of the path
	* @param {Number} options.opacity=0.0 Opacity of the path
	* @param {String} options.fillHover="#FFFFFF" Background color of the path when hovered
	* @param {String} options.strokeColorHover="#A1A7AD" Border color of the path when hovered
	* @param {Number} options.strokeWidthHover=1 Border Thickness of the path when hovered
	* @param {Number} options.opacityHover=0.0 Opacity of the path when hovered
	* @param {String} options.fillSelected="#E8F1FF" Background color of the path when selected
	* @param {String} options.strokeColorSelected="#A1A7AD" Border color of the path when selected
	* @param {Number} options.strokeWidthSelected=1 Border Thickness of the path when selected
	* @param {Number} options.opacitySelected=0.0 Opacity of the path when selected
	* @param {String} options.fillText="#444444" Font color of the text
	* @param {Number} options.opacityText=0.0 Opacity of the text
	* @param {String} options.fillTextHover="#444444" Font color of the text when hovered over
	* @param {Number} options.opacityTextHover=0.0 Opacity of the text when hovered over
	* @param {String} options.fillTextSelected="#444444" Font color of the text when selected
	* @param {Number} options.opacityTextSelected=0.0 Opacity of the text when selected
	* @param {Array} options.mapCaptions=[] Array of caption for the area
	* @param {Array} options.mapNames=[] Array of name for the area
	* @param {Array} options.mapPaths=[] Array of path for the area
	*/
	function Map(options) {
		this.options = options;
		this.instanceId = options.instanceId || 1;
		this.width = options.width || 300;
		this.height = options.height || 300;
		this.fontSize = options.fontSize || 16;
		this.animatePath = options.animatePath || "yes";
		// Path
		this.fill = options.fill ||  "#F7F7F7";
		this.strokeColor = options.strokeColor || "#A1A7AD";
		this.strokeWidth = options.strokeWidth || 1;
		this.opacity = options.opacity || 0.0;
		this.fillHover = options.fillHover ||  "#FFFFFF";
		this.strokeColorHover = options.strokeColorHover || "#A1A7AD";
		this.strokeWidthHover = options.strokeWidthHover || 1;
		this.opacityHover = options.opacityHover || 0.0;
		this.fillSelected = options.fillSelected ||  "#E8F1FF";
		this.strokeColorSelected = options.strokeColorSelected || "#A1A7AD";
		this.strokeWidthSelected = options.strokeWidthSelected || 1;
		this.opacitySelected = options.opacitySelected || 0.0;
		// Text
		this.fillText = options.fillText || "#444444";
		this.opacityText = options.opacityText || 0.0;
		this.fillTextHover = options.fillTextHover || "#444444";
		this.opacityTextHover = options.opacityTextHover || 0.0;
		this.fillTextSelected = options.fillTextSelected || "#007BC6";
		this.opacityTextSelected = options.opacityTextSelected || 0.0;
		this.adjustXtextObj = options.adjustXtextObj || [];
		this.adjustYtextObj = options.adjustYtextObj || [];
		this.mapCaptions = options.mapCaptions || [];
		this.mapNames = options.mapNames || [];
		this.mapPaths = options.mapPaths || [];

		var animPath = this.animatePath;

		var optArea = {
			fill: this.fill,
			stroke: this.strokeColor,
			'stroke-width': this.strokeWidth,
			opacity: 0,
			cursor: 'pointer'
		}
		var optPath = {
			'stroke-linecap': 'round',
			'stroke-linejoin': 'round',
			fill: this.fill,
			stroke: this.strokeColor,
			'stroke-width': this.strokeWidth,
			opacity: this.opacity,
			cursor: 'pointer'
		}
		var optPathHover = {
			'stroke-linecap': 'round',
			'stroke-linejoin': 'round',
			fill:this.fillHover,
			stroke:this.strokeColorHover,
			'stroke-width': this.strokeWidthHover,
			opacity: this.opacityHover
		};
		var optPathSelected = {
			'stroke-linecap': 'round',
			'stroke-linejoin': 'round',
			fill:this.fillSelected,
			stroke:this.strokeColorSelected,
			'stroke-width': this.strokeWidthSelected,
			opacity: this.opacitySelected
		};
		var optText = {
			'font-size': this.fontSize,
			fill: this.fillText,
			stroke: 'none',
			'stroke-width': 0,
			opacity: this.opacityText,
			'font-weight': 'normal',
			cursor: 'pointer'
		}
		var optTextHover = {
			'font-size': this.fontSize,
			fill: this.fillTextHover,
			stroke: 'none',
			'stroke-width': 0,
			opacity: this.opacityTextHover,
			'font-weight': 'normal'
		}
		var optTextSelected = {
			'font-size': this.fontSize,
			fill: this.fillTextSelected,
			stroke: 'none',
			'stroke-width': 0,
			opacity: this.opacityTextSelected,
			'font-weight': 'normal'
		}

		var paper = Raphael("adc_" + this.instanceId + "_container");
		var set = paper.set();
		
		for(var i = 0;l = this.mapPaths.length, i < l; i++){
			var path = paper.path(this.mapPaths[i]).attr(document.querySelector("." + this.mapNames[i]).checked ? optPathSelected : optPath).data('name',this.mapNames[i]).data('strID','path');			
			set.push(path);
		}
		for (var i = 0;l = this.mapCaptions.length, i < l; i++) {
			var bBox = set[i].getBBox();
			var textObj = path.paper.text( (bBox.x + bBox.width / 2) + ((this.adjustXtextObj[i] === undefined) ? 0 : this.adjustXtextObj[i]), (bBox.y + bBox.height / 2) + ((this.adjustYtextObj[i] === undefined) ? 0 : this.adjustYtextObj[i]), this.mapCaptions[i] ).attr( document.querySelector("." + this.mapNames[i]).checked ? optTextSelected : optText ).data('name',this.mapNames[i]).data('strID','txt');
			set.push(textObj);
		}
		for (var i = 0;l = this.mapPaths.length, i < l; i++) {
			var area = paper.path(this.mapPaths[i]).attr(optArea).data('name',this.mapNames[i]).data('strID','area');
			set.push(area);
		}

		set.hover(function () {
			hoverIn.call(this, set, optPathHover, optTextHover, animPath)
		}, function () {
			hoverOut.call(this, set, optPath, optText, animPath)
		});

		set.click(function () {
			clickZone.call(this, set, optPathSelected, optTextSelected, optPath, optText, animPath)
		});

		paper.setViewBox(0, 0, this.width, this.height, false);

		this.resizePaper(paper, this.width, this.height);
		addEvent(document.getElementsByTagName("BODY")[0], "resize", this.resizePaper(paper, this.width, this.height));
	}

	/**
	* Resize the map
	*
	* @param {Object} obj Reference to the Raphael paper object
	* @param {Number} width Width of the image/ViewBox
	* @param {Number} height Height of the image/ViewBox
	*/
	Map.prototype.resizePaper = function (obj, width, height) {
		var self = this;
		var ratio = parseFloat(width / height);
		var w = 0, h = 0;
		if (window.innerWidth){
			w = (window.innerWidth < width || ie8) ? window.innerWidth : width;
			h = w / ratio;
		} else if (document.documentElement && document.documentElement.clientWidth) {
			w = (document.documentElement.clientWidth < width || ie8) ? document.documentElement.clientWidth : width;
			h = w / ratio;
		}
		
		if (ie8 == false) {
			// any code here will be executed by IE 9 and greater
			obj.setSize(width, height);
			document.querySelector("#adc_" + self.instanceId + "_wrapper img").style.height = h;
		} else {
			// any code here will be executed by IE 8 and lower
			document.querySelector("#adc_" + self.instanceId + "_container div").style.overflow = 'visible';
		}
	};

	/**
	* Attach the Map to the window object
	*/
	window.Map = Map;
}());
