var juego = new Phaser.Game(370,300,Phaser.CANVAS,'bloque_juego');
var fondoJuego;
var teclaDerecha;
var teclaIzquierda;
var teclaArriba;
var teclaAbajo;
var persona;

var estadoPrincipal={
    preload: function(){
        //Carga los recursos
        juego.load.image('fondo','img/bg_paisaje.jpg');
        juego.load.spritesheet('personas','img/personaje.png',60,60);
    },
    create: function(){
        //mostrar pantalla
        fondoJuego=juego.add.tileSprite(0,0,370,300,'fondo');
        persona=juego.add.sprite(juego.width/2,juego.height/2,'personas');
        persona.anchor.setTo(0.5);
        persona.animations.add('abajo',[0,1,2,3,4,5,6,7],10);
        persona.animations.add('derecha',[16,17,18,19,20,21,22,23],10);
        persona.animations.add('izquierda',[8,9,10,11,12,13,14,15],10);
        persona.animations.add('arriba',[24,25,26,27,28,29,30,31],10);

        teclaDerecha = juego.input.keyboard.addKey(Phaser.Keyboard.RIGHT);
        teclaIzquierda = juego.input.keyboard.addKey(Phaser.Keyboard.LEFT);
        teclaArriba = juego.input.keyboard.addKey(Phaser.Keyboard.UP);
        teclaAbajo = juego.input.keyboard.addKey(Phaser.Keyboard.DOWN);
        juego.physics.startSystem(Phaser.Physics.ARCADE);
        //Colision con la pantalla
        juego.physics.arcade.enable(persona);
        persona.body.collideWorldBounds=true;
    },
    update: function(){
        //animamos el juego
        fondoJuego.tilePosition.x-=1;
        if(teclaDerecha.isDown) {
            persona.position.x+=1;
            persona.animations.play('derecha');
        } else if (teclaIzquierda.isDown) {
            persona.position.x-=2;
            persona.animations.play('izquierda');
        } else if (teclaArriba.isDown) {
            persona.position.y-=2;
            persona.animations.play('arriba');

        } else if (teclaAbajo.isDown) {
            persona.position.y+=2;
            persona.animations.play('abajo');

        }
    }
};
juego.state.add('principal',estadoPrincipal);
juego.state.start('principal');