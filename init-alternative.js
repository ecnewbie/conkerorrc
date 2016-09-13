dumpln("init-alternative")

interactive("switch-to-recent-buffer",
    "Prompt for a buffer and switch to it, displaying the list in last-visited order.",
    function (I) {
        switch_to_buffer(
            I.window,
            (yield I.minibuffer.read_buffer(
                $prompt = "Switch to buffer:",
                $buffers = I.window.buffers.buffer_history,
                $default = (I.window.buffers.count > 1 ?
                            I.window.buffers.buffer_history[1] :
                            I.buffer))));
    });

define_key(default_global_keymap, "C-x b", "switch-to-recent-buffer");

//Bind Number Keys to Switch to Buffers 1-10
function define_switch_buffer_key (key, buf_num) {
    define_key(default_global_keymap, key,
               function (I) {
                   switch_to_buffer(I.window,
                                    I.window.buffers.get_buffer(buf_num));
               });
}
for (let i = 0; i < 10; ++i) {
    define_switch_buffer_key(String((i+1)%10), i);
}

// add_hook("window_before_close_hook",
//          function () {
//              var w = get_recent_conkeror_window();
//              var result = (w == null) ||
//                  "y" == (yield w.minibuffer.read_single_character_option(
//                      $prompt = "Quit Conkeror? (y/n)",
//                      $options = ["y", "n"]));
//              yield co_return(result);
//          });

// for select text.
require("caret.js");

interactive("newbie/isearch-forward",
    "Start interactive text search, forward from point.",
    function (I) {
      caret_mode_enable(I.buffer);
      isearch_start(I.window, true);
    });


define_key(default_global_keymap, "C-s", "newbie/isearch-forward");
define_key(caret_keymap, "q", "caret-mode");
