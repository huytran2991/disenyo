disenyo.extend.addText = {};

disenyo.extend.addText.opject = jQuery.extend(disenyo.extend.standard.opject,{

	addObject: function(content){
		base = disenyo;
        var paper = disenyo.paper;
        var addText = base.extend.addText;
		var opject = addText.opject.add(paper.text(50, 50, content));
		addText.opject.drag(opject.snap);
		
		//set click for snap opject
		opject.snap.click(function(){
			console.log(this);
		});
	},
});

disenyo.extend.addText.form = jQuery.extend(disenyo.extend.standard.form,{
	create: function(id){
		base = disenyo;
		if(typeof id == 'undefined') id = '';
		else id = 'bag_form_'+id;
		var bag = jQuery('<div class="bag_form">').attr('id',id);
		
		var inputContent = jQuery('<input type="text" class="input_content" >');
		var rowContent = jQuery('<div>').append('<label>').text('Edit content').append(inputContent);
		rowContent.appendTo(bag);
		
		var buttonOk = jQuery('<button>').text('OK');
		buttonOk.click(function(){
			base = disenyo;
			bagForm = jQuery(this).closest('.bag_form');
			var addText = base.extend.addText;
			content = bagForm.find('.input_content').val();
			addText.opject.addObject(content);
			bagForm.remove();
		});
		buttonOk.appendTo(bag);
		return bag;
	},

});

disenyo.extend.addText.button = jQuery.extend(disenyo.extend.standard.button,{
	'name':'addText',
    'label':'Add text',
    
    click: function(){
        base = disenyo;
        var addText = base.extend.addText;
       // var button =  base.extend.addText.button;
        var bag = addText.form.create();
        bag.appendTo(jQuery('#wrapForm'));
    }
});
