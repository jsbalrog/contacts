Contacts.views.Viewport = Ext.extend(Ext.Panel, {
	fullscreen: true,
	layout : 'card',
	cardSwitchAnimation: 'slide',
	initComponent : function() {
		// Put instances of cards into namespace
		Ext.apply(Contacts, {
			contactList: new Contacts.views.ContactListPanel(),
			contactForm: new Contacts.views.ContactFormPanel()
		});

		// Put instances of cards (defined above) into viewport
		Ext.apply(this, {
			items: [
				Contacts.contactList,
				Contacts.contactForm
			]
		});

		// Call superclass's initComponent method
		Contacts.views.Viewport.superclass.initComponent.apply(this, arguments);
	}
});