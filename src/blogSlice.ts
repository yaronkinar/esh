// blogSlice.js
import { createSlice } from '@reduxjs/toolkit';
import {blogPosts} from '../db.json'
// Create an async thunk for fetching blog posts

export type PostType = {
    title: string;
    content: string;
    slug: string;
    id?: string|number|null;


}
export interface BlogInterface {
    blogPosts: PostType[];
    post: PostType;
    language?: {
        language: string;
        dir: string;
    };
}
const initialState: BlogInterface = {
    blogPosts: blogPosts,
    post: {
        title: "",
        content: "",
        slug: "",
    },
    language: {
        language: "en",
        dir: "ltr"
    }

}
const blogSlice = createSlice({
    name: 'blog',
    initialState: initialState,
    reducers: {
       getBlogPostsById: (state, action) => { // This is a normal reducer
           const post = blogPosts.filter((blogPost)=> {
               return  blogPost.slug == action.payload.slug && blogPost.language == action.payload.language;
           })
              state.post = post[0];
        },
       getBlogPostsByLanguage: (state, action) => { // This is a normal reducer
          state.blogPosts = blogPosts.filter(blogPost => blogPost.language === action.payload);
       },
       setLanguage: (state, action) => {
        state.language = action.payload;
       }
    },



});
export const { getBlogPostsByLanguage,getBlogPostsById,setLanguage } = blogSlice.actions;
export default blogSlice.reducer;
