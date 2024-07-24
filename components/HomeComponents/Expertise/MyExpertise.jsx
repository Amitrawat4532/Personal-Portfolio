import ExpertiseCard from "./ExpertiseCard"
import { useQuery } from "react-query";
import axios from "axios";
import ParagraphSkeleton from "../../Common/ParagraphSkeleton";

const MyExpertise = () => {

    const { isLoading, error, data } = useQuery('expertise', () =>
        axios.get('api/expertise')
            .then(({ data }) => data)
            .catch(error => console.error('Error fetching testimonials:', error)))

    return (
        <>
           <div className="py-12">
                                <h1 className="text-1xl sm:text-3xl xl:text-3xl text-center text-Snow font-bold">My Expertise</h1>
                            </div>
            <div className="grid justify items-center grid-flow-row md:grid-cols-2 lg:grid-cols-3 grid-rows-auto gap-4 px-2 md:px-8 pb-12" >

                {
                    isLoading ?
                        [1, 2, 3, 4, 5, 6].map(() => (
                            <ParagraphSkeleton className={"space-y-2 p-8"} />
                        ))
                        :
                        data?.map((data, key) => (
                            <ExpertiseCard key={key} data={data} />
                        ))
                }

            </div>
        </>
    )
}

export default MyExpertise