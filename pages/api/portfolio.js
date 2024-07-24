const portfolio = [
    {
        id: 0,
        projectName: "Rafa India",
        url: "https://www.rafaindia.in/",
        image: "projects/rafaindia.png",
        projectDetail: "FootBall Academy",
        technologiesUsed: [
            {
                tech: "NEXT JS"
            },
            {
                tech: "TailwindCSS"
            },
        ]
    },
    {
        id: 1,
        projectName: "Trektoigatpuri",
        url: "https://trekhills-techchaze.vercel.app/",
        image: "projects/trekkings.png",
        projectDetail: "Travel Booking Website",
        technologiesUsed: [
            {
                tech: "Next JS"
            },
            {
                tech: "TailwindCSS"
            },
        ]
    },
    {
        id: 2,
        projectName: "ParmaAcademy",
        url: "https://parmaacademy.com/",
        image: "projects/parma.png",
        projectDetail: "Parma Academy, stands for academic excellence and personality development, based on the ideologies of Vedas and Epics.",
        technologiesUsed: [
            {
                tech: "Next JS"
            },
            {
                tech: "REST API's"
            },
            {
                tech: "TailwindCSS"
            },
        ]
    },
    {
        id: 3,
        projectName: "Adwso.org",
        url: "https://adwso.org/",
        image: "projects/adwso.png",
        projectDetail: "We gather voluntary contributions to help schools and other non-profit organizations.",
        technologiesUsed: [
            {
                tech: "WordPress"
            }
        ]
    },
    {
        id: 4,
        projectName: "Al-mas (Mas Gold Jwellery)",
        url: "https://al-mas.in/",
        image: "projects/al-mas.png",
        projectDetail: "Discover the timeless elegance and exquisite craftsmanship of AL-MAS Jewelry.",
        technologiesUsed: [
            {
                tech: "WordPress"
            }
        ]
    },
    {
        id: 5,
        projectName: "Sniffer Living",
        url: "https://sniffer-living.com/",
        image: "projects/sniffer-living.png",
        projectDetail: "To be the leading provider of innovative and sustainable fragrance products that enrich the lives of our customers around the world. We strive to create unique sensory experiences through creativity, quality, and environmental responsibility, while raising awareness of the importance of the sense of smell and its positive impact on health and well-being",
        technologiesUsed: [
            {
                tech: "WordPress"
            }
        ]
    },
    {
        id: 6,
        projectName: "Earpods Pro",
        url: "https://applegsap.vercel.app/",
        image: "projects/earpods.png",
        projectDetail: "Animation",
        technologiesUsed: [
            {
                tech: "Next JS"
            },
            {
                tech: "Tawilwind CSS"
            },
            {
                tech: "GSAP"
            },
        ]
    },
   ]
export default function handler(req, res) {
    res.status(200).json(portfolio)
}
