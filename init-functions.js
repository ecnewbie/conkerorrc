dumpln("init-functions")

interactive("reload-config", "reload conkerorrc",
    function(I) {
        load_rc();
        I.window.minibuffer.message("config reloaded");
    }
    );


interactive("load-file",
    "(Re-)load an initialization file",
    function(I) {
        config_dir= get_home_directory();
        config_dir.appendRelativePath(".conkerorrc");
        filename= (yield I.minibuffer.read($prompt = "Load file: ",
                                           $initial_value = config_dir.path + "/",
                                           $history = "load_file"));
        I.window.minibuffer.message("Loaded file "+filename);
        load(make_file(filename));
    }
    );
