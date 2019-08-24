var Product = require('../models/product');

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/loja', {useNewUrlParser: true });

var products = [
    new Product({
        imagePath: 'https://static.gamevicio.com/imagens/games/12/1193-dragon-ball-z-budokai-3.jpg',
        title: 'Dragon Ball Z: Budokai 3',
        description: 'Um jogo muito bom!',
        price: 30
    }),
    new Product({
        imagePath: 'https://www.mobygames.com/images/covers/l/61108-onimusha-3-demon-siege-windows-front-cover.jpg',
        title: 'Onimusha 3',
        description: 'Um jogo muito bom!',
        price: 30
    }),
    new Product({
        imagePath: 'https://images-na.ssl-images-amazon.com/images/I/81bH3%2BDbvNL._SL1500_.jpg',
        title: 'Super Smash Bros Ultimate',
        description: 'Um jogo muito bom!',
        price: 50
    }),
    new Product({
        imagePath: 'https://picfiles.alphacoders.com/173/thumb-17307.jpg',
        title: 'Warcraft 3: The Frozen Throne',
        description: 'Um jogo muito bom!',
        price: 40
    }),
    new Product({
        imagePath: 'https://images.g2a.com/newlayout/323x433/1x1x0/7496c07f1e35/590e052aae653a63ea75ab15',
        title: 'Grand Theft Auto: San Andreas',
        description: 'Um jogo muito bom!',
        price: 25
    }),
    new Product({
        imagePath: 'https://images.g2a.com/newlayout/323x433/1x1x0/bfde13051dfc/5bb78114ae653a5bd2008af2',
        title: 'Resident Evil 2',
        description: 'Um jogo muito bom!',
        price: 35
    })
];


var done = 0;
for (var i=0; i<products.length; i++) {
    products[i].save(function(err, res) {
        done++;
        if (done === products.length) {
            exit();
        }
    });
}

function exit() {
    mongoose.disconnect();
}