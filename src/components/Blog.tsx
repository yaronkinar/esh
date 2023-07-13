import Post from "./Post.tsx";
import {useContext, useEffect} from "react";
import {getBlogPostsByLanguage} from "../blogSlice.ts";
import {useTranslation} from "react-i18next";
import {useAppDispatch, useAppSelector} from "../hooks.ts";
import {PostType} from "../blogSlice.ts";
import {Link} from "@mui/material";
import {LanguageContext} from "../LanguageContext.tsx";

const Blog = () => {

    const posts = useAppSelector((state) => state.blog.blogPosts)
    const dispach = useAppDispatch();
    const {t, i18n} = useTranslation();
    const { currentLanguage } = useContext(LanguageContext);
    console.log("currentLanguage blog",currentLanguage)
   useEffect(() => {
       i18n.changeLanguage(currentLanguage)
       dispach(getBlogPostsByLanguage(currentLanguage))
   }, [dispach,currentLanguage,i18n])
    return (
        <div>
            <div className="flex flex-auto">
                <Link href="/blog">{t("blog link")}</Link>
            </div>


        <div className="blog grid lg:grid-cols-3 gap-3 sm:grid-cols-1">
            {posts.map((post:PostType) => {
                return <Post slug={post.slug} key={post.id} id={post.id} title={post.title} content={post.content}  />
            })
            }
        </div>
        </div>
    );
};

export default Blog;
