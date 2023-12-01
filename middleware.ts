export { default } from "next-auth/middleware";

export const config = {
  // * 0 / +
  // + 1 / +
  //? 0 / 1 
  matcher: ['/users/:id*']
}