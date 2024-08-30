import React, {useEffect, useState} from 'react';
import {StyleSheet} from 'react-native';
import {Camera, CameraDevice} from 'react-native-vision-camera';

const CAMERA_STATUS = 'authorized';
const SIDE_CAMERA = 'back';

interface CameraBarCodeProps {
  ableToRead: boolean;
  handleReadCode: (code: string) => void;
}

const CameraBarCode = ({ableToRead, handleReadCode}: CameraBarCodeProps) => {
  const [cameraPermission, setCameraPermission] = useState(false);
  const [deviceSelected, setDevicesSelected] = useState<CameraDevice | null>(
    null,
  );
  const [isReading, setIsReading] = useState(true);

  const handleCameraPermission = async () => {
    await Camera.requestCameraPermission();
    setCameraPermission(true);
  };

  useEffect(() => {
    (async () => {
      const cameraPermissions = await Camera.getCameraPermissionStatus();
      setCameraPermission(cameraPermissions == CAMERA_STATUS);
      const devicesAvailable = await Camera.getAvailableCameraDevices();
      const backCamera = devicesAvailable.filter(
        item => item.position == SIDE_CAMERA,
      );
      const backCameraSelected = backCamera.length
        ? (backCamera.shift() as CameraDevice)
        : null;
      setDevicesSelected(backCameraSelected as CameraDevice);
    })();
    handleCameraPermission();
  }, []);


  const handleBarcode = () => {
  };

  return isReading && deviceSelected && cameraPermission ? (
    <Camera
      style={StyleSheet.absoluteFill}
      device={deviceSelected}
      isActive={isReading}
      frameProcessorFps={5}
    />
  ) : null;
};

export default CameraBarCode;
