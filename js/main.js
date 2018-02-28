
// In the first few sections, we do all the coding here.
// Later, you'll see how to organize your code into separate
// files and modules.

// to create model we extend Backbone.Model.extend
let Song = Backbone.Model.extend({
// initialize method
  initialize: function(){
    console.log("A new song has been created.");
  }
});

// instance created using new operator
var song = new Song();
