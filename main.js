import * as THREE from 'three';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight); 
document.body.appendChild(renderer.domElement);

const sunlight = new THREE.DirectionalLight(0xffffff, 1.5);
sunlight.position.set(-2, 25, 30);
sunlight.castShadow = true;  
scene.add(sunlight);

const ambientLight = new THREE.AmbientLight(0xffffff, 0.016);
scene.add(ambientLight);

const pointLight = new THREE.PointLight(0xffffff, 1.2);
pointLight.position.set(5, 10, 5);  
scene.add(pointLight);

function createBed() {
    const bedGeometry = new THREE.BoxGeometry(2, 0.5, 4);
    const bedMaterial = new THREE.MeshStandardMaterial({ color: 0x8B5A2B, roughness: 0.8, metalness: 0.1 });
    const bed = new THREE.Mesh(bedGeometry, bedMaterial);
    bed.position.set(-2.5, 0.25, -0.25);
    scene.add(bed);

    const mattressGeometry = new THREE.BoxGeometry(1.9, 0.25, 3.8);
    const mattressMaterial = new THREE.MeshStandardMaterial({ color: 0x00bfff, roughness: 0.7 });
    const mattress = new THREE.Mesh(mattressGeometry, mattressMaterial);
    mattress.position.set(-2.5, 0.5, -0.25);
    scene.add(mattress);

    const pillowGeometry = new THREE.BoxGeometry(1, 0.2, 0.6);
    const pillowMaterial = new THREE.MeshStandardMaterial({ color: 0xd3d3d3, roughness: 0.6 });
    const pillow = new THREE.Mesh(pillowGeometry, pillowMaterial);
    pillow.position.set(-2.3, 0.64, -1.4);
    scene.add(pillow);

    const blanketGeometry = new THREE.BoxGeometry(1.3, 0.03, 3);
    const blanketMaterial = new THREE.MeshStandardMaterial({ color: 0x000080 });
    const blanket = new THREE.Mesh(blanketGeometry, blanketMaterial);
    blanket.position.set(-2.25, 0.62, 0.1);
    scene.add(blanket);

    function addBlanketLines() {
        const lineGeometry = new THREE.BoxGeometry(1.3, 0.03, 0.05);
        const lineMaterial = new THREE.MeshStandardMaterial({ color: 0x00002e });

        const positions = [-1.2, -0.6, 0, 0.6, 1.2];

        for (let i = 0; i < positions.length; i++) {
            const line = new THREE.Mesh(lineGeometry, lineMaterial);
            line.position.set(-2.25, 0.63, positions[i]);
            scene.add(line);
        }
    }

    addBlanketLines();
}

function createBin() {
    const binGeometry = new THREE.CylinderGeometry(0.3, 0.3, 0.7, 32);
    const binMaterial = new THREE.MeshStandardMaterial({ color: 0x4b4b4b, roughness: 0.8 });
    const bin = new THREE.Mesh(binGeometry, binMaterial);
    bin.position.set(-1.1, 0.3, -2.2);
    scene.add(bin);
}

function createDrawer() {
    const drawerGeometry = new THREE.BoxGeometry(1, 1, 1.5);
    const drawerMaterial = new THREE.MeshStandardMaterial({ color: 0x4b2e1f, roughness: 0.8 });
    const drawer = new THREE.Mesh(drawerGeometry, drawerMaterial);
    drawer.position.set(0, 0.5, -2.5);
    scene.add(drawer);

    function addDrawerLine(yPosition) {
        const lineGeometry = new THREE.BoxGeometry(0.95, 0.05, 0.01);
        const lineMaterial = new THREE.MeshStandardMaterial({ color: 0x000000 });
        const line = new THREE.Mesh(lineGeometry, lineMaterial);
        line.position.set(0, yPosition, 0.75);
        drawer.add(line);
    }

    function addDrawerHandle(yPosition) {
        const handleGeometry = new THREE.CylinderGeometry(0.05, 0.05, 0.2, 32);
        const handleMaterial = new THREE.MeshStandardMaterial({ color: 0x000000 });
        const handle = new THREE.Mesh(handleGeometry, handleMaterial);
        handle.rotation.z = Math.PI / 2;
        handle.position.set(0, yPosition, 0.76);
        drawer.add(handle);
    }

    addDrawerLine(0.46);
    addDrawerLine(0);
    addDrawerLine(-0.41);

    addDrawerHandle(0.35);
    addDrawerHandle(-0.1);
}

