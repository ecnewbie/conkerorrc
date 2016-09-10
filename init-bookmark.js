dumpln("init-bookmark")

define_browser_object_class(
    "bookmark-url", null,
    function (I, prompt) {
        check_buffer (I.buffer, content_buffer);
        var result = yield I.buffer.window.minibuffer.read_url(
            $prompt = prompt,  $use_webjumps = false, $use_history = false, $use_bookmarks = true, $require_match = true);
        yield co_return (result);
    });

interactive("find-url-from-bookmark",
            "Find a page from bookmark in the current buffer",
            "find-url",
            $browser_object = browser_object_bookmark_url);

interactive("find-url-from-bookmark-new-buffer",
            "Find a page from bookmark in a new buffer",
            "find-url-new-buffer",
            $browser_object = browser_object_bookmark_url);

define_key(content_buffer_normal_keymap, "o", "find-url-from-bookmark-new-buffer");
define_key(content_buffer_normal_keymap, "O", "find-url-from-bookmark");


// TODO: I don't know why it not works.
// define_webjump("bookmark",
//     function(term) {return term;},
//     $completer = url_completer($use_history = false,
//                                    $use_bookmarks = true// ,
//                                    // $match_required = true
//                                   ),
//     $description = "Visit a conkeror bookmark");


// TODO: Add bookmark with tags.
// TODO: Query bookmarks with tags.