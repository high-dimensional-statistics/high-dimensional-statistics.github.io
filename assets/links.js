/**
 * Copy text to clipboard.
 */
function copyText(text) {
    if (navigator.userAgent.match(/ipad|ipod|iphone/i)) {
        copyTextIOS(text)
    } else {
        copyTextDefault(text)
    }
}


/**
 * Copy text to clipboard on iOS.
 */
function copyTextIOS(text) {
    // Set the value of the dummy input to `text`.
    var el = document.getElementById("selection-dummy")
    el.value = text

    // Create range.
    range = document.createRange();
    range.selectNodeContents(el);

    // Create selection.
    selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);

    // Perform the selection.
    el.setSelectionRange(0, 999999);

    // Attempt to copy text, temporarily showing the dummy.
    el.style.display = "block"
    if (!document.execCommand("copy")) {
        alert("Sorry, could not copy link. :(")
    }
    el.style.display = "none"
}


/**
 * Copy text to clipboard. Default implementation.
 */
function copyTextDefault(text) {
    // Create an input element.
    var el = document.createElement("input")
    el.value = text
    document.body.appendChild(el)

    // Select its contents.
    el.select()

    // Attempt to copy text.
    if (!document.execCommand("copy")) {
        alert("Sorry, could not copy link. :(")
    }

    // Clean up DOM.
    document.body.removeChild(el)
}


/**
 * Share a link.
 */
function shareLink(url, ok) {
    // Copy url.
    copyText(url)

    // Make an animator ID for the animated object.
    if (!ok.animator) {
        ok.animator = 1
    } else {
        ok.animator += 1
    }
    var this_animator = ok.animator

    // Temporarily show OK icon, slowly fading out.
    $(ok).css("opacity", 1)
    setTimeout(function() {
        if (ok.animator == this_animator)
            $(ok).css("transition", "opacity .5s ease-in")
    }, 10)
    setTimeout(function() {
        if (ok.animator == this_animator)
            $(ok).css("opacity", 0)
    }, 1000)
    setTimeout(function() {
        if (ok.animator == this_animator)
            $(ok).css("transition", "none")
    }, 1500)
}


/**
 * Create the link button and popping-up OK. Returns the OK element.
 */
function createLinkAndOK(el) {
    var link = document.createElement("div")
    link.className = "link"
    el.appendChild(link)

    var ok = document.createElement("div")
    ok.className = "ok"
    el.appendChild(ok)

    return ok
}


$(document).ready(function() {
    $("h1").each(function(i, el) {
        var ok = createLinkAndOK(el)

        // Share on click.
        $(el).click(function() { shareLink(page_url, ok) })
    })

    $("h2").each(function(i, el) {
        var ok = createLinkAndOK(el)

        // Share on click.
        $(el).click(function() {
            shareLink(page_url + "#" + el.id, ok)
        })
    })
})