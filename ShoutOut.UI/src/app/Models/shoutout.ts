export interface ShoutOut {
    soId: number;
    soDateTime: Date;
    soTitle: string;
    soComment: string;
    soEdited: boolean;
    soEditDateTime: Date;
    userID?: string;
    user?:{
        userId: string;
        userName: string;
        userEmail: string;
        shoutOuts: [string];
    };
}