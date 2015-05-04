$(function() {
    var c = document.getElementById("sprite");
    var ctx = c.getContext("2d");
    var img = new Image();

    //Options
    var tileSizeX = 110;
    var titleSizeY = 130;
    var mapping = {
        frontstill:{x:0,y:0}
        ,backstill:{x:0,y:2}
        ,weststill:{x:0,y:1}
        ,eaststill:{x:0,y:3}
    };
    var position = [];
    var direction = 'south';

    img.onload = function(){

        drawTile(mapping.frontstill,32,32-15);
        // ctx.drawImage(img,150,150);
    }
    img.src = 'images/$linkEdit.png';

    function drawTile(tileObject,x,y){
        position=[img,tileObject.x*tileSizeX,tileObject.y*titleSizeY,tileSizeX,titleSizeY,x,y,tileSizeX/3.2,titleSizeY/3.2];
        ctx.drawImage.apply(ctx,position);
    }
    function move(e){
        switch(e.which) {
            case 37: // left
                ctx.clearRect(position[5]-1,position[6]-1,position[7]+2,position[8]+2);
                if(direction === 'west'){
                    drawTile(mapping.weststill,position[5]-32,position[6]);
                }else{
                    drawTile(mapping.weststill,position[5],position[6]);
                    direction = 'west';
                }
            break;

            case 38: // up
                ctx.clearRect(position[5]-1,position[6]-1,position[7]+2,position[8]+2);
                if(direction === 'north'){
                    drawTile(mapping.backstill,position[5],position[6]-32);
                }else{
                    drawTile(mapping.backstill,position[5],position[6]);
                    direction = 'north';
                }
            break;

            case 39: // right
                ctx.clearRect(position[5]-1,position[6]-1,position[7]+2,position[8]+2);
                if(direction === 'east'){
                    drawTile(mapping.eaststill,position[5]+32, position[6]);
                }else{
                    drawTile(mapping.eaststill,position[5],position[6]);
                    direction = 'east';
                }
            break;

            case 40: // down
                ctx.clearRect(position[5]-1,position[6]-1,position[7]+2,position[8]+2);
                if(direction === 'south'){
                    drawTile(mapping.frontstill,position[5],position[6]+32);
                }else{
                    drawTile(mapping.frontstill,position[5],position[6]);
                    direction = 'south';
                }
            break;

            default: return; // exit this handler for other keys
        }
        e.preventDefault(); // prevent the default action (scroll / move caret)
    }

    $(document).on('keydown',move);

    Object.prototype.randomProperty = function(obj) {
        var keys = Object.keys(this);
        return this[keys[ keys.length * Math.random() << 0]];
    }
});