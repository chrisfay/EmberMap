//Leaflet class for map rendering
App.LeafletMap = Ember.Object.extend({
  pins: [],
  container: '',
  lat: 0,
  lon: 0,
  zoom: 10,
  markers: [],
  map: {},
  init: function() {
    this.map =  L.map(this.container).setView([this.lat, this.lon], this.zoom);
    this.renderMap();
  },
  renderMap: function(){
    map = this.map;
    self = this;
    this.pins.forEach(function(item){
      //add marker
      var marker = L.marker([item.lat, item.lon]).addTo(map).bindPopup(item.tooltip).openPopup(); 
      var popup = L.popup();
      
      //save this marker for user later
      self.markers.push(marker);
    })
    
  	L.tileLayer('http://{s}.tile.cloudmade.com/BC9A493B41014CAABB98F0471D759707/997/256/{z}/{x}/{y}.png', {
  		maxZoom: 18,
  		attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://cloudmade.com">CloudMade</a>'
  	}).addTo(map);
  
  	function onMapClick(e) {
  		popup
  			.setLatLng(e.latlng)
  			.setContent("You clicked the map at " + e.latlng.toString())
  			.openOn(map);
  	}
  
  	map.on('click', onMapClick); 
  },
  refresh: function(){
    //Update map with data
    console.log('Pin data has changed, updating map pins');
    this.clearMarkers();
    this.renderMap();
  },
  clearMarkers: function() {
    self = this;
    this.markers.forEach(function(item){
      self.map.removeLayer(item);
    });
  }
});