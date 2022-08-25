import fs from "fs";
import RSS from "rss";

import { getAllPostsData } from "./postData";
import siteData from "./data"
import data from "./data";

export default async function generateRSS() {
    const allBlogs = getAllPostsData();

    const feed = new RSS({
        title: siteData.title,
        description: siteData.description,
        site_url: siteData.siteUrl,
        feed_url: `${siteData.siteUrl}feed.xml`,
        language: siteData.language,
        pubDate: new Date(),
        copyright: `All rights reserved ${new Date().getFullYear()}, Maciej Musielik`,
    });

    
    allBlogs.map((post) => {

        let authorID: string = post.data.authors[0]

        /* Explanation on why is there "as keyof typeof data.authors":
         * 
         * "data.authors[x]" expects that x is one of the authors id ("cheryx" | "electruuu") 
         * "authorID" is a string
         * 
         * Since the IDE isn't sure if the "authorID" will be an actual author, it throws an error.
         * To fix that we need to specify that the "authorID" is actually the type of "data.authors"
         * so it doesn't throw an error.
         * 
         * Yes, TypeScript is easy, how did you know?
         */

        let author = data.authors[authorID as keyof typeof data.authors].name;

        feed.item({
            title: post.data.title,
            url: `${siteData.siteUrl}posts/${post.filePath.replace('.mdx', '')}`,
            date: post.data.date,
            description: post.data.excerpt,
            categories: post.data.tags,
            author
        });
    });

    fs.writeFileSync("./public/feed.xml", feed.xml({ indent: true }));
}