signView = {
    signIn:
        '<div class="sign-header">Authorization</div>' +
        '<form name="signIn" method="POST" action="post_controller.php" class="form-horizontal" id="form">' +
            '<div class="form-group">' +
                '<label class="col-xs-2 control-label" for="login">Login</label>' +
                '<div class="col-xs-9">' +
                    '<input type="text" class="form-control" id="login" placeholder="Login" name="login" required />' +
                '</div>' +
            '</div>' +
            '<div class="form-group">' +
                '<label class="col-xs-2 control-label" for="password">Password</label>' +
                '<div class="col-xs-9">' +
                    '<input type="password" class="form-control" id="password" placeholder="Password" name="password" required />' +
                '</div>' +
            '</div>' +
            '<div class="form-group">' +
                '<div class="col-sm-offset-2 col-sm-10">' +
                    '<button type="submit" class="btn btn-success" />Sign in</button>' +
                    '<button type="button" class="btn btn-danger" />Cancel</button>' +
                '</div>' +
            '</div>' +
        '</form>',
    signUp:
        '<div class="sign-header">Registration</div>' +
        '<form name="signUp" method="POST" action="post_controller.php" class="form-horizontal" id="form">' +
            '<div class="form-group">' +
                '<label class="col-xs-2 control-label" for="login">Login</label>' +
                '<div class="col-xs-9">' +
                    '<input type="text" class="form-control" id="login" placeholder="Login" name="login" required />' +
                '</div>' +
            '</div>' +
            '<div class="form-group">' +
                '<label class="col-xs-2 control-label" for="email">Email</label>' +
                '<div class="col-xs-9">' +
                    '<input type="email" class="form-control" id="email" placeholder="Email" name="email" required />' +
                '</div>' +
            '</div>' +
            '<div class="form-group">' +
                '<label class="col-xs-2 control-label" for="password">Password</label>' +
                '<div class="col-xs-9">' +
                    '<input type="password" class="form-control" id="password" placeholder="Password" name="password" required />' +
                '</div>' +
            '</div>' +
            '<div class="form-group">' +
                '<div class="col-sm-offset-2 col-sm-10">' +
                    '<button type="submit" class="btn btn-success" />Sign up</button>' +
                    '<button type="button" class="btn btn-danger" />Cancel</button>' +
                '</div>' +
            '</div>' +
        '</form>'
};

signClick = function( event ) {
    if ( 'I' === event.target.tagName ) {
        var target = event.target.parentNode.id;
    } else {
        target = event.target.id;
    }
    if ( 'admin' === target ) {
        location.href = 'admin.html';
    }
    if ( signView[ target ] ) {
        showIframe( signView[ target ] );
    }
};

showIframe = function( view ) {
    var iFrame = document.createElement( 'div' ),
        screenBlock = document.createElement( 'div');
    screenBlock.classList.add( 'screen-block' );
    document.body.insertBefore( screenBlock, document.body.firstElementChild );
    var screenHeight = screenBlock.offsetHeight,
        screenWidth = screenBlock.offsetWidth;
    iFrame.innerHTML = view;
    $( iFrame ).addClass( 'iFrame col-xs-6' );
    screenBlock.appendChild( iFrame );
    var iFrameHeight = iFrame.offsetHeight,
        iFrameWidth = iFrame.offsetWidth;
    iFrame.style.cssText = 'z-index:99999;position:relative;top:' + ( screenHeight - iFrameHeight ) / 2 + 'px;left:' +
        ( screenWidth - iFrameWidth ) / 2 + 'px;';
    $( '.btn-danger' ).on( 'click', function() {
        document.body.removeChild( [].slice.apply( document.getElementsByClassName( 'screen-block' ) )[0] );
    });
};

$( '.sign' ).on( 'click', signClick );