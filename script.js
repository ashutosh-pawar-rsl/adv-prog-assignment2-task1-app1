require(["esri/views/MapView", "esri/WebMap"], function(MapView, WebMap) {
    var webmap = new WebMap({
        portalItem: {
            id: "1a12d851124f4a91b0b0a75d90a6b587" // Your webmap ID
        }
    });

    webmap.load().then(function() {
        // Change the basemap of the webmap after it has loaded
        webmap.basemap = "dark-gray";

        var view = new MapView({
            map: webmap,
            container: "viewDiv",
            zoom: 4
        });
    });
});
