import { createContext, useContext } from "react";

export interface IResume {
    name: string,
    subTitle?: string,
    linkedinURL?: string,
    ghURL?: string,
    soURL?: string,
    photoURL?: string

}
const defaultResume: IResume = {
    name: "Emmanuel Désir",
    subTitle: "React / Symfony",
    linkedinURL: "https://www.linkedin.com/in/emmanuel-desir-86b465141/",
    ghURL: "https://github.com/maaanuuuuuuu",
    soURL: "https://stackoverflow.com/users/1514946/manu",
    photoURL: "https://avatars.githubusercontent.com/u/6129790?s=400&u=a0591a0085b4e79110ec6fc8b7ac6a3444e0c424&v=4"
};

export const ResumeContext = createContext(defaultResume);

export function useResumeContext() {
    return useContext(ResumeContext);
}
