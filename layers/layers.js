var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Poblacinpordepartamento_1 = new ol.format.GeoJSON();
var features_Poblacinpordepartamento_1 = format_Poblacinpordepartamento_1.readFeatures(json_Poblacinpordepartamento_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Poblacinpordepartamento_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Poblacinpordepartamento_1.addFeatures(features_Poblacinpordepartamento_1);
var lyr_Poblacinpordepartamento_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Poblacinpordepartamento_1, 
                style: style_Poblacinpordepartamento_1,
                interactive: true,
    title: 'Población por departamento<br />\
    <img src="styles/legend/Poblacinpordepartamento_1_0.png" />  109.555 - 454.797 <br />\
    <img src="styles/legend/Poblacinpordepartamento_1_1.png" />  454.797 - 891.732 <br />\
    <img src="styles/legend/Poblacinpordepartamento_1_2.png" />  891.732 - 167.6315 <br />\
    <img src="styles/legend/Poblacinpordepartamento_1_3.png" />  1.676.315 -8.445.211<br />'
        });
var format_MagnituddesismosRichter_2 = new ol.format.GeoJSON();
var features_MagnituddesismosRichter_2 = format_MagnituddesismosRichter_2.readFeatures(json_MagnituddesismosRichter_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MagnituddesismosRichter_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MagnituddesismosRichter_2.addFeatures(features_MagnituddesismosRichter_2);
var lyr_MagnituddesismosRichter_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MagnituddesismosRichter_2, 
                style: style_MagnituddesismosRichter_2,
                interactive: true,
    title: 'Magnitud de sismos (Richter)<br />\
    <img src="styles/legend/MagnituddesismosRichter_2_0.png" />  3.10 - 4.50 <br />\
    <img src="styles/legend/MagnituddesismosRichter_2_1.png" />  4.50 - 6.00 <br />\
    <img src="styles/legend/MagnituddesismosRichter_2_2.png" />  6.00 - 7.20 <br />'
        });
var format_Poblacinafectadapormaremoto_3 = new ol.format.GeoJSON();
var features_Poblacinafectadapormaremoto_3 = format_Poblacinafectadapormaremoto_3.readFeatures(json_Poblacinafectadapormaremoto_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Poblacinafectadapormaremoto_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Poblacinafectadapormaremoto_3.addFeatures(features_Poblacinafectadapormaremoto_3);
var lyr_Poblacinafectadapormaremoto_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Poblacinafectadapormaremoto_3, 
                style: style_Poblacinafectadapormaremoto_3,
                interactive: true,
    title: 'Población afectada por maremoto (%)<br />\
    <img src="styles/legend/Poblacinafectadapormaremoto_3_0.png" />  0.00 - 0.88 <br />\
    <img src="styles/legend/Poblacinafectadapormaremoto_3_1.png" />  0.88 - 4.78 <br />\
    <img src="styles/legend/Poblacinafectadapormaremoto_3_2.png" />  4.78 - 13.03 <br />'
        });

lyr_OSMStandard_0.setVisible(true);lyr_Poblacinpordepartamento_1.setVisible(true);lyr_MagnituddesismosRichter_2.setVisible(true);lyr_Poblacinafectadapormaremoto_3.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_Poblacinpordepartamento_1,lyr_MagnituddesismosRichter_2,lyr_Poblacinafectadapormaremoto_3];
lyr_Poblacinpordepartamento_1.set('fieldAliases', {'id': 'id', 'nombre': 'nombre', 'pob': 'pob', });
lyr_MagnituddesismosRichter_2.set('fieldAliases', {'longitud': 'longitud', 'latitud': 'latitud', 'fecha': 'fecha', 'hora_utc': 'hora_utc', 'clasif': 'clasif', 'magnitud': 'magnitud', 'prof': 'prof', });
lyr_Poblacinafectadapormaremoto_3.set('fieldAliases', {'FID_1': 'FID_1', 'escala': 'escala', 'magnitud': 'magnitud', 'pob_total': 'poblacion afectada', 'hombre': 'hombre', 'mujer': 'mujer', 'Avg_pob': 'poblacion departamento', 'dept': 'dept', 'pocentaje': 'pocentaje', });
lyr_Poblacinpordepartamento_1.set('fieldImages', {'id': 'TextEdit', 'nombre': 'TextEdit', 'pob': 'TextEdit', });
lyr_MagnituddesismosRichter_2.set('fieldImages', {'longitud': 'TextEdit', 'latitud': 'TextEdit', 'fecha': 'TextEdit', 'hora_utc': 'TextEdit', 'clasif': 'TextEdit', 'magnitud': 'TextEdit', 'prof': 'TextEdit', });
lyr_Poblacinafectadapormaremoto_3.set('fieldImages', {'FID_1': 'TextEdit', 'escala': 'TextEdit', 'magnitud': 'TextEdit', 'pob_total': 'TextEdit', 'hombre': 'TextEdit', 'mujer': 'TextEdit', 'Avg_pob': 'TextEdit', 'dept': 'TextEdit', 'pocentaje': 'TextEdit', });
lyr_Poblacinpordepartamento_1.set('fieldLabels', {'id': 'no label', 'nombre': 'no label', 'pob': 'no label', });
lyr_MagnituddesismosRichter_2.set('fieldLabels', {'longitud': 'no label', 'latitud': 'no label', 'fecha': 'no label', 'hora_utc': 'no label', 'clasif': 'no label', 'magnitud': 'inline label', 'prof': 'inline label', });
lyr_Poblacinafectadapormaremoto_3.set('fieldLabels', {'FID_1': 'no label', 'escala': 'no label', 'magnitud': 'no label', 'pob_total': 'inline label', 'hombre': 'no label', 'mujer': 'no label', 'Avg_pob': 'no label', 'dept': 'no label', 'pocentaje': 'inline label', });
lyr_Poblacinafectadapormaremoto_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});