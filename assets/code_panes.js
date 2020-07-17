/**
 * Show a pane.
 */
function showPane(panes, i) {
    panes.forEach(function(pane) {
        $(pane).css("display", "none")
    })
    $(panes[i]).css("display", "block")
}


/**
 * Highlight a button.
 */
function highlightButton(buttons, i) {
    buttons.forEach(function(button) {
        $(button).removeClass("selected")
    })
    $(buttons[i]).addClass("selected")
}


/**
 * Create a menu button for code panes.
 */
function createButton(panes, langs, i) {
    button = document.createElement("a")
    button.innerHTML = langs[i]
    $(button).click(function() {
        showPane(panes, i)
    })
    return button
}


/**
 * Attach the highlighting effects to a menu button.
 */
function attachButtonHighlighter(buttons, i) {
    $(buttons[i]).click(function() {
        highlightButton(buttons, i)
    })
}


/**
 * Get the language of a block of code.
 */
function getLang(el) {
    var classes = $(el).attr("class").split(" ")
    var lang = "text"
    classes.forEach(function(c) {
        if (c.startsWith("language-"))
            lang = c.split("language-")[1]
    })
    return lang
}


/**
 * Turn a list of blocks of codes into panes.
 */
function makePanes(panes) {
    // Get titles of the panes.
    langs = panes.map(getLang)

    // Create menu.
    menu = document.createElement("div")
    $(menu).addClass("code-panes")

    // Add buttons to the menu.
    buttons = []
    for (i = 0; i < langs.length; i++) {
        button = createButton(panes, langs, i)
        menu.appendChild(button)
        buttons.push(button)
    }

    // Add highlighting effects to the buttons.
    for (i = 0; i < langs.length; i++) {
        attachButtonHighlighter(buttons, i)
    }

    // Insert the menu.
    $(menu).insertBefore(panes[0])

    // Show the first pane.
    showPane(panes, 0)
    highlightButton(buttons, 0)
}


/**
 * Check whether two blocks are subsequent in the DOM.
 */
function subsequent(block1, block2) {
    return block1.next().attr("blockID") == block2.attr("blockID")
}


$(document).ready(function() {
    // Extract all blocks from the page.
    blocks = Array.from($("div.highlighter-rouge"), $)

    // Give unique IDs to the blocks for detection of subsequent blocks.
    blockID = 0
    blocks.forEach(function(block){
        block.attr("blockID", blockID)
        blockID += 1
    })

    // Detect subsequent sequences.
    subsequents = []
    sequence = [blocks[0]]
    for (i = 1; i < blocks.length; i++) {
        if (subsequent(blocks[i - 1], blocks[i])) {
            sequence.push(blocks[i])
        } else {
            subsequents.push(sequence)
            sequence = [blocks[i]]
        }
    }
    subsequents.push(sequence)

    // Turn the subsequent sequences into panes.
    subsequents.forEach(function(panes) {
        if (panes.length > 1)
            makePanes(panes)
    })
})