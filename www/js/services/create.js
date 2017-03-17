/* global UUIDjs */
/* global TransitionType */
/* global localStorage */
/* eslint no-underscore-dangle: ["error", { "allow": ["_geofences", "_geofencesPromise"] }] */
angular.module('breadcrumb').factory('Trail', function ($http) {
  const submitTrail = (trail, crumbs) => (
    $http({
      method: 'POST',
      url: 'http://54.203.104.113/trails',
      data: trail,
      json: true,
    })
    .then((response) => {
      const trailId = response.data.data[0].id;
      crumbs.forEach((crumb, index) => {
        crumb.trail_id = trailId;
        crumb.order_number = index + 1;
        return $http({
          method: 'POST',
          url: 'http://54.203.104.113/crumbs',
          data: crumb,
          json: true,
        });
      });
    })
  );
  return {
    submit: submitTrail,
  };
});
