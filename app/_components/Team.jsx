import Image from "next/image";
import { Linkedin, Twitter, Github } from "lucide-react";

// Define the structure for a team member
const teamMembers = [
    {
        name: "Rajini Anachi",
        title: "Founder",
        image: "https://uploads.republic.com/p/roles/team_members/avatars/large/000/019/586/19586-1708105097-b598900ea74dd0b98c591810d26b3bdc0e1c0665.jpg",
        bio: "2x founder, previously founded CyGlass, which was acquired by Nominet in 2020. Focused on bringing tremendous value to AvaWatz customers, employees, and investors.",
        linkedin: "#",
    },
    {
        name: "Bala Jana",
        title: "Co-Founder, Board Member",
        image: "https://uploads.republic.com/p/roles/team_members/avatars/large/000/020/313/20313-1707608322-2e202f3e82387bd8b0fa4b7cad6a47e105918f87.JPG",
        bio: "Investor and early team member at several start-ups acquired by Fortune 500 companies. Leading product innovation, commercialization, and product-market fit.",
        linkedin: "#",
    },
    {
        name: "JR May",
        title: "Business Development & Sales",
        image: "https://uploads.republic.com/p/roles/team_members/avatars/large/000/020/550/20550-1708105159-42f8a94e3b29f36dfac66621550b29c71e8f6ac4.jpg",
        bio: "Proven expertise in DoD and commercial sales. Brings an extensive network of connections for direct sales, partnerships, and rapidly scaling for growth.",
        linkedin: "#",
    },
    {
        name: "Rishabh Iyer",
        title: "AI Researcher",
        image: "https://uploads.republic.com/p/roles/team_members/avatars/large/000/020/551/20551-1708105205-b9277da969caf010a2e82be7a6f5f52426c04441.png",
        bio: "Dr. Rishabh Iyer, an Asst. Professor at the University of Texas, Dallas. Dr. Iyer specializes in efficient machine learning (ML) and advance combinatorial optimization and information theory. He has won several awards and fellowships over the years.",
        linkedin: "#",
    },
    {
        name: "John McKendry",
        title: "Product Development",
        image: "https://uploads.republic.com/p/roles/team_members/avatars/large/000/020/552/20552-1708046932-d553d17d25e6c34f358acf6e75dccfc597b31b0e.jpg",
        bio: "John McKendry has a strong background in real-time control systems, artificial intelligence for multi-sensor analysis, robotic network engineering and autonomous edge computing. Was instrumental in architecting the cognitive engine at mZeal/Cyglass.",
        linkedin: "#",
    },
    {
        name: "Ajay Jain",
        title: "Operations Manager",
        image: "https://uploads.republic.com/p/roles/team_members/avatars/large/000/020/585/20585-1708105219-844ef776747c2543d7b9824f8559f6152a57d7a4.jpg",
        bio: "Has over two decades of experience in IT consulting operations and five years as a corporate secretary in investment banking. Expertise in relationship management, talent acquisition, process optimization, legal compliance, and digital marketing.",
        linkedin: "#",
    },
    {
        name: "Walter Rawle",
        title: "Sensors, AI & Autonomous Systems SME",
        image: "https://uploads.republic.com/p/roles/team_members/avatars/large/000/020/586/20586-1708047563-5c9b7cbf1951e094313d430af1119ef1e0ab3f08.jpeg",
        bio: "Dr. Walter Rawle has experience across a wide spectrum of domains including, multiple sensor physics, robotic hardware interfaces, advanced combinatorial machine learning, stochastic analysis, position-navigation-timing for GPS-denied.",
        linkedin: "#",
    },
    {
        name: "Neil Wadhwani",
        title: "Sales & Marketing Advisor",
        image: "https://uploads.republic.com/p/roles/team_members/avatars/large/000/020/587/20587-1708047643-21aeee76d5a0aa45f2832e53bf445cacf79fb307.jpeg",
        bio: "Neal has 25+ years of experience in Sales and Marketing in Fortune 500 companies. Over the course of his career, his focus has been Technology Sales, Presales, ITOps, Digital Marketing, and executive leadership experience with high-growth startups.",
        linkedin: "#",
    },
];

export default function Team() {
    return (
        <div className="container mx-auto px-4 py-16">
            <h1 className="text-4xl font-bold text-center mb-2">Avawatz Team</h1>
            <p className="text-xl text-center text-gray-600 mb-12">
                Everyone helping build Avawatz, not limited to employees
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
                {teamMembers.map((member, index) => (
                    <div key={index} className="bg-white p-6 text-center ">
                        <div className="flex flex-col items-center mb-4">
                            <Image
                                src={member.image}
                                alt={member.name}
                                width={100}
                                height={100}
                                className="rounded-full mb-4"
                            />
                            <h2 className="text-xl font-semibold">{member.name}</h2>
                            <p className="text-gray-600">{member.title}</p>
                        </div>
                        <p className="text-gray-700 text-center mb-4">{member.bio}</p>
                        <div className="flex justify-center space-x-4">
                            {member.linkedin && (
                                <a href={member.linkedin} className="text-gray-600 hover:text-blue-600">
                                    <Linkedin size={24} />
                                </a>
                            )}
                            {member.twitter && (
                                <a href={member.twitter} className="text-gray-600 hover:text-blue-400">
                                    <Twitter size={24} />
                                </a>
                            )}
                            {member.github && (
                                <a href={member.github} className="text-gray-600 hover:text-gray-900">
                                    <Github size={24} />
                                </a>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}