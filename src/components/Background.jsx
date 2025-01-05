// import * as THREE from 'three';
// import  { useRef, useEffect } from 'react';

// export default function Background() {
//     const mountRef = useRef(null);

//     useEffect(() => {
//         const scene=new THREE.Scene();
//         const camera=new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight,0.1,1000);
//         const renderer=new THREE.WebGLRenderer();
//         renderer.setSize(window.innerWidth,window.innerHeight);
//         mountRef.current.appendChild(renderer.domElement);
//         camera.position.z=5;

//         // create dense white  star for the background
//         const starGeometry=new THREE.BufferGeometry();
//         const starCount=1500;
//         const starPositions=new Float32Array(starCount*3);
//         for (let i = 0; i < starCount*3; i++) {
//             starPositions[i]=(Math.random()-0.5)*100; // spread the stars over a large area
//         }
//         starGeometry.setAttribute('position',new THREE.BufferAttribute(starPositions,3));
//         const starMaterial=new THREE.PointsMaterial({color:0xffffff,size:0.1});
//         const starField=new THREE.Points(starGeometry,starMaterial);
//         scene.add(starField);

//         // make star move or interact with the mouse(parallax effect)
//         const handleMouseMove=(event)=>{
//             const mouseX=(event.clientX/window.innerWidth)*2-1;
//         const mouseY=(event.clientY/window.innerHeight)*2+1;
//         starField.rotation.x=mouseY*0.01;
//         starField.rotation.y=mouseX*0.01;
//         }
//         window.addEventListener('mousemove',handleMouseMove);

//         // handle window resize for responsiveness
//         const handleResize=()=>{
//             const width=window.innerWidth;
//             const height=window.innerHeight;
//             renderer.setSize(width,height);
//             camera.aspect=width/height;
//             camera.updateProjectionMatrix();
//         }
//         window.addEventListener('resize',handleResize);

//         // render loop
//         const animate = () => {
//             requestAnimationFrame(animate);
//             starField.rotation.y += 0.001;
//             starField.rotation.x += 0.001;
//             renderer.render(scene, camera);
//         }
//         animate();
//     }, []);

//         return(
//             <>
//             <div ref={mountRef} 
//             className='fixed insert-0 -z-1 w-vw h-vh overflow-y-hidden'></div>
//             </>
//         )
// }





import * as THREE from 'three';
import { useRef, useEffect } from 'react';

export default function Background() {
    const mountRef = useRef(null);

    useEffect(() => {
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer();
        renderer.setSize(window.innerWidth, window.innerHeight);
        mountRef.current.appendChild(renderer.domElement);
        camera.position.z = 5;

        // Create dense white stars for the background
        const starGeometry = new THREE.BufferGeometry();
        const starCount = 1500;
        const starPositions = new Float32Array(starCount * 3);
        for (let i = 0; i < starCount * 3; i++) {
            starPositions[i] = (Math.random() - 0.5) * 100;
        }
        starGeometry.setAttribute('position', new THREE.BufferAttribute(starPositions, 3));
        const starMaterial = new THREE.PointsMaterial({ color: 0xffffff, size: 0.1 });
        const starField = new THREE.Points(starGeometry, starMaterial);
        scene.add(starField);

        // Mouse interaction for parallax effect
        const handleMouseMove = (event) => {
            const mouseX = (event.clientX / window.innerWidth) * 2 - 1;
            const mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
            starField.rotation.x = mouseY * 0.01;
            starField.rotation.y = mouseX * 0.01;
        };
        window.addEventListener('mousemove', handleMouseMove);

        // Handle window resize
        const handleResize = () => {
            const width = window.innerWidth;
            const height = window.innerHeight;
            renderer.setSize(width, height);
            camera.aspect = width / height;
            camera.updateProjectionMatrix();
        };
        window.addEventListener('resize', handleResize);

        // Animation loop
        const animate = () => {
            requestAnimationFrame(animate);
            starField.rotation.y += 0.001;
            starField.rotation.x += 0.001;
            renderer.render(scene, camera);
        };
        animate();

        // Cleanup
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('resize', handleResize);
            mountRef.current.removeChild(renderer.domElement);
        };
    }, []);

    return (
        <div
            ref={mountRef}
            className="fixed inset-0 -z-50 overflow-hidden"
            style={{ width: '100vw', height: '100vvh' }}
        ></div>
    );
}



