// type Unsubscribe = () => void
// type Listener = (...args: any[]) => void

// interface AppRuntime {
//     send: (channel: string, data: any) => void
//     subscribe: (channel: string, listener: Listener) => Unsubscribe
// }

// const appRuntime = (window as any).appRuntime as AppRuntime
// const appRuntime = window.appRuntime;
// export default appRuntime;

import { IpcRenderer } from 'electron'; // this is just an interface
export const ipcRenderer: IpcRenderer = (window as any).ipcRenderer;