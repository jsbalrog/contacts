Ext.regController('ContactController', {
    // Called when "onAddTap" is called in ContactListPanel
    addContact : function() {
        // Create a new model
        var newContactModel = Ext.ModelMgr.create({
            id : new Date().format('U')
        }, 'Contacts.models.Contact');

        // Load newly-generated model into the contact form
        Contacts.contactForm.load(newContactModel);

        Contacts.viewport.setActiveItem(Contacts.contactForm, {type:'slide', direction:'left'});
    }
});