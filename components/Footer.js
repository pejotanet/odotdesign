import Link from "next/link";

function Footer() {
  return (
    <footer className="flex flex-col text-black-100 mt-5 bg-[#d9d9d9]">
        <div className="flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10">
            <div className="flex flex-col justify-start items-start gap-6">
                <h1 className="text-6xl">Odot Design</h1>
                <p className="text-base text-gray-700">Odot Design 2023 <br /> All rights reserved &copy; </p>
            </div>
            <div className="flex-1 w-full flex md:justify-end flex-wrap max-md:mt-10 gap-20">
                {footerLinks.map((link) => (
                    <div key={link.title} className="flex flex-col gap-6 text-base min-w-[170px]">
                        <h3 className="font-bold">{link.title}</h3>
                        {link.links.map((item) => (
                            <Link key={item.title} href={item.url} className="text-gray-500">
                                {item.title}
                            </Link>
                        ))}
                    </div>
                ))}
            </div>
        </div>    
        <div className="flex justify-between items-center flex-wrap mt-10 border-t border-gray-100 sm:px-16 px-6 py-10">
            <p className="">@2023 Odot Desing. All Rights Reserved</p>
            <div className="flex-1 flex sm:justify-end justify-center max-sm:mt-4 gap-10">
                <h1>
                    Developed by:
                    <Link href="/" className="text-gray-500"> Paulo Albuquerque</Link>
                </h1>
            </div>
        </div>
    </footer>
  )
}

const footerLinks = [
    {
      title: "About",
      links: [
        { title: "How it works", url: "/" },
        { title: "Featured", url: "/" },
        { title: "Partnership", url: "/" },
        { title: "Bussiness Relation", url: "/" },
      ],
    },
    {
      title: "Company",
      links: [
        { title: "Events", url: "/" },
        { title: "Blog", url: "/" },
        { title: "Podcast", url: "/" },
        { title: "Invite a friend", url: "/" },
      ],
    },
    {
      title: "Socials",
      links: [
        { title: "Discord", url: "/" },
        { title: "Instagram", url: "/" },
        { title: "Twitter", url: "/" },
        { title: "Facebook", url: "/" },
      ],
    },
  ];

export default Footer