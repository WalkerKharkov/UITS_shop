setView = function() {
    var items = [].slice.apply( document.getElementsByClassName( 'item' ) ),
        itemWidth = items[0].offsetWidth,
        containerWidth = document.getElementsByClassName( 'content' )[0].offsetWidth - 4,
        margin = getMargin( containerWidth, itemWidth );
    items.forEach( function(i) {
        i.style.cssText = 'margin:' + margin + 'px;';
        i.firstElementChild.style.cssText = 'height:' + itemWidth / 2 + 'px;width:' + itemWidth / 2 + 'px;margin:' + itemWidth / 20 + 'px;';
    });
};

getMargin = function(cWidth, iWidth ) {
    var divider = Math.floor( cWidth / iWidth );
    divider = ( ( cWidth - iWidth * divider ) < cWidth * .05 ) ? divider - 1 : divider;
    return Math.floor( ( cWidth - iWidth * divider ) / divider / 2 );
};

$( window ).on( 'load resize', setView );

productPageShow = function() {
    if ( 'BUTTON' !== event.target.tagName ) {
        return;
    }
    location.href = 'product.html?id=' + event.target.parentNode.parentNode.id;
};

$( '.content' ).on( 'click', productPageShow );