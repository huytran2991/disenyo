disenyo.module = {};
disenyo.module.primary = {};

disenyo.module.primary.opject = {
    attrX: 'x',//default is 'x'
    attrY: 'y',//default is 'y'

    //after load
    snapElement: null,
    id: null,
    type: 'primary',//exmple: text, default primary

    load: function(){},

    remove: function(){},

    create: function(){
        
    },

    edit: function(){},
    addToPaper: function(){

    },
    move: function(dx,dy){
		var base = disenyo;

        //this is snapElement
        var snapElement = this;

        //get position
		attrX = snapElement.data('attrX');
		attrY = snapElement.data('attrY');
		var startX = Number(snapElement.data('startX'));
        var startY = Number(snapElement.data('startY'));

        //set position
        snapElement.attr(attrX, startX + dx );
        snapElement.attr(attrY, startY + dy );

    },//end of move()

    start: function(){
        var base = disenyo;

        //this is snapElement
        var snapElement = this;

        //get data position
        attrX = snapElement.data('attrX');
        attrY = snapElement.data('attrY');

        //set data position
        snapElement.data('startX',snapElement.attr(attrX));
        snapElement.data('startY',snapElement.attr(attrY));

    },//end of start

    stop: function(){},

    drag: function()
    {
      var base = disenyo;

      //this is opject
      var opject = this;
      var snapElement = opject.snapElement;

      if(typeof snapElement == 'undefined' && opject.isloaded())
      {
          //after load will have snapElement
          snapElement = opject.snapElement;
      }

      snapElement.data('attrX',opject.attrX);
      snapElement.data('attrY',opject.attrY);

      snapElement.drag(opject.move, opject.start, opject.stop );

    }//end of drag

};

disenyo.module.primary.formHtml = {
    create: function(){},
    remove: function(){},
    close: function(){},
};

disenyo.module.primary.buttonHtml = {
    label:"Primary",//default Primary
    icon:null,//
    name:'primary',
    click: function(){

    },
    appendToDashboard: function(){},
    removeFormDashboard: function(){},
    setLabel: function(label){

    },
    getLabel: function(label){

    },
};