function createLamp() {
    const baseGeometry = new THREE.CylinderGeometry(0.2, 0.25, 0.4, 32);  
    const baseMaterial = new THREE.MeshStandardMaterial({ color: 0xfcfcfc });  
    const lampBase = new THREE.Mesh(baseGeometry, baseMaterial);
    lampBase.position.set(0, 1.25, -2.5);  
    scene.add(lampBase);

    const shadeGeometry = new THREE.CylinderGeometry(0.3, 0.4, 0.5, 32);  
    const shadeMaterial = new THREE.MeshStandardMaterial({ color: 0xe0e8b3, transparent: true, opacity: 0.9 });  
    const lampShade = new THREE.Mesh(shadeGeometry, shadeMaterial);
    lampShade.position.set(0, 1.75, -2.5);  
    scene.add(lampShade);

    const lampLight = new THREE.PointLight(0xffffff, 0.8, 5);  
    lampLight.position.set(0, 1.85, -2.5);  
    scene.add(lampLight);
}

function createStudyArea() {
    const tableGeometry = new THREE.BoxGeometry(1.5, 0.2, 1);
    const tableMaterial = new THREE.MeshStandardMaterial({ color: 0x4b2e1f, roughness: 0.9, metalness: 0.2 });
    const table = new THREE.Mesh(tableGeometry, tableMaterial);
    table.position.set(2, 1, -2);
    scene.add(table);

    const monitorGeometry = new THREE.BoxGeometry(1.1, 0.8, 0.2);
    const monitorMaterial = new THREE.MeshStandardMaterial({ color: 0x000000, roughness: 0.3 });
    const monitor = new THREE.Mesh(monitorGeometry, monitorMaterial);
    monitor.position.set(1.9, 1.4, -2);
    scene.add(monitor);

    const seatGeometry = new THREE.BoxGeometry(1, 0.1, 1);
    const seatMaterial = new THREE.MeshStandardMaterial({ color: 0x8b7d6b, roughness: 0.6 });
    const seat = new THREE.Mesh(seatGeometry, seatMaterial);
    seat.position.set(2, 0.8, -0.4);
    scene.add(seat);

    const backrestGeometry = new THREE.BoxGeometry(1, 1, 0.1);
    const backrestMaterial = new THREE.MeshStandardMaterial({ color: 0x8b7d6b, roughness: 0.6 });
    const backrest = new THREE.Mesh(backrestGeometry, backrestMaterial);
    backrest.position.set(2, 1.3, 0.05);
    scene.add(backrest);

    function createChairLeg(xOffset, zOffset) {
        const legGeometry = new THREE.CylinderGeometry(0.05, 0.05, 0.5);
        const legMaterial = new THREE.MeshStandardMaterial({ color: 0x000000, roughness: 0.8 });
        const leg = new THREE.Mesh(legGeometry, legMaterial);
        leg.position.set(2 + xOffset, 0.5, -0.4 + zOffset);
        scene.add(leg);
    }

    createChairLeg(-0.45, -0.45);
    createChairLeg(0.45, -0.45);
    createChairLeg(-0.45, 0.45);
    createChairLeg(0.45, 0.45);
}

function createPoster() {
    const posterWidth = 1.5;
    const posterHeight = 1.5;

    const posterGeometry = new THREE.PlaneGeometry(posterWidth, posterHeight);
    const posterMaterial = new THREE.MeshStandardMaterial({ color: 0x00bbff, side: THREE.DoubleSide });

    const poster = new THREE.Mesh(posterGeometry, posterMaterial);
    poster.position.set(2.8, 2.4, -1);
    poster.rotation.y = Math.PI / 2;
    scene.add(poster);

    const circleRadius = 0.2;
    const circleGeometry = new THREE.CircleGeometry(circleRadius, 32);
    const circleMaterial = new THREE.MeshStandardMaterial({ color: 0xf5ed05 });

    const circle = new THREE.Mesh(circleGeometry, circleMaterial);
    circle.position.set(2.1, 2.3, 0.8);
    circle.rotation.y = Math.PI / 4;
    scene.add(circle);
}

function createWindows() {
    const windowGeometry = new THREE.BoxGeometry(1.55, 1.5, 0.1);
    const windowMaterial = new THREE.MeshStandardMaterial({ color: 0x87ceeb, transparent: false, opacity: 0.5 });

    const window = new THREE.Mesh(windowGeometry, windowMaterial);
    window.position.set(0, 2, -2.95);
    scene.add(window);
}

