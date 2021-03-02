import { createContext, useContext } from "react";

export interface ISkill {
    title: string;
    grade?: number;
    favourite?: boolean;
    date?: {
        since?: number;
        until?: number;
    }
}
export interface IPosition {
    "title": string;
    "date": string;
    "location": string;
    "shortDescription": string;
}
export interface IResume {
    name: string,
    subTitle?: string,
    linkedinURL?: string,
    ghURL?: string,
    soURL?: string,
    photoURL?: string,
    aboutMe?: string,
    email:  string,
    phone?:  string,
    privateSite?:  string,
    location?: {
        name: string,
        url?: string,
    },
    skills?: ISkill[],
    education?: IPosition[]

}
const defaultResume: IResume = {
    name: "Emmanuel Désir",
    subTitle: "React / Symfony",
    linkedinURL: "https://www.linkedin.com/in/emmanuel-desir-86b465141/",
    ghURL: "https://github.com/maaanuuuuuuu",
    soURL: "https://stackoverflow.com/users/1514946/manu",
    photoURL: "https://avatars.githubusercontent.com/u/6129790?s=400&u=a0591a0085b4e79110ec6fc8b7ac6a3444e0c424&v=4",
    aboutMe: "Hello! I’m Emmanuel Désir, a friendly Fullstack Web Developer, in love with ReactJS and Symfony.",
    location: {
        name: "Paris, FRANCE",
        url: "https://www.google.com/maps/place/Paris/data=!4m2!3m1!1s0x47e66e1f06e2b70f:0x40b82c3688c9460?sa=X&ved=2ahUKEwiP7bS2hKzpAhX66eAKHSL5AuoQ8gEwAHoECAsQAQ"
    },
    email: "desir.emmanuel@gmail.com",
    phone: "+33 6 83 62 40 97",
    privateSite: "https://maaanuuuuuuu.github.io/"
};

export const ResumeContext = createContext(defaultResume);

export function useResumeContext() {
    return useContext(ResumeContext);
}
