disenyo = {
    desk: null,           //desk element of jquery
    paper: null,         //paper of Snap
    jpaper: null,       //page of jquery
    dashboard: null,   //element contain control
    jbutton: {},      //elements button
    button :{},      //opject
    deskWidth:800,
    deskHeight:600,
    key:'disenyo_',
    opjects:[],
    extend: {},
    opject:{},

    create: function(id,option){
        base = disenyo;
        //set default option
        if(typeof option == 'undefined')
        {
            option = {};
            option.deskWidth = base.deskWidth;
            option.deskHeight = base.deskHeight;
        }

        base.desk = jQuery('#'+id);

        //add jpage
        base.jpaper = jQuery('<svg id="paper" width="600" height="600"></svg>');
        base.desk.append(base.jpaper);

        //add dashboard
        base.dashboard = jQuery('<div id="dashboard"></div>');
        base.desk.append(base.dashboard);
        //add paper
        base.paper = Snap('#paper');
    },
    /*
    param: button = {
        'name':'',
        'label':'',
        'click': function(){}
    }*/
    addButton : function(button){
        base = disenyo;
        if(typeof button == 'string')
        {
            disenyo.addButton(base.module[button].buttonHtml);

        }
        if(typeof button == 'object')
        {
            base.jbutton[button.name] = jQuery('<div id="disenyo_button_'+button.name+'" class="disenyo-control">'+button.label+'</div>');
            var elementButton = base.jbutton[button.name];
            elementButton.click(button.click);
            base.dashboard.append(elementButton);
        }

    },

    createControl: function(controlOption)
    {

    },

    getControl: function(name){

    },


};
