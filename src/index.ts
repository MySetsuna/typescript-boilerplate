import { audio, loader, state, device, video, plugin, pool, input } from "melonjs";
import TitleScreen from "./scripts/stage/title.js";
import PlayScreen from "./scripts/stage/play.js";
import PlayerEntity from "./scripts/renderables/player.js";
import DataManifest from "./manifest.js";
import "./index.scss"

device.onReady(() => {

    // initialize the display canvas once the device/browser is ready
    if (!video.init(1218, 562, { parent: "screen", scale: "auto" })) {
        alert("Your browser does not support HTML5 canvas.");
        return;
    }

    // Initialize the audio.
    audio.init("mp3,ogg");

    // allow cross-origin for image/texture loading
    loader.crossOrigin = "anonymous";

    // initialize the debug plugin in development mode.
    if (process.env.NODE_ENV === 'development') {
        import("@melonjs/debug-plugin").then((debugPlugin) => {
            // automatically register the debug panel
            plugin.register(debugPlugin.DebugPanelPlugin, "debugPanel");
        });
    }

    // set and load all resources.
    loader.preload(DataManifest, function () {
        input.bindKey(input.KEY.UP, "Up");
        input.bindKey(input.KEY.W, "Up");
        input.bindKey(input.KEY.DOWN, "Down");
        input.bindKey(input.KEY.S, "Down");
        input.bindKey(input.KEY.LEFT, "Left");
        input.bindKey(input.KEY.A, "Left");
        input.bindKey(input.KEY.RIGHT, "Right");
        input.bindKey(input.KEY.D, "Right");
        // set the user defined game stages
        state.set(state.MENU, new TitleScreen());
        state.set(state.PLAY, new PlayScreen());

        // add our player entity in the entity pool
        pool.register("mainPlayer", PlayerEntity);

        // Start the game.
        state.change(state.PLAY, false);
    });
});
