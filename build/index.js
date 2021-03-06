'use strict';

System.register(['https://cdn.rodin.io/v0.0.1/vendor/three/THREE.GLOBAL', 'https://cdn.rodin.io/v0.0.1/rodinjs/scene/SceneManager', 'https://cdn.rodin.io/v0.0.1/rodinjs/sculpt/CubeObject', 'https://cdn.rodin.io/v0.0.1/rodinjs/controllers/MouseController', 'https://cdn.rodin.io/v0.0.1/rodinjs/controllers/ViveController', './objects/room.js', './objects/screen.js', './controllers.js'], function (_export, _context) {
  "use strict";

  var THREE, SceneManager, CubeObject, MouseController, ViveController, scene, amLight;
  return {
    setters: [function (_httpsCdnRodinIoV001VendorThreeTHREEGLOBAL) {
      THREE = _httpsCdnRodinIoV001VendorThreeTHREEGLOBAL.THREE;
    }, function (_httpsCdnRodinIoV001RodinjsSceneSceneManager) {
      SceneManager = _httpsCdnRodinIoV001RodinjsSceneSceneManager.SceneManager;
    }, function (_httpsCdnRodinIoV001RodinjsSculptCubeObject) {
      CubeObject = _httpsCdnRodinIoV001RodinjsSculptCubeObject.CubeObject;
    }, function (_httpsCdnRodinIoV001RodinjsControllersMouseController) {
      MouseController = _httpsCdnRodinIoV001RodinjsControllersMouseController.MouseController;
    }, function (_httpsCdnRodinIoV001RodinjsControllersViveController) {
      ViveController = _httpsCdnRodinIoV001RodinjsControllersViveController.ViveController;
    }, function (_objectsRoomJs) {}, function (_objectsScreenJs) {}, function (_controllersJs) {}],
    execute: function () {
      scene = SceneManager.get();
      amLight = new THREE.AmbientLight();

      amLight.intensity = 1.2;
      scene.add(amLight);
      git;
    }
  };
});