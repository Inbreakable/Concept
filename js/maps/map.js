
// Create Object (check if already defined)
var canvas = function(map,ele){ //Passing in a tilemap object? -> what would the structure be?

    //Setting up canvas properties
    var c = document.getElementById(ele);
    var content = c.getContext("2d");
    var map = map;
    var img = new Image();
    img.onload = function(){_drawMap(map)}; //This needed to be wrapped in a function in order to not premature execute the function
    // img.src = 'images/tiles.png';//Should this be sectioned out?
    //TileObject Properties
    var _tileSize = '32';//Default

    var _tiles = {
        size:32
        ,img: 'images/tiles.png'
        ,blocks:[
             {x:11,y:5,type:'grass'}
            ,{x:10,y:5,type:'dirt'}
            ,{x:10,y:4,type:'stone'}
            ,{x:02,y:2,type:'water'}
        ]
    }

    img.src = _tiles.img;

    //Private Functions
    function _drawTile (tile,x,y){
        var tile = _tiles.blocks[tile];
        if(tile === undefined){
            content.strokeStyle = 'black';
            content.lineWidth = 1;
            content.strokeRect(x*_tiles.size+0.5,y*_tiles.size+0.5,_tiles.size-1,_tiles.size-1);
        }else{
            content.drawImage(img,tile.x*_tiles.size,tile.y*_tiles.size,_tiles.size,_tiles.size,x*_tiles.size,y*_tiles.size,_tiles.size,_tiles.size);
        }
    }
    function _drawRow (row,y){
        row.forEach(function(tile,x){_drawTile(tile,x,y)});
    }
    function _drawMap (array){
        array.forEach(_drawRow);
    }
}