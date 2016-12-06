var productId = location.href.split( '?id=' )[1],
    container = document.getElementById( 'product-page' );
var productPage =
    '<div id="' + productId + '">' +
        '<img class="product-img" src="img/' + productId + '.jpg">' +
            'Lorem ipsum dolor sit amet, elit omnis posidonium ea vix. Tempor eleifend vel et. Sea et postea sanctus vivendo, veritus salutandi no sea. Nec augue eleifend cotidieque no, nec novum scripserit an. Est nostrum insolens cu, pro magna velit at, vulputate inciderint ex per. Ei sit putant perfecto phaedrum, homero oporteat mei et.' +
            'Admodum feugait accusata ex nec, ei his gubergren adversarium dissentiunt. Cum ut dico prompta, reque inermis delicatissimi sit ne, id nec rebum aliquam. Mei stet corpora eu. Ex propriae pertinax eum.' +
        '<form name="purchase" method="POST" action="" class="navbar-form navbar-right product-form" id="purchase">' +
            '<div class="form-group">' +
                '<label class="control-label" for="quantity">Quantity:</label>' +
                '<input type="number" min="1" max="1000" step="1" class="form-control" id="quantity" name="quantity" required />' +
                '<button type="submit" class="btn btn-default" />Buy</button>' +
                //'<button type="button" class="btn btn-default" />Cancel</button>' +
            '</div>' +
        '</form>';
container.innerHTML = productPage;