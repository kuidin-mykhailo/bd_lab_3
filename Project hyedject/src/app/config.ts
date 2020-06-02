export class Config {
  skudId: number;
  deviceStatus: boolean;
  deviceNumber: number;
  driverVersion: string;
  ip: string;
  subnetMask: string;
  gateway: string;

  constructor(newSkudId: number, newDeviceStatus: boolean,
              newDeviceNumber: number, newDriverVersion: string,
              newIp: string, newSubnetMask: string, newGateway: string) {
    this.skudId = newSkudId;
    this.deviceStatus = newDeviceStatus;
    this.deviceNumber = newDeviceNumber;
    this.driverVersion = newDriverVersion;
    this.ip = newIp;
    this.subnetMask = newSubnetMask;
    this.gateway = newGateway;
  }
}
