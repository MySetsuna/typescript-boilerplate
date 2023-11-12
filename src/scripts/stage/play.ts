import { Stage, game, ColorLayer, BitmapText, Renderable, pool, Vector2d } from "melonjs";

class PlayScreen extends Stage {
    /**
     *  action to perform on state change
     */
    onResetEvent() {
        // add a gray background to the default Stage
        game.world.addChild(new ColorLayer("background", "#202020"));
        game.world.gravity = new Vector2d()
        const player = pool.pull("mainPlayer", 0, 0, 0)
        game.world.addChild(player as Renderable)
    }
};

export default PlayScreen;
