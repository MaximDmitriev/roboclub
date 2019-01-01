function maps() {
    ymaps.ready(init);

    function init() {
        let myMap1 = new ymaps.Map("mapBibirevo", {
        //   center: [55.894882, 37.610855],
          center: [55.8948, 37.6108],
          controls: [],
          zoom: 17
        });
        let myMap2 = new ymaps.Map("mapVdnh", {
        //   center: [55.894882, 37.610855],
            center: [55.8178, 37.6354],
            controls: [],
            zoom: 17
        });

        let placeBibirevo = new ymaps.Placemark([55.8948, 37.6108],
            {
                iconContent: "РОББО Клуб"
            },
            {
                preset: 'islands#darkGreenStretchyIcon'
    
            });
        myMap1.geoObjects.add(placeBibirevo);

        let placeVdnh = new ymaps.Placemark([55.8178, 37.6354],
            {
                iconContent: "РОББО Клуб"
            },
            {
                preset: 'islands#darkGreenStretchyIcon'
    
            });
        myMap2.geoObjects.add(placeVdnh);
      }
}

module.exports = maps;