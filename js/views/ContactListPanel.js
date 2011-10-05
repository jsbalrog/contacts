Contacts.views.ContactListPanel = Ext.extend(Ext.Panel, {
    layout: 'fit',
    html: 'The list panel',
    initComponent: function() {
        // *** Other initialization code goes here ***

        this.dockedItems = [{
            xtype:'toolbar',
            dock :'top',
            title:'Contacts',
            items:[ // Our docked item toolbar in turn has items: a spacer and an add button
                {xtype:'spacer'},
                {
                    itemId  :'addButton',
                    iconCls :'add',
                    iconMask:true,
                    ui      :'plain'
                    // Listeners on the button will go here
                }
            ]
        }];

        // This is basically a call to super();
        Contacts.views.ContactListPanel.superclass.initComponent.apply(this,arguments);
    }
});

// So that lazy instantiation may be used in creating ContactListPanels
Ext.reg('contactList', Contacts.views.ContactListPanel);