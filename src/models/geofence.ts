export interface Geofence {
    id: string,
    latitude: number,
    longitude: number,
    radius: number,
    transitionType: number,
    notification: {
        id: number,
        title: string,
        text: string,
        icon: string,
        openAppOnClick: boolean
    }
}