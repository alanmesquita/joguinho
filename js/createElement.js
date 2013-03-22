var createElement = function () {

	this.elements;

	this.setElement = function (elementName, imageUrl) {

		this.setElementInList(elementName);
		//nav img
		/*var navinhaReady = false;
		var navinhaImage = new Image();
		navinhaImage.onload = function(){
			navinhaReady = true;
		};
		navinhaImage.src = 'css/images/hellhound.gif';*/
	};

	setElementInList : function (elementName) {
		if (elements[elementName]) {
			alert('ueba');
			console.log('ja existe o elemento' + elementName);
		} else {
			elements[elementName] = createElement.setBasicsAtributes();
		}

		console.log(elements);
		
	},

	setBasicsAtributes : function () {
		return { 'teste': 80, 'uhuuu' : 90 };
	},

}

var elementCollection = function () {
	this.element = new Array();
}