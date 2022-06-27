type Team = {id: number; name: string};

type specialization = {id: number; name: string};

export interface IEmployee{
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    team: Team;
    specialization?: specialization
}

export const EMPLOYEES: IEmployee[] = [
    {
        id: 1,
        email: "taher.hendawi@adesso.de",
        firstName: "Taher",
        lastName: "Hendawi",
        specialization: {id:1, name: "Custom-Dev"},
        team: {id: 1, name: "CC MS HAJ"}
    },
    {
        id: 2,
        email: "juan.sullca-ayllon@adesso.de",
        firstName: "Juan",
        lastName: "sullca-ayllo",
        specialization: {id:1, name: "Custom-Dev"},
        team: {id: 1, name: "CC MS HAJ"}
    },
    {
        id: 3,
        email: "arbnor.kelmendi@adesso.de",
        firstName: "Arbnor",
        lastName: "Kelmendi",
        specialization: {id:2, name: "Power Platform"},
        team: {id: 1, name: "CC MS HAJ"}
    },
    {
        id: 3,
        email: "bijan.arjasbi@adesso.de",
        firstName: "Bijan",
        lastName: "Arjasbi",
        team: {id: 1, name: "CC MS HAJ"}
    },
    {
        id: 3,
        email: "martin.toelk@adesso.de",
        firstName: "Martin",
        lastName: "Tölk",
        specialization: {id:3, name: "CRM"},
        team: {id: 1, name: "CC MS HAJ"}
    }
]