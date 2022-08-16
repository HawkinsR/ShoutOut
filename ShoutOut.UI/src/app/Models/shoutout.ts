export interface ShoutOut {
    SOId: number;
    SODateTime: Date;
    SOTitle: string;
    SOComment: string;
    SOEdited: boolean;
    SOEditDateTime: Date;
    UserID?: string;
    UserName?: string;
    UserEmail?: string;
};
