import {useContext, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import {getBlogPostsById} from "../blogSlice.ts";
import {useAppDispatch, useAppSelector} from "../hooks.ts";
import {useTranslation} from "react-i18next";
import {Link} from "@mui/material";
import {LanguageContext} from "../LanguageContext.tsx";
type PostProps = {
    title: string;
    content: string;

}
const SinglePost = () => {
    const { slug } = useParams();
    const dispatch = useAppDispatch()
    const post = useAppSelector<PostProps>(state => state.blog.post)
/*
    const lang = useAppSelector(state => state.blog.language)
*/
    const { currentLanguage } = useContext(LanguageContext);

    const {t,i18n} = useTranslation()
    useEffect(() => {
        dispatch(getBlogPostsById({
            slug:slug,
            language:currentLanguage
        }))
    }, [dispatch,slug,currentLanguage])
    return (
        <div dir={i18n.dir()} >
            <div className="flex flex-auto">
                <Link href="/">{t("home Link")}</Link>
            </div>
            <div className="flex flex-col items-center md:max-w-screen-md">
            <h1>{post?.title}</h1>
            <p>{post?.content}</p>
            </div>
        </div>
    );
};

export default SinglePost;