function createWindowFrame() {
    const frameThickness = 0.05;
    const frameDepth = 0.1;

    const topFrameGeometry = new THREE.BoxGeometry(1.6, frameThickness, frameDepth);
    const frameMaterial = new THREE.MeshStandardMaterial({ color: 0xffffff });
    const topFrame = new THREE.Mesh(topFrameGeometry, frameMaterial);
    topFrame.position.set(0, 2.75, -2.9);
    scene.add(topFrame);

    const bottomFrameGeometry = new THREE.BoxGeometry(1.6, frameThickness, frameDepth);
    const bottomFrame = new THREE.Mesh(bottomFrameGeometry, frameMaterial);
    bottomFrame.position.set(0, 1.25, -2.9);
    scene.add(bottomFrame);

    const sideFrameGeometry = new THREE.BoxGeometry(frameThickness, 1.55, frameDepth);
    const leftFrame = new THREE.Mesh(sideFrameGeometry, frameMaterial);
    leftFrame.position.set(-0.8, 2, -2.9);
    scene.add(leftFrame);

    const rightFrame = new THREE.Mesh(sideFrameGeometry, frameMaterial);
    rightFrame.position.set(0.8, 2, -2.9);
    scene.add(rightFrame);
}

function createCurtains() {
    const lineColor = 0x0f0004;

    function addCurtainLines(curtain, xOffset) {
        const lineGeometry = new THREE.BoxGeometry(0.02, 1.55, 0.01);
        const lineMaterial = new THREE.MeshStandardMaterial({ color: lineColor });

        for (let i = -0.2; i <= 0.2; i += 0.1) {
            const line = new THREE.Mesh(lineGeometry, lineMaterial);
            line.position.set(i + xOffset, 0, 0);
            curtain.add(line);
        }
    }

    const leftCurtainGeometry = new THREE.PlaneGeometry(0.5, 1.55);
    const curtainMaterial = new THREE.MeshStandardMaterial({ color: 0x800020, side: THREE.DoubleSide });
    const leftCurtain = new THREE.Mesh(leftCurtainGeometry, curtainMaterial);
    addCurtainLines(leftCurtain, -0);
    leftCurtain.position.set(-0.7, 2, -2.8);
    scene.add(leftCurtain);

    const rightCurtainGeometry = new THREE.PlaneGeometry(0.5, 1.55);
    const rightCurtain = new THREE.Mesh(rightCurtainGeometry, curtainMaterial);
    addCurtainLines(rightCurtain, 0);
    rightCurtain.position.set(0.7, 2, -2.8);
    scene.add(rightCurtain);
}

function createCurtainBar() {
    const barGeometry = new THREE.BoxGeometry(1.9, 0.05, 0.05);
    const barMaterial = new THREE.MeshStandardMaterial({ color: 0x000000 });
    const curtainBar = new THREE.Mesh(barGeometry, barMaterial);
    curtainBar.position.set(0, 2.8, -2.85);
    scene.add(curtainBar);
}

function createStripeTexture() {
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');

    canvas.width = 512;
    canvas.height = 512;

    const color1 = '#a07c54';
    const color2 = '#654321';

    const stripeHeight = 64;
    for (let i = 0; i < canvas.height / stripeHeight; i++) {
        context.fillStyle = (i % 2 === 0) ? color1 : color2;
        context.fillRect(0, i * stripeHeight, canvas.width, stripeHeight);
    }

    const texture = new THREE.CanvasTexture(canvas);
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    texture.repeat.set(2, 2);

    return texture;
}

function createRoom() {
    const floorGeometry = new THREE.BoxGeometry(6, 0.1, 6);
    const floorMaterial = new THREE.MeshStandardMaterial({ map: createStripeTexture(), roughness: 0.9 });
    const floor = new THREE.Mesh(floorGeometry, floorMaterial);
    floor.position.set(0, 0, 0);
    scene.add(floor);

    const wallGeometry = new THREE.BoxGeometry(6, 4, 0.1);
    const wallMaterial = new THREE.MeshStandardMaterial({ color: 0x728fb8, roughness: 0.7 });

    const backWall = new THREE.Mesh(wallGeometry, wallMaterial);
    backWall.position.set(0, 2, -3);
    scene.add(backWall);

    const leftWall = new THREE.Mesh(wallGeometry, wallMaterial);
    leftWall.rotation.y = Math.PI / 2;
    leftWall.position.set(-3, 2, 0);
    scene.add(leftWall);

    const rightWall = new THREE.Mesh(wallGeometry, wallMaterial);
    rightWall.rotation.y = Math.PI / 2;
    rightWall.position.set(3, 2, 0);
    scene.add(rightWall);
}

