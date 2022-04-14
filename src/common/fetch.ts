import {useCallback, useEffect, useState} from "react";

const backendData = [
    {
        id: "1",
        name: "Office Map"
    },
    {
        id: "2",
        name: "New Employee Onboarding",
        children: [
            {
                id: "8",
                name: "Onboarding Materials"
            },
            {
                id: "9",
                name: "Training"
            }
        ]
    },
    {
        id: "3",
        name: "Office Events",
        children: [
            {
                id: "6",
                name: "2018",
                children: [
                    {
                        id: "10",
                        name: "Summer Picnic"
                    },
                    {
                        id: "11",
                        name: "Valentine's Day Party"
                    },
                    {
                        id: "12",
                        name: "New Year's Party"
                    }
                ]
            },
            {
                id: "7",
                name: "2017",
                children: [
                    {
                        id: "13",
                        name: "Company Anniversary Celebration"
                    }
                ]
            }
        ]
    },
    {
        id: "4",
        name: "Public Holidays"
    },
    {
        id: "5",
        name: "Vacations and Sick Leaves"
    }
];

export const useTreeFetch = () => {
    const [data, setData] = useState<TreeData[]>([]);
    const [error, setError] = useState<string | undefined>(undefined);

    const fetch = useCallback(() => {
        return new Promise(resolve => {
            setTimeout(resolve, 100, backendData);
        });
    },[])

    useEffect(() => {
        const abortController = new AbortController();

        fetch().then((responseData:any) => {
            setData(responseData || []);
        }).catch(e => {
            setError(e);
        })

        return () => abortController.abort();
    },[fetch])

    return {
        data,
        error
    }
}