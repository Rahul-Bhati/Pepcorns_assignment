import Image from "next/image";

// Sample data for articles
const articles = [
    {
        title: "AvaWatz Patents FALCON, A New Trust Assessment and Auto-C...",
        source: "Yahoo Finance",
        date: "Sep 12, 2023",
        excerpt: "AvaWatz Company (\"AvaWatz\"), a technology company that supports collaboration among robots, is pleased to announce the fi...",
    },
    {
        title: "The Startup Pioneering The All-Robot Workforce With Colla...",
        source: "Benzinga",
        date: "May 22, 2023",
        excerpt: "On the surface, everything about AvaWatz sounds like something out of a science fiction movie. Through the use of decisio...",
    },
    {
        title: "AvaWatz Patents a Solution for Efficient, Cost-Effective ...",
        source: "Yahoo Finance",
        date: "May 17, 2023",
        excerpt: "AvaWatz Company, (\"AvaWatz\"), a technology company that supports collaboration among robots, is pleased to announce the f...",
    },
    {
        title: "Is This A Robotics Company With No True Competitors? Meet...",
        source: "Yahoo Finance",
        date: "Oct 21, 2022",
        excerpt: "By Faith Ashmore, Benzinga",
    },
    {
        title: "AvaWatz: Building Collaborative Teams Of Robots For The B...",
        source: "Yahoo Finance",
        date: "Oct 12, 2022",
        excerpt: "Benzinga Digital Content Studio",
    },
    {
        title: "AvaWatz Awarded Contract by U.S. Department of Homeland S...",
        source: "Yahoo Finance",
        date: "",
        excerpt: "AvaWatz Company (\"AvaWatz\"), a leading-edge AI company at the forefront of collaborative robotics, proudly announces that...",
    },
];

export default function Press() {
    return (
        <section className="container mx-auto px-4 py-16">
            <h2 className="text-4xl font-bold text-center mb-12">
                Press
                <span className="block w-16 h-1 bg-blue-600 mx-auto mt-2"></span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {articles.map((article, index) => (
                    <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                        <div className="relative h-48">
                            <Image
                                src={"https://d2j6gq8tvnyhoe.cloudfront.net/e4303e93-4b92-498f-ae5d-766da86bcb79.png"}
                                alt={article.title}
                                layout="fill"
                                objectFit="cover"
                            />
                        </div>
                        <div className="p-4">
                            <h3 className="font-semibold text-lg mb-2">{article.title}</h3>
                            <div className="flex items-center text-sm text-gray-600 mb-2">
                                <span className="mr-2">{article.source}</span>
                                {article.date && (
                                    <>
                                        <span className="mr-2">•</span>
                                        <span>{article.date}</span>
                                    </>
                                )}
                            </div>
                            <p className="text-gray-700 text-sm">{article.excerpt}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}