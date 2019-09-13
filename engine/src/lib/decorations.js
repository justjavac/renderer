import { Container, Sprite } from 'pixi.js';

// eslint-disable-next-line import/prefer-default-export
export function set(decorations, params) {
    const {
        world,
        world: { options: { CELL_SIZE } },
    } = params;

    world.decorations = decorations;
    if (world.decorationsContainer) {
        world.decorationsContainer.destroy({
            children: true,
            texture: true,
            baseTexture: false,
        });
    }
    world.decorationsContainer = new Container();
    world.stage.addChild(world.decorationsContainer);

    decorations.forEach((decorationItem) => {
        if (decorationItem.decoration.type === 'wallGraffiti') {
            decorationItem.decoration.graphics.forEach((graphic) => {
                if (graphic.visible && !decorationItem[graphic.visible]) {
                    return;
                }
                const sprite = Sprite.fromImage(graphic.url);
                Object.assign(sprite, {
                    anchor: {
                        x: 0.5,
                        y: 0.5,
                    },
                    x: (decorationItem.x + (decorationItem.width / 2)) * CELL_SIZE,
                    y: (decorationItem.y + (decorationItem.height / 2)) * CELL_SIZE,
                    width: decorationItem.width * CELL_SIZE,
                    height: decorationItem.height * CELL_SIZE,
                    parentLayer: world.layers.wallGraffiti,
                    tint: parseInt(decorationItem[graphic.color].substr(1), 16),
                    mask: world.stage.terrainObjects.wallMask,
                });
                if (decorationItem.flip) {
                    sprite.scale.x *= -1;
                }
                if (decorationItem.rotation) {
                    sprite.rotation = decorationItem.rotation;
                }
                world.decorationsContainer.addChild(sprite);
            });
        }
    });
}
