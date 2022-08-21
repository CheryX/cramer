import fs from "fs";
import RSS from "rss";

import { getAllPostsData } from "./notesData.js";
import siteData from "../data/data.js"

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
        feed.item({
            title: post.data.title,
            url: `${siteData.siteUrl}posts/${post.filePath.replace('.mdx', '')}`,
            date: post.data.date,
            description: post.data.excerpt,
        });
    });

    fs.writeFileSync("./public/feed.xml", feed.xml({ indent: true }));
}