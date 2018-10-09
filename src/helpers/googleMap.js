export default [
  {
    elementType: 'all',
    featureType: 'administrative',
    stylers: [
      {
        saturation: '-100',
      },
    ],
  },
  {
    elementType: 'all',
    featureType: 'administrative.province',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },
  {
    elementType: 'all',
    featureType: 'landscape',
    stylers: [
      {
        saturation: -100,
      },
      {
        lightness: 50,
      },
    ],
  },
  {
    elementType: 'geometry.fill',
    featureType: 'landscape',
    stylers: [
      {
        visibility: 'on',
      },
    ],
  },
  {
    elementType: 'all',
    featureType: 'poi',
    stylers: [
      {
        saturation: -100,
      },
      {
        lightness: '45',
      },
      {
        visibility: 'simplified',
      },
    ],
  },
  {
    elementType: 'geometry.fill',
    featureType: 'poi',
    stylers: [
      {
        visibility: 'simplified',
      },
    ],
  },
  {
    elementType: 'geometry.fill',
    featureType: 'poi.park',
    stylers: [
      {
        color: '#aaffec',
      },
    ],
  },
  {
    elementType: 'labels.text',
    featureType: 'poi.park',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },
  {
    elementType: 'geometry.fill',
    featureType: 'road',
    stylers: [
      {
        weight: '2.00',
      },
      {
        visibility: 'off',
      },
    ],
  },
  {
    elementType: 'geometry.fill',
    featureType: 'road.highway',
    stylers: [
      {
        color: '#f4c109',
      },
      {
        visibility: 'on',
      },
      {
        weight: '2.00',
      },
    ],
  },
  {
    elementType: 'geometry.stroke',
    featureType: 'road.highway',
    stylers: [
      {
        color: '#ff0000',
      },
      {
        visibility: 'off',
      },
    ],
  },
  {
    elementType: 'geometry.fill',
    featureType: 'road.arterial',
    stylers: [
      {
        visibility: 'on',
      },
    ],
  },
  {
    elementType: 'geometry.fill',
    featureType: 'road.local',
    stylers: [
      {
        color: '#ffffff',
      },
      {
        visibility: 'on',
      },
    ],
  },
  {
    elementType: 'all',
    featureType: 'transit',
    stylers: [
      {
        saturation: -100,
      },
      {
        visibility: 'simplified',
      },
    ],
  },
];
