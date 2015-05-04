
// Create Object (check if already defined)
var canvas = function(map,ele){ //Passing in a tilemap object? -> what would the structure be?

    //Setting up canvas properties
    var c = document.getElementById(ele);
    var content = c.getContext("2d");
    var map = map;
    var img = new Image();
    img.onload = function(){_drawMap(map)}; //This needed to be wrapped in a function in order to not premature execute the function
    img.src = 'images/tiles.png';//Should this be sectioned out?
    //TileObject Properties
    var _tileSize = '32';//Default

    var _tiles = {
        size:32
        ,img: 'images/tiles.png'
        ,blocks:[
             {x:11,y:5,type:'grass'}
            ,{x:10,y:5,type:'dirt'}
            ,{x:09,y:5,type:'dirt'}
            ,{x:08,y:5,type:'dirt'}
        ]
    }

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

        /*switch(tile){
            case 0:
                content.drawImage(img,11*_tileSize,5*_tileSize,_tileSize,_tileSize,x*_tileSize,y*_tileSize,_tileSize,_tileSize);
                break;
            case 1:
                content.drawImage(img,10*_tileSize,5*_tileSize,_tileSize,_tileSize,x*_tileSize,y*_tileSize,_tileSize,_tileSize);
                break;
            default:
                content.strokeStyle = 'black';
                content.lineWidth = 1;
                content.strokeRect(x*_tileSize+0.5,y*_tileSize+0.5,_tileSize-1,_tileSize-1);

        }*/
        // content.drawImage(img,tileObject.x*_tileSize,tileObject.y*_tileSize,_tileSize,_tileSize,x,y,_tileSize,_tileSize);
    }
    function _drawRow (row,y){
        row.forEach(function(tile,x){_drawTile(tile,x,y)});
    }
    function _drawMap (array){
        array.forEach(_drawRow);
    }
}

/*/*$(function() {
    var c = document.getElementById("background");
    var ctx = c.getContext("2d");
    var img = new Image();

    //Options
    var _tileSize = 32;
    var mapping = {
        grass:{x:10,y:5}
        ,dirt:{x:11,y:5}
        // ,water:{x:2,y:2}
    };

    img.onload = function(){
        for(var i = 0;i < c.width;i+=_tileSize){
            for(var j = 0;j < c.height;j+=_tileSize){
                drawTile(mapping.randomProperty(),i,j);
            }
            // drawTile(mapping.randomProperty(),10,10);
        }
        // ctx.drawImage(img,50,50);
    }
    img.src = 'images/tiles.png';

    function drawTile(tileObject,x,y){
        ctx.drawImage(img,tileObject.x*_tileSize,tileObject.y*_tileSize,_tileSize,_tileSize,x,y,_tileSize,_tileSize);
    }

    Object.prototype.randomProperty = function(obj) {
        var keys = Object.keys(this);
        return this[keys[ keys.length * Math.random() << 0]];
    }
});*/