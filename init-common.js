dumpln("init-common");

//allow for 'contrib' stuff
load_paths.unshift("chrome://conkeror-contrib/content/");

// teach me something whenever I start my browser
homepage = "http://en.wikipedia.org/wiki/Special:Random";

// give me new tabs; open buffers (tabs) in the background
require("new-tabs.js");
require("clicks-in-new-buffer.js");
clicks_in_new_buffer_target = OPEN_NEW_BUFFER_BACKGROUND;
clicks_in_new_buffer_button = 1; //  midclick links in new buffers with

// auto completion in the minibuffer
minibuffer_auto_complete_default = true;
url_completion_use_history = false;
url_completion_use_bookmarks = false;

// integration with emacs
editor_shell_command = "emacsclient -c";

// using letters instead of numbers, keys from avy.
hint_digits="asdfghjkl";
hints_minibuffer_annotation_mode(true);
// save a keystroke when selecting a dom node by number.
hints_auto_exit_delay = 500;
hints_ambiguous_auto_exit_delay = 500;

// default directory for downloads and shell commands.
cwd = get_home_directory();
cwd.append("Desktop");

download_buffer_automatic_open_target = [OPEN_NEW_BUFFER, OPEN_NEW_WINDOW];

url_remoting_fn = load_url_in_new_buffer;

// User prefs
user_pref("browser.download.manager.closeWhenDone", true);
user_pref("extensions.checkCompatibility", false);
// user_pref("conkeror.load.extensions/noscript", 1);
// user_pref("conkeror.load.extensions/dom-inspector", 1);


//Session manager
require("session.js");
session_auto_save_auto_load = true;
session_auto_save_auto_load_fn = session_auto_save_load_window_current;

session_pref("xpinstall.whitelist.required", false);

// // Password manager
// session_pref("signon.rememberSignons", true);
// session_pref("signon.expireMasterPassword", false);
// session_pref("signon.SignonFileName", "signons.txt");

// TODO: Fuzzy match.

// TODO: Download.