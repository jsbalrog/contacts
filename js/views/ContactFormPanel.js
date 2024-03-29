Contacts.views.ContactFormPanel = Ext.extend(Ext.form.FormPanel, {
    defaultType: 'textfield',
    scroll: 'vertical',

    initComponent: function() {
        // *** Other initialization code goes here ***
        // items will be defined here
        this.items = [
            {
                label:'First',
                name :'firstName',
                itemId:'firstName'
            },
            {
                label:'Last',
                name :'lastName',
                itemId : 'lastName'
            },
            {
                label:'Phone',
                name :'phone',
                itemId : 'phone'
            },
            {
                label:'Email',
                name :'email',
                itemId : 'email'
            }
        ];

        // dockedItems will be defined here
        this.dockedItems = [
            {
                xtype : 'toolbar',
                dock  : 'bottom',
                items : [
                    {
                        text   : 'Done',
                        itemId : 'done',
                        // Listeners on the button will go here
                        listeners : {
                            scope : this,
                            tap : this.onDoneTap
                        }
                    },
                    {
                        text   : 'Cancel',
                        itemId : 'cancel',
                        // Listeners on the button will go here
                        listeners : {
                            scope : this,
                            tap : this.onCancelTap
                        }
                    }
                ]
            }
        ];

        // This is basically a call to super();
        Contacts.views.ContactFormPanel.superclass.initComponent.apply(this,arguments);
    },

    onDoneTap : function() {
        Ext.dispatch({
            controller : 'ContactController',
            action : 'saveContact',
            form : this
        });
    },

    onCancelTap : function(btn, evt) {
        Ext.dispatch({
            controller : 'ContactController',
            action    : 'returnToList'
        });
    }
});

// So that lazy instantiation may be used in creating ContactListPanels
Ext.reg('contactForm', Contacts.views.ContactFormPanel);