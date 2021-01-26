# General
Application to organize documents.
First the user selects the "galaxy" in where he wants to organize his documents.
In the galaxy he then can create / edit / and delete documents.
The documents are represented in a tree like structure, based on the given labels for each document.
The document is always the leaf, and the labels the nodes of the tree.

e.g. the user created a document with the Name "Foo" and the label "bar/inside"
The document tree should look like this.
* bar
* * inside
* * * Foo (The document)

The user can distribute multiple labels, so one document can appear multiple times in the tree.

# Technical Specification
- VueJs with Vuetify for frontend
- Firebase as backend

# User Management
User is able to login and register.
A galaxy always belongs to the user.

# Galaxy Management
Entry point of the application.
Initially the user has to create a galaxy, in which he wants to organize his documents.
After this, he can either choose a galaxy in which to work, or create new galaxies.
He is also able to delete galaxies, which will also delete all the documents in the galaxy!

## Galaxy data structure
| Attribute | Description |
| ----------- | ----------- |
| Name | The unique name of the galaxy |

# Document Management
Inside a galaxy, the user can create as many documents as he wants.
Each document can be edited, and deleted.

## Document data structure
| Attribute | Description |
| ----------- | ----------- |
| Name | A unique name of the document inside the galaxy |
| Content | Markdown formated content in the document
| Labels | A list of labels, by which the document can be represented in a tree like structure


# Referencing other documents
Inside the content of a document, you can reference other documents, as either a deeplink to the document, or by showing the content of the referenced document.
The **deeplink** will be just an actual link to the document (as each document can be routed to with it's name, it's easy to link).
This also gives us the back functionality.

**Showing the content** will show the referenced content in a container like structure in the content of the document.
If the referenced document changes, the changes should also be reflected in the document which references the changed document!


References should be done by the technical id, and not the name as the name can change.

# Future Releases
- Document Templates: A way to put logic into your documents
e.g a Character Template for Pen and Paper, where the user can fill out certain attributes, and additional markdown variables which can be used in the document.

- Image Upload: You can upload images in a document, which will then be stored in some bucket, and can be referenced in the document

- Label Autocompletion: Based on existing labels, i want to get an autocompletion when i begin to type my labels so i can quickly add them to an existing tree structure

- Auto-save every ~10 Seconds of changed documents
- script to generate markdown files based on name content and labels in filesystem
