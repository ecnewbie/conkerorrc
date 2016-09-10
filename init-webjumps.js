dumpln("init-webjumps")

// From http://conkeror.org/Tips#SelectionSearches
// selection searches
function create_selection_search(webjump, key) {
    interactive(webjump+"-selection-search",
                "Search " + webjump + " with selection contents",
                "find-url-new-buffer",
                $browser_object = function (I) {
                    return webjump + " " + I.buffer.top_frame.getSelection();});
    define_key(content_buffer_normal_keymap, key, webjump + "-selection-search");

    interactive("prompted-"+webjump+"-search", null,
                function (I) {
                    var term = yield I.minibuffer.read_url($prompt = "Search "+webjump+":",
                                                           $initial_value = webjump+" ",
                                                           $select = false);
                    browser_object_follow(I.buffer, FOLLOW_DEFAULT, term);
                });
    define_key(content_buffer_normal_keymap, key.toUpperCase(), "prompted-" + webjump + "-search");
}

create_selection_search("wikipedia", "C-c s w");
create_selection_search("google", "C-c s g");

define_webjump("youtube_search", "http://www.youtube.com/results?search_query=%s&aq=f");
define_webjump("so", "http://stackoverflow.com/search?q=%s");

// Emacswiki
define_webjump("emacswiki",
    "https://startpage.com/do/search?cat=web&cmd=process_search&" +
    "language=english&engine0=v1all&query=%s%20site%3Aemacswiki.org&abp=-1",
    $alternative="http://www.emacswiki.org/");
create_selection_search("emacswiki", "C-c s e");

// Firefox add-ons
define_webjump("firefox_addons", "https://addons.mozilla.org/en-US/firefox/search?q=%s");
create_selection_search("firefox_addons", "C-c s a");

// local websites
define_webjump("baidu",    "http://www.baidu.com/s?&wd=%s");
create_selection_search("baidu", "C-c s b");