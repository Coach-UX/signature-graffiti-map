const mapStyle = [{
    "featureType": "all",
    "elementType": "labels.text.fill",
    "stylers": [{
        "saturation": 36
      },
      {
        "color": "#000000"
      },
      {
        "lightness": 0
      },
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "all",
    "elementType": "labels.text.stroke",
    "stylers": [{
        "visibility": "off"
      },
      {
        "color": "#000000"
      },
      {
        "lightness": 16
      }
    ]
  },
  {
    "featureType": "all",
    "elementType": "labels.icon",
    "stylers": [{
      "visibility": "off"
    }]
  },
  {
    "featureType": "administrative",
    "elementType": "geometry.fill",
    "stylers": [{
        "color": "#f8b2b9"
      },
      {
        "lightness": 0
      }
    ]
  },
  {
    "featureType": "administrative",
    "elementType": "geometry.stroke",
    "stylers": [{
        "color": "#f8b2b9"
      },
      {
        "lightness": 0
      },
      {
        "weight": 1.2
      }
    ]
  },
  {
    "featureType": "landscape",
    "elementType": "geometry",
    "stylers": [{
        "color": "#f8b2b9"
      },
      {
        "lightness": 0
      }
    ]
  },
  {
    "featureType": "administrative.country",
    "elementType": "labels.text.fill",
    "stylers": [{
        "color": "#000000"
      },
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "administrative.province",
    "elementType": "labels.text.fill",
    "stylers": [{
        "color": "#000000"
      },
      {
        "visibility": "on"
      }
    ]
  },
  {
    "featureType": "administrative.locality",
    "elementType": "labels.text.fill",
    "stylers": [{
        "color": "#000000"
      },
      {
        "visibility": "on"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "geometry",
    "stylers": [{
        "color": "#f8b2b9"
      },
      {
        "lightness": 0
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry.fill",
    "stylers": [{
        "color": "#f8b2b9"
      },
      {
        "lightness": 0
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry.stroke",
    "stylers": [{
        "color": "#f8b2b9"
      },
      {
        "lightness": 0
      },
      {
        "weight": 0
      }
    ]
  },
  {
    "featureType": "road.arterial",
    "elementType": "geometry",
    "stylers": [{
        "color": "#000000"
      },
      {
        "weight": .15
      }
    ]
  },
  {
    "featureType": "road.local",
    "elementType": "geometry",
    "stylers": [{
        "color": "#000000"
      },
      {
        "lightness": 0
      },
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "transit",
    "elementType": "geometry",
    "stylers": [{
        "color": "#f8b2b9"
      },
      {
        "lightness": 0
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "geometry",
    "stylers": [{
        "color": "#bc808a"
      },
      {
        "saturation": 0
      },
      {
        "visibility": "simplified"
      }
    ]
  }
]









function initialize() {


  var markers = new Array();

  var mapOptions = {
    zoom: 11.7,
    center: new google.maps.LatLng(40.783596, -73.918771),
    styles: mapStyle,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    gestureHandling: 'greedy',
    disableDefaultUI: true
  };



  var locations = [
    ['SUCH',
      '"As long as people walk away smiling and feeling good then I know I did good"',
      '@suchs_life',
      '3800-3898 Queens Blvd, Queens ',
      40.743883, -73.926187, 1,
      'img/sig-c/1.png',
      'https://www.instagram.com/suchs_life',
      'img/murals/1.jpg',
      'youtube',
      'https://maps.google.com?daddr=3800+Queens+Blvd,+Long+Island+City,+NY+11101'
    ],

    ['Crash',
      '"I paint for the love of painting, but I paint murals for the love of people… to bring color in times of shades of grey, and to shake the blues away."',
      '@crashone',
      '125 Chrystie St, Manhattan ',
      40.719257, -73.993517, 1,
      'img/sig-c/2.png',
      'https://www.instagram.com/crashone',
      'img/murals/2.jpg',
      'youtube',
      'https://maps.google.com?daddr=125+Chrystie+St,+New+York,+NY+10002'
    ],

    ['DAIN',
      '“I want the observer of my work to use their imagination to look deeper to see the beauty that, in many ways, has been lost today.”',
      '@dain_nyc',
      '75 East Broadway, Manhattan ',
      40.717153, -73.994562, 1,
      'img/sig-c/3a.png',
      'https://www.instagram.com/dain_nyc',
      'img/murals/3a.jpg',
      'https://youtu.be/CarVbf9s16E',
      'https://maps.google.com?daddr=75+E+Broadway,+New+York,+NY+10002'
    ],

    // ['DAIN',
    //   '“I want the observer of my work to use their imagination to look deeper to see the beauty that, in many ways, has been lost today.”',
    //   '@dain_nyc',
    //   '75 East Broadway, Manhattan ',
    //   40.713637, -73.994133, 2,
    //   'img/sig-c/3b.png',
    //   'https://www.instagram.com/dain_nyc',
    //   'img/murals/3b.jpg'
    // ],
    //
    // ['DAIN',
    //   '“I want the observer of my work to use their imagination to look deeper to see the beauty that, in many ways, has been lost today.”',
    //   '@dain_nyce',
    //   '3800-3898 Queens Boulevard, Queens ',
    //   40.743763, -73.925229, 2,
    //   'img/sig-c/3c.png',
    //   'https://www.instagram.com/dain_nyc',
    //   'img/murals/3c.jpg'
    // ],

    ['WhIsBe',
      '“By colliding seemingly innocent images with meaningful messages, I hope my work sparks thoughtful dialogue."',
      '@whisbe',
      '12 Franklin St, Brooklyn ',
      40.725201, -73.957060, 1,
      'img/sig-c/4.png',
      'https://www.instagram.com/WhIsBe',
      'img/murals/4.jpg',
      'https://youtu.be/hrnEcK-bX7k',
      'https://maps.google.com?daddr=12+Franklin+St,+Brooklyn,+NY+11222'
    ],

    ['Tats Cru',
      '“Our art is bright, bold, explosive and original. It’s New York-derived, from the subway graffiti movement of the ‘80s.”',
      '@biotatscru',
      '1029 Westchester Ave, Bronx ',
      40.824223, -73.893189, 1,
      'img/sig-c/5.png',
      'https://www.instagram.com/biotatscru',
      'img/murals/5.jpg',
      'youtube',
      'https://maps.google.com?daddr=1029+Westchester+Ave,+Bronx,+NY+10459'
    ],

    ['Hellbent',
      '“My art is steeped in the earliest forms of abstraction. Music is also a major influence to me. I want the color and pattern to form a rhythm.”',
      '@hellbent',
      '248 Varet St, Brooklyn ',
      40.703947, -73.933603, 1,
      'img/sig-c/6.png',
      'https://www.instagram.com/hellbent',
      'img/murals/6.jpg',
      'youtube',
      'https://maps.google.com?daddr=248+Varet+St,+Brooklyn,+NY+11206'
    ],

    ['Jason Naylor',
      '“I hope that my art stops people from the fast pace of their day for just long enough to say to themselves, hell yes!”',
      '@jasonnaylor',
      '83 Suffolk St, Manhattan ',
      40.718159, -73.986526, 1,
      'img/sig-c/7.png',
      'https://www.instagram.com/jasonnaylor',
      'img/murals/7.jpg',
      'youtube',
      'https://maps.google.com?daddr=83+Suffolk+St,+New+York,+NY+10002'
    ],

    // ['Bisco Smith',
    //   '“My work is a visual freestyle—a blend of graffiti deconstruction, gestural abstraction and lyric-based style-writing.”',
    //   '@biscosmith',
    //   '180 Union Avenue, Brooklyn',
    //   40.705709, -73.949874, 1,
    //   'img/sig-c/8a.png',
    //   'https://www.instagram.com/biscosmith',
    //   'img/murals/8a.jpg'
    // ],

    ['Bisco Smith',
      '“My work is a visual freestyle—a blend of graffiti deconstruction, gestural abstraction and lyric-based style-writing.”',
      '@biscosmith',
      '1 Wythe Ave, Brooklyn',
      40.724069, -73.955294, 2,
      'img/sig-c/8b.png',
      'https://www.instagram.com/biscosmith',
      'img/murals/8b.jpg',
      'youtube',
      'https://maps.google.com?daddr=1+Wythe+Ave,+Brooklyn,+NY+11249'
    ],

    ['Giz',
      '“I hope to either inspire people with the comical views I use in my iconic cartoons, and with my non conventional style of doing letters.”',
      '@giz_nyc',
      'First Street Art Garden, 2nd Ave, Manhattan ',
      40.723820, -73.990860, 1,
      'img/sig-c/9.png',
      'https://www.instagram.com/giz_nyc',
      'img/murals/9.jpg',
      'youtube',
      'https://maps.google.com?daddr=First+Street+Garden,+2nd+Ave,+New+York,+NY+10003'
    ],

    ['The DRiF',
      '“My art is a fusion of abstract and street art. Full of color, energy, childhood memories and passion meant to challenge the viewer to explore and imagine.”',
      '@thedrif',
      '356 Broome St, Manhattan',
      40.720145, -73.995282, 1,
      'img/sig-c/10.png',
      'https://www.instagram.com/thedrif',
      'img/murals/10.jpg',
      'https://youtu.be/Gv2FIBBGN-c',
      'https://maps.google.com?daddr=356+Broome+St,+New+York,+NY+10013'
    ],

    ['Thomas Allen',
      '“Any reaction to my art satisfies my inner artist mission—I like to provoke a smile or a surprise.”',
      '@thomasallen_nyc',
      '145 Ave A, Manhattan',
      40.727500, -73.982888, 1,
      'img/sig-c/11a.png',
      'https://www.instagram.com/thomasallen_nyc',
      'img/murals/11a.jpg',
      'youtube',
      'https://maps.google.com?daddr=145+Avenue+A,+New+York,+NY+10009'
    ],

    // ['Thomas Allen',
    //   '“Any reaction to my art satisfies my inner artist mission—I like to provoke a smile or a surprise.”',
    //   '@thomasallen_nyc',
    //   '139 East 4th Street, Manhattan',
    //   40.725214, -73.987095, 2,
    //   'img/sig-c/11a.png',
    //   'https://www.instagram.com/thomasallen_nyc',
    //   'img/murals/11b.jpg'
    // ],
    //
    // ['Thomas Allen',
    //   '“Any reaction to my art satisfies my inner artist mission—I like to provoke a smile or a surprise.”',
    //   '@thomasallen_nyc',
    //   '48-01 38th Street, Queens',
    //   40.740088, -73.927670, 2,
    //   'img/sig-c/11a.png',
    //   'https://www.instagram.com/thomasallen_nyc',
    //   'img/murals/11c.jpg'
    // ],

    ['Trihumph',
      '“My art is my investigation towards a deeper personal and public understanding of the idea of subconscious pattern recognition.”',
      '@trihumph',
      '143 Amsterdam Ave, Manhattan',
      40.838648, -73.937475, 1,
      'img/sig-c/12.png',
      'https://www.instagram.com/trihumph',
      'img/murals/12.jpg',
      'youtube',
      'https://maps.google.com?daddr=143+Amsterdam+Ave,+New+York,+NY+10023'
    ],

    ['Eric Inkala',
      '“I’d like people to walk away from seeing a mural or painting and be inspired in some way, shape or form.”',
      '@drinkala',
      '458 Jefferson St, Brooklyn',
      40.708101, -73.922495, 1,
      'img/sig-c/13.png',
      'https://www.instagram.com/drinkala',
      'img/murals/13.jpg',
      'youtube',
      'https://maps.google.com?daddr=458+Jefferson+St,+Brooklyn,+NY+11237'
    ]
  ];


  var map = new google.maps.Map(document.getElementById('map'), mapOptions);

  var infowindow = new google.maps.InfoWindow();

  for (var i = 0; i < locations.length; i++) {


    $('#markers').append('<a class="marker-link" data-markerid="' + i + '"<a href="#">' + '<h3>' + locations[i][0] + '</h3></a>'
    // + '<a href="' + locations[i][11] + '" target="_blank">' + "<h5>" + locations[i][3] + "</h5>"
    + "</a>");

    var marker = new google.maps.Marker({
      position: new google.maps.LatLng(locations[i][4], locations[i][5]),
      map: map,
      title: locations[i][0],
      icon: {
        url: locations[i][7],
        scaledSize: new google.maps.Size(30, 30)
      }


    });

    google.maps.event.addListener(marker, 'click', (function(marker, i) {


// NOTE: 10=link to video; 11=link to directions

      return function() {
        infowindow.setContent('<div class="infowindow" style="width:auto; height:auto;">' + "<br>" +
          "<a href='" + locations[i][9] + "'target='_blank'> <img style='box-shadow: -2px 0px 20px rgba(0, 0, 0, 0.1)' width='80' src=" + locations[i][9] + "></a>" +
          "<h1>" + locations[i][0] + "</h1>" +
          "<h2>" + locations[i][1] + "</h2>" +
          '<a href="' + locations[i][11] + '" target="_blank">' + "<h3>" + locations[i][3] + "</h3>" + "</a>" +
          '<a href="' + locations[i][8] + '" target="_blank">' + "<h3>" + locations[i][2] + "</h3>" + "</a>"
          // '<div style="float: none;">' +
          //   '<a href="' + locations[i][8] + '" target="_blank">' + "<img style='width: 16vmin; height: 7vh; padding: 0 7% 0 7%; margin-top: 1vh;' src='img/insta.svg'></img>" + "</a>" +
          //   '<a href="' + locations[i][8] + '" target="_blank">' + "<img style='width: 16vmin; height: 7vh; padding: 0 7% 0 7%; margin-top: 1vh;' src='img/play.svg'></img>" + "</a>"
          //   + '</div>'
          + '<a href="' + locations[i][10] + '" target="_blank">' + "<h3>Watch Video</h3>" + "</a>"
        );
        infowindow.open(map, marker);
      }

    })(marker, i));


    markers.push(marker);
  }

  $('.marker-link').on('click', function() {

    google.maps.event.trigger(markers[$(this).data('markerid')], 'click');
  });

  google.maps.event.addListener(map, 'click', function(event) {
    if (infowindow) {
      infowindow.close();
    }
  });
}

initialize();
