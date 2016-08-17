disenyo.extend.standard = {};

/*disenyo extend standard opject*/
disenyo.extend.standard.opject = {
	attrX:'x',//attribute x
	attrY:'y',//attribute y
	name:'standard',
	snapElement:null,
	data: null,

	load: function(id)
	{

	}

	add: function(snapElement){
		var base = disenyo;
		newOpject = {};
		newOpject.type = this.name;
		newOpject.id = snapElement.id;
		newOpject.snap = snapElement;
		snapElement.data('id',newOpject.id);
		snapElement.attr('id',newOpject.id);
		base.opjects.push(newOpject);
		return newOpject;
	},

	remove: function(id)
	{

	},

	edit: function(){

	}

	move: function(dx,dy){
		var base = disenyo;

		attrX = this.data('attrX');
		attrY = this.data('attrY');
		var startX = Number(this.data('startX'));
        var startY = Number(this.data('startY'));

        this.attr(attrX, startX + dx  );
        this.attr(attrY, startY + dy );

	},
	start: function(){
		var base = disenyo;

		attrX = this.data('attrX');
		attrY = this.data('attrY');

		this.data('startX',this.attr(attrX));
        this.data('startY',this.attr(attrY));
	},

	stop: function(){},

    drag: function(snapElement){
		var base = disenyo;

		snapElement.data('attrX',this.attrX);
		snapElement.data('attrY',this.attrY);
		snapElement.drag(this.move, this.start, this.stop );
	}
};
disenyo.extend.standard.form = {
	load: function(){

	}

	close: function(){

	}
};

disenyo.extend.standard.button = {

	setLabel: function(label){
		base = disenyo;
		base.button.addText.label = label;
	},

	getLabel: function(){
		base = disenyo;
		return base.button.addText.label;
	},
};
