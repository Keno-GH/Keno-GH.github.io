
//declarar las variables de nuestra app. 
var scene, camera, renderer, clock, deltaTime, totalTime;

var arToolkitSource, arToolkitContext;

var mesh1, mesh2, meshImagen, meshImagen2, meshImagen3;

var markerManual1;

init(); // llamado de la funcion principal que se encarga de hacer casi  todo en la app
animate();

function init() {
    ////////////////////////////////////////////////////////
    //THREE Setup
    ///////////////////////////////////////////////////////
    // crear nuestra escena -  OBJETO.
    scene = new THREE.Scene(); //  crea un objeto escena.

    //////////////////////////////////////////////////////
    //LUCES
    //////////////////////////////////////////////////////

    let light = new THREE.PointLight(0xffffff, 1, 100); //creo nueva luz 
    light.position.set(0, 4, 4); //indico la posicion de la luz 
    light.castShadow = true; //activo la capacidad de generar sombras.
    scene.add(light); //agrego la luz a mi escena 

    let lightSphere = new THREE.Mesh(
        new THREE.SphereGeometry(0.1),
        new THREE.MeshBasicMaterial({
            color: 0xffffff,
            transparent: true,
            opacity: 0.8
        })
    );

    lightSphere.position.copy(light);
    scene.add(lightSphere);

    //creamos luces 
    let ambientLight = new THREE.AmbientLight(0xcccccc); //creo las luz
    scene.add(ambientLight); //agrego la luz a mi escena. 

    camera = new THREE.Camera(); //creo objeto camara 
    scene.add(camera); // agrego camara a la escena

    //permite mostrar las cosas en 3d en la pantalla
    renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true
    });

    renderer.setClearColor(new THREE.Color('lightgrey'), 0);
    renderer.setSize(640, 480);
    renderer.domElement.style.position = 'absolute';
    renderer.domElement.style.top = '0px';
    renderer.domElement.style.left = '0px';

    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    document.body.appendChild(renderer.domElement); // agregarlo a nuestra pagina web


    //tiempo
    clock = new THREE.Clock();
    deltaTime = 0;
    totalTime = 0;

    ////////////////////////////////////////////////////////
    //AR Setup
    ///////////////////////////////////////////////////////

    arToolkitSource = new THREEx.ArToolkitSource({
        sourceType: 'webcam',
    });

    function onResize() {
        arToolkitSource.onResize()
        arToolkitSource.copySizeTo(renderer.domElement)
        if (arToolkitContext.arController !== null) {
            arToolkitSource.copySizeTo(arToolkitContext.arController.canvas)
        }
    }


    arToolkitSource.init(function onReady() {
        onResize();
    });

    //agregamos un event listener
    window.addEventListener('resize', function () { onResize() });

    //Setup ArKitContext
    arToolkitContext = new THREEx.ArToolkitContext({
        cameraParametersUrl: 'data/camera_para.dat',
        detectionMode: 'mono'
    });

    arToolkitContext.init(function onCompleted() {
        camera.projectionMatrix.copy(arToolkitContext.getProjectionMatrix());
    });

    /////////////////////////////////////////////////
    //Marker setup
    /////////////////////////////////////////////////

    markerManual1 = new THREE.Group(); //creamos un grupo de objetos
    scene.add(markerManual1); // agregamos el grupo a la escena. 

    //Creamos nuestro marcador 
    let markerControl = new THREEx.ArMarkerControls(arToolkitContext, markerManual1, {

        type: 'pattern', patternUrl: 'data/AR-Pattern.patt',
    });

    markerPag1 = new THREE.Group(); //creamos un grupo de objetos
    scene.add(markerPag1); // agregamos el grupo a la escena. 

    //Creamos nuestro marcador 
    let markerControl2 = new THREEx.ArMarkerControls(arToolkitContext, markerPag1, {

        type: 'pattern', patternUrl: 'data/pattern-patronpag1.patt',
    });

    ////////////////////////////////////////////////
    //Creacion de geometrias - Imagenes
    ///////////////////////////////////////////////

    /* let geo1 = new THREE.PlaneBufferGeometry(2,1.5,4,4);
        let loader2 = new THREE.TextureLoader();
        let textura3 = loader2.load('images/poster.jpg'); //Esta es la imagen que agregamos
        let material1 = new THREE.MeshBasicMaterial({map:textura3});

        let meshImagen = new THREE.Mesh(geo1,material1);
        meshImagen.rotation.x = -Math.PI/2;
        markerManual1.add(meshImagen); */

    let geo1 = new THREE.PlaneBufferGeometry(2,2,4,4);
        let loader2 = new THREE.TextureLoader();
        let textura3 = loader2.load('images/texto3.png');
        let material1 = new THREE.MeshBasicMaterial({map:textura3});

        let meshImagen = new THREE.Mesh(geo1,material1);
        markerManual1.add(meshImagen);

    let geo1 = new THREE.PlaneBufferGeometry(2,1.5,4,4);
        let loader2 = new THREE.TextureLoader();
        let textura3 = loader2.load('images/pag1'); //Esta es la imagen que agregamos
        let material1 = new THREE.MeshBasicMaterial({map:textura3});

        let meshImagen = new THREE.Mesh(geo1,material1);
        meshImagen.rotation.x = -Math.PI/2;
        markerPag1.add(meshImagen);
    
}

function update() {
    //actualiza contenido de nuestra app AR
    if (arToolkitSource.ready !== false) {
        arToolkitContext.update(arToolkitSource.domElement);
    }
}

function render() {
    renderer.render(scene, camera);
}

function animate() {
    requestAnimationFrame(animate);
    deltaTime = clock.getDelta();
    totalTime += deltaTime; // totalTime =  totalTime + deltaTime 
    update();
    render();
}