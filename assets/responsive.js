/**
 * Open the menu.
 */
function menuOpen() {
    $("#menu").addClass("mouseover")
    $("#menu-button").addClass("mouseover")
}


/**
 * Close the menu.
 */
function menuClose() {
    $("#menu").removeClass("mouseover")
    $("#menu-button").removeClass("mouseover")
}


/**
 * Toggle the menu.
 */
function menuToggle() {
    if ($("#menu").hasClass("mouseover")) {
        menuClose()
    } else {
        menuOpen()
    }
}


/**
 * Fix the menu for touch devices. Makes the animations instant and brings menu
 * button to the top.
 */
function menuTouch() {
    $("#menu-button").css({
        "z-index": 4,  // Bring it above everything else.
        "position": "absolute",
        "transition": "background-image .2s"
    })

    $("#menu").css({
        "transition": "width .2s, height .2s, background .2s"
    })
}


$(document).ready(function() {
    if (Modernizr.touch) {
        menuTouch()

        // Toggle menu upon click.
        var menu_last_click = (new Date()).getTime()
        $("#menu").click(function() {
            menu_last_click = (new Date()).getTime()
            menuToggle()
        })

        // Close menu if touched anywhere else.
        $(document).on("click touchend", function() {
            // This event will trigger before the menu click event, so
            // close with a timer, and check whether the menu event triggered
            // recently.
            setTimeout(function() {
                if ((new Date()).getTime() - menu_last_click > 100) {
                    // Menu event did not trigger recently. Close.
                    menuClose()
                }
            }, 50)
        })
    } else {
        // Simply toggle menu via hover.
        $("#menu").mouseout(function() { menuClose() })
        $("#menu").mouseover(function() { menuOpen() })
    }
})

