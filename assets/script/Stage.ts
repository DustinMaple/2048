import { _decorator, Component, instantiate, Node, Prefab, random, UITransform, Vec2, Vec3, view } from 'cc';
import { Box } from './Box';
const { ccclass, property } = _decorator;

const BOX_NUM: number = 4;
const GAP: number = 20;

@ccclass('Stage')
export class Stage extends Component {
    @property(Prefab)
    boxPrefab: Prefab = null;

    private boxSize: number = 0;
    private winWidth: number = 0;

    start() {
        this.winWidth = view.getVisibleSize().width;
        this.boxSize = (this.winWidth - GAP * (BOX_NUM + 1)) / BOX_NUM;

        this.createBoxes();
    }
    createBoxes() {
        let initX = this.node.position.x - this.winWidth / 2;
        let initY = this.node.position.y;
        for (let row = 1; row <= BOX_NUM; ++row) {
            let y = initY + row * GAP + (row - 0.5) * this.boxSize

            for (let col = 1; col <= BOX_NUM; ++col) {
                let x = initX + col * GAP + (col - 0.5) * this.boxSize
                this.createBox(x, y);
            }
        }
    }
    createBox(x: number, y: number) {
        console.info("create box:", x, ", ", y)
        let box = instantiate(this.boxPrefab);
        box.setPosition(x, y);
        box.getComponent(Box).setNumber(2);
        box.getComponent(UITransform).width = this.boxSize;
        box.getComponent(UITransform).height = this.boxSize;
        this.node.addChild(box);
    }

    update(deltaTime: number) {

    }
}


