import { Engine, HtmlElementTexture, MeshBuilder, Scene } from "babylonjs";
import { AdvancedDynamicTexture, TextBlock } from "babylonjs-gui";

export class App{
    private engine: Engine;
    private canvas: HTMLCanvasElement;

    constructor(engine: Engine, canvas: HTMLCanvasElement){
        this.engine = engine;
        this.canvas = canvas;
        console.log('app ts is running!!');
    }

    async createScene(){
        const scene = new Scene(this.engine);
        scene.createDefaultCameraOrLight();

        const sphere = MeshBuilder.CreateSphere('sphere', {diameter: 1.3}, scene);
        sphere.position.y = 1;
        sphere.position.z = 5;

        const helloPlane = MeshBuilder.CreatePlane('hello plane', {size: 15});
        helloPlane.position.y = 0;
        helloPlane.position.z = 5;

        const helloUI = AdvancedDynamicTexture.CreateForMesh(helloPlane);
        
        const helloText = new TextBlock('hello');
        helloText.text = 'Unlearn Unlearn Unlearn';
        helloText.color = 'blue';
        helloText.fontSize = 25;
        helloUI.addControl(helloText);

        const xr = await scene.createDefaultXRExperienceAsync({
            uiOptions: {
                sessionMode: 'immersive-vr'
            }
        });

        //debugging
        (window as any).xr = xr;
        

        return scene;
    }
}