var Garmin = Garmin || {};
Garmin.Lakes = {};
Garmin.Lakes.Config = {};

//Config setup
Garmin.Lakes.Config.BingKey = '';

//Dummy data
Garmin.Lakes.stubPins = [   
    {name: 'Lake #1', lat: 38.825801, lon: -104.304199, tooltip: 'I am lake #1!'},
    {name: 'Lake #2', lat: 38.720207, lon: -104.103699, tooltip: 'I am lake #2!'},
    {name: 'Lake #3', lat: 38.690199, lon: -104.219055, tooltip: 'I am lake #3!'}
];

Garmin.Lakes.stubPins2 = [   
    {name: 'Lake #1', lat: 38.825801, lon: -104.304199, tooltip: 'I am lake #1!'},
    {name: 'Lake #2', lat: 38.720207, lon: -104.103699, tooltip: 'I am lake #2!'},
    {name: 'Lake #3', lat: 38.690199, lon: -104.219055, tooltip: 'I am lake #3!'},
    {name: 'Lake #4', lat: 38.738553, lon: -104.985352, tooltip: 'I am lake #4!'},
    {name: 'Lake #5', lat: 38.549776, lon: -104.919434, tooltip: 'I am lake #5!'}
];

//start the Ember app
App = Ember.Application.create();