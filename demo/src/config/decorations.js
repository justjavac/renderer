export default [
    {
        x: 20.5,
        y: 12,
        width: 14,
        height: 14,
        flip: true,
        rotation: 10 * Math.PI / 180,
        color1: '#8888ff',
        color2: '#aa55aa',
        color3: '#ff9999',
        hasRing: false,
        alpha: 0.9,
        decoration: {
            type: 'wallGraffiti',
            lighting: true,
            graphics: [
                {
                    url: 'decorations/test1.svg',
                    color: 'color1'
                },
                {
                    url: 'decorations/test2.svg',
                    color: 'color2',
                    visible: 'hasRing',
                },
                {
                    url: 'decorations/test3.svg',
                    color: 'color3',
                    visible: 'hasRing',
                }
            ],
            animate: [
                {alpha: 0.4, duration: 0},
                {alpha: 0.6, duration: 2.0},
                {alpha: 0.7, duration: 0.2},
                {alpha: 0.5, duration: 0.2},
                {alpha: 1.0, duration: 0.1},
                {alpha: 0.4, duration: 0.5},
            ]
        }
    },
    /* {
        x: 0,
        y: 35,
        width: 10,
        height: 30,
        tileScale: 1.5,
        flip: true,
        color1: '#999999',
        hasRing: true,
        decoration: {
            type: 'wallGraffiti',
            tiling: true,
            graphics: [
                {
                    url: 'decorations/test_tile.png',
                    color: 'color1'
                }
            ]
        }
    },*/
    {
        colorForeground: '#3333ff',
        alphaForeground: 1.0,
        colorBackground: '#000033',
        colorStroke: '#3333ff',
        colorStrokeLighting: '#404040',
        strokeWidth: 30,
        decoration: {
            type: 'wallLandscape',
            foregroundUrl: 'decorations/landscape.png',
        }
    },
    {
        colorFloorBackground: '#7777dd',
        colorFloorForeground: '#9999ff',
        alphaFloorForeground: 0.2,
        colorSwamp: '#0000ff',
        colorSwampStroke: '#0000cc',
        colorRoads: '#ccccff',
        swampStrokeWidth: 50,
        decoration: {
            type: 'floorLandscape',
            floorForegroundUrl: 'decorations/landscape2.png',
            tileScale: 3,
        }
    },
    {
        user: '58901b93730b9dab5857f7a6',
        nameRegex: 'ContainerMiner',
        color: '#00ff00',
        decoration: {
            type: 'creep',
            blendMode: 1,
            position: 'below',
            url: 'decorations/creep_effect2.svg',
            width: 150,
            height: 150,
            syncRotate: false,
            animate: [
                {alpha: 0.0, scale: 0.5, rotate: 0.0, duration: 0},
                {alpha: 0.7, scale: 0.9, rotate: 2.0, duration: 1.0},
                {alpha: 0.0, scale: 1.2, rotate: 4.0, duration: 2.0},
                {alpha: 0.0, scale: 0.5, rotate: 0.0, duration: 2.0},
            ]
        }
    },
    {
        user: '58901b93730b9dab5857f7a6',
        nameRegex: 'EnergyHauler',
        alpha: 0.5,
        decoration: {
            type: 'creep',
            blendMode: 1,
            position: 'above',
            width: 230,
            height: 230,
            alpha: 0.8,
            url: 'decorations/creep_effect1.svg',
            syncRotate: true,
        }
    }
];