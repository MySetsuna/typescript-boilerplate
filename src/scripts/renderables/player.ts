import { Body, collision, Entity, input, Rect, Sprite } from "melonjs";

class PlayerEntity extends Entity {
    ANIMATION_SPEED = 150;
    /**
     * constructor
     */
    constructor(x: number, y: number, settings: any) {
        // call the parent constructor
        super(100, 100, {
            height: 16,
            width: 16,
            image: "dude"
        });

        this.body = new Body(this, (new Rect(16, 16, 16, 16)).toIso());
        this.body.collisionType = collision.types.PLAYER_OBJECT;
        this.alwaysUpdate = true;
        this.body.setMaxVelocity(2, 2);
        this.body.setFriction(0.4, 0.4);

        this.setupAnimations((this.renderable as Sprite));

        this.setAnimation((this.renderable as Sprite), 'walk_left');
    }

    /**
     * update the entity
     */
    update(dt: number) {
        if (input.isKeyPressed("Down")) {
            console.log("Down");
            this.body.force.y = this.body.maxVel.y
        }

        if (input.isKeyPressed("Up")) {
            console.log("Up");
            this.body.force.y = -this.body.maxVel.y
        }

        if (input.isKeyPressed("Left")) {
            console.log("Left");
            this.body.force.x = -this.body.maxVel.x
        }

        if (input.isKeyPressed("Right")) {
            console.log("Right");
            this.body.force.x = this.body.maxVel.x
        } if (input.isKeyPressed("Down")) {
            console.log("Down");
            this.body.force.y = this.body.maxVel.y
        }

        if (input.isKeyPressed("Up")) {
            console.log("Up");
            this.body.force.y = -this.body.maxVel.y
        }

        if (input.isKeyPressed("Left")) {
            console.log("Left");
            this.body.force.x = -this.body.maxVel.x
        }

        if (input.isKeyPressed("Right")) {
            console.log("Right");
            this.body.force.x = this.body.maxVel.x
        }
        return super.update(dt);
    }

    /**
      * colision handler
      * (called when colliding with other objects)
      */
    onCollision(response: any, other: any) {
        // Make all other objects solid
        return true;
    }

    setupAnimations(sprite: Sprite) {
        sprite.addAnimation("idle_left", [15]);
        sprite.addAnimation("idle_right", [10]);
        sprite.addAnimation("idle_up", [5]);
        sprite.addAnimation("idle_down", [0]);
        sprite.addAnimation("walk_left", [16, 17, 18, 19], this.ANIMATION_SPEED)
        sprite.addAnimation("walk_right", [11, 12, 13, 14], this.ANIMATION_SPEED)
        sprite.addAnimation("walk_up ", [6, 7, 8, 9], this.ANIMATION_SPEED)
        sprite.addAnimation("walk_down", [1, 2, 3, 4], this.ANIMATION_SPEED)
    }

    setAnimation(sprite: Sprite, name: string) {
        sprite.setCurrentAnimation(name);
    }
};

export default PlayerEntity;
