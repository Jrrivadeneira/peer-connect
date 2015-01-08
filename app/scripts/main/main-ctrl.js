'use strict';

angular.module('famousAngularStarter')
  .controller('MainCtrl', function ($scope, $famous) {
      $scope.flipIt = function ($event) {
          var id = $event;
          $famous.find('fa-flipper')[id].flip();


          console.log($event);
      };
      $scope.myGridLayoutOptions = {
          dimensions: [4,2], // specifies number of columns and rows
      };


      var EventHandler = $famous['famous/core/EventHandler'];
      $scope.myEventHandler = new EventHandler();
      $scope.list = [{ content: "Scroll", bgColor: "#FF0000" }, { content: "horizontally", bgColor: "#0000FF" }, { content: "yay!", bgColor: "#00FF00" }, { content: "woo!", bgColor: "#FFFF00" }];

      $scope.options = {
          myScrollView: {
              clipSize: 100,
              paginated: false,
              speedLimit: 5,
              direction: 0,
              backgroundColor:"#CCCCCC"
              
          }
      };

//      $scope.list = [
//  {content: "Peer Connect Meetup 1Peer Connect Meetup 1Peer Connect Meetup 1Peer Connect Meetup 1Peer Connect Meetup 1Peer Connect Meetup 1Peer Connect Meetup 1Peer Connect Meetup 1Peer Connect Meetup 1Peer Connect Meetup 1Peer Connect Meetup 1Peer Connect Meetup 1Peer Connect Meetup 1Peer Connect Meetup 1Peer Connect Meetup 1Peer Connect Meetup 1Peer Connect Meetup 1Peer Connect Meetup 1Peer Connect Meetup 1Peer Connect Meetup 1Peer Connect Meetup 1Peer Connect Meetup 1Peer Connect Meetup 1Peer Connect Meetup 1Peer Connect Meetup 1Peer Connect Meetup 1Peer Connect Meetup 1Peer Connect Meetup 1Peer Connect Meetup 1Peer Connect Meetup 1Peer Connect Meetup 1Peer Connect Meetup 1Peer Connect Meetup 1Peer Connect Meetup 1Peer Connect Meetup 1Peer Connect Meetup 1Peer Connect Meetup 1Peer Connect Meetup 1Peer Connect Meetup 1Peer Connect Meetup 1Peer Connect Meetup 1Peer Connect Meetup 1Peer Connect Meetup 1Peer Connect Meetup 1Peer Connect Meetup 1Peer Connect Meetup 1Peer Connect Meetup 1Peer Connect Meetup 1Peer Connect Meetup 1Peer Connect Meetup 1Peer Connect Meetup 1Peer Connect Meetup 1Peer Connect Meetup 1Peer Connect Meetup 1Peer Connect Meetup 1Peer Connect Meetup 1Peer Connect Meetup 1Peer Connect Meetup 1Peer Connect Meetup 1Peer Connect Meetup 1Peer Connect Meetup 1Peer Connect Meetup 1Peer Connect Meetup 1Peer Connect Meetup 1", bgColor: "#CCCCCC", borderRadius: 10},
//  { content: "Peer Connect Meetup 2", bgColor: "#CCCCCC", borderRadius: 10},
//  { content: "Peer Connect Meetup 3", bgColor: "#CCCCCC", borderRadius: 10},
//  { content: "Peer Connect Meetup 4", bgColor: "#CCCCCC", borderRadius: 10},
//  { content: "Peer Connect Meetup 5", bgColor: "#CCCCCC", borderRadius: 10},
//  { content: "Peer Connect Meetup 6", bgColor: "#CCCCCC", borderRadius: 10}
//      ];
  });