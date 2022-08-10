export interface ShoutOut {
    soId: number;
    soDateTime: Date;
    soTitle: string;
    soComment: string;
    soEdited: boolean;
    soEditDateTime: Date;
    userID?: number;
}