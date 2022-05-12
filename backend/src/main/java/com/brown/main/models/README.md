# Models class structure
Rather than write out redundant comments for each class, I describe the structure of classes that implement
Model here. Each class in this package implements Model

2 constructors: an empty constructor that is required for mongo codexes and a normal constructor that has parameters
for each field of the class and sets those fields to the passed parameters.

getThisClass and getCollectionName: return the .class object and mongo collection name that stores objects that
match this class type. Needed for the Connection class (which has been deprecated)

toString, equals, and hashCode: needed for mongo codexes that allow mongodb documents to be cast into these classes

setters and getters: also needed for mongo codexes, there is a setter and getter for each field in the class.
