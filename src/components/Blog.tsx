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
    const lang = useAppSelector((state) => state.blog.language)
    const dispach = useAppDispatch();
    const {t, i18n} = useTranslation();
    const { currentLanguage } = useContext(LanguageContext);
    console.log("currentLanguage blog",currentLanguage)
   useEffect(() => {
       console.log("i18n?.language",lang?.language)
       i18n.changeLanguage(currentLanguage)
       dispach(getBlogPostsByLanguage(currentLanguage))
   }, [dispach,currentLanguage])
    return (
        <div>
            <div className="flex flex-auto">
                <Link href="/">{t("home Link")}</Link>
            </div>


        <div className="blog grid grid-cols-3 gap-3">
            {posts.map((post:PostType) => {
                return <Post slug={post.slug} key={post.id} id={post.id} title={post.title} content={post.content}  />
            })
            }
        </div>
        </div>
    );
};

export default Blog;
