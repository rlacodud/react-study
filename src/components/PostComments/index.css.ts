import { style } from "@vanilla-extract/css";

export const commentSection = style({
  margin: '40px 0 0',
  padding: '20px 0 0',
  borderTop: '1px solid gray',
})
export const commentItem = style({
  padding: '10px 0',
  selectors: {
    ['& + &']: {
        margin: '10px 0 0'
    }
  }
})
export const commentDate = style({
  fontSize: 12,
  color: 'gray'
})
export const commentContent = style({
  margin: '6px 0 0',
  fontSize: 14,
})