This Git repository includes all of the source code used in creating the contacts Sencha Touch demo app.

For a running demo, see <http://salty-journey-6480.herokuapp.com/>

Each of the links below represents a snapshot of the code at a point in the presentation. You'll find instructions below on how to check out each snapshot from this git repository.

* [00_blank_slate][00]
* [01_Foundational_Steps][01]
* [02_Adding_A_Panel][02]
* [03_Adding_A_Toolbar_To_Panel][03]
* [04_Adding_A_List_To_Panel][04]
* [05_Adding_Form_Panel_And_Controller][05]
* [06_Saving_Form_Data][06]
* [07_Editing_Form_Data][07]

## Using this repository to follow the demo

First, you'll have to clone this repository:

    git clone git://github.com/buffalobillion/contacts.git

Change into the directory:

    cd contacts

By default, the git clone command will only create the master branch locally. If you want to study the code at each checkpoint, you will have to fetch each of the other branches. You can do so by running the following:

    git checkout -b 00_blank_slate origin/00_blank_slate
    git checkout -b 01_Foundational_Steps origin/01_Foundational_Steps
    git checkout -b 02_Foundational_Steps origin/02_Adding_A_Panel
    git checkout -b 03_Adding_A_Toolbar_To_Panel/03_Adding_A_Toolbar_To_Panel
    git checkout -b 04_Adding_A_List_To_Panel/04_Adding_A_List_To_Panel
    git checkout -b 05_Adding_Form_Panel_And_Controller/05_Adding_Form_Panel_And_Controller
    git checkout -b 06_Saving_Form_Data/06_Saving_Form_Data
    git checkout -b 07_Editing_Form_Data/07_Editing_Form_Data

You can review the list of local branches by running:

    git branches

And you can switch between branches with the checkout command. For example, to check out the `07_Editing_Form_Data` branch, run:

    git co 07_Editing_Form_data


[00]: https://github.com/buffalobillion/contacts/tree/00_blank_slate
[01]: https://github.com/buffalobillion/contacts/tree/01_Foundational_Steps
[02]: https://github.com/buffalobillion/contacts/tree/02_Adding_A_Panel
[03]: https://github.com/buffalobillion/contacts/tree/03_Adding_A_Toolbar_To_Panel
[04]: https://github.com/buffalobillion/contacts/tree/04_Adding_A_List_To_Panel
[05]: https://github.com/buffalobillion/contacts/tree/05_Adding_Form_Panel_And_Controller
[06]: https://github.com/buffalobillion/contacts/tree/06_Saving_Form_Data
[07]: https://github.com/buffalobillion/contacts/tree/07_Editing_Form_Data
