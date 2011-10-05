Ext.regApplication({
	// Register the namespace
	name: 'Contacts',
	launch: function() {
		this.viewport = new Contacts.views.Viewport({
			application: this
		});
	}
});