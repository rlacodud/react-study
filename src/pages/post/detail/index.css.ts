import { style } from "@vanilla-extract/css";

export const postHeader = style({
    display: 'flex',
    margin: '0 0 20px',
    justifyContent: 'space-between'
})
export const postTitle = style({
    fontSize: 20,
    fontWeight: 'bold'
})
export const postDate = style({
    fontSize: 14,
    color: 'gray'
})
export const postContent = style({
    margin: '20px 0 0',
    fontSize: 16,
    wordBreak: 'break-word'
})