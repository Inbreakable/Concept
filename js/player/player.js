// Create Object (check if already defined)
var player = function(sprite,ele){ //Passing in a tilemap object? -> what would the structure be?

    //Setting up canvas properties
    var c = document.getElementById(ele);
    var content = c.getContext("2d");
    var sprite = sprite;
    var img = new Image();
    img.onload = function(){
        var action = _player.actions[_player.current.direction];
        var position = _player.current.position;
        content.drawImage(img,action.x*_player.width,action.y*_player.height,_player.width,_player.height,position[0],position[1],_player.width/_player.scale,_player.height/_player.scale);
    }; //This needed to be wrapped in a function in order to not premature execute the function

    var requestAnimationFrame =
        window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.msRequestAnimationFrame ||
        window.oRequestAnimationFrame ||
        function(callback) {
          return setTimeout(callback, 1);
        };

    /*List of function to execute based on keypress*/
        var keyOperation = [];
        keyOperation[37] = _moveLeft;
        keyOperation[38] = _moveUp;
        keyOperation[39] = _moveRight;
        keyOperation[40] = _moveDown;
        keyOperation[65] = _moveLeft;
        keyOperation[68] = _moveRight;
        keyOperation[83] = _moveDown;
        keyOperation[87] = _moveUp;
    /*End keyOperation*/

    //This would be the object that is passed in
    //Used to make new player sprites
    var _player = {
        height:130
        ,width: 117
        ,img: 'images/$linkEdit.png'
        ,scale: 3.2
        ,actions:[
              {x:2,y:0,type:'facesouth'}
             ,{x:0,y:2,type:'facenorth'}
             ,{x:0,y:1,type:'facewest'}
             ,{x:0,y:3,type:'faceeast'}
        ]
        ,current:{
            position:[32,17]
            ,direction:0
        }
    }

    img.src = _player.img;
    $(document).on('keydown', _move);

    //Private Functions
    function _drawPlayer (action,x,y){
        var action = _player.actions[_player.current.direction];
        var position = _player.current.position;
        content.drawImage(img,action.x*_player.width,action.y*_player.height,_player.width,_player.height,position[0],position[1],_player.width/_player.scale,_player.height/_player.scale);
    }
    function _clearPlayer (){
        var x = _player.current.position[0]-1;
        var y = _player.current.position[1]-1;
        var dx = _player.width/_player.scale + 2;
        var dy = _player.height/_player.scale + 2;
        content.clearRect(x,y,dx,dy);
    }
    function _move(e){
        if(keyOperation[e.which]){
            _clearPlayer();
            keyOperation[e.which]();
            _drawPlayer();
        }else{
            return false;
        }
        return false;
    }
    function _moveUp(e){
        if(_player.current.direction === 1){
            _player.current.position[1] -= 32;
        }
        _player.current.direction = 1;
    }
    function _moveDown(e){
        if(_player.current.direction === 0){
            _player.current.position[1] += 32;
        }
        _player.current.direction = 0;
    }
    function _moveLeft(e){
        if(_player.current.direction === 2){
            _player.current.position[0] -= 32;
        }
        _player.current.direction = 2;
    }
    function _moveRight(e){
        if(_player.current.direction === 3){
            _player.current.position[0] += 32;
        }
        _player.current.direction = 3;
    }

}

/*$(function() {
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
    function _move(e){
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
        e.preventDefault(); // prevent the default action (scroll / _move caret)
    }

    $(document).on('keydown' _move);

    Object.prototype.randomProperty = function(obj) {
        var keys = Object.keys(this);
        return this[keys[ keys.length * Math.random() << 0]];
    }
});*/