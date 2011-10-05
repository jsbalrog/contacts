Contacts.views.ContactListPanel = Ext.extend(Ext.Panel, {
    layout: 'fit',
    html: 'The list panel',
    initComponent: function() {
        // *** Other initialization code goes here ***

        // This is basically a call to super();
        Contacts.views.ContactListPanel.superclass.initComponent.apply(this,arguments);
    }
});

// So that lazy instantiation may be used in creating ContactListPanels
Ext.reg('contactList', Contacts.views.ContactListPanel);