import { style } from "@vanilla-extract/css";

export const postList = style({
    listStyle: "none"
})
export const postItem = style({
    padding: '20px 0',
    selectors: {
        ['& + &']: {
            margin: '10px 0 0'
        }
    }
})
export const postContainer = style({
    display: 'flex',
})
export const postImg = style({
    width: 150,
    margin: '0 20px 0 0',
})
export const postTitle = style({
    fontSize: 20,
    fontWeight: 'bold'
})
export const postDate = style({
    margin: '10px 0 20px',
    fontSize: 14,
    color: 'gray'
})
export const postContent = style({
    fontSize: 16,
    wordBreak: 'break-word'
})