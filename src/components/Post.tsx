import PostVideo from "./PostVideo.tsx";

import {PostType} from "../blogSlice.ts";
 import {useTranslation} from "react-i18next";

const Post = ({title, content, slug}: PostType) => {
    const {t} = useTranslation();
    return (
        // <div className="max-w-sm h-[426px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <div className="">

            <div className="max-w-sm h-[426px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <PostVideo/>

                <div className="p-1 max-h-[48px]">
                    <a href="#">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            {title}</h5>
                    </a>
                    <p className="mb-3 h-11 overflow-hidden  font-normal text-gray-700 dark:text-gray-400 overflow-ellipsis">
                        {content}
                    </p>
                    <a href={`/post/${slug}`}
                       className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        {t("read more")}
                        <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                             fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                  d="M1 5h12m0 0L9 1m4 4L9 9"/>
                        </svg>
                    </a>
                </div>
            </div>
        </div>

    );
};

export default Post;
