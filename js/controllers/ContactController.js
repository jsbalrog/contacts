Ext.regController('ContactController', {
    // Called when "onAddTap" is called in ContactListPanel
    addContact : function() {
        Contacts.viewport.setActiveItem(Contacts.contactForm, {type:'slide', direction:'left'});
    },

    returnToList : function() {
        // Deselect any selected items in the contact list
        Contacts.contactList.list.getSelectionModel().deselectAll();
        Contacts.viewport.setActiveItem(Contacts.contactList, {type:'slide', direction:'right'});
    },

    saveContact : function(params) {
        var contactForm = params.form,
        contactListStore = Contacts.contactList.store,	// Defined on the ContactListPanel
        currentRecord = contactForm.getRecord() || Ext.ModelMgr.create({id : new Date().format('U')}, 'Contacts.models.Contact');

        contactForm.updateRecord(currentRecord);

        contactListStore.add(currentRecord);
        contactListStore.sync();

        // Deselect any selected items in the contact list
        Contacts.contactList.list.getSelectionModel().deselectAll();
        // Set the ContactListPanel as the active item in the card layout
        Contacts.viewport.setActiveItem(Contacts.contactList, {type:'slide', direction:'right'});
    },

    editContact : function(params) {
        Contacts.contactForm.load(params.model);
        Contacts.viewport.setActiveItem(Contacts.contactForm, {type:'slide', direction:'left'});
    }
});