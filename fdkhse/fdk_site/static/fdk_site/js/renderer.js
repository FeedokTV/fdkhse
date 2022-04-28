var container, camera, scene, renderer, mesh;

CANVAS_WIDTH = document.getElementById('main-render').clientWidth,
CANVAS_HEIGHT = document.getElementById('main-render').clientHeight;

window.addEventListener( 'resize', onWindowResize, false );

canvas = document.getElementById('main-render');
rendererHeight = document.getElementById('main-render').clientHeight;
rendererWidth = document.getElementById('main-render').clientWidth;

renderer = new THREE.WebGLRenderer({antialias: true, alpha: true });
//renderer.domElement = canvas;
renderer.setSize(CANVAS_WIDTH, CANVAS_HEIGHT);
canvas.appendChild(renderer.domElement);

scene = new THREE.Scene();

camera = new THREE.PerspectiveCamera(50, CANVAS_WIDTH / CANVAS_HEIGHT, 1, 5000);
camera.position.y = 50;
camera.position.z = 500;
camera.lookAt(scene.position);

controls = new THREE.OrbitControls ( camera, renderer.domElement); 

const geometry = new THREE.CylinderGeometry(0, 150, 200, 4, 1);
const edges = new THREE.EdgesGeometry( geometry );
const line = new THREE.LineSegments( edges, new THREE.LineBasicMaterial( { color: 0xffffff, linewidth:20 } ) );

scene.add(line);

function render() {
      
  line.rotation.y += 0.001;
  renderer.render(scene, camera);
  }
    
(function animate() {
      
  requestAnimationFrame(animate);
  controls.update();
  render();
      
})();
    
function onWindowResize(){
  width = document.getElementById('main-render').clientWidth;
  height = document.getElementById('main-render').clientHeight;
      
  camera.aspect = width / height;
  camera.updateProjectionMatrix();
      
  renderer.setSize( width, height );
}
  

    
    