function createClock() {
    const clockRadius = 0.35;

    const clockGeometry = new THREE.CircleGeometry(clockRadius, 30);
    const clockMaterial = new THREE.MeshStandardMaterial({ color: 0xffffff });
    const clockFace = new THREE.Mesh(clockGeometry, clockMaterial);
    clockFace.position.set(0, 3.4, -2.95);
    scene.add(clockFace);

    const borderGeometry = new THREE.RingGeometry(clockRadius, clockRadius + 0.05, 32);
    const borderMaterial = new THREE.MeshStandardMaterial({ color: 0x000000 });
    const clockBorder = new THREE.Mesh(borderGeometry, borderMaterial);
    clockBorder.position.set(0, 3.4, -2.94);
    scene.add(clockBorder);

    const handMaterial = new THREE.MeshStandardMaterial({ color: 0x000000 });

    const hourHandGeometry = new THREE.BoxGeometry(0.03, 0.3, 0.01);
    const hourHand = new THREE.Mesh(hourHandGeometry, handMaterial);
    hourHand.position.set(-0.02, 3.5, -2.9);
    hourHand.rotation.z = Math.PI / 180;
    scene.add(hourHand);

    const minuteHandGeometry = new THREE.BoxGeometry(0.03, 0.3, 0.01);
    const minuteHand = new THREE.Mesh(minuteHandGeometry, handMaterial);
    minuteHand.position.set(0.11, 3.35, -2.93);
    minuteHand.rotation.z = Math.PI / 2;
    scene.add(minuteHand);
}

function createRugTexture() {
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');

    canvas.width = 512;
    canvas.height = 512;

    const color1 = '#000080';
    const color2 = '#5e0a0a';

    const stripeHeight = 64;
    for (let i = 0; i < canvas.height / stripeHeight; i++) {
        context.fillStyle = (i % 2 === 0) ? color1 : color2;
        context.fillRect(0, i * stripeHeight, canvas.width, stripeHeight);
    }

    const texture = new THREE.CanvasTexture(canvas);
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    texture.repeat.set(1, 1);

    return texture;
}

function createRug() {
    const rugGeometry = new THREE.PlaneGeometry(2, 2);
    const rugMaterial = new THREE.MeshStandardMaterial({
        map: createRugTexture(),
        side: THREE.DoubleSide,
    });
    const rug = new THREE.Mesh(rugGeometry, rugMaterial);

    rug.position.set(0, 0.05, 0.5);
    rug.rotation.x = -Math.PI / 2;
    scene.add(rug);
}

function createDoor() {
    const doorGeometry = new THREE.BoxGeometry(1.5, 2.75, 0.025);
    const doorMaterial = new THREE.MeshStandardMaterial({ color: 0x8b4513, roughness: 0.9 });
    const door = new THREE.Mesh(doorGeometry, doorMaterial);

    door.position.set(2.9452, 1.2, 2.1);
    door.rotation.y = Math.PI / 2.0030;

    scene.add(door);
}

function createDoorKnob() {
    const knobGeometry = new THREE.SphereGeometry(0.1, 32, 32);
    const knobMaterial = new THREE.MeshStandardMaterial({ color: 0xe8e000, roughness: 0.8 });
    const knob = new THREE.Mesh(knobGeometry, knobMaterial);

    knob.position.set(2.9, 1.15, 2.6);

    scene.add(knob);
}

function createFrame() {
    const frameGeometry = new THREE.BoxGeometry(1.7, 2.7, 0.02);
    const frameMaterial = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.9 });
    const frame = new THREE.Mesh(frameGeometry, frameMaterial);

    frame.position.set(2.95, 1.38, 2.1);
    frame.rotation.y = Math.PI / 2;

    scene.add(frame);
}

createRoom();
createBed();
createDrawer();
createStudyArea();
createWindows();
createDoor();
createDoorKnob();
createFrame();
createWindowFrame();
createBin();
createCurtains();
createCurtainBar();
createRug();
createClock();
createPoster();
createLamp();

camera.position.set(0, 2, 6);
camera.rotation.x = 0;

function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}

animate();
