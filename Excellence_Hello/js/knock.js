/* pub/static/ file */

//working button click count 
"use strict";
define(['uiComponent','ko'], function(Component,ko) {
  
        return Component.extend({
            initialize: function () {
            var self = this;
            self._super();
            self.numberOfClicks = ko.observable(0);
            self.numberOfClicks.subscribe(function(newValue){
        		console.log(newValue);
            });
            },
            incrementClickCounter: function() {
            	//console.log("dsv");
            	var prevNoOfClick = this.numberOfClicks();
            	//console.log(prevNoOfClick);
            	self.numberOfClicks= this.numberOfClicks(prevNoOfClick+1);
            }
        });
});



//working checkbox click function 

//"use strict";
// define(['uiComponent','ko'], function(Component,ko) {
  
//         return Component.extend({
//             initialize: function () {
//             	var self = this;
//             	self._super();
//             	self.displayMessage = ko.observable(false)
//               }
//             });
// });



//working updated sec on front
// "use strict";
// define(['uiComponent','ko'], function(Component,ko) {
  
//         return Component.extend({
//             initialize: function () {
//                 var self = this;
//                 self._super();
//                 self.times = ko.observableArray([]);
 
//                 setInterval(function(){
//                    self.times(new Date().getTime());
//                 },1000);
//             }
//         });
// });


//working observableArray
// "use strict";
// define(['uiComponent','ko'], function(Component,ko) {
  
//         return Component.extend({
//             initialize: function () {
//                 var self = this;
//                 self._super();
//                 self.obArr = ko.observableArray([
//                     {firstname : 'firstname1' , lastname : 'lastname1'},
//                     {firstname : 'firstname2' , lastname : 'lastname2'},
//                     {firstname : 'firstname3' , lastname : 'lastname3'}
//                 ]);
//             }
//         });
// });


//working attr example
// "use strict";
// define(['uiComponent','ko'], function(Component,ko) {
  
//         return Component.extend({
//             initialize: function () {
//                 var self = this;
//                 self._super();
//                 self.url = ko.observable("year-end.html");
//   				self.details = ko.observable("Report including final year-end statistics")
  
//             }
//         });
// });