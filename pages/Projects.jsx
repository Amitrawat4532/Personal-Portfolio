import { useQuery } from "react-query";
import BannerLayout from "../components/Common/BannerLayout";
import PortfolioCard from "../components/Portfolio/PortfolioCard";
import axios from "axios";
import ImageAndParagraphSkeleton from "../components/Common/ImageAndParagraphSkeleton";

const Portfolio = () => {

    const { isLoading, error, data } = useQuery('portfolio', () =>
        axios.get('api/portfolio')
            .then(({ data }) => data)
            .catch(error => console.error('Error fetching testimonials:', error)))
    return (
        <BannerLayout>
              <div className="py-12">
                                <h1 className="text-1xl sm:text-3xl xl:text-3xl text-center text-Snow font-bold">My Projects</h1>
                            </div>

            <div className="grid justify items-center grid-flow-row md:grid-cols-2 grid-rows-auto gap-4 px-8 my-6">
                {
                    isLoading ?
                        [1, 2, 3, 4].map(() => (
                            <ImageAndParagraphSkeleton className={"w-full object-cover"} />
                        ))
                        :
                        data?.map((data, key) => (
                            <PortfolioCard key={key} data={data} />
                        ))

                }


            </div >
        </BannerLayout >
    );
};

export default Portfolio;
