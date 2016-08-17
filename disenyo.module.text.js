disenyo.module.text = {};
disenyo.module.text.opject = jQuery.extend(disenyo.module.primary.opject,{
    addToPaper: function(){
        base = disenyo;
        var paper = disenyo.paper;
        var moduleText = base.module.text;
		var opject = moduleText.opject.create(paper.text(50, 50, content));
		moduleText.opject.drag();

		//set click for snap opject
		opject.snap.click(function(){
			console.log(this);
		});
    },
});

disenyo.module.text.formHtml = jQuery.extend(disenyo.module.primary.formHtml,{
    create: function(id){
		base = disenyo;
		if(typeof id == 'undefined') id = '';
		else id = 'bag_form_'+id;
		var bag = jQuery('<div class="bag_form">').attr('id',id);

        //create input type text
		var inputContent = jQuery('<input type="text" id="input_text_content" >');
		var rowContent = jQuery('<div>').append('<label>').text('Edit content').append(inputContent);
		rowContent.appendTo(bag);

        //create button ok
		var buttonOk = jQuery('<button>').text('OK');
		buttonOk.click(function(){
			base = disenyo;
			bagForm = jQuery(this).closest('.bag_form');
			var moduelText = base.module.text;
			content = bagForm.find('#input_text_content').val();
			moduelText.opject.addObject(content);
			bagForm.remove();
		});
		buttonOk.appendTo(bag);

		return bag;
	},
});

disenyo.module.text.buttonHtml = jQuery.extend(disenyo.module.primary.buttonHtml,{
    'name':'addText',
    'label':'Add text',

    click: function(){
        base = disenyo;
        var moduelText = base.module.text;
       // var button =  base.extend.addText.button;
        var bag = moduelText.formHtml.create();
        bag.appendTo(jQuery('#wrapForm'));
    }
});
