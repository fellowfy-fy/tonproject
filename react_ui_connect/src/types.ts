// types.ts
export interface DeviceInfo {
    platform: string;
    appName: string;
    appVersion: string;
  }
  
  export interface PayloadItem {
    name: string;
    address: string;
    network: string;
    publicKey: string;
    walletStateInit: string;
  }
  
  export interface Payload {
    items: PayloadItem[];
    device: DeviceInfo;
  }
  
  export interface ConnectEvent {
    type: "connect";
    id: number;
    payload: Payload;
  }
  