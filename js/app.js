//Setup default template data
App.ApplicationController = Ember.Route.extend({
  myHeader: 'Lakes V2 Application'
});

App.Router.map(function() {
  // put your routes here
  //this.route('test');
});

App.IndexRoute = Ember.Route.extend({
  model: function() {
    return ['red', 'yellow', 'blue'];
  }
});

App.IndexController = Ember.Controller.extend({
  //hookup default index page attributes
});

//init the store for Ember Data
App.Store = DS.Store.extend({
  revision: 12
});

//Create an object for use with Ember Data
App.Lake = DS.Model.extend({
  name: DS.attr('string'),
  lat: DS.attr('number'), 
  lon: DS.attr('number'), 
  description: DS.attr('string')
});

//Instantiate the leafletMap class with default map values and render it to the page
App.Map = App.LeafletMap.create({
  container: 'map',
  lat: 38.831551, 
  lon: -104.900208,
  pins: Garmin.Lakes.stubPins 
});

//setup an observable on the pins within the map, if they change we want the map to re-render itself
App.Map.addObserver('pins', function(){
  //handle what happens when pin data changes
  App.Map.refresh();
});

/*
//simulating a pin data change to see if our observable is fired
console.log(App.Map.pins.length);
App.Map.set('pins', Garmin.Lakes.stubPins2);
console.log(App.Map.pins);
*/