import create from 'zustand'
import { persist } from 'zustand/middleware'

const useRepo = create(
    persist(
        (set, get) => ({

            id: "",
            name:"",
            id_owner:"",
            login:"",
            avatar_url:"",
            html_url:"",
            description:"",
            language:"",
            stargazers_count:"",
            setid: (id) => {
                set({ id })
            },
            setname: (name) => {
                set({ name })
            },
            setid_owner: (id_owner) => {
                set({ id_owner })
            },
            setlogin: (login) => {
                set({ login })
            },
            setavatar_url: (avatar_url) => {
                set({ avatar_url })
            },
            sethtml_url: (html_url) => {
                set({ html_url })
            },
            setdescription: (description) => {
                set({ description })
            } ,
            setlanguage: (language) => {
                set({ language })
            },
            setstargazers_count: (stargazers_count) => {
                set({ stargazers_count })
            }

            
        })
    )
);

export default useRepo;
