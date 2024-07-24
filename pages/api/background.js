const background = [
    {
        eduCards: [
            {
                id: 0,
                title: 'Devbhoomi Uttarakhand University Dehradun',
                degree: 'B.sc(Information and Technology)',
                detail: "Information and Technology",
                year: '2019-2022'
            },
            {
                id: 1,
                title: 'Vivekanda School Jogiwala Dehradun 248005',
                degree: 'Senior Secondary School',
                detail: "CBSE",
                year: '2018-2019'
            },
            {
                id: 2,
                title: 'Vivekanda School Jogiwala Dehradun 248005',
                degree: 'Secondary School',
                detail: "CBSE",
                year: '2016-2017'
            },
        ]
    },
    {
        expCards: [
            {
                id: 1,
                title: 'Pearl Organisation',
                role: 'Frontend Developer',
                url: 'https://www.pearlorganisation.com',
                desc: 'As a frontend developer, I use React, Next & WordPress to build user interfaces for web applications.',
                year: '02/2024 - Present',
                location: 'Dehradun'
            },
            {
                id: 2,
                title: 'Rovae Incorporation',
                role: 'Intern',
                url: 'https://www.rovae.in/',
                desc: 'As an Internee, I learned how to use React & Next , JavaScript WordPress , Webflow , Shopify to build interactive websites.',
                year: '11/2022 - 11/2023',
                location: 'Banglore'
            },

        ]
    }
]


export default function handler(req, res) {
    res.status(200).json(background)
}
