import { _decorator, Component, Label, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('Box')
export class Box extends Component {
    @property(Label)
    private content: Label|null = null;

    start() {

    }

    update(deltaTime: number) {
        
    }

    setNumber(number){
        this.content.string = number;
    }
}